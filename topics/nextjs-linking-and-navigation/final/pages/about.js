import { useCallback } from 'react';
import { useRouter } from 'next/router';

export default function AboutPage() {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  const goHome = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <>
      <button onClick={goBack}>Go Back</button>
      <button onClick={goHome}>Go Home</button>
    </>
  )
}
