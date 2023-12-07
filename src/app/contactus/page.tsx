"use client";

import { Controller, useForm } from "react-hook-form";

import Image from "next/image";
import styles from "./ContactUs.module.scss";
import { CustomInput } from "@/common/components/Inputs";
import CustomTextArea from "@/common/components/TextArea";
import { useAddContactUsMutation } from "@/redux/services/contactUsApi";
import { showErrorToast, showSuccessToast } from "@/common/Utils/toast";
import { imageLoader } from "@/common/Utils/imageLoaders";
import { CustomPhoneInput } from "@/common/components/CustomPhoneInput";

const ContactUs = () => {
  const [addContactUs, { isLoading }] = useAddContactUsMutation();

  const { handleSubmit, control } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    },
  });

  const onHandleSubmit = (value: {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    phone: string;
  }) => {
    addContactUs(value)
      .unwrap()
      .then((result: { message: any }) => {
        showSuccessToast(result?.message);
      })
      .catch((error: { data: { message: any } }) => {
        showErrorToast(error?.data?.message.join());
      });
  };

  return (
    <div className={styles.ContactUsContainer}>
      <div className="row gx-5">
        <div className={`col-xs-12 col-sm-6 ${styles.LeftColumn}`}>
          <Image
            loader={() =>
              imageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1699289186/ibx-website-v2/contact-us/Contact_Us_Background_usaf6g.svg"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1699289186/ibx-website-v2/contact-us/Contact_Us_Background_usaf6g.svg"
            alt=""
            className={styles.LeftColumnImage}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMscLxXDwAEyAIQ0V1oYQAAAABJRU5ErkJggg=="
            width={628}
            height={924}
          />
        </div>
        <div
          className={`col-xs-12 col-sm-6 col-md-12 col-lg-6  ${styles.RightColumn}`}
        >
          <h3>Contact Us</h3>
          <p>
						Our support team are always on the standby 24/7 to ensure you have a
						seamless trading experience. You can reach us via our support emails{" "}
						<a href="mailto:admin@ibxp2p.com">admin@ibxp2p.com</a> or{" "}
						<a href="mailto:support@ibxp2p.com">support@ibxp2p.com</a> and we
						will respond in minutes.
					</p>
					<p>
						You can also use this form to send us a message, we reply typically within 5mins.
					</p>
          <div className={styles.FormSection}>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
              <div className="row gx-5 mb-4">
                <div className={`col-sm-6 ${styles.InputContainer}`}>
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
                          placeholder="First Name"
                          {...{ value, onChange, errors: [errorMessage] }}
                        />
                      );
                    }}
                  />
                </div>
                <div className={`col-sm-6 ${styles.InputContainer}`}>
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
                          placeholder="Last Name"
                          {...{ value, onChange, errors: [errorMessage] }}
                        />
                      );
                    }}
                  />
                </div>
              </div>
              <div className="row gx-5 mb-4">
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
                          placeholder="name@example.com"
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
                        <CustomPhoneInput
                          isShowLabel
                          labelText="Phone Number"
                          customStyle={phoneInputStyle}
                          {...{ value, onChange, errors: [errorMessage] }}
                        />
                      );
                    }}
                  />
                </div>
              </div>

              <div className="mb-3">
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: "*message is required" }}
                  render={({
                    field: { onChange, value },
                    formState: { errors },
                  }) => {
                    const errorMessage = errors.message?.message;
                    return (
                      <CustomTextArea
                        isShowLabel
                        labelText="Your Message"
                        customStyle={textAreaStyle}
                        {...{ value, onChange, errors: [errorMessage] }}
                      />
                    );
                  }}
                />
              </div>
              <small className={styles.Terms}>
                By submitting this form you agree to our{" "}
                <span className={styles.HighlightedText}>
                  <a href={"/terms"}>terms and conditions</a>
                </span>{" "}
                and our{" "}
                <span className={styles.HighlightedText}>
                  <a href="/policy">privacy policy</a>
                </span>{" "}
                which explains how we may collect, use and disclose your
                personal information including to third parties.
              </small>
              <div>
                <button className={styles.ActionButton}>
                  {isLoading ? "Sending" : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const inputStyle = {
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
  background: "#F9FAFB",
  height: "3.25rem",
};

const phoneInputStyle = {
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
  background: "#F9FAFB",
  height: "3.25rem",
};

const textAreaStyle = {
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
  background: "#F9FAFB",
  height: "12rem",
};
