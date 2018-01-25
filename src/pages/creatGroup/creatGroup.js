// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: ''
  },

  addImage: function (e) {
    var _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({imgUrl: res.tempFilePaths})
      }
    })
  },

  addTips: function (e) {
    let _this = this
    let value = e.detail.value.tipName.replace(/\s/g, '')
    if (value.length > 5 || value.length === 0) {
      wx.showModal({
        title: '',
        content: '标签名大于5个字符或为空',
        complete: function (res) {
          _this.setData({blur: true})
        }
      })
    } else {
      wx.showModal({
        title: '',
        content: '添加成功',
        complete: function (res) {
          _this.setData({blur: true})
        }
      })
    }
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
