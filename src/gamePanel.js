import app from './app'
import { Text } from 'pixi.js'

export default {
  show () {
    var text = new Text('游戏面板')
    text.x = 280
    text.y = 100
    app.stage.addChild(text)
  },
  app
}
