import useStore from "@/Context/store";
import { SketchPicker } from "react-color";
import { motion } from "framer-motion";
import { slideAnimation } from "@/config/motion";

export default function ColorPicker() {
  const color = useStore((state) => state.color);
  const setColor = useStore((state) => state.setColor);

  return (
    <motion.div
      className="absolute left-full ml-3"
      {...slideAnimation("left", 170)}
    >
      <SketchPicker
        color={color}
        disableAlpha
        onChange={(c) => setColor(c.hex)}
      />
    </motion.div>
  );
}
