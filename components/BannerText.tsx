import React from "react";

interface Props {
  title: string;
  description: string;
  btnText: string;
}

const BannerText = ({ title, description, btnText }: Props) => {
  return (
    <div>
      <div className="absolute w-52 md:w-60 h-full top-3 md:top-6 left-4 flex flex-col gap-3 text-black">
        <h1 className="font-bold text-xl md:text-2xl">{title}</h1>
        <p className="text-sm leading-4 md:leading-5">{description}</p>
        <button className="bg-white text-sm text-black font-semibold rounded-full w-24 h-8 border-[1px] border-black">
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default BannerText;
