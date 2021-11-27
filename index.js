/* eslint-disable */
export default {
  install (app, options = {}) {
    try {
      const indexName = options.indexName || 'data-index'
      const oldFun = app.prototype._l
      const newFun = function () {
        const arg = arguments
        const oldParams = arg[1]
        arg[1] = function () {
          const result = oldParams(...arguments)
          const attrs = result.data.attrs || {}
          attrs[indexName] = arguments[1]
          result.data.attrs = attrs
          return result
        }
        return oldFun(...arg)
      }
      app.prototype._l = newFun
    } catch (e) {
      console.error('Hook Vue v-for Filed：', e)
    }
  }
}
