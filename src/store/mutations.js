/*
直接更新state的多个方法对象
 */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORY, RECEIVE_SHOPS} from './mutations-type'
export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORY] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
