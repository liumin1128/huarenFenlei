import { getTimeAgo, getQiniuImg } from '../../../actions/common'

export const formatList = (data) => {
  // let arr = []
  // for (let i = 0; i < 20; i++) {
  //   arr.push({
  //     createdAt: new Date() + i + Math.random()*10000
  //   })
  // }
  return data.map((i, index) => {
    return {
      id: i.objectId,
      picture: getQiniuImg(i.item.photo[0]) || undefined,
      title: i.item.title || undefined,
      desc: i.item.desc || undefined,
      subType: i.item.subType || undefined,
      city: i.item.city || undefined,
      facilities: i.item.amenities || undefined,
      agentType: i.item.agentType || undefined,
      address: i.item.address || undefined,
      desc: i.item.desc || undefined,
      price: parseInt(i.item.price) || undefined,
      tel: i.item.tel || undefined,
      updatedAt: getTimeAgo(i.updatedAt) || undefined
    }
  })
}