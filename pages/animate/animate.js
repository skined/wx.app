// pages/animate/animate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anmiteData:{}
    //初始化动画元素

  },

  /**
   * 生命周期函数--监听页面加载
   */
  //动画的持续参数 duration持续时间
    //delay动画的延迟时间
    //transformOrinin动画的中心点
  onLoad: function (options) {
   //创建一个动画实例
   let animation = wx.createAnimation({
     duration:1000,
     timingFunction:'linear',
     delay:100,
   });
   
    //需要把动画挂载到实例上
    this.animation=animation
    animation
    .rotate(360)
    .scale(0.5)
    .scale(0.5)
    .step()
    animation
    .rotate(0)
    .scale(1)
    .step()
    animation.translate(100).step()
    //先旋转同时放大然后平移
    animation.rotate(45).scale(2,2).step()
    animation.translate(100,100).step({duration:100})
    //step表示这一步的动画已经定义完
    //需要把animation赋值给我们的动画对象animateData
    setInterval(()=>{
      this.setData({
        animateData: animation.export()
      })
    },1000)
   
    //导出动画队列。export方法每次调用后会清掉之前的动画操作，如果不写export无法进行下一次的动画操作
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})