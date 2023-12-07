---
sidebar_position: 2
---

# CSS Styling in Next.js

## Overview of Chapter 2: Exploring Styling Options in Next.js
In this chapter, you'll not only learn about Tailwind CSS and CSS Modules but also explore alternative styling methods in Next.js. Understanding these different approaches will give you flexibility in choosing the best styling method for your projects.

### Alternatives to Tailwind and CSS Modules:
While Tailwind and CSS Modules are powerful, there are other great options for styling in Next.js. Let’s look at two popular alternatives:

[__styled-jsx__](https://github.com/vercel/styled-jsx): This is a built-in feature of Next.js that lets you write CSS directly within your JavaScript files. It's great for keeping the styles scoped to the component they belong to.

```tsx
function MyComponent() {
  return (
    <div>
      <p className="styledText">Styled with styled-jsx</p>
      <style jsx>{`
        .styledText {
          color: purple;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}
```

[__styled-components__](https://github.com/vercel/next.js/tree/canary/examples/with-styled-components): This popular library allows you to write CSS code within your JavaScript, providing a more dynamic way to style components.
```tsx
import styled from 'styled-components';

const StyledText = styled.p`
  color: green;
  font-size: 20px;
`;

function MyComponent() {
  return <StyledText>Styled with styled-components</StyledText>;
}

```

[__emotion__](https://github.com/vercel/next.js/tree/canary/examples/with-emotion): Emotion is a powerful library for writing CSS styles with JavaScript, similar to styled-components, but with some unique features and syntax variations. It's known for its high performance and flexibility.

```tsx
import { css } from '@emotion/react';

const style = css`
  color: orange;
  font-size: 20px;
`;

function MyComponent() {
  return <p css={style}>Styled with Emotion</p>;
}
```

### Ready to Explore Styling in Next.js?
Each styling method has unique advantages and can be chosen based on the specific needs of your project. Experimenting with these different styles will broaden your understanding and skills in front-end development.

Dive into the diverse world of CSS styling in Next.js here: [CSS Styling in Next.js](https://nextjs.org/learn/dashboard-app/css-styling).
