import { Application } from 'pixi.js'

var app = new Application(640, 600, { backgroundColor: 0x1099bb })
document.body.style.margin = '0'
document.body.appendChild(app.view)

export default app
