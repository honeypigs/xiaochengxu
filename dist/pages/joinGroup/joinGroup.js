'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    blur: true,
    imgUrl: '',
    groupNumber: '123456'
  },

  scanCode: function scanCode(e) {
    wx.scanCode({
      success: function success(res) {
        console.log(res);
      }
    });
  },

  album: function album(e) {
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function success(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        _this.setData({ imgUrl: res.tempFilePaths });
        _this.setData({ blur: false });
      }
    });
  },

  hide: function hide(e) {
    this.setData({ blur: true });
  },

  number: function number(e) {
    wx.showModal({
      title: '群号',
      content: this.data.groupNumber,
      success: function success(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad() {
    // TODO: onLoad
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // TODO: onReady
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // TODO: onShow
  },


  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // TODO: onHide
  },


  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // TODO: onUnload
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function onPullDownRefresh() {
    // TODO: onPullDownRefresh
  }
});
//# sourceMappingURL=joinGroup.js.map
