import React from 'react';
import Link from 'next/link';

// regular a
// custom function component

const NavigationButton = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <div>
      <a href={href} onClick={onClick} ref={ref}>
        Go to About page
      </a>
    </div>
  );
});

export default function IndexPage() {
  return (
    <>
      <Link href="/previous_version/topics/nextjs-linking-and-navigation/final/pages/about">
        <a>About</a>
      </Link>
      <Link href="/previous_version/topics/nextjs-linking-and-navigation/final/pages/about" passHref>
        <NavigationButton />
      </Link>
    </>
  )
}
