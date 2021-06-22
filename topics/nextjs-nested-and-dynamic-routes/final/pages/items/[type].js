import { useRouter } from 'next/router';

export default function ProductType() {
  const router = useRouter();
  const { type } = router.query;

  return (
    <div>Item's type: {type}</div>
  )
}
