[README.md](https://github.com/user-attachments/files/17081564/README.md)
# **Cost of Living Calculator**

## **Project Overview**

The Cost of Living Calculator is a web-based tool designed to help users compare living expenses between two cities. By inputting their current costs for rent, utilities, groceries, phone bills, entertainment, gas, and gym memberships, users can see how their living expenses would change if they were to move to another city.

The calculator fetches live cost data from an API and provides a detailed comparison of expenses, displaying both the original and equivalent costs in the new city. Additionally, users can view the percentage increase or decrease in expenses for each category.

## **Key Features**

- **City-to-City Cost Comparison:** Users can input two cities and compare their current living costs with estimated costs in the new city.
  
- **Expense Categories:** Includes rent, utilities, groceries, phone bills, entertainment, gas, and gym memberships.

- **Total Living Cost Comparison:** Displays the total living costs for both cities, making it easier to evaluate potential financial changes.

- **Percentage Change Display:** The tool calculates and displays the percentage increase or decrease in each expense category between the two cities.

- **Visual and Professional Design:** The tool is designed with a clean, modern, and professional user interface, making it easy for users to input data and view results.

## **How It Works**

1. **User Inputs**: 
   - The user enters two cities: their current city and the city they are considering moving to.
   - The user enters their current expenses for rent, utilities, groceries, etc.

  <img width="492" alt="Screenshot 2024-09-20 at 4 36 07 PM" src="https://github.com/user-attachments/assets/e90f1456-91db-460a-9c0b-02d36b6aca9d">

2. **API Integration**:
   - The application fetches live cost data for both cities using a public API.

3. **Calculation**:
   - The calculator compares the user’s current expenses with equivalent expenses in the new city using API data.
   - Total living costs for both cities are calculated and displayed.
   - Percentage changes for each category are shown in bullet points at the bottom of the page.
     
<img width="324" alt="Screenshot 2024-09-20 at 4 37 26 PM" src="https://github.com/user-attachments/assets/b7f5c97f-c2cc-4f24-960c-b6d0917b4e7b">


## **Technologies Used**

- **HTML5**: Structure of the webpage
- **CSS3**: Styling and layout of the page
- **JavaScript**: Logic for the cost calculation, API integration, and DOM manipulation
- **Public Cost of Living API**: Fetches live cost data for the comparison
- **GitHub**: Version control and project management

## **How to Run the Project**

1. **Clone the Repository**:
   ```
   git clone https://github.com/whspieler/cost-of-living-calculator.git
   ```

2. **Open the Project**:
   - Navigate to the project folder and open `index.html` in your browser.

3. **Input Data**:
   - Enter the cities and expenses in the form and click "Calculate Costs in Other City" to see the comparison.



