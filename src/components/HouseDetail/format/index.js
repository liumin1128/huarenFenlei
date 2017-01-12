import { getQiniuImg } from '../../../actions/common'

export const formatInfo = (i) => {
  console.log(getQiniuImg(i.item.photo))
  return {
    id: i.objectId,
    pictures: i.item.photo.map(i => {
      return getQiniuImg(i, 500, 300)
    }) || undefined,
    title: i.item.title || undefined,
    desc: i.item.desc || undefined,
    subType: i.item.subType || i.item.brand || i.item.jobType || undefined,
    facilities: i.item.amenities || undefined,
    agentType: i.item.agentType || undefined,
    address: i.item.address || i.item.jobLocation || undefined,
    desc: i.item.desc || undefined,
    price: parseInt(i.item.price || i.item.salary) || undefined,
    tel: i.item.tel || undefined,
    city: i.item.city || undefined,
    createdAt: i.createdAt || undefined
  }
}