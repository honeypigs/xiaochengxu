// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: {
      id: 0,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    detail: {
      notAccetp: 1,
      notFinish: 3,
      finish: 40
    }
  },

  notFinish: function (e) {
    wx.navigateTo({
      url: '../noAccetp/noAccetp'
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
