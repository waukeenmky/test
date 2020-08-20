const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const ipc = electron.ipcRenderer

const record = document.getElementById('record')
const capture  = document.getElementById('capture')
const closeBtn = document.getElementById('closeBtn')

//screen recorder
record.addEventListener('click', function(event){

    const modalPath = path.join('file://',__dirname,'record.html')
    let win = new BrowserWindow({ frame:false,transfarent:true,width:600 , height: 400, webPreferences: {
        nodeIntegration: true}  })

        mainW = remote.getCurrentWindow();

        win.on('close', function() { win = null })
        // win.webContents.openDevTools();
        win.loadURL(modalPath)
        win.show()

        
  mainW.close();
})


//capture tools

capture.addEventListener('click', function(event){

    const modalPath = path.join('file://',__dirname,'capture.html')
    let win = new BrowserWindow({ frame:false,transfarent:true,width:600 , height: 400, webPreferences: {
        nodeIntegration: true}  })

        win.on('close', function() { win = null })
        win.webContents.openDevTools();
        win.loadURL(modalPath)

        win.show()
})




closeBtn.addEventListener('click', function(event){
    var window = getCurrentWindow()
    window.close()
})
