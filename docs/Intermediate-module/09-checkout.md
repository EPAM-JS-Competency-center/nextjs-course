import EvaluationCriteriaCounter from "@site/src/components/EvaluationCriteriaCounter";

# Checkout page

**Objective**: Use [react-hook-form](https://react-hook-form.com/) to create a checkout page with order submission functionality. Validate requests through NextJS API and send a "success" response.

**Task Details**:

- **Create checkout page**: Create a checkout page using React Hook Forms, with the URL to '/checkout'. [Example](https://demo.vuestorefront.io/checkout).

It should contain sections with fields:

1. Contact Information: Email
2. Billing Address: First Name, Last name, Phone, Country, Street, Apt, City, State, ZIP, Use as shipping address
3. Shipping Address: First Name, Last name, Phone, Country, Street, Apt, City, State, ZIP
4. Shipping Details: Options
5. Payment Method: Options
6. Order Summary: Calculations with opportunity to add promocode

- **Create API endpoint**:

Create a checkout API with the URL to '/api/checkout'.

- **Validate checkout**:

Add backend validation, return errors and handle it on the frontend side.

**Special Considerations**:

- Create endpoint for the checkout with NextJS. Check [route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) documentation to implement it.

**Why it's Important**:
Next.js API serve as a crucial Backend For Frontend (BFF) layer, enabling server-side operations like database interactions and authentication within the same application, thereby reducing architectural complexity.

**Acceptance Criteria**:

- Checkout page must collect the user data
- NextJS backend validate the checkout and response with errors or success

**Evaluation Criteria**:

<EvaluationCriteriaCounter
criteriaWithCoefficients={[
{ criterion: "Checkout page functionality work as expected", coefficient: 40 },
{ criterion: "API return success message", coefficient: 40 },
{ criterion: "Validation works as expected", coefficient: 20 },
]}
/>

Complete the module and submit a pull request for your mentor's review, emphasizing functionality and structure over design fidelity.

For guidance on setup Next.js application, refer to the [Next.js documentation](https://nextjs.org/learn/dashboard-app/getting-started).
