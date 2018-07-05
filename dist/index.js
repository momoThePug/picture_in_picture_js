"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Electron = require("electron");
const Settings_1 = require("./Settings");
const path = require('path');
const url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
class MY_WINDOW {
    static createWindow() {
        // Create the browser window.
        MY_WINDOW._win = new Electron.BrowserWindow({ frame: true });
        MY_WINDOW._win.setMenu(null);
        Settings_1.loadServerSettings(MY_WINDOW._win);
        // and load the index.html of the app.
        MY_WINDOW._win.loadURL(url.format({
            hostname: "localhost",
            port: "3000",
            protocol: 'http:',
            slashes: true
        }));
        // Open the DevTools.
        // MY_WINDOW._win.webContents.openDevTools()
        // Emitted when the window is closed.
        MY_WINDOW._win.on('closed', () => {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            MY_WINDOW._win = null;
        });
        MY_WINDOW._win.on("resize", () => {
            Settings_1.saveServerSettings(MY_WINDOW._win);
        });
        MY_WINDOW._win.on("move", () => {
            Settings_1.saveServerSettings(MY_WINDOW._win);
        });
    }
}
MY_WINDOW._win = null;
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
Electron.app.on('ready', MY_WINDOW.createWindow);
// Quit when all windows are closed.
Electron.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        Electron.app.quit();
    }
});
Electron.app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (MY_WINDOW._win === null) {
        MY_WINDOW.createWindow();
    }
});
