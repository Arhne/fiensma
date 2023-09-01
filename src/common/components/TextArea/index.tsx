import styles from "./TextArea.module.scss";

interface ICustomTextArea {
  placeholder?: string;
  customStyle?: object;
  isShowLabel: boolean;
  labelText?: string;
}

const CustomTextArea = ({
  placeholder,
  customStyle,
  isShowLabel,
  labelText,
}: ICustomTextArea) => {
  return (
    <div className={styles.TextAreaContainer}>
      {isShowLabel && <label className={styles.Label}>{labelText}</label>}
      <textarea
        className={styles.TextArea}
        placeholder={placeholder}
        style={{ ...customStyle }}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
