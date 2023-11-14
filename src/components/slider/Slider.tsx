import Slider from "react-slick";
import Image from "next/image";
import type { IBreedImage } from "@/types";

export const CustomSlider = ({ images }: { images: IBreedImage[] }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div>
        <ul className="rounded-2.5xl bg-white flex gap-[5px] p-[10px]">
          {dots}
        </ul>
      </div>
    ),
  };
  return (
    <Slider {...sliderSettings}>
      {images?.map(({ id, url, width, height }) => (
        <Image
          key={id}
          src={url}
          alt="Cat"
          width={width}
          height={height}
          priority
          placeholder="blur"
          blurDataURL={url}
          className="rounded-2.5xl h-[360px] object-cover"
        />
      ))}
    </Slider>
  );
};
