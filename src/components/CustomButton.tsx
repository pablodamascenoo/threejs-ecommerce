import React from "react";
import useStore from "@/Context/store";
import { getContrastingColor } from "@/config/helpers";

type Props = {
  title: string;
  type: string;
  customStyles: string;
  handleClick: () => void;
};

export default function CustomButton({
  title,
  type,
  customStyles,
  handleClick,
}: Props) {
  const color = useStore((state) => state.color);
  const generateStyle = (type: string) => {
    if (type === "filled") {
      return {
        backgroundColor: color,
        color: getContrastingColor(color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: color,
        color,
      };
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
}
