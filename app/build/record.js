const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const ipc = electron.ipcRenderer

// const selectVideo = document.getElementById('selectVideo')

selectVideo.addEventListener('click', function(event){

    const modalPath = path.join('file://',__dirname,'picker.html')
    let win = new BrowserWindow({ frame:false,transfarent:true,width:500 , height: 700, webPreferences: {
        nodeIntegration: true}  })

        win.on('close', function() { win = null })
        win.loadURL(modalPath)

        win.openDevTools();
        win.show()
})

 