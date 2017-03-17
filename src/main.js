import {
  autoDetectRenderer,
  Container
} from 'pixi.js'

// Create the renderer
var renderer = autoDetectRenderer(640, 1050)

// Add the canvas to the HTML document
document.body.appendChild(renderer.view)

// Create a container object called the `stage`
var stage = new Container()

renderer.view.style.position = 'absolute'
renderer.view.style.display = 'block'
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)

// Tell the `renderer` to `render` the `stage`
renderer.render(stage)
