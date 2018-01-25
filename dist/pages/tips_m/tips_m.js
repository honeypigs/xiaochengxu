'use strict';

// 获取全局应用程序实例对象
// const app = getApp()
var indexOf = function indexOf(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == val) return i;
  }
  return -1;
};

var remove = function remove(array, val) {
  var index = indexOf(array, val);
  if (index > -1) {
    array.splice(index, 1);
  }
};

// 创建页面实例对象
Page({
  /**
   * 页面的初始数据
   */
  data: {
    blur: true,
    tips: [{
      id: 0,
      tipsName: '考研'
    }, {
      id: 1,
      tipsName: '工作'
    }, {
      id: 2,
      tipsName: '高数'
    }, {
      id: 3,
      tipsName: '出国'
    }]
  },

  delet: function delet(e) {
    var Tips = this.data.tips;
    remove(Tips, e.currentTarget.id);
    this.setData({ tips: Tips });
  },

  add: function add(e) {
    if (this.data.blur) {
      this.setData({ blur: false });
    } else {
      this.setData({ blur: true });
    }
  },

  addTips: function addTips(e) {
    var _this = this;
    var Tips = this.data.tips;
    var item = {};
    if (this.data.tips.length < 10) {
      var value = e.detail.value.tipName.replace(/\s/g, '');
      if (value.length > 5 || value.length === 0) {
        wx.showModal({
          title: '',
          content: '标签名大于5个字符或为空',
          complete: function complete(res) {
            _this.setData({ blur: true });
          }
        });
      } else {
        item.id = this.data.tips.length;
        item.tipsName = value;
        Tips.push(item);
        this.setData({ tips: Tips });
        wx.showModal({
          title: '',
          content: '添加成功',
          complete: function complete(res) {
            _this.setData({ blur: true });
          }
        });
      }
    } else {
      wx.showModal({
        title: '',
        content: '标签不超过十个',
        complete: function complete(res) {
          _this.setData({ blur: true });
        }
      });
    }
  },

  hide: function hide(e) {
    this.setData({ blur: true });
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
//# sourceMappingURL=tips_m.js.map
