// pages/details/details.js
let globalData = getApp().globalData
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/img/timg.jpg',
      '../../assets/img/timg1.jpg',
      '../../assets/img/timg2.jpg',
      '../../assets/img/timg3.jpg'
    ],
    currentIndex:1,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    goodsDetail:true,
    amount: globalData.goodsAmount
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

  },
  swiperChange: function (e) {
    var that = this
    that.setData({
      currentIndex: e.detail.current + 1
    })
  },
  tabChange:function(e){
    var that = this
    that.setData({
      goodsDetail: e.currentTarget.dataset.status
    })
   
  },
  addGoods: function () {
    globalData.goodsAmount++
    let num = this.data.amount
    num++
    this.setData({
      amount: num
    })
  }
})