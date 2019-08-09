// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderTabs:[
      {
        text:'全部',
        selected:true
      },
      {
        text: '待付款',
        selected: false
      },
      {
        text: '待发货',
        selected: false
      },
      {
        text: '配送中',
        selected: false
      }, {
        text: '待评价',
        selected: false
      }
    ],
    account:0
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
  changeOrdderTab:function(e){
    var currentIndex = e.currentTarget.dataset.index
    this.data.orderTabs.forEach((item,index)=>{
      var newItem = 'orderTabs[' + index + '].selected'
      if (index === currentIndex){
        this.setData({
          [newItem]:true
        })
      }else{
        this.setData({
          [newItem]: false
        })
      }
    })
  }
 
})