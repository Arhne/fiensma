"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import styles from "./FileUploadComp.module.scss";

export const FileUploaderComp = ({
  onChange,
}: {
  onChange: (...event: any[]) => void;
}) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [fileName, setFileName] = useState("");

  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    imgRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files) {
      const files = e.target.files;
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(files[0]);
      setFileName(files[0].name);
    }
  };
  useEffect(() => {
    const formData = new FormData();

    formData.append("file", imagePreview);
    formData.append("upload_preset", "ibxmedias");
    formData.append("cloud_name", "dbg2z1svm");

    fetch("https://api.cloudinary.com/v1_1/dbg2z1svm/upload", {
      method: "post",
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        return onChange(data.secure_url);
      })
      .catch((err) => console.log(err));
  }, [imagePreview, onChange]);

  return (
    <div className={styles.FileUploadContainer}>
      <input ref={imgRef} type="file" onChange={handleImageChange} />
      <div className={styles.FileContainer} onClick={handleImageClick}>
        <p>{fileName ? fileName : "Upload resume"}</p>
      </div>
    </div>
  );
};
