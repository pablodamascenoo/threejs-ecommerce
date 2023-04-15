"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "@/Context/store";

import config from "@/config/config";
import { download, logoShirt } from "@/assets";
import { downloadCanvasToImage, reader } from "@/config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "@/config/constants";
import { fadeAnimation, slideAnimation } from "@/config/motion";
import {
  AIPicker,
  Tab,
  FilePicker,
  ColorPicker,
  CustomButton,
} from "@/components";

export default function Customizer() {
  const intro = useStore((state) => state.intro);
  const setIntro = useStore((state) => state.setIntro);
  const setIsFullTexture = useStore((state) => state.setIsFullTexture);
  const isFullTexture = useStore((state) => state.isFullTexture);
  const isLogoTexture = useStore((state) => state.isLogoTexture);
  const setIsLogoTexture = useStore((state) => state.setIsLogoTexture);
  const setLogoDecal = useStore((state) => state.setLogoDecal);
  const setFullDecal = useStore((state) => state.setFullDecal);

  const [file, setFile] = useState("");

  const [prompt, setPrompt] = useState("");
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  // const [activeFilterTab, setActiveFilterTab] = useState({
  //   logoShirt: true,
  //   stylishShirt: false,
  // });

  function generateTabContent() {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      case "aipicker":
        return <AIPicker />;
      default:
        break;
    }
  }

  function readFile(type: "logo" | "full") {
    reader(file).then((result) => {
      handleDecals(type, result);
    });
  }

  function handleDecals(type: "logo" | "full", result: any) {
    if (type === "logo") {
      setLogoDecal(result);
      setIsLogoTexture(true);
    } else if (type === "full") {
      setFullDecal(result);
      setIsFullTexture(true);
    }
  }

  return (
    <AnimatePresence>
      {!intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((item, index) => {
                  return (
                    <Tab
                      tab={item}
                      handleClick={() => {
                        activeEditorTab !== item.name
                          ? setActiveEditorTab(item.name)
                          : setActiveEditorTab("");
                      }}
                      key={index}
                    />
                  );
                })}
                {generateTabContent()}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute z-10 top-5 left-5" {...fadeAnimation}>
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => setIntro(true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((item, index) => {
              return (
                <Tab
                  tab={item}
                  isFilterTab
                  isActiveTab
                  handleClick={() => {
                    if (item.name === "logoShirt")
                      setIsLogoTexture(!isLogoTexture);
                    else if ((item.name = "stylishShirt"))
                      setIsFullTexture(!isFullTexture);
                  }}
                  key={index}
                />
              );
            })}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
