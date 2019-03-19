// component/foodpicker/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    multiArray: [['全部', '午晚餐', '早餐'], ['全部', '流食', '谷物', '其他']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '全部'
        },
        {
          id: 1,
          name: '午晚餐'
        },
        {
          id: 2,
          name: '早餐'
        }
      ], [
        {
          id: 0,
          name: '全部'
        },
        {
          id: 1,
          name: '流食'
        },
        {
          id: 2,
          name: '谷物'
        },
        {
          id: 3,
          name: '其他'
        },
      ]
    ],
    multiIndex: [0, 0],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindMultiPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
      this.triggerEvent('picker', this.data.multiIndex)
    },
    bindMultiPickerColumnChange(e) {
      console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
      const data = {
        multiArray: this.data.multiArray,
        multiIndex: this.data.multiIndex
      }
      data.multiIndex[e.detail.column] = e.detail.value
      switch (e.detail.column) {
        case 0:
          switch (data.multiIndex[0]) {
            case 0:
              data.multiArray[1] = ['全部', '流食', '谷物', '其他']
              break
            case 1:
              data.multiArray[1] = ['全部', '流食', '谷物', '其他']
              break
            case 2:
              data.multiArray[1] = ['全部', '流食', '谷物', '其他']
              break
          }
          data.multiIndex[1] = 0
          break
      }
      console.log(data.multiIndex) // 选择的结果id
      // this.setData(data)
    },
  }
})
