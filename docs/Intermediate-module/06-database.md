---
sidebar_position: 6
---

import EvaluationCriteriaCounter from "@site/src/components/EvaluationCriteriaCounter";

# Database Setup

**Objective**: This module is aimed at establishing a database setup into a Next.js application. You may select any database of choice, either relational (like MySQL, PostgreSQL) or non-relational (like MongoDB).

**Task Details**:

- **Database Selection**: Choose the appropriate database you prefer for the project.
- **Database Connection**: Accomplish the setting up of your chosen database and establish a connection with it to your NextJS application. This typically involves installing the necessary packages using npm or yarn, adding connection strings/data in your application, typically within a ".env" file, and then writing functions or modules that interact with your database.
- **Test Connection**: Perform the testing of connection within Next.js server actions or server components. You can try running a basic SELECT (in SQL) or FIND (in NoSQL) statement to check if the actions or components interact properly with your database.

**Acceptance Criteria**:

- Successful connection between Next.js app and chosen database.
- Ability to perform basic CRUD operations through Next.js server actions or server components.
- Database credentials (such as username, password, host, port etc.) are safely stored in the .env file and should not be exposed in the code.
- The .env file is added to .gitignore to prevent it from being pushed to the repository.
- Clear error messages are returned when database connections or operations fail.
- Connection pooling or similar technology is implemented if supported by the chosen database to handle multiple simultaneous database queries efficiently.
- There is no substantial lag or delay in database interaction during basic CRUD operations.

**Evaluation Criteria**:

<EvaluationCriteriaCounter
criteriaWithCoefficients={[
{ criterion: "Successful database connection from Next.js server actions/components", coefficient: 20 },
{ criterion: "Ability to perform CRUD operations as expected", coefficient: 20 },
{ criterion: "Correct usage of .env file for credentials", coefficient: 20 },
{ criterion: "Efficiency of simultaneous database queries (if applicable)", coefficient: 20 },
{ criterion: "Quality and clarity of error messages", coefficient: 10 },
{ criterion: "Lag or delay during database interaction", coefficient: 10 },
]}
/>

Once all tasks are completed, submit a pull request with the above focus areas for your mentor to review. Guidelines and examples for database setup can be found in the [Next.js documentation](https://nextjs.org/learn/dashboard-app/setting-up-your-database).