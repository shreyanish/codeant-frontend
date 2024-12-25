import Image from "next/image";

import "./styles.scss";

interface PrimaryButtonProps {
  imageSource: string;
  text: string;
  onClick: () => void;
  size: "sm" | "md" | "lg";
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <div
      className="primary-parent"
      onClick={props.onClick}
      style={{
        gap: props.size == "md" ? "12px" : "8px",
        fontSize: props.size == "lg" ? "20px" : props.size == "md" ? "16px" : "14px",
        lineHeight: props.size == "lg" ? "28px" : props.size == "md" ? "24px" : "20px",
        fontWeight: props.size == "md" ||  props.size == "lg" ? "600" : "400",
        width: props.size == "lg" ? "50%" : "auto",
        justifyContent: props.size == "lg" ? "center" : "flex-start",
      }}
    >
      {props.imageSource != "" ? (
        <Image
          className="primary-image"
          src={props.imageSource}
          alt=""
          width={props.size == "md" ? 20 : 18}
          height={props.size == "md" ? 18 : 16}
        ></Image>
      ) : null}
      <p className="primary-text">{props.text}</p>
    </div>
  );
};

export default PrimaryButton;
