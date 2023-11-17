import { ChangeEvent, DragEvent, Dispatch, SetStateAction } from "react";

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
  e: ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0]!;

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
  e: DragEvent<HTMLLabelElement>
) => {
  e.preventDefault();
  setIsDragOver(false);
  const file = e.dataTransfer.files[0];
  handleImage(setSelectedImage, file);
};
