import { notFound } from "next/navigation";
export default function ReviewID({params}: {params: {productId: string,reviewId: string}}) {
    if(parseInt(params.reviewId) > 1000 ){
        return notFound();
    }
  return (
    <div>
      <h1 className="">Review {params.reviewId} of product {params.productId}</h1>
    </div>
  );
}