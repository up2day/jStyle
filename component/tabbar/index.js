// component/tabbar/index.js
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
    tabbar:{},
    showflag: true,
    curRoute:'',
    userInfo:''
    
  },
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.data.tabbar = getApp().globalData.tabbar;
      this.data.userInfo =wx.getStorageSync('userInfo') ;
      console.log(this.data.tabbar,'2')
      console.log(this.data.userInfo,'3')
      this.data.tabbar.list[2].iconPath = this.data.userInfo.avatarUrl
      // this.setData({

      // })
      let pages = getCurrentPages();
      this.data.curRoute = pages[pages.length - 1].route;
      this.setData(this.data)
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    redirectTo(e) {
      let taburl = e.currentTarget.dataset.taburl;
      let idx = e.currentTarget.dataset.idx
      if (idx == 0 && taburl == this.data.curRoute){
        this.setData({
          showflag: !this.data.showflag
        })
      }
      if (taburl == this.data.curRoute) return
      wx.redirectTo({
        url: "/" + taburl
      })
    }
  }
})
