const electron = require('electron');
// Module to control application life.
const app = electron.app;
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');
const dev = process.env.NODE_ENV === 'development';


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

/** This function will create the mainWindow */
function createWindow() {
    win = new BrowserWindow({
        width: dev ? 800 : 420,
        height: dev ? 800 : 200,
        icon: path.join(__dirname, '/res/images/logo.png'),
        frame: false,
    });
    win.setMenu(null);
    win.setResizable(false);

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
    }) + '?main');

    if (dev) {    
        win.webContents.openDevTools();
        const {
            default: installExtension,
            REACT_DEVELOPER_TOOLS,
            REDUX_DEVTOOLS,
        } = require('electron-devtools-installer'); // eslint-disable-line
        installExtension(REACT_DEVELOPER_TOOLS)
            .then(name => console.log(`Added Extension:  ${name}`))
            .catch(err => console.log('An error occurred: ', err));

        installExtension(REDUX_DEVTOOLS)
            .then(name => console.log(`Added Extension:  ${name}`))
            .catch(err => console.log('An error occurred: ', err));
    }

  
    win.on('closed', () => {

        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {

    if (mainWindow === null) {
        createWindow();
    }
});
