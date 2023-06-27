import React from "react";
import { Item } from "../type";
import Image from "next/image";

const Products = ({ productData }: any) => {
  console.log(productData)
  return (
    <div className="flex flex-col md:grid grid-cols-4 md:gap-4 py-6 px-4 justify-center">
      {productData.map((item: Item) => (
        <div key={item._id} className="border-[1px] border-gray-200 mb-6 group h-40 w-44 md:h-52 md:w-56 hover:scale-105 duration-300">
          <Image
            src={item.image}
            alt="item image"
            height={100}
            width={150}
            className=" object-contain h-40 w-44 md:h-52 md:w-56 duration-300 p-1"
          />
        </div>
      ))}
    </div>
  );
};

export default Products;
