// component/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    xuhao: {
      type: String,
      value: "0"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tabbar: {
      color: "#242424",
      selectedColor: "#fa8582",
      backgroundColor: "#ffffff",
      borderStyle: "#d7d7d7",
      list: [
        {
          pagePath: "/pages/index/index",
          text: "生活",
          iconPath: "../../assets/images/tab1.png",
          selectedIconPath: "../../assets/images/tab1_cur.png",
          selected: true
        },
        {
          pagePath: "/pages/travel/travel",
          text: "旅行",
          iconPath: "../../assets/images/tab_new.png",
          selectedIconPath: "../../assets/images/tab_new.png",
          selected: false
        },
        {
          pagePath: "/pages/jian/jian",
          text: "",
          iconPath: "../../assets/images/tab4.png",
          selectedIconPath: "../../assets/images/tab4_cur.png",
          selected: false
        },
        {
          pagePath: "/pages/target/target",
          text: "小目标",
          iconPath: "../../assets/images/tab_new.png",
          selectedIconPath: "../../assets/images/tab_new.png",
          selected: false
        },
        {
          pagePath: "/pages/luck/luck",
          text: "小确幸",
          iconPath: "../../assets/images/tab_new.png",
          selectedIconPath: "../../assets/images/tab_new.png",
          selected: false
        }
      ],
      position: "bottom"
    },
    
  },
  // lifetimes: {
  //   attached() {
  //     console.log(1)
  //     this.changeTabBar()
  //     // 在组件实例进入页面节点树时执行
  //   },
  //   detached() {
  //     // 在组件实例被从页面节点树移除时执行
  //   },
  // },
  attached() {
    this.changeTabBar()
    // 在组件实例进入页面节点树时执行
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeTabBar() {
      var _curPageArr = getCurrentPages();
      var _curPage = _curPageArr[_curPageArr.length - 1];
      var _pagePath = _curPage.__route__;
      if (_pagePath.indexOf('/') != 0) {
        _pagePath = '/' + _pagePath;
      }
      var tabBar = this.data.tabbar;
      for (var i = 0; i < tabBar.list.length; i++) {
        console.log(_pagePath + '--' + tabBar.list[i].pagePath)
        tabBar.list[i].selected = false;
        if (tabBar.list[i].pagePath == _pagePath) {
          tabBar.list[i].selected = true;//根据页面地址设置当前页面状态  
        }
      }
      this.triggerEvent('changebar')
      _curPage.setData({
        tabbar: tabBar
      });
    }
  }
})
