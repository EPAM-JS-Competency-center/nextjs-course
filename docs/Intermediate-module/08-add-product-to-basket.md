---
sidebar_position: 8
---

import EvaluationCriteriaCounter from "@site/src/components/EvaluationCriteriaCounter";

# Add Product to Cart

**Objective**: Build a robust system that allows users to add products to their shopping cart using Next.js server actions, handling both successful additions and failure situations effectively. Implement tracing logs in server actions to monitor operations and assist in troubleshooting.

**Task Details**: 

- **Add to Cart Functionality**: Develop a function using Next.js server actions that adds a product to the user's cart when the 'Add to Cart' button is clicked. Implement tracing logs within this function for activity monitoring and potential troubleshooting.
- **Cart Update**: Update the cart contents dynamically once a product is added. Users should be able to see the added product in their cart.
- **Error Handling**: Handle any failures that might occur when attempting to add a product to the cart, such as when a product is out of stock or a server issue occurs. Informative error messages should be displayed to keep users aware. Incorporate tracing logs within these handling mechanisms to track errors.

**Acceptance Criteria**: 

- The 'Add to Cart' button successfully adds the related product to the cart using a Next.js server action, with tracing logs capturing the action activity.
- A feedback mechanism exists to inform the user of a successful addition to the cart, such as a confirmation message or an updated cart icon.
- In cases where adding a product to the cart fails, an appropriate error message is displayed to the user, and the error is logged using tracing logs.
- The cart's state is accurately maintained and displayed, reflecting the total price and quantity of items.

**Evaluation Criteria**:

<EvaluationCriteriaCounter
criteriaWithCoefficients={[
{ criterion: "Reliable 'Add to Cart' functionality using Next.js server actions, captured by tracing logs", coefficient: 25 },
{ criterion: "Proper updating and display of the cart's state following a product addition", coefficient: 25 },
{ criterion: "Effective error handling and messaging in failure cases, with activity tracked by tracing logs", coefficient: 25 },
{ criterion: "User feedback on successful product addition, captured by tracing logs", coefficient: 25 },
]}
/>

After completing the task, submit a pull request for your mentor's review. Demonstrate the efficiency and functionality of the 'add to cart' operation, its interaction with Next.js server actions, user feedback, and error messaging, and show how tracing logs assist in monitoring and troubleshooting this flow.