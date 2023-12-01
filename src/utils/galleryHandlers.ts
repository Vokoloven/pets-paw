import {
  ChangeEvent,
  DragEvent,
  Dispatch,
  SetStateAction,
  MouseEvent,
} from "react";
import type { TUploadImage, TUploadedImages } from "@/types";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

export const handleImage = (
  setSelectedImage: Dispatch<
    SetStateAction<{
      file: File;
      dimensions: {
        width: number;
        height: number;
      };
      url: string;
    } | null>
  >,
  file: File
) => {
  if (file) {
    const url = URL.createObjectURL(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = document.createElement("img");
      img.onload = () => {
        const dimensions = { width: img.width, height: img.height };
        setSelectedImage({ file, dimensions, url });
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  }
};

export const handleFileChange = (
  setSelectedImage: Dispatch<
    SetStateAction<{
      file: File;
      dimensions: {
        width: number;
        height: number;
      };
      url: string;
    } | null>
  >,
  setStatus: Dispatch<SetStateAction<"success" | "error" | null>>,
  e: ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0]!;
  setStatus(null);
  handleImage(setSelectedImage, file);
};

export const handleDragEnter = (
  setIsDragOver: Dispatch<SetStateAction<boolean>>,
  e: DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  setIsDragOver(true);
};

export const handleDragLeave = (
  setIsDragOver: Dispatch<SetStateAction<boolean>>,
  e: DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  setIsDragOver(false);
};

export const handleDragOver = (
  setIsDragOver: Dispatch<SetStateAction<boolean>>,
  e: DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  setIsDragOver(true);
};

export const handleDrop = (
  setIsDragOver: Dispatch<SetStateAction<boolean>>,
  setSelectedImage: Dispatch<
    SetStateAction<{
      file: File;
      dimensions: {
        width: number;
        height: number;
      };
      url: string;
    } | null>
  >,
  setStatus: Dispatch<SetStateAction<"success" | "error" | null>>,
  e: DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  setStatus(null);
  setIsDragOver(false);
  const file = e.dataTransfer.files[0];
  handleImage(setSelectedImage, file);
};

export const handleFile = async (
  selectedImage: {
    file: File;
    dimensions: { width: number; height: number };
    url: string;
  } | null,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setStatus: Dispatch<SetStateAction<"success" | "error" | null>>,

  e: MouseEvent<HTMLButtonElement>
) => {
  e.preventDefault();
  if (selectedImage?.file) {
    const { file } = selectedImage;
    const formData = new FormData();
    formData.append("file", file);
    try {
      setLoading(true);
      const getReq = axios.get("/api/gallery");
      const getRes = await getReq;
      const { data } = getRes as { data: TUploadedImages[] };
      const inTheList = data.some(
        (name) => name.original_filename === file.name
      );
      if (inTheList) {
        setStatus("error");
      } else {
        setStatus("success");
        const postReq = axios.post("/api/gallery", formData);
        const postRes = await postReq;
        const { data } = postRes as { data: TUploadImage };
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
};

export const handleLabel = (
  status: "error" | "success" | null,
  isDragOver: boolean
) => {
  if (status === "error")
    return "border-darkPink bg-lightPink dark:bg-rgbaDarkPinkLow";
  if (isDragOver) return "border-darkPink";
  return "border-lightPink bg-white dark:bg-rgbaNightBlack dark:border-rgbaDarkPinkLow";
};
