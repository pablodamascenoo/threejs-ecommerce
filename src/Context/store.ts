import { create } from "zustand";

type State = {
  intro: boolean;
  color: string;
  isLogoTexture: boolean;
  isFullTexture: boolean;
  logoDecal: string;
  fullDecal: string;
};

type Actions = {
  setIntro: (bool: boolean) => void;
  setColor: (color: string) => void;
  setIsLogoTexture: (bool: boolean) => void;
  setIsFullTexture: (bool: boolean) => void;
  setLogoDecal: (img: string) => void;
  setFullDecal: (img: string) => void;
};

const initialState: State = {
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
};

const useStore = create<State & Actions>((set, get) => ({
  ...initialState,
  setIntro: (bool: boolean) => {
    set({ intro: bool });
  },
  setColor: (color: string) => {
    set({ color });
  },
  setIsLogoTexture: (bool: boolean) => {
    set({ isLogoTexture: bool });
  },
  setIsFullTexture: (bool: boolean) => {
    set({ isFullTexture: bool });
  },
  setLogoDecal: (img: string) => {
    set({ logoDecal: img });
  },
  setFullDecal: (img: string) => {
    set({ fullDecal: img });
  },
}));

export default useStore;
