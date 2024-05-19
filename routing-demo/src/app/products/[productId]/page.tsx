export default function ProductDetails({params} : {params: {productId: string}}) {
  return (
    <div>
      <h1 className="">Details about product {params.productId}</h1>
    </div>
  );
}