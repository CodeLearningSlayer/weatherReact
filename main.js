const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path');
const ipc = ipcMain;

const myApp = app;

let win;


function createWindow() {

    win = new BrowserWindow({
        width:1000,
        height:1024,
        minWidth: 960,
        opacity: 1,
        minHeight:830,
        transparent: true,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
             contextIsolation: false
            // preload: path.join(__dirname, 'preload.js')
        },
        titleBarStyle:"hidden",
    })
    win.loadURL('http://localhost:3000');

    win.once('focus', () => win.flashFrame(false))
    win.flashFrame(true)

    win.on("closed", () => win = null);

    win.on('maximize', () => {
        win.webContents.send('maximized');
    })

    win.on('unmaximize', () => {
        win.webContents.send('unmaximized');
    })

}

ipc.handle("minimize-event", () => {
    console.log("minimize");
    win.minimize();
})

ipc.handle("maximize-event", () => {
    win.restore();
    win.maximize();
})

ipc.handle("unmaximize-event", () => {
    win.restore();
    win.unmaximize();
})

ipc.handle("close-event", () => {
    myApp.quit();
})

myApp.on('ready', createWindow);

myApp.on('activate', function(){
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
})

myApp.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        myApp.quit();
    }
});