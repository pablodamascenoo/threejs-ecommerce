"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useStore from "@/Context/store";

import config from "@/config/config";
import { download } from "@/assets";
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
                  return <Tab tab={item} handleClick={() => {}} key={index} />;
                })}
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
                  isActiveTab=""
                  handleClick={() => {}}
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
