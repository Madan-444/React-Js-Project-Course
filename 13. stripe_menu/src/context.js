import React, { useState, useContext } from 'react'
import sublinks from './data'
console.log('The sublinsk',sublinks)

const AppContext = React.createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen,setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen,setIsSubmenuOpen] = useState(false)
    const [location,setLocation] = useState({})
    const [page,setPage] = useState({page:'',links:[]})

    const openSidebar = ()=> {
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=> {
        setIsSidebarOpen(false)
    }
    const openSubmenu = (text,coordinates)=> {
        console.log('The text from navbar',text)
        setLocation(coordinates)
        const page = sublinks.find((link)=> link.page=== text )
        console.log('The page from context',page)
        setPage(page)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = ()=> {
        setIsSubmenuOpen(false)
    }

    console.log('The isSubmenu:',isSubmenuOpen)
    return <AppContext.Provider value= {{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        location,
        page
    }} > {children} </AppContext.Provider>
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

