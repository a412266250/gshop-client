/*
通过mutations间接更新state的多个函数对象
 */
import {RECEIVE_ADDRESS, RECEIVE_CATEGORY, RECEIVE_SHOPS} from './mutations-type'
import {reqAddress, reqFoodCategorys, reqShops} from '../api'
export default {
  // 获取地址信息
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 经纬度
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutaions
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 获取商品分类信息
  async getCategorys ({commit, state}) {
    const result = await reqFoodCategorys()
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORY, {categorys})
    }
  },

  // 获取商户信息列表
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
