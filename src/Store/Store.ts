import create from "zustand";

//ts를 사용하기때문에 타입지정이 필요.
interface sidebarState {
  sidebarOn: boolean;
  sideToggle: () => void;
}

interface choiceState {
  choice: boolean;
  choiceMenu: () => void;
  choiceReview: () => void;
}

export const useSideStore = create<sidebarState>((set) => ({
  sidebarOn: false,
  sideToggle: () => set((state) => ({ sidebarOn: !state.sidebarOn })),
  //   sideToggle() {
  //     set((state) => ({ sidebarOn: !state.sidebarOn }));
  //   },
}));

export const useChoiceStore = create<choiceState>((set) => ({
  choice: true,
  choiceMenu: () => set(() => ({ choice: true })),
  choiceReview: () => set(() => ({ choice: false })),
}));
