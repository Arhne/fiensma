"use client";

import { Controller, useForm } from "react-hook-form";

import { showErrorToast, showSuccessToast } from "@/common/Utils/toast";
import { useApplyForJobMutation } from "@/redux/services/jobApi";
import CustomInput from "@/common/components/Inputs";
import { FileUploaderComp } from "@/common/components/FileUploadComp";

import styles from "./JobApplication.module.scss";

const JobApplication = ({ jobId }: { jobId: string }) => {
  const [applyForJob, { isLoading }] = useApplyForJobMutation();

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      applicantCv: "",
      phone: "",
    },
  });

  const onHandleSubmit = (value: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    applicantCv: string;
  }) => {
    const payload = {
      job: jobId,
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      applicantCV: value.applicantCv,
    };

    applyForJob(payload)
      .unwrap()
      .then((result) => {
        showSuccessToast(result?.message);
        reset();
      })
      .catch((error) => {
        let message = error?.data?.message;
        for (let index = 0; index < message.length; index++) {
          showErrorToast(message[index]);
        }
      });
  };

  return (
    <div className={styles.JobApplicationContainer}>
      <h4 className={styles.Title}>Apply for this job</h4>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="row mb-3">
          <div className={`col-12 ${styles.InputContainer}`}>
            {" "}
            <Controller
              name="firstName"
              control={control}
              rules={{ required: "*first name is required" }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => {
                const errorMessage = errors.firstName?.message;
                return (
                  <CustomInput
                    isShowLabel
                    labelText="First Name"
                    type="text"
                    customStyle={inputStyle}
                    placeholder="Enter first name"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className={`col-12 ${styles.InputContainer}`}>
            {" "}
            <Controller
              name="lastName"
              control={control}
              rules={{ required: "*last name is required" }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => {
                const errorMessage = errors.lastName?.message;
                return (
                  <CustomInput
                    isShowLabel
                    labelText="Last Name"
                    type="text"
                    customStyle={inputStyle}
                    placeholder="Enter last name"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />
          </div>
        </div>
        <div className="row gx-5 mb-3">
          <div className={`col-sm-6 ${styles.InputContainer}`}>
            {" "}
            <Controller
              name="email"
              control={control}
              rules={{ required: "*email is required" }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => {
                const errorMessage = errors.email?.message;
                return (
                  <CustomInput
                    isShowLabel
                    labelText="Email"
                    type="email"
                    customStyle={inputStyle}
                    placeholder="Enter email address"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />
          </div>
          <div className={`col-sm-6 ${styles.InputContainer}`}>
            {" "}
            <Controller
              name="phone"
              control={control}
              rules={{ required: "*phone is required" }}
              render={({
                field: { onChange, value },
                formState: { errors },
              }) => {
                const errorMessage = errors.phone?.message;
                return (
                  <CustomInput
                    isShowLabel
                    labelText="Phone Number"
                    type="number"
                    customStyle={inputStyle}
                    placeholder="+23464537838"
                    {...{ value, onChange, errors: [errorMessage] }}
                  />
                );
              }}
            />
          </div>
        </div>

        <div className="mb-3">
          <Controller
            name="applicantCv"
            control={control}
            rules={{ required: "*CV is required" }}
            render={({ field: { onChange, value }, formState: { errors } }) => {
              const errorMessage = errors.applicantCv?.message;
              return (
                <FileUploaderComp
                  {...{ value, onChange, errors: [errorMessage] }}
                />
              );
            }}
          />
        </div>

        <button className={styles.ActionButton}>
          {isLoading ? "Submitting" : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default JobApplication;

const inputStyle = {
  borderRadius: "8px",
  border: "1.408px solid #CDCFD0",
  background: "#FFF",
  height: "3.25rem",
};
