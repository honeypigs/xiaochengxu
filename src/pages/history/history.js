
// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    blur_detail: true,
    detail: {
      group: '群名',
      managerName: '管理员名',
      tip: '标签',
      title: '标题',
      endTime: '2017-1-27',
      content: 'asdffffffffffffffffLorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati quas, incidunt architecto optio quidem veniam repudiandae ipsum adipisci nihil nisi reprehenderit suscipit consectetur nam id, placeat ullam dolorum maiores, at.'
    },
    historyMessage: [{
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
      userName: 'test',
      time: '9-12',
      title: '标题',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus. Vero commodi ab nihil ad ea, eos quidem provident recusandae! Explicabo ducimus aliquid reiciendis molestias assumenda pariatur sequi, in ipsa!'
    },
    {
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
    if (this.data.blur_detail) {
      this.setData({blur_detail: false})
    } else {
      this.setData({blur_detail: true})
    }
  },

  hide: function (e) {
    this.setData({blur_detail: true})
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