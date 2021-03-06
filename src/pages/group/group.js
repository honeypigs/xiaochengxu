// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    group: [{
      id: 0,
      groupName: 'test',
      state: '1'
    },
    {
      id: 1,
      groupName: 'test1',
      state: '0'
    },
    {
      id: 2,
      groupName: 'test2',
      state: '1'
    }]
  },

  add: function (e) {
    wx.showActionSheet({
      itemList: ['发消息', '创建群', '分享群'],
      success: function (res) {
        if (res.tapIndex === 0) {
          wx.navigateTo({
            url: '../sendMessage/sendMessage'
          })
        } else if (res.tapIndex === 1) {
          wx.navigateTo({
            url: '../creatGroup/creatGroup'
          })
        } else {
          wx.navigateTo({
            url: '../shareGroup/shareGroup'
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },

  joinGroup: function (e) {
    wx.navigateTo({
      url: '../joinGroup/joinGroup'
    })
  },

  manage: function (e) {
    let id = e.currentTarget.id
    wx.navigateTo({
      url: '../groupManage/groupManage?id=' + id
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
