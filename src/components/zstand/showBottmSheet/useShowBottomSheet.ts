import {create} from 'zustand';

interface ShowBottomSheetState {
  isMoreBottomSheetVisible: boolean;
  setIsMoreBottomSheetVisible: (state: boolean) => void;
}

export const useShowBottomSheet = create<ShowBottomSheetState>(set => ({
  isMoreBottomSheetVisible: false,
  setIsMoreBottomSheetVisible: state => set({isMoreBottomSheetVisible: state}),
}));
