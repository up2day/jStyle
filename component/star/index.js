// component/star/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    routineFlag: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    routine(){
      this.triggerEvent('breakfast', this.properties.routineFlag)
    }
  }
})
