"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { showErrorToast, showSuccessToast } from "@/common/Utils/toast";

import styles from "./FileUploadComp.module.scss";

export const FileUploaderComp = ({
  onChange,
  labelText,
}: {
  onChange: (...event: any[]) => void;
  labelText?: string;
}) => {
  const imgRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState("");
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    imgRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLoading(true);

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
    if (imagePreview) {
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
          setIsLoading(false);
          showSuccessToast("Document uploaded successfully!");
          return onChange(data.secure_url);
        })
        .catch((err) => {
          setIsLoading(false);
          showErrorToast("Unable to upload document!");
        });
    }
  }, [imagePreview, onChange]);

  return (
    <div className={styles.FileUploadContainer}>
      <label className={styles.Label}>{labelText}</label>
      <div className={styles.FileContainer}>
        <input ref={imgRef} type="file" onChange={handleImageChange} />
        <Image
          src="/new_upload_icon.svg"
          alt=""
          width={59.41}
          height={33.48}
          className={styles.UploadIcon}
        />
        <p className={styles.UploadText} onClick={handleImageClick}>
          Drop file here to upload or{" "}
          <span className={styles.ActionButton}>browse</span>
        </p>
        <p className={styles.UploadTypeText}> PDF, JPG, PNG, Docs (Max 10mb)</p>
        {isLoading ? (
          <p className={styles.UploadText}>uploading...</p>
        ) : (
          <p className={`${styles.UploadText} ${styles.FileName}`}>
            {fileName}
          </p>
        )}
      </div>
    </div>
  );
};
