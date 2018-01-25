// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    message: [{
      id: 0,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 1,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 2,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dele'
    },
    {
      id: 3,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 4,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      id: 5,
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, dele'
    }]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  showDetail: function (e) {
    let id = e.currentTarget.id
    wx.navigateTo({
      url: '../messageDetail/messageDetail?id=' + id
    })
  },

  onLoad () {
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady () {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow () {
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide () {
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload () {
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
  }
})
