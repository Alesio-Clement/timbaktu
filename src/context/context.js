import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getStorageTheme = (themeState) => {
  if (localStorage.getItem(themeState)) {
    themeState = JSON.parse(localStorage.getItem(themeState));
  } else {
    if (themeState === "theme_color") {
      themeState = "color-4";
    }
    if (themeState === "theme_dark") {
      themeState = true;
    }
    if (themeState === "glass_effect") {
      themeState = true;
    }
  }

  return themeState;
};

export const AppProvider = ({ children }) => {
  // states
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [isStyleSwitcher, setIsStyleSwitcher] = useState(false);
  const [darkMode, setDarkMode] = useState(getStorageTheme("theme_dark"));
  const [themeColor, setThemeColor] = useState(getStorageTheme("theme_color"));
  const [glassMode, setGlassMode] = useState(getStorageTheme("glass_effect"));

  useEffect(() => {
    //set dark mode
    if (darkMode) document.body.className = "dark-mode";
    if (!darkMode) document.body.className = "";

    // set color theme
    document.documentElement.className = themeColor;

    // set glass effect
    if (glassMode) document.body.classList.add("glass-effect");
    if (!glassMode) document.body.classList.remove("glass-effect");

    localStorage.setItem("theme_dark", JSON.stringify(darkMode));
    localStorage.setItem("theme_color", JSON.stringify(themeColor));
    localStorage.setItem("glass_effect", JSON.stringify(glassMode));
  }, [themeColor, darkMode, glassMode]);

  // handlers

  const openSidebar = () => {
    setIsSidebar(true);
  };
  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const toggleSubmenu = () => {
    setIsSubmenu((isSubmenu) => !isSubmenu);
  };
  const toggleStyleSwitcher = () => {
    setIsStyleSwitcher((isStyleSwitcher) => !isStyleSwitcher);
  };

  const colorHandler = (e) => {
    setThemeColor(e.target.dataset.theme_color);
  };
  const darkModeHandler = (e) => {
    setDarkMode(e.target.checked);
  };

  const glassModeHandler = (e) => {
    setGlassMode(e.target.checked);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebar,
        isSubmenu,
        openSidebar,
        closeSidebar,
        toggleSubmenu,
        toggleStyleSwitcher,
        isStyleSwitcher,
        colorHandler,
        themeColor,
        darkModeHandler,
        glassModeHandler,
        darkMode,
        glassMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
