//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    idx: '0', // 底部导航index传值
    foodPicker: null, // 选择的food下拉值
    // 列表数组
    list: [
      {
        id: 1,
        src: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=548de62ff6246b607f0eb576dbf91a35/77094b36acaf2edd4948f1958d1001e939019315.jpg',
        title: '皮蛋瘦肉粥',
        count: 14,
        desc: '材料：皮蛋1个，瘦肉100克，大米200克，小葱酌量，香菜酌量，花生油酌量，盐酌量。',
        num: 21,
        routine: '1', // 1表示例行早餐，0表示不是例行早餐
      },
      {
        id: 2,
        src: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=548de62ff6246b607f0eb576dbf91a35/77094b36acaf2edd4948f1958d1001e939019315.jpg',
        title: '煎鸡蛋',
        count: 2,
        desc: '材料：鸡蛋1个，香菜酌量，花生油酌量，生抽酌量。',
        num: 1,
        routine: '0', // 1表示例行早餐，0表示不是例行早餐
      }
    ], 
  },
  onLoad: function () {},
  // 获取食物下拉
  getFoodPicker(e){
    this.data.foodPicker = e.detail
    console.log(this.data.foodPicker)//获取选择的食物下拉
  },
  // 添加新食谱
  addRecipe(){
    console.log('跳转添加新食谱')
  },
  // 删除食谱
  deleteItem(e){
    let _this = this
    wx.showModal({
      title: '提示',
      content: '确认删除吗？',
      success(res) {
        if (res.confirm) {
          let id = e.currentTarget.dataset.id
          _this.data.list.forEach((item, index) => {
            if (item.id == id) {
              _this.data.list.splice(index, 1)
            }
          })
          _this.setData({
            list: _this.data.list
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 修改是否是例行早餐
  changeRoutine(e){
    let _this = this
    wx.showModal({
      title: '提示',
      content: '确认设置吗？',
      success(res) {
        if (res.confirm) {
          let routine = e.detail == 0 ? 1 : 0
          let idx = e.currentTarget.dataset.idx
          _this.data.list.forEach((item, index) => {
            if (index == idx) {
              item.routine = routine
            }
          })
          _this.setData({
            list: _this.data.list
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 点击做饭
  cook(){
    console.log('做饭弹层')
  },
  // 点击订餐
  dinner(){
    console.log('订餐弹层')
  }
})
