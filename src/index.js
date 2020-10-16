// import style
import Button from './components/button'
import TmxCard from './components/card'

const components = {
  Button,
  TmxCard
}

const install = function(Vue, options = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
  })
}

export default install
