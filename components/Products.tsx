import { Item } from "@/type";
import Image from "next/image";
import React from "react";
import { AiOutlinePlus,AiTwotoneStar } from "react-icons/ai";

const Products = ({ productData }: any) => {
  return (
    <div className="flex flex-col md:grid grid-cols-4 md:gap-4 py-6 px-4">
      {productData.map((item: Item) => (
        <div key={item._id} className="flex md:block border-[2px] border-gray-200 mb-6 p-2">
          <div className="md:flex justify-center">
            <Image
              src={item.image}
              alt="item image"
              height={100}
              width={150}
              className=" object-contain h-40 w-44 md:h-52 md:w-56 duration-300 md:p-2 hover:scale-105 -ml-2 md:-ml-0"
            />
          </div>
          {/* description starts */}
          <div className="md:flex md:flex-col justify-center pl-3 md:pl-0">
            <div className="pt-3 flex md:justify-between gap-2 md:gap-0 ">
              <button className=" md:w-20 md:h-9 p-2 text-xs md:text-lg text-black bg-[#C88EA7] rounded-lg md:rounded-full flex gap-1 items-center justify-center hover:bg-[#ac748c] duration-300">
                <span>
                  <AiOutlinePlus />
                </span>
                Add
              </button>
              <button className="md:w-20 md:h-9 p-2  border-[1px] text-xs md:text-lg rounded-lg md:rounded-full border-black text-black bg-white flex gap-1 items-center justify-center hover:bg-black hover:text-white duration-300">
                <span>
                  <AiOutlinePlus />
                </span>
                Details
              </button>
            </div>

            <div className="inline md:pt-4 ">
              <p className="font-titleFont text-lg text-[#643843] font-semibold">Rs.{' '}{item.price}</p>
            </div>

            <div>
              <p className="text-xs md:text-sm font-semibold">{item.title.substring(0,25)}...</p>
            </div>
            <div>
              <p>{item.description.substring(0,30)}...</p>
            </div>
            <div className="flex items-center gap-1">
              <p>{item.ratings}</p>
              <AiTwotoneStar/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
