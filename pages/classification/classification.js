// pages/classification/classification.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contentHeight:0,
    classificationTitle:[{
      title:'热销爆品',
      selected:true
    },{
        title: '限时特惠',
        selected: false
      },{
        title: '每日新上',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      },{
        title: '热销爆品',
        selected: false
      },{
        title: '热销爆品',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      }, {
        title: '热销爆品',
        selected: false
      }],
    classificationGoods:[{
      imgSrc:'../../assets/img/timg5.jpg',
      title:'超大果 北美进口车厘子JJJ级 250g/盒',
      desc:'超大超甜 一口满满的幸福感',
      tips:'第二件八折',
      price:'￥29.9'
    },{
        imgSrc: '../../assets/img/timg5.jpg',
        title: '超大果 北美进口车厘子JJJ级 250g/盒',
        desc: '超大超甜 一口满满的幸福感',
        tips: '第二件八折',
        price: '￥29.9'
      }, {
        imgSrc: '../../assets/img/timg5.jpg',
        title: '超大果 北美进口车厘子JJJ级 250g/盒',
        desc: '超大超甜 一口满满的幸福感',
        tips: '第二件八折',
        price: '￥29.9'
      },{
        imgSrc: '../../assets/img/timg5.jpg',
        title: '超大果 北美进口车厘子JJJ级 250g/盒',
        desc: '超大超甜 一口满满的幸福感',
        tips: '第二件八折',
        price: '￥29.9'
      }, {
        imgSrc: '../../assets/img/timg5.jpg',
        title: '超大果 北美进口车厘子JJJ级 250g/盒',
        desc: '超大超甜 一口满满的幸福感',
        tips: '第二件八折',
        price: '￥29.9'
      },{
        imgSrc: '../../assets/img/timg5.jpg',
        title: '超大果 北美进口车厘子JJJ级 250g/盒',
        desc: '超大超甜 一口满满的幸福感',
        tips: '第二件八折',
        price: '￥29.9'
      }, {
        imgSrc: '../../assets/img/timg5.jpg',
        title: '超大果 北美进口车厘子JJJ级 250g/盒',
        desc: '超大超甜 一口满满的幸福感',
        tips: '第二件八折',
        price: '￥29.9'
      }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const query = wx.createSelectorQuery()
    query.select('#contentTop').boundingClientRect((rect) => {
      this.setData({
        contentHeight: wx.getSystemInfoSync().windowHeight - rect.height + 'px'
      })
    }).exec()

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

  },
  // 跳转搜索页面
  toSearch: function () {
    wx.navigateTo({
      url: '../search/search',
    })
  },
  //切换分类
  changeClassification:function(e){
    var currentIndex = e.currentTarget.dataset.index
    this.data.classificationTitle.forEach((item, index) => {
      var newItem = 'classificationTitle[' + index + '].selected'
      if (index === currentIndex) {
        this.setData({
          [newItem]: true
        })
      } else {
        this.setData({
          [newItem]: false
        })
      }
    })
  }
})