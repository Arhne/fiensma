import styles from "./Inputs.module.scss";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

interface ICustomInput {
  type: string;
  placeholder?: string;
  customStyle?: object;
  isShowLabel: boolean;
  labelText?: string;
  errors?: any;
}

interface ICustomPhoneInput {
  placeholder?: string;
  customStyle?: object;
  isShowLabel: boolean;
  labelText?: string;
  errors?: any;
  onChange?: any;
}

export const CustomInput = ({
  type = "text",
  placeholder,
  customStyle,
  isShowLabel,
  labelText,
  errors,
  ...props
}: ICustomInput) => {
  return (
    <div className={styles.InputContainer}>
      {isShowLabel && <label className={styles.Label}>{labelText}</label>}
      <input
        className={styles.Input}
        type={type}
        placeholder={placeholder}
        style={{ ...customStyle }}
        {...props}
      />
      {errors?.map((error: any, i: any) => (
        <small className="d-block text-danger mt-2" key={i}>
          {error}
        </small>
      ))}
    </div>
  );
};

export const CustomPhoneInput = ({
  placeholder,
  customStyle,
  isShowLabel,
  labelText,
  errors,
  onChange,
  ...props
}: ICustomPhoneInput) => {
  return (
    <div className={styles.InputContainer}>
      {isShowLabel && <label className={styles.Label}>{labelText}</label>}

      <PhoneInput
        className={`${styles.Input} ${styles.PhoneInput}`}
        placeholder={"+234"}
        international
        defaultCountry="NG"
        onChange={(e: any | undefined) => onChange(e)}
        style={{ ...customStyle }}
        {...props}
      />
      {errors?.map((error: any, i: any) => (
        <small className="d-block text-danger mt-2" key={i}>
          {error}
        </small>
      ))}
    </div>
  );
};
