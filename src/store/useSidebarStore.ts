import create from "zustand";

type SidebarStore = {
  isOpen: boolean;
  position: number;
  onClickToggle: () => void;
};

export const useSidebarStore = create<SidebarStore>((set) => ({
  isOpen: false,
  position: -320,
  onClickToggle: () =>
    set((state) => {
      if (state.position < 0) {
        return {
          ...state,
          isOpen: true,
          position: 0,
        };
      }
      return {
        ...state,
        isOpen: false,
        position: -320,
      };
    }),
}));
