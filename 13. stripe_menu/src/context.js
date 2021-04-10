import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenu] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location, setLocation] = useState({})
  const [page,setPage] = useState({page:'',links:[]})

  const openSubmenu = (text,coordinate) => {
      const page = sublinks.find((link)=> link.page===text)
    //   console.log("My page",page)
      setPage(page)
      setLocation(coordinate)
    setIsSubmenu(true);
  };

  const closeSubmenu = () => {
    setIsSubmenu(false);
  };
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        isSidebarOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
