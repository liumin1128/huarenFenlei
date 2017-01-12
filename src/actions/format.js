let img = require('../images/1.jpg');
let yeomanImage = require('../images/yeoman.png');

export const formatDiscountList = (data) => {
  let arr = []
  for (let i = 0; i < 20; i++) {
    arr.push({
      createdAt: new Date() + i + Math.random()*10000
    })
  }
  return arr.map((item, index) => {
    return {
      id: 'abcdefg',
      picture: img,
      title: '意峰蜂蜜柚子茶500g韩...',
      beginDate: '2017-01-01',
      closingDate: '2017-01-01',
      price: 156,
      originalPrice: 360,
      discount: 6.5,
      createdAt: item.createdAt
    }
  })
}