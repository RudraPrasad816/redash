import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(sessionStorage.getItem("theme") ? sessionStorage.getItem("theme")==="light" ? "dark" : "light" : "light")

    if (theme !== "light") {
        document.documentElement.setAttribute('data-theme', 'dark')
    }
    function setNewTheme(isLight) {
        if (isLight) {
            document.documentElement.removeAttribute('data-theme', 'dark');
            setTheme("light")
            sessionStorage.setItem("theme", theme);
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            setTheme("dark")
            sessionStorage.setItem("theme", theme);
        }

    }

    return (
        <ThemeContext.Provider value={{ theme, setNewTheme }} >
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider }