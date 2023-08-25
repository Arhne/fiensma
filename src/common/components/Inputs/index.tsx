import styles from "./Inputs.module.scss";

interface ICustomInput {
  type: string;
  placeholder?: string;
  customStyle?: object;
}

const CustomInput = ({
  type = "text",
  placeholder,
  customStyle,
}: ICustomInput) => {
  return (
    <input
      className={styles.Input}
      type={type}
      placeholder={placeholder}
      style={{ ...customStyle }}
    />
  );
};

export default CustomInput;
