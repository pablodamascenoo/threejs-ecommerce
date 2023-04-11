import useStore from "@/Context/store";
import { SketchPicker } from "react-color";

export default function ColorPicker() {
  const color = useStore((state) => state.color);
  const setColor = useStore((state) => state.setColor);

  console.log(color);
  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(c) => setColor(c.hex)}
      />
    </div>
  );
}
