import { CloseIcon, SuccessIcon, ErrorIcon } from "@/components/icons";
import {
  ChangeEvent,
  Dispatch,
  DragEvent,
  SetStateAction,
  useState,
} from "react";
import Image from "next/image";
import {
  handleImage,
  GallerySelects,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileChange,
} from ".";

export const GalleryImageUpload = ({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<{
    file: File;
    dimensions: { width: number; height: number };
    url: string;
  } | null>(null);

  return (
    <div
      className={`2xl:max-w-[680px] relative flex flex-col items-center pb-[158px]`}
    >
      <button
        onClick={() => setOpen((prevState) => !prevState)}
        className="absolute p-2.5 bg-white rounded-1.5lg top-0 right-0 transition-colors hover:bg-darkPink hover:transition-colors group"
      >
        <CloseIcon
          color={
            "fill-darkPink group-hover:fill-white group-hover:transition-colors transition-colors"
          }
        />
      </button>
      <h2 className="font-medium text-4xl mt-[80px]">
        Upload a .jpg or .png Cat Image
      </h2>
      <h3 className="text-placeholder text-xl leading-[30px] mt-2.5">
        Any uploads must comply with the{" "}
        <a
          href="http://thecatapi.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-darkPink"
        >
          upload guidelines
        </a>{" "}
        or face deletion.
      </h3>
      <label
        onDragEnter={handleDragEnter.bind(null, setIsDragOver)}
        onDragLeave={handleDragLeave.bind(null, setIsDragOver)}
        onDragOver={handleDragOver.bind(null, setIsDragOver)}
        onDrop={handleDrop.bind(null, setIsDragOver, setSelectedImage)}
        className={`relative mt-10 bg-white rounded-2.5xl w-full ${
          selectedImage?.file ? "py-[18px] px-[38px]" : "py-[145px]"
        } flex justify-center border-dashed border-2 ${
          isDragOver ? "border-darkPink" : "border-lightPink"
        }`}
      >
        <input
          onChange={handleFileChange.bind(null, setSelectedImage)}
          type="file"
          className="hidden"
          accept=".jpg, .jpeg, .png, .gif"
        />
        {selectedImage?.url ? (
          <Image
            src={selectedImage.url}
            alt="photo"
            width={selectedImage.dimensions.width}
            height={selectedImage.dimensions.height}
            className="object-cover max-h-[280px] rounded-1.5lg"
          />
        ) : (
          <>
            <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 bg-upload bg-cover bg-no-repeat h-[200px] w-[200px]"></div>
            <p className="z-10 text-placeholder leading-[30px] text-xl">
              <span className="font-medium text-black">Drag here</span> your
              file or <span className="font-medium text-black">Click here</span>{" "}
              to upload
            </p>
          </>
        )}
      </label>
      <p className="text-placeholder text-xl leading-[30px] mt-5">
        {selectedImage?.file ? selectedImage.file.name : "No file selected"}
      </p>
      <button
        className={`px-[30px] py-3 bg-darkPink text-white rounded-1.5lg font-medium leading-4 text-xs tracking-[2px] mt-5 hover:bg-lightPink hover:text-darkPink hover:transition-all transition-all ${
          selectedImage?.file ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        UPLOAD PHOTO
      </button>
      {/* <div className="w-full p-5 bg-white rounded-1.5lg flex items-center">
        <SuccessIcon color="fill-cardGreen" />
        <p className="text-placeholder leading-6 ml-2.5">
          Thanks for the Upload - Cat found!
        </p>
        <ErrorIcon color="fill-darkPink" />
        <p className="text-placeholder leading-6 ml-2.5">
          No Cat found - try a different one
        </p>
      </div> */}
    </div>
  );
};
