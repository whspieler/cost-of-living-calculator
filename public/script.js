document.getElementById('calculateBtn').addEventListener('click', async function () {
    const city1 = document.getElementById('city1').value; 
    const city2 = document.getElementById('city2').value; 

    const rent = parseFloat(document.getElementById('rent').value);
    const utilities = parseFloat(document.getElementById('utilities').value);
    const groceries = parseFloat(document.getElementById('groceries').value);
    const phoneBill = parseFloat(document.getElementById('phoneBill').value);
    const entertainment = parseFloat(document.getElementById('entertainment').value);
    const gas = parseFloat(document.getElementById('gas').value);
    const gym = parseFloat(document.getElementById('gym').value);

    if (!city1 || !city2 || isNaN(rent) || isNaN(utilities) || isNaN(groceries) || isNaN(phoneBill) || isNaN(entertainment) || isNaN(gas) || isNaN(gym)) {
        alert('Please fill out all fields');
        return;
    }

    // Fetch cost of living data for both cities
    const city1Data = await fetchCityCost(city1); 
    const city2Data = await fetchCityCost(city2); 

    if (city1Data && city2Data) {
        // Log API response
        console.log("City 1 Data (Santa Barbara):", city1Data);
        console.log("City 2 Data (Atlanta):", city2Data);

        // Clean city data values by removing commas only from strings
        const cleanData = (cost) => (typeof cost === 'string') ? parseFloat(cost.replace(/,/g, '')) : parseFloat(cost);

        // Clean city data values
        city1Data.rentIndex = cleanData(city1Data.rentIndex);
        city2Data.rentIndex = cleanData(city2Data.rentIndex);
        city1Data.utilitiesIndex = cleanData(city1Data.utilitiesIndex);
        city2Data.utilitiesIndex = cleanData(city2Data.utilitiesIndex);
        city1Data.groceriesIndex = cleanData(city1Data.groceriesIndex);
        city2Data.groceriesIndex = cleanData(city2Data.groceriesIndex);
        city1Data.phoneBillIndex = cleanData(city1Data.phoneBillIndex);
        city2Data.phoneBillIndex = cleanData(city2Data.phoneBillIndex);
        city1Data.entertainmentIndex = cleanData(city1Data.entertainmentIndex);
        city2Data.entertainmentIndex = cleanData(city2Data.entertainmentIndex);
        city1Data.gasIndex = cleanData(city1Data.gasIndex);
        city2Data.gasIndex = cleanData(city2Data.gasIndex);
        city1Data.gymIndex = cleanData(city1Data.gymIndex);
        city2Data.gymIndex = cleanData(city2Data.gymIndex);

        // Assigning multipliers to variables
        const rentMultiplier = city2Data.rentIndex / city1Data.rentIndex;
        const utilitiesMultiplier = city2Data.utilitiesIndex / city1Data.utilitiesIndex;
        const groceriesMultiplier = city2Data.groceriesIndex / city1Data.groceriesIndex;
        const phoneBillMultiplier = city2Data.phoneBillIndex / city1Data.phoneBillIndex;
        const entertainmentMultiplier = city2Data.entertainmentIndex / city1Data.entertainmentIndex;
        const gasMultiplier = city2Data.gasIndex / city1Data.gasIndex;
        const gymMultiplier = city2Data.gymIndex / city1Data.gymIndex;

        // Logging the multipliers
        console.log("Rent Multiplier:", rentMultiplier);
        console.log("Utilities Multiplier:", utilitiesMultiplier);
        console.log("Groceries Multiplier:", groceriesMultiplier);
        console.log("Phone Bill Multiplier:", phoneBillMultiplier);
        console.log("Entertainment Multiplier:", entertainmentMultiplier);
        console.log("Gas Multiplier:", gasMultiplier);
        console.log("Gym Multiplier:", gymMultiplier);

        // Calculate equivalent spending in City 2
        const rentEquivalent = rent * rentMultiplier;
        const utilitiesEquivalent = utilities * utilitiesMultiplier;
        const groceriesEquivalent = groceries * groceriesMultiplier;
        const phoneBillEquivalent = phoneBill * phoneBillMultiplier;
        const entertainmentEquivalent = entertainment * entertainmentMultiplier;
        const gasEquivalent = gas * gasMultiplier;
        const gymEquivalent = gym * gymMultiplier;

        // Log the calculated costs
        console.log("Rent Equivalent:", rentEquivalent);
        console.log("Utilities Equivalent:", utilitiesEquivalent);
        console.log("Groceries Equivalent:", groceriesEquivalent);
        console.log("Phone Bill Equivalent:", phoneBillEquivalent);
        console.log("Entertainment Equivalent:", entertainmentEquivalent);
        console.log("Gas Equivalent:", gasEquivalent);
        console.log("Gym Equivalent:", gymEquivalent);

        // Calculate total spending for City 1
        const totalCity1 = rent + utilities + groceries + phoneBill + entertainment + gas + gym;

        // Calculate total equivalent spending in City 2
        const totalCity2 = rentEquivalent +
            utilitiesEquivalent +
            groceriesEquivalent +
            phoneBillEquivalent +
            entertainmentEquivalent +
            gasEquivalent +
            gymEquivalent;

        console.log("Total Equivalent Cost in City 2:", totalCity2);

        // Update the table with calculated values
        document.getElementById('rentCity1').innerText = `$${rent.toFixed(2)}`;
        document.getElementById('rentCity2').innerText = `$${rentEquivalent.toFixed(2)}`;

        document.getElementById('utilitiesCity1').innerText = `$${utilities.toFixed(2)}`;
        document.getElementById('utilitiesCity2').innerText = `$${utilitiesEquivalent.toFixed(2)}`;

        document.getElementById('groceriesCity1').innerText = `$${groceries.toFixed(2)}`;
        document.getElementById('groceriesCity2').innerText = `$${groceriesEquivalent.toFixed(2)}`;

        document.getElementById('phoneBillCity1').innerText = `$${phoneBill.toFixed(2)}`;
        document.getElementById('phoneBillCity2').innerText = `$${phoneBillEquivalent.toFixed(2)}`;

        document.getElementById('entertainmentCity1').innerText = `$${entertainment.toFixed(2)}`;
        document.getElementById('entertainmentCity2').innerText = `$${entertainmentEquivalent.toFixed(2)}`;

        document.getElementById('gasCity1').innerText = `$${gas.toFixed(2)}`;
        document.getElementById('gasCity2').innerText = `$${gasEquivalent.toFixed(2)}`;

        document.getElementById('gymCity1').innerText = `$${gym.toFixed(2)}`;
        document.getElementById('gymCity2').innerText = `$${gymEquivalent.toFixed(2)}`;

        // Update total costs for both cities
        document.getElementById('totalCity1Cost').innerText = `$${totalCity1.toFixed(2)}`;
        document.getElementById('totalCity2Cost').innerText = `$${totalCity2.toFixed(2)}`;

        // Calculate the percentage change from City 1 to City 2
        const overallPercentageChange = ((totalCity2 - totalCity1) / totalCity1) * 100;
        const overallStatement = `You can expect your living expenses to ${overallPercentageChange > 0 ? 'increase' : 'decrease'} by ${Math.abs(overallPercentageChange.toFixed(2))}% when moving from ${city1} to ${city2}.`;

        // Display the overall statement
        document.getElementById('overallChange').innerText = overallStatement;

        // Calculate and display price differences
        const priceDifferenceText = calculatePriceDifferences({
            rent: { cost1: rent, cost2: rentEquivalent },
            utilities: { cost1: utilities, cost2: utilitiesEquivalent },
            groceries: { cost1: groceries, cost2: groceriesEquivalent },
            phoneBill: { cost1: phoneBill, cost2: phoneBillEquivalent },
            entertainment: { cost1: entertainment, cost2: entertainmentEquivalent },
            gas: { cost1: gas, cost2: gasEquivalent },
            gym: { cost1: gym, cost2: gymEquivalent },
            city1, city2
        });

        document.getElementById('priceDifferences').innerHTML = priceDifferenceText;

        // Show the result section after calculation
        document.getElementById('resultSection').style.display = 'block';
    } else {
        alert('City data not available.');
    }
});

