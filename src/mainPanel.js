import app from './app'
import { Sprite, Text } from 'pixi.js'
import image from './image'
import gamePanel from './gamePanel'

var text = new Text('主面板')
text.x = 280
text.y = 100

var sprite = Sprite.fromImage(image.ingressPng)
sprite.anchor.set(0.5)
sprite.width = 100
sprite.height = 100
sprite.x = app.renderer.width / 2
sprite.y = app.renderer.height / 2

sprite.interactive = true
sprite.buttonMode = true
sprite.on('pointerdown', () => {
  app.stage.removeChildren()
  gamePanel.show()
})

app.ticker.add(function (delta) {
  sprite.rotation += 0.05 * delta
})

export default {
  show () {
    app.stage.addChild(text, sprite)
  }
}
