//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    tabbar: {
      color: "#242424",
      selectedColor: "#fa8582",
      backgroundColor: "#ffffff",
      borderStyle: "#d7d7d7",
      list: [
        {
          pagePath: "pages/index/index",
          text: "生活",
          iconPath: "/assets/images/icon-life.png",
          selectedIconPath: "/assets/images/icon-life-on.png",
          selected: true
        },
        {
          pagePath: "pages/travel/list",
          text: "旅行",
          iconPath: "/assets/images/icon-travel.png",
          selectedIconPath: "/assets/images/icon-travel-on.png",
          selected: false
        },
        {
          pagePath: "pages/jian/jian",
          text: "",
          iconPath: "/assets/images/icon-travel.png",
          selectedIconPath: "/assets/images/icon-travel-on.png",
          selected: false
        },
        {
          pagePath: "pages/target/target",
          text: "小目标",
          iconPath: "/assets/images/icon-lucky.png",
          selectedIconPath: "/assets/images/icon-lucky-on.png",
          selected: false
        },
        {
          pagePath: "pages/luck/luck",
          text: "小确幸",
          iconPath: "/assets/images/icon-lucky.png",
          selectedIconPath: "/assets/images/icon-lucky-on.png",
          selected: false
        }
      ],
      position: "bottom"
    },
  },

})