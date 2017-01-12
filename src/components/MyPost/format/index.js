import { getTimeAgo, getQiniuImg, isNumber } from '../../../actions/common'
export const formatList = (data) => {
  return data.map((i, index) => {
    return {
        photo: i.item.photo && getQiniuImg(i.item.photo[0]),
        title: i.item.title,
        price: isNumber(i.item.price),
        createdAt: getTimeAgo(i.createdAt),
        subType: i.item.subType,
        id: i.objectId,
        type: i.type,
        city: i.item.city
    }
  })
}