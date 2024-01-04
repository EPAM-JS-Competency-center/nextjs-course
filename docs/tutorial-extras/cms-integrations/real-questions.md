---
sidebar_position: 999
---

# FAQ

All questions was collected from a real projects

## Is it possible to transition from one CMS to a different one?

At times, a client may wish to create a Proof of Concept (POC) with one of the well-known Content Management Systems (CMS) and then switch to a different CMS after evaluating the initial results.

Next.js is not just a rendering framework; it also includes robust API Routes that can be used to create a Backend for Frontend (BFF) architecture in the application. In this setup, Next.js API routes handle data fetching, business logic, and interactions with external APIs or services like a CMS. This BFF layer simplifies client-side code, optimizes data requests, and helps sequester application concerns, leading to a more efficient and maintainable application.

You can architect your Backend for Frontend (BFF) to incorporate an additional layer explicitly designed to manage CMS changes. This approach creates an abstraction between your BFF and the CMS, allowing developers to switch from one CMS to another more seamlessly without disrupting the front-end user experience or requiring significant code changes in the front end. This ensures that your application remains flexible and adaptable to the evolving needs of the project.
