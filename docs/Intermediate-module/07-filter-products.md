---
sidebar_position: 7
---

import EvaluationCriteriaCounter from "@site/src/components/EvaluationCriteriaCounter";

# Filter products

**Objective**: Implement a dynamic sidebar functionality for a product listing page, with category selection, sorting, and filters for size and color. The main section should display a product list that dynamically updates according to changes in the filter state, with data sourced from the database. The filter state should reflect in the URL. Server functions utilised for data fetching and filtering should be reusable in public API endpoints and be equipped with tracing logs. [Example Page](https://demo.alokai.com/category)

**Task Details**: 

- **Picking a Category**: The sidebar should encompass a list of product categories. Upon selection, the product list should display only the products within the selected category. The URL should mirror this category selection.
- **Sort By**: Inclusion of sorting options (e.g., price, popularity, latest introduction etc.). The sorting selection should reorder the product list and update the URL to denote the current sorting state.
- **Filter by Size**: Implement a range of sizes in the sidebar. When a size is selected, the product list should update to display only products available in the chosen size. The URL should be updated to represent this filter.
- **Filter by Color**: Provide color options in the sidebar. Upon selection, the product list should only show products available in the given color. The URL should reflect this applied filter.
- **Server Functions**: You need to develop serverless functions, which fetch product data and filter them based on user-selected parameters. These functions should be reusable in public API endpoints. Remember to add tracing logs into this functions to track their operation over time and help troubleshoot if issues arise.

**Acceptance Criteria**: 

- Effective utilisation of Next.js server components/actions to execute sidebar functionalities.
- Proper fetching and rendering of product lists from the database using Next.js server actions.
- Dynamic updates of product lists and URL adaption, based on filter state transitions, without necessitating page refresh.
- All filters (category, sort by, size, color) must be depicted in the URL.
- Apt application of several filters simultaneously like sorting a specific product category by price and then filtering by size and color.
- Creation of reusable serverless functions that can double as public API endpoints.
- Proper error handling and debugging during data fetching or filtering equipped with readable error messaging.
- Addition of tracing logs in server-side functions to monitor operation and troubleshoot potential issues.

**Evaluation Criteria**:

<EvaluationCriteriaCounter
criteriaWithCoefficients={[
{ criterion: "Effective server-side implementation of category filtering and URL modification", coefficient: 15 },
{ criterion: "Efficient sorting functionalities using server components/actions and URL updates", coefficient: 15 },
{ criterion: "Implementation of size and color filters via server components/actions with URL updating", coefficient: 15 },
{ criterion: "Serverless functions for data fetch and filter are reusable and deployed as public API endpoints", coefficient: 20 },
{ criterion: "Dynamic update of products list and URL based on filter states", coefficient: 15 },
{ criterion: "Proper error handling and user-friendly error messages", coefficient: 10 },
{ criterion: "Addition of tracing logs in server-side functions for monitoring and troubleshooting", coefficient: 10 }
]}
/>

Upon completion, submit a pull request focusing on how the sidebar interacts with the main product list, the use and reusability of serverless functions, along with the dynamic URL and product list updates.