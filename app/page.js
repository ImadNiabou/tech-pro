
import Banner from "./Components/Banner";
import Card from "./Components/Card";
import NewsLatter from "./Components/NewsLatter";
import Acordion from "./Components/Accordion";
import { getProducts } from "../sanity/product-utils";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      {/*     
      {
        console.log(products)
      } */}
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <Banner />
      </div>
      <div className="flex flex-col items-center justify-center mt-10 space-y-4">
        <h1 className="text-4xl font-bold m-16 text-purple text-center">
          Featured products
        </h1>
      </div>
      <div className="p-10 flex">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {products.map((product) => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      </div>
      <h2 id="questions" className="text-4xl font-bold text-purple my-16 text-center">
        Do you have any question?
      </h2>
      <Acordion />
      <NewsLatter />
    </div>
  );
}
