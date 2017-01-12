import Timeago from 'timeago.js'
import { hashHistory } from 'react-router'

export const getTimeAgo = (date) => {
  if (date) {
    var timeagoInstance = new Timeago()
    return timeagoInstance.format(date, 'zh_CN')
  }
}

export const getScrollTop = () => {
  var scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

export const isNumber = (str) => {
  var r = /^\+?[1-9][0-9]*$/; // 正整数
  if (r.test(str)) {
    return str
  } else {
    return 0
  }
}

export const getQiniuImg = (url, propsX, propsY) => {
  var x = propsX || 200
  var y = propsY || 200
  return url + '?imageMogr2/thumbnail/!' + x + 'x' + y + 'r/gravity/Center/crop/' + x + 'x' + y
}

export const gotoUrl = (url) => {
  hashHistory.push('/' + url)
}
