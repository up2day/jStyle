// pages/life/clothes/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 1,
        title: '文艺范纯棉连衣裙女中长款夏季短袖c纯色女',
        src: '../../../../assets/productimg/pic-clothes01.png',
        price:'69.90',
        path: ''
      },
      {
        id: 2,
        title: '阿迪达斯男鞋女鞋2019新款正品春季三叶草金标贝壳头板鞋小白鞋子',
        src: '../../../../assets/productimg/pic-clothes02.png',
        price: '300.00',
        path: ''
      }
    ],
    array: ['全部', '衣柜', '草地'],
    objectArray: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '衣柜'
      },
      {
        id: 2,
        name: '草地'
      }
    ],
    index: 0

  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})