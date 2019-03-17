// component/count/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 1
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
    minus(){
      if(this.properties.num <= 1){
        return
      }
      this.triggerEvent('minus')
    },
    plus(){
      this.triggerEvent('plus')
    }
  }
})
