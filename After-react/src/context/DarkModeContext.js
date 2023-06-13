import { useState, createContext, useContext } from "react";

const DarkModeContext = createContext() //Creo mi contexto

export const useDarkModeContext = () => useContext(DarkModeContext) //Creo una funcion para poder consultar mi contexto

export const DarkModeProvider = (props) => { //Forma de proveer el contexto en mi app, puede recibir props si es necesario

    const [darkMode, setDarkMode] = useState(false) //Defino el valor inicial de DarkMode

    //Funciones para modificar mi state

    const toggleDarkMode = () => {
        setDarkMode(!darkMode) //Si estaba en V lo paso a F y viceversa

        //Agregacion de class de css por temas de bootswatch
        if (!darkMode) { //!darkMode por consulta de la modificacion
            document.body.classList.add('darkMode')
        } else {
            document.body.classList.remove('darkMode')
        }
    }
    //Agrego que funciones y valores van a ser exportados
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}