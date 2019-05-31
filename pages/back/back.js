// pages/back/back.js
let app = getApp()
//获取全局变量
// 写法是固定的
Page({
  /**
   * 页面的初始数据
   */
  data: {
    musicflag: app.globalMusicFlag
  },
  initmusic(BackgroundAudioManager) {
    BackgroundAudioManager.title = '此时此刻'
    // 不支持本地的
    BackgroundAudioManager.src =
      'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
  },
  playmusic() {
    let BackgroundAudioManager = wx.getBackgroundAudioManager()
    if (this.data.musicflag) {
      //音乐播放
      this.initmusic(BackgroundAudioManager)
      app.globalMusicFlag = false
      this.setData({
        musicflag: app.globalMusicFlag
      })
      //改变全局变量的时候重新设置页面的局部变量
      // app.globalMusicFlag=false
    } else {
      //音乐暂停
      BackgroundAudioManager.pause()
      app.globalMusicFlag = true
      this.setData({
        musicflag: app.globalMusicFlag
      })
    }
    //自己写的播放和系统播放事件播放事件同步
    //监听系统背景音乐播放事件
    BackgroundAudioManager.onPlay(() => {
      app.globalMusicFlag = false
      this.setData({
        musicflag: app.globalMusicFlag
      })
    })
    BackgroundAudioManager.onPause(() => {
      app.globalMusicFlag = true
      this.setData({
        musicflag: app.globalMusicFlag
      })
    })
  },
  /**
   
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(app.globalMusicFlag)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    //每次显示页面的时候需要重新把全局的音乐赋值给当前的页面musicflag
    this.setData({
      musicflag: app.globalMusicFlag
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
