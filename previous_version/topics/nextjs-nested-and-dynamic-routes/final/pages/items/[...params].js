import { useRouter } from 'next/router';

export default function ProductType() {
  const router = useRouter();
  const { params } = router.query;

  if (!params) return null;

  return (
    <ul>
      {params[0] && <h2>{`Type: ${params[0]}`}</h2>}
      {params[1] && <h2>{`Manufacturer: ${params[1]}`}</h2>}
      {params[2] && <h2>{`Model: ${params[2]}`}</h2>}
    </ul>
  )
}
