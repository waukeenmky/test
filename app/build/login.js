
const electron = require ('electron')
const path = require('path');
const url = require('url');
const remote = electron.remote
const app = electron.app;
const BrowserWindow = remote.BrowserWindow;


let win;
const dev = process.env.NODE_ENV === 'development';
const exitBtn = document.getElementById('exitBtn')

exitBtn.addEventListener('click', function(event) {
    var window = remote.getCurrentWindow();
    window.close()
})

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', () => {

    mainW = remote.getCurrentWindow();
 
  createBrowserWindow();

  mainW.close();
});

function createBrowserWindow() {

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

