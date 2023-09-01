import Image from "next/image";
import styles from "./ContactUs.module.scss";
import CustomInput from "@/common/components/Inputs";
import CustomTextArea from "@/common/components/TextArea";

const ContactUs = () => {
  return (
    <div className={styles.ContactUsContainer}>
      <div className="row gx-5">
        <div className={`col-xs-12 col-sm-6 ${styles.LeftColumn}`}>
          <Image
            src="/contactus.svg"
            alt=""
            className={styles.LeftColumnImage}
            width={628}
            height={924}
          />
        </div>
        <div
          className={`col-xs-12 col-sm-6 col-md-12 col-lg-6  ${styles.RightColumn}`}
        >
          <h3>Contact Us</h3>
          <p>Send us a message, we reply as soon as possible.</p>
          <div className={styles.FormSection}>
            <div className="row gx-5 mb-4">
              <div className={`col-sm-6 ${styles.InputContainer}`}>
                {" "}
                <CustomInput
                  isShowLabel
                  labelText="First Name"
                  type="text"
                  customStyle={inputStyle}
                  placeholder="First Name"
                />
              </div>
              <div className={`col-sm-6 ${styles.InputContainer}`}>
                {" "}
                <CustomInput
                  isShowLabel
                  labelText="Last Name"
                  type="text"
                  customStyle={inputStyle}
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row gx-5 mb-4">
              <div className={`col-sm-6 ${styles.InputContainer}`}>
                {" "}
                <CustomInput
                  isShowLabel
                  labelText="Email"
                  type="text"
                  customStyle={inputStyle}
                  placeholder="name@example.com"
                />
              </div>
              <div className={`col-sm-6 ${styles.InputContainer}`}>
                {" "}
                <CustomInput
                  isShowLabel
                  labelText="Phone Number"
                  type="text"
                  customStyle={inputStyle}
                  placeholder="+(12) 345 6789"
                />
              </div>
            </div>

            <div>
              <CustomTextArea
                isShowLabel
                labelText="Your Message"
                customStyle={textAreaStyle}
              />
            </div>
            <small className={styles.Terms}>
              By submitting this form you agree to our{" "}
              <span className={styles.HighlightedText}>
                terms and conditions
              </span>{" "}
              and our{" "}
              <span className={styles.HighlightedText}>Privacy Policy</span>{" "}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </small>
            <div>
              <button className={styles.ActionButton}>Send Message</button>
            </div>
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

const textAreaStyle = {
  border: "1px solid #D1D5DB",
  borderRadius: "8px",
  background: "#F9FAFB",
  height: "12rem",
};
