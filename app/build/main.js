const { app, BrowserWindow, Menu } = require('electron')
const path = require('path');

let win

function createWindow () {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 60,
    height: 400,
    backgroundColor: "#ffffff",
    transparent: true, 
   frame: false,
    resizable: true,
    dragable:true,
    backgroundColor: '#2a333c',
    x: 1270,
    y:100,
    
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile(path.join(__dirname, 'picker.html'));
  // win.loadFile('picker.html')
  win.isMovable(true)

  // Open the DevTools.
  // win.webContents.openDevTools()
}
Menu.setApplicationMenu(null)

//win.setResizable(false);
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
