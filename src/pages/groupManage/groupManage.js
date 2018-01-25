// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },
  handle: function (e) {
    wx.navigateTo({
      url: '../handle/handle'
    })
  },

  tips: function (e) {
    wx.navigateTo({
      url: '../tips/tips'
    })
  },

  history: function (e) {
    wx.navigateTo({
      url: '../history/history'
    })
  },

  handle_m: function (e) {
    wx.navigateTo({
      url: '../handle_m/handle_m'
    })
  },

  message_m: function (e) {
    wx.navigateTo({
      url: '../message_m/message_m'
    })
  },

  tips_m: function (e) {
    wx.navigateTo({
      url: '../tips_m/tips_m'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad () {
    // TODO: onLoad
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
    // TODO: onReady
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
    // TODO: onShow
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
    // TODO: onHide
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
    // TODO: onUnload
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    // TODO: onPullDownRefresh
  }
})
