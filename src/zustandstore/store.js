// store.js
import create from "zustand";

const useStore = create((set) => ({
  clicked: false,
  setIsClicked: (data) => set({ clicked: data }),
}));

export default useStore;
