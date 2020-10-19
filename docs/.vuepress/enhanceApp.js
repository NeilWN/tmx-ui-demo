// import tmxUI from '../../src/index.js'
import {Button, TmxCard} from '../../src/index.js'
import "../../src/styles/index.less"

const components = [
  Button,
  TmxCard
]

export default ({
  Vue,
  options,
  router
}) => {
  // Vue.use(tmxUI)
  Vue.component('Button', Button)
  Vue.component('TmxCard', TmxCard)
}
