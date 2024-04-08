import Details from '../../Components/Details'
import { getProductBySlug } from "../../../sanity/product-utils";

export default async function page ({params}) {
  const {slug} = params;
  const product = await getProductBySlug(slug);
  // if(!product) {
  //   return {
  //     notFound:true
  //   }
  // }
  return (
   <div>
    <div>
      <Details product={product[0]}/>
    </div>
   </div>
  );
};

