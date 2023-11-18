import { CloseIcon, SuccessIcon, ErrorIcon } from "@/components/icons";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import {
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
  handleDrop,
  handleFileChange,
  handleFile,
  handleLabel,
} from ".";
import { Spinner } from "@/components/spinner";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  return (
    <div
      className={`2xl:max-w-[680px] relative flex flex-col items-center ${
        status === null ? "pb-[158px]" : "pb-[138px]"
      }`}
    >
      <button
        aria-label="close"
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
        onDrop={handleDrop.bind(
          null,
          setIsDragOver,
          setSelectedImage,
          setStatus
        )}
        className={`relative mt-10 rounded-2.5xl w-full ${
          selectedImage?.file ? "py-[18px] px-[38px]" : "py-[145px]"
        } flex justify-center border-dashed border-2 ${handleLabel(
          status,
          isDragOver
        )}`}
      >
        <input
          onChange={handleFileChange.bind(null, setSelectedImage, setStatus)}
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
        {selectedImage?.file
          ? `Image File Name: ${selectedImage.file.name}`
          : "No file selected"}
      </p>
      <button
        onClick={handleFile.bind(null, selectedImage, setLoading, setStatus)}
        aria-label="Upload photo"
        className={`flex items-center px-[30px] py-3 mt-5 bg-darkPink text-white rounded-1.5lg font-medium leading-4 text-xs tracking-[2px] hover:bg-lightPink hover:text-darkPink hover:transition-all transition-all ${
          selectedImage?.file && status === null
            ? "opacity-100"
            : "opacity-0 pointer-events-none absolute"
        }`}
      >
        {loading && <Spinner />}
        <span className="ml-2.5">{loading ? "UPLOADING" : "UPLOAD PHOTO"}</span>
      </button>
      {[
        {
          id: "success",
          icon: <SuccessIcon color="fill-cardGreen" />,
          text: "Thanks for uploading your image!",
        },
        {
          id: "error",
          icon: <ErrorIcon color="fill-darkPink" />,
          text: "You have already added that image, please try another one.",
        },
      ].map(({ id, icon, text }) => (
        <div
          key={id}
          className={`mt-5 w-full p-[18px] bg-white rounded-1.5lg flex items-center transition-all ${
            selectedImage?.file && status === id
              ? "opacity-100"
              : "opacity-0 pointer-events-none absolute"
          }`}
        >
          {icon}
          <p className="text-placeholder leading-6 ml-2.5">{text}</p>
        </div>
      ))}
    </div>
  );
};