// Function to fetch cost of living data for a city
async function fetchCityCost(city) {
    const response = await fetch(`http://localhost:3000/${city}?currency=USD`); // Adjust URL and port as per your API setup
    const data = await response.json();

    // Log the raw API response to inspect its structure
    console.log("Raw API Response for", city, ":", data);

    // Ensure data is in the correct format
    if (!data || !data.costs || data.costs.length === 0) return null;

    // Calculate groceries proxy
    const groceriesIndex = calculateGroceriesIndex(data.costs);

    return {
        rentIndex: data.costs.find(item => item.item === 'Apartment (1 bedroom) in City Centre')?.cost || 1,
        utilitiesIndex: data.costs.find(item => item.item === 'Basic (Electricity, Heating, Cooling, Water, Garbage) for 915 sq ft Apartment')?.cost || 1,
        groceriesIndex: groceriesIndex || 1,
        phoneBillIndex: data.costs.find(item => item.item === 'Mobile Phone Monthly Plan with Calls and 10GB+ Data')?.cost || 1,
        entertainmentIndex: data.costs.find(item => item.item === 'Cinema, International Release, 1 Seat')?.cost || 1,
        gasIndex: data.costs.find(item => item.item === 'Gasoline (1 gallon)')?.cost || 1,
        gymIndex: data.costs.find(item => item.item === 'Fitness Club, Monthly Fee for 1 Adult')?.cost || 1
    };
}

