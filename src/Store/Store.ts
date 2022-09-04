import create from "zustand";

//ts를 사용하기때문에 타입지정이 필요.
interface SelectContentState {
  sidebarOn: boolean;
  sideToggle: () => void;
}

export const useSideStore = create<SelectContentState>((set) => ({
  sidebarOn: false,
  sideToggle: () => set((state) => ({ sidebarOn: !state.sidebarOn })),
  //   sideToggle() {
  //     set((state) => ({ sidebarOn: !state.sidebarOn }));
  //   },
}));
