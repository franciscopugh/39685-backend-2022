import './botonDarkMode.css'
import { useDarkModeContext } from '../../../context/DarkModeContext.js';
export const BotonDarkMode = () => {

    const { toggleDarkMode } = useDarkModeContext()
    return (

        <div className="theme-switch-wrapper">
            <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" onInput={() => toggleDarkMode()} id="checkbox" />
                <div className="slider round" />
            </label>
        </div>

    );
}