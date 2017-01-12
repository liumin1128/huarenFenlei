import {getDiscountListCloud, getDiscountDetailCloud} from './server'
import { formatDiscountList } from './format'

export const initDiscount = () => {
  return {
    type: 'INIT_DISCOUNT'
  }
}

export const setDiscountObj = (obj, data) => {
  return {
    type: 'SET_DISCOUNT_OBJ',
    obj,
    data
  }
}

const pushDiscountList = (data) => {
  return {
    type: 'PUSH_DISCOUNT_LIST',
    data: formatDiscountList(data)
  }
}

const setDiscountWait = (val) => {
  return {
    type: 'SET_DISCOUNT_WAIT',
    val: val
  }
}

export const getDiscountList = (params) => {
  return function (dispatch) {
    return getDiscountListCloud(params).then(
      data => {
        dispatch(pushDiscountList(data))
        dispatch(setDiscountWait(false))
      },
      error => console.log(error)
    )
  }
}

const pushDiscountDetail = (data) => {
  return {
    type: 'PUSH_DISCOUNT_DETAIL',
    data: data
  }
}

export const getDiscountDetail = (id) => {
  return function (dispatch) {
    return getDiscountDetailCloud(id).then(
      data => dispatch(pushDiscountDetail(data)),
      error => console.log(error)
    )
  }
}

