import React from "react";
import Slider from "react-slick";
import bannerImg from "../public/assets/images/slider/bannerImg.webp";
import sliderImgOne from "../public/assets/images/slider/sliderImgOne.webp";
import sliderImgTwo from "../public/assets/images/slider/sliderImgTwo.webp";
import sliderImgThree from "../public/assets/images/slider/sliderImgThree.webp";
import sliderImgFour from "../public/assets/images/slider/sliderImgFour.webp";
import sliderImgFive from "../public/assets/images/slider/sliderImgFive.webp";
import Image from "next/image";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import BannerText from "./BannerText";
import ButtonPrimary from "./ButtonPrimary";

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-4 md:bottom-12 right-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-[#C88EA7] hover:scale-95 cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <GrLinkNext />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="absolute bottom-4 md:bottom-12 left-6 w-12 h-8 border-[1px] shadow-md border-black text-black bg-white text-xl flex items-center justify-center rounded-md hover:bg-[#C88EA7] hover:scale-95 cursor-pointer duration-300 z-10"
      onClick={onClick}
    >
      <GrLinkPrevious />
    </div>
  );
}

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full bg-white px-4 py-6 font-titleFont flex gap-4 border-b-[1px]">
      <div className="w-full md:w-2/3 rounded-lg h-[200px] md:h-[410px] shadow-md relative">
        <Slider {...settings}>
          <div className="w-full h-[200px] md:h-[410px] relative">
            <Image
              src={sliderImgOne}
              alt="sliderImgOne"
              priority
              className="object-cover w-full h-full rounded-lg"
            />
            <BannerText
              title="Spring fashion in bloom"
              description="New trends & styles to turn hands anytime, on any budget."
              btnText="Shop Now"
            />
          </div>
          <div className="w-full h-[200px] md:h-[410px] relative">
            <Image
              src={sliderImgTwo}
              alt="sliderImgTwo"
              priority
              className="object-cover w-full h-full rounded-lg"
            />
            <BannerText
              title="Upto 65% off*"
              description="New savings every week! Hurry to score low, low price"
              btnText="Shop Now"
            />
          </div>
          {/* <div className="w-full h-[200px] md:h-[410px] relative">
            <Image
              src={sliderImgThree}
              alt="sliderImgThree"
              priority
              className="object-cover w-full h-full rounded-lg"
            />
            <BannerText
              title="Upto 65% off*"
              description="New savings every week! Hurry to score low, low price"
              btnText="Shop Now"
            />
          </div> */}
          <div className="w-full h-[200px] md:h-[410px] relative">
            <Image
              src={sliderImgFour}
              alt="sliderImgFour"
              priority
              className="object-cover w-full h-full rounded-lg"
            />
            <BannerText
              title="You can save $12,00+ a year!*"
              description="Start saveing with free delivery! ShopGenie Rewards & more"
              btnText="Try Free"
            />
          </div>
          <div className="w-full h-[200px] md:h-[410px] relative">
            <Image
              src={sliderImgFive}
              alt="sliderImgFive"
              priority
              className="object-cover w-full h-full rounded-lg"
            />
            <BannerText
              title="Membership off* 25%"
              description="Enjoy upto 25% off & free delivery with ShopGenie Membership!"
              btnText="Shop Now"
            />
          </div>
        </Slider>
      </div>
      <div className="w-1/3 border-[1px] border-gray-200 rounded-lg shadow-md p-4 hidden md:flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-black">
            Flash Pick of the day!
          </h2>
          <p className="text-base text-zinc-600 underline underline-offset-2">
            View all
          </p>
        </div>
        <Image
          src={bannerImg}
          alt="banner image"
          className="h-60 object-cover"
        />
        <ButtonPrimary btnText="Options" />
        <p className="text-lg text-black font-semibold">From $199.79</p>
        <p className="text-base text-gray-500 -mt-1">Outdooe sofa set!</p>
      </div>
    </div>
  );
};

export default Banner;