// Function to calculate a proxy for groceries based on staple food items
function calculateGroceriesIndex(data) {
    const stapleItems = ['Milk (regular), (1 gallon)', 'Loaf of Fresh White Bread (1 lb)', 'Rice (white), (1 lb)', 'Eggs (regular) (12)', 'Chicken Fillets (1 lb)'];
    let totalCost = 0;
    let itemCount = 0;

    stapleItems.forEach(item => {
        const foundItem = data.find(i => i.item === item);
        if (foundItem) {
            const cleanCost = (typeof foundItem.cost === 'string') ? parseFloat(foundItem.cost.replace(/,/g, '')) : foundItem.cost;
            totalCost += cleanCost;
            itemCount++;
        }
    });

    return itemCount > 0 ? totalCost / itemCount : 1;
}

// Function to calculate and display price differences
function calculatePriceDifferences(costs) {
    const { rent, utilities, groceries, phoneBill, entertainment, gas, gym, city1, city2 } = costs;
    
    const calcPercentage = (cost1, cost2) => ((cost2 - cost1) / cost1) * 100;

    const differenceMessages = [
        createDifferenceMessage('Rent', calcPercentage(rent.cost1, rent.cost2), city1, city2),
        createDifferenceMessage('Utilities', calcPercentage(utilities.cost1, utilities.cost2), city1, city2),
        createDifferenceMessage('Groceries', calcPercentage(groceries.cost1, groceries.cost2), city1, city2),
        createDifferenceMessage('Phone Bill', calcPercentage(phoneBill.cost1, phoneBill.cost2), city1, city2),
        createDifferenceMessage('Entertainment', calcPercentage(entertainment.cost1, entertainment.cost2), city1, city2),
        createDifferenceMessage('Gas', calcPercentage(gas.cost1, gas.cost2), city1, city2),
        createDifferenceMessage('Gym', calcPercentage(gym.cost1, gym.cost2), city1, city2)
    ];

    // Return the difference messages as a list with bullet points
    return `<ul>${differenceMessages.map(message => `<li>${message}</li>`).join('')}</ul>`;
}


// Helper function to format the difference message
function createDifferenceMessage(category, percentage, city1, city2) {
    const roundedPercentage = Math.abs(percentage.toFixed(2));
    if (percentage > 0) {
        return `${category} in ${city1} is ${roundedPercentage}% less than in ${city2}.`;
    } else if (percentage < 0) {
        return `${category} in ${city1} is ${roundedPercentage}% more than in ${city2}.`;
    } else {
        return `${category} in ${city1} and ${city2} are the same.`;
    }
}
