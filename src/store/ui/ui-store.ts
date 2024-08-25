import { create } from "zustand";

interface State {
    // Sidebar state
    isSidebarOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    // Dark mode state
    isDarkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

export const useUIStore = create<State>()((set) => ({
    isSidebarOpen: false,
    isDarkMode: false,

    openSideMenu: () => set({ isSidebarOpen: true }),
    closeSideMenu: () => set({ isSidebarOpen: false }),
    setDarkMode: (value) => set({ isDarkMode: value }),
}));
