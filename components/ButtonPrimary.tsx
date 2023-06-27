import React from "react";
type Props = {
  btnText: string;
};
const ButtonPrimary = ({ btnText }: Props) => {
  return (
    <div>
      <button className="w-20 h-7 text-sm font-semibold rounded-full border border-black bg-[#C88EA7] text-white hover:bg-[#c77b9c] duration-300 hover:scale-105">
        {btnText}
      </button>
    </div>
  );
};

export default ButtonPrimary;
