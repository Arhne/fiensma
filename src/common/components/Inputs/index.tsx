import styles from "./Inputs.module.scss";

interface ICustomInput {
  type: string;
  placeholder?: string;
  customStyle?: object;
  isShowLabel: boolean;
  labelText?: string;
  errors?: any;
}

const CustomInput = ({
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

export default CustomInput;
