require("dotenv").config();
const electron = require("electron");
const ipcRenderer = require("electron").ipcRenderer;

// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const StartWatcher = path => {
  var chokidar = require("chokidar");

  var watcher = chokidar.watch(path, {
    ignored: "/[/\\]./",
    persistent: true
  });

  // Declare the listeners of the watcher
  watcher.on("add", function(path) {
     console.log("File", path, "has been added");
     ipcRenderer.send("new_file", path);
  });
};

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: true,
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  mainWindow.loadURL("http://localhost:3000");

  if (process.env.WATCH_FOLDER_PATH) {
    StartWatcher(process.env.WATCH_FOLDER_PATH);
    console.log(process.env.WATCH_FOLDER_PATH);
  }
  
  


  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
