import useStore from "@/Context/store";
import { StaticImageData } from "next/image";

type Props = {
  tab: { name: string; icon: StaticImageData };
  isFilterTab?: boolean;
  isActiveTab?: boolean;
  handleClick: () => void;
};

export default function Tab({
  tab,
  isFilterTab = false,
  isActiveTab = false,
  handleClick,
}: Props) {
  const color = useStore((state) => state.color);

  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };

  return (
    <div
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      } `}
      onClick={handleClick}
      style={activeStyles}
    >
      <img src={tab.icon.src} alt={tab.name} />
    </div>
  );
}
