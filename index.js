const electron = require('electron')

const { app, BrowserWindow, Menu } = electron

const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'New Todo' },
      {
        label: 'Quit',
        accelerator: (() => {
          if (process.platform === 'darwin') {
            return 'Command+Q'
          } else {
            return 'Ctrl+Q'
          }
        })(),
        click() {
          app.quit()
        }
      }
    ]
  }
]

if (process.platform === 'darwin') {
  menuTemplate.unshift({})
}

let mainWindow

app.on('ready', () => {
  mainWindow = new BrowserWindow({})
  mainWindow.loadURL(`file://${__dirname}/main.html`)

  const mainMenu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(mainMenu)
})
