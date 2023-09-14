import styles from "./TextArea.module.scss";

interface ICustomTextArea {
  placeholder?: string;
  customStyle?: object;
  isShowLabel: boolean;
  labelText?: string;
  errors?: any;
}

const CustomTextArea = ({
  placeholder,
  customStyle,
  isShowLabel,
  labelText,
  errors,
  ...props
}: ICustomTextArea) => {
  return (
    <div className={styles.TextAreaContainer}>
      {isShowLabel && <label className={styles.Label}>{labelText}</label>}
      <textarea
        className={styles.TextArea}
        placeholder={placeholder}
        style={{ ...customStyle }}
        {...props}
      ></textarea>
      {errors?.map((error: any, i: any) => (
        <small className="text-danger mt-2" key={i}>
          {error}
        </small>
      ))}
    </div>
  );
};

export default CustomTextArea;
