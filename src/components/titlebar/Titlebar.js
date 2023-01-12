import { useState } from "react";
import "./titlebar.scss"

const ipcRenderer = window.require("electron").ipcRenderer;

const Titlebar = () => {

    const [isMaximized, setIsMaximized] = useState();

    ipcRenderer.on("maximized", () => {
        setIsMaximized(true);
    })

    ipcRenderer.on("unmaximized", () => {
        setIsMaximized(false);
    })

    const minimizeHandler = () => {
        ipcRenderer.invoke('minimize-event');
    }

    const maximizeHandler = () => {
        console.log("maximize");
        ipcRenderer.invoke('maximize-event');
    }

    const unMaximizeHandler = () => {
        ipcRenderer.invoke('unmaximize-event');
        console.log("unmaximize");
    }

    const closeHandler = () => {
        ipcRenderer.invoke('close-event');
    }

    return (
        <div className="app-topbar topbar">
        <div className="topbar__title">
          rbtsv.weather
        </div>
        <div className="topbar__buttons">
          <button 
                id="minimizeBtn" 
                className="topBtn minimizeBtn" 
                onClick={minimizeHandler}
                />
          <button 
                id="maxResBtn"  
                className="topBtn maximizeBtn"
                
                onClick={
                    isMaximized ?
                    unMaximizeHandler
                    :
                    maximizeHandler
                }
                />
          <button 
                id="closeBtn" 
                className="topBtn closeBtn"
                onClick={closeHandler}
                />

        </div>
      </div>
    )
}

export default Titlebar;
