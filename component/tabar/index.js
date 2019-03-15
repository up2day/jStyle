// component/tabar/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    currentIndex: {
      type: String,
      value: '0'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showFlag: true,
    hasUserInfo: false,
    avatarUrl: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=950335190,3492977720&fm=173&app=25&f=JPEG?w=218&h=146&s=4F854986C85A3CDE19E266A80300E00C',
    list: [
      {
        label: '导航',
        src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=950335190,3492977720&fm=173&app=25&f=JPEG?w=218&h=146&s=4F854986C85A3CDE19E266A80300E00C',
        selected: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=48227114,3405896183&fm=173&app=49&f=JPEG?w=218&h=146&s=FD934B9A0073A99A6024F111030070ED',
        path: '/pages/index/index'
      },
      {
        label: '导航',
        src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=950335190,3492977720&fm=173&app=25&f=JPEG?w=218&h=146&s=4F854986C85A3CDE19E266A80300E00C',
        selected: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=48227114,3405896183&fm=173&app=49&f=JPEG?w=218&h=146&s=FD934B9A0073A99A6024F111030070ED',
        path: '/pages/logs/logs'
      },
      {
        label: '导航',
        src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=950335190,3492977720&fm=173&app=25&f=JPEG?w=218&h=146&s=4F854986C85A3CDE19E266A80300E00C',
        selected: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=48227114,3405896183&fm=173&app=49&f=JPEG?w=218&h=146&s=FD934B9A0073A99A6024F111030070ED',
        path: '/pages/mine/index/index'
      },
      {
        label: '导航',
        src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=950335190,3492977720&fm=173&app=25&f=JPEG?w=218&h=146&s=4F854986C85A3CDE19E266A80300E00C',
        selected: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=48227114,3405896183&fm=173&app=49&f=JPEG?w=218&h=146&s=FD934B9A0073A99A6024F111030070ED',
        path: ''
      },
      {
        label: '导航',
        src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=950335190,3492977720&fm=173&app=25&f=JPEG?w=218&h=146&s=4F854986C85A3CDE19E266A80300E00C',
        selected: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=48227114,3405896183&fm=173&app=49&f=JPEG?w=218&h=146&s=FD934B9A0073A99A6024F111030070ED',
        path: ''
      }
    ]
  },
  lifetimes: {
    attached() {
      console.log(this.properties.currentIndex)
      
      if (app.globalData.userInfo) {
        this.setData({
          avatarUrl: app.globalData.userInfo.avatarUrl,
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      } else if (this.data.canIUse) {
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        app.userInfoReadyCallback = res => {
          this.setData({
            avatarUrl: app.globalData.userInfo.avatarUrl,
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      } else {
        // 在没有 open-type=getUserInfo 版本的兼容处理
        wx.getUserInfo({
          success: res => {
            app.globalData.userInfo = res.userInfo
            this.setData({
              avatarUrl: app.globalData.userInfo.avatarUrl,
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
      }
    },
    detached(){
      // wx.clearStorageSync('index')
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 获取头像
      getUserInfo(){
        let that = this
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
              wx.getUserInfo({
                success: res => {
                  console.log(res,'res')
                  // 可以将 res 发送给后台解码出 unionId
                  that.setData({
                    hasUserInfo: true,
                    avatarUrl: res.userInfo.avatarUrl,
                    list: that.data.list
                  })
                  console.log(res.userInfo)
                  console.log(app)
                  app.globalData.userInfo = res.userInfo
                  console.log(app.globalData)

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
    navbar(e){
      console.log(e)
      let idx = e.currentTarget.dataset.idx
      wx.setStorageSync('index', idx)
      let path = e.currentTarget.dataset.path
      var pages = getCurrentPages()
      let route = pages[0].route
      if (idx == 0 && path.indexOf(route) > -1){
        this.setData({
          showFlag: !this.data.showFlag
        })
      }
      if (idx == 2 && !this.data.hasUserInfo){
        return
      }
      if(path.indexOf(route) > -1) {
        return
      }
      wx.redirectTo({
        url: path,
      })
    }
  }
})
