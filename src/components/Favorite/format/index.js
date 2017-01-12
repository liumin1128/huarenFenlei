import { getTimeAgo, getQiniuImg, isNumber } from '../../../actions/common'
export const formatList = (data) => {
  return data.map((i, index) => {
    return {
        photo: i.item.item.photo && getQiniuImg(i.item.item.photo[0]),
        title: i.item.item.title,
        price: isNumber(i.item.item.price),
        createdAt: getTimeAgo(i.createdAt),
        subType: i.item.item.subType,
        id: i.item.id,
        type: i.item.type,
        city: i.item.item.city
    }
  })
}