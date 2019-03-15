//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    idx: '0',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    tabbar: {},
  },
  onLoad: function () {
  }
})
