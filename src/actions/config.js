const subTypeList = {
  house: ['求租', '雅间', '套房', '公寓', '整房', '家庭旅馆', '月子房', '其他'],
  jobs: ['文职人员', '电脑相关', '餐馆请人', '保姆／月嫂', '美容美甲', '教育培训', '导游翻译', '司机', '兼职', '销售', '其他'],
  service: ['寻人寻物', '活动展会', '个人家教', '私人按摩', '装修服务', '购物接送', '翻译公证', '搬家服务', '家政服务', '快递服务', '其他服务'],
  car: ['日韩', '欧洲', '美国', '其他'],
  business: ['餐馆转让', '商铺转让', '连锁加盟', '农场出售', '公司转让', '地产投资', '其他'],
  otherItems: ['求购', '电子产品', '家具床柜', '母婴用品', '女性用品', '汽车周边', '艺术收藏', '门票卡卷', '其他'],
  pet: ['求购', '宠物/花鸟', '狗狗出售', '猫咪出售', '果树苗圃', '宠物服务', '园艺卫护', '其他'],
  helpInfo: ['车主', '乘客']
}
// const subTypeList = {
//   jobs: ['餐馆请人', '管家保姆', '美容美甲', '工人店员', '教育培训', '公司文员', '导游翻译', '司机', '兼职', '销售', '其他'],
//   service: ['寻人寻物', '活动展会', '个人家教', '私人按摩', '装修服务', '购物接送', '翻译公证', '搬家服务', '家政服务', '快递服务', '其他服务'],
//   house: ['办公出租', '仓库出租', '店面出租', '家庭旅馆', '单间分租', '整套出租', '求租', '其他'],
//   car: ['日韩', '欧洲', '美国', '其他'],
//   business: ['餐馆转让', '商铺转让', '连锁加盟', '农场出售', '公司转让', '地产投资', '其他'],
//   otherItems: ['求购', '电子产品', '家具床柜', '母婴用品', '女性用品', '汽车周边', '艺术收藏', '门票卡卷', '其他'],
//   pet: ['求购', '宠物/花鸟', '狗狗出售', '猫咪出售', '果树苗圃', '宠物服务', '园艺卫护', '其他'],
//   helpInfo: ['留学服务', '移民服务', '代购服务', '法律服务', '汽车罚单', '移民签证', '留学旅游', '其他']
// }

export const getSubType = (str) => {
  return subTypeList[str]
}

const cityList = ['大洛杉矶-LA', '大纽约-NYC', '旧金山|湾区-SF', '芝加哥-CHI', '西雅图-SEA', '波士顿-BSN', '拉斯维加斯-LV', '夏威夷-HI', '圣地亚哥-SD', '大华府-DC', '亚特兰大-ATL', '凤凰城-PHX', '德州|休斯顿-TX', '新泽西-NJ', '佛州|迈阿密-FL', '滨州|费城-PA', '加拿大', '温哥华-YVR', '多伦多-YTO', '其他']

export const getCitys = () => {
  return cityList
}

const classes = {
  jobs: '求职招聘',
  house: '房屋出租',
  service: '同城服务',
  business: '店铺转让',
  car: '二手汽车',
  otherItems: '闲置出售',
  pet: '宠物花鸟',
  helpInfo: '顺风同行'
}

const classesList = ['jobs', 'house', 'business', 'car', 'otherItems', 'pet', 'helpInfo']

export const classToStr = (str) => {
  console.log('------------str' + str)
  console.log('------------str classes' + classes[str])
  return classes[str]
}

export const getClassListAndStr = () => {
  return classesList.map(i => {
    return {
      type: i,
      label: classes[i]
    }
  })
}

const arrowToValueAndLabel = (arr) => {
  return [{value: 0, label: '全部'}].concat(arr.map((i, index) => {
    return {
      value: index + 1,
      label: i
    }
  }))
}

export const filtersOptions = (str) => {
  return [
    {
      text: '城市',
      obj: 'city',
      options: arrowToValueAndLabel(cityList)
    }, {
      text: '分类',
      obj: 'subType',
      options: arrowToValueAndLabel(subTypeList[str])
    }, {
      text: '租金',
      obj: 'price',
      options: [
        { value: 0, label: '不限' },
        { value: 1, label: '0～500' },
        { value: 2, label: '500～1000' },
        { value: 3, label: '1000～2000' },
        { value: 4, label: '2000～3000' },
        { value: 5, label: '3000+' }
      ]
    }, {
      text: '来源',
      obj: 'from',
      options: [
        { value: 0, label: '全部' },
        { value: 1, label: '个人' },
        { value: 2, label: '经纪人' }
      ]
    }
  ]
}