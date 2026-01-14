



import {Metadata} from 'next'

export const generateMetadata = async({params}: Props): Promise<Metadata> => {
  const id = (await params).productId;
  return {
    title: `Product ${id} Details`,
  };
}

type Props = {
  params: Promise<{productId: string}>
}

export default async function ProductId({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;

  return <h1>Details About {productId}</h1>;
}
