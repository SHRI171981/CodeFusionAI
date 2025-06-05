import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", { // dark theme
  state: () => ({
    darkMode: localStorage.getItem("theme") === "dark", // get active theme
  }),
  actions: {
    toggleTheme() {
      this.darkMode = !this.darkMode; // reverses the theme
      localStorage.setItem("theme", this.darkMode ? "dark" : "light"); // persist to localStorage

      // Apply the theme to <html>
      if (this.darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});
