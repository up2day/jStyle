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
    val: 1
  },
  lifetimes: {
    attached(){
      this.setData({
        val: this.properties.num
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    minus(){
      if(this.properties.num <= 1){
        return
      }
      this.properties.num--
      this.setData({
        val: this.properties.num
      })
    },
    plus(){
      this.properties.num++
      this.setData({
        val: this.properties.num
      })
    }
  }
})
