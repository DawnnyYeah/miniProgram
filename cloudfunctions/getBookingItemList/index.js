// 云函数入口文件
const cloud = require('wx-server-sdk')

const db = wx.cloud.database();

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext();

  db.collection('bookingItem')
    .get({
      success: function (res) {
        console.log(res.data)
      }
    })
}