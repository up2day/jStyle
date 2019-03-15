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
    curRoute:''
    
  },
  lifetimes: {
    attached() {
      // console.log(1)
      // this.changeTabBar()
      // 在组件实例进入页面节点树时执行
      this.data.tabbar = getApp().globalData.tabbar;
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
    // changeTabBar() {
    //   var _curPageArr = getCurrentPages();
    //   console.log(_curPageArr,'w')
    //   var _curPage = _curPageArr[_curPageArr.length - 1];
    //   var _pagePath = _curPage.__route__;
    //   if (_pagePath.indexOf('/') != 0) {
    //     _pagePath = '/' + _pagePath;
    //   }
    //   var tabBar = this.data.tabbar;
    //   for (var i = 0; i < tabBar.list.length; i++) {
    //     console.log(_pagePath + '--' + tabBar.list[i].pagePath)
    //     tabBar.list[i].selected = false;
    //     if (tabBar.list[i].pagePath == _pagePath) {
    //       tabBar.list[i].selected = true;//根据页面地址设置当前页面状态  
    //     }
    //   }
    //   this.triggerEvent('changebar')
    //   _curPage.setData({
    //     tabbar: tabBar
    //   });
    // }
    redirectTo(e) {
      let taburl = e.currentTarget.dataset.taburl;
      if (taburl == this.data.curRoute) return
      wx.redirectTo({
        url: "/" + taburl
      })
    },
  }
})
