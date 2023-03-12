Page({
  data: {
    titleHeight: 0,
    stationList: [
      {
      name: '光谷国际总部换电站',
      address: '青山区友谊大道893-1号',
      price: '0.25',
      excharge: '5',
      distance: '1.2km',
      status: 1
    },
    {
      name: '光谷国际总部换电站',
      address: '青山区友谊大道893-1号',
      price: '0.25',
      excharge: '2',
      distance: '1.2km',
      status: 1
    },{
      name: '曙光星城A区站',
      address: '青山区友谊大道893-1号',
      price: '0.25',
      excharge: '0',
      distance: '1.2km',
      status: 0
    },{
      name: '曙光星城A区站',
      address: '青山区友谊大道893-1号',
      price: '0.25',
      excharge: '1',
      distance: '1.2km',
      status: 0
    }]
  },
  onLoad() {
    let systemInfo = wx.getSystemInfoSync();
    let pxToRpxScale = 750 / systemInfo.windowWidth; //px转换到rpx的比例
    let fontSize = systemInfo.fontSizeSetting * pxToRpxScale;// 用户设置的字体大小
    let statuHeight = systemInfo.statusBarHeight * pxToRpxScale; //状态栏的高度
    let titleHeight = 44 * pxToRpxScale; //导航栏高度，这个一般是固定的
    this.setData({
      titleHeight
    })
  },
  navListTap() {
    wx.showToast({
      title: '暂未开放！',
      icon: 'none',
      duration: 2000
    })
  }
})

