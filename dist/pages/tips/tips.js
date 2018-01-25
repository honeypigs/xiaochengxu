'use strict';

// 获取全局应用程序实例对象
// const app = getApp()

var indexOf = function indexOf(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == val) return i;
  }
  return -1;
};

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tips: [{
      id: 0,
      tipsName: '考研',
      focus: true
    }, {
      id: 1,
      tipsName: '工作',
      focus: false
    }, {
      id: 2,
      tipsName: '高数',
      focus: false
    }, {
      id: 3,
      tipsName: '出国',
      focus: false
    }]
  },

  focus: function focus(e) {
    var Tips = this.data.tips;
    var index = indexOf(Tips, e.currentTarget.id);
    if (Tips[index].focus) {
      Tips[index].focus = false;
    } else {
      Tips[index].focus = true;
    }
    this.setData({ tips: Tips });
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
//# sourceMappingURL=tips.js.map
