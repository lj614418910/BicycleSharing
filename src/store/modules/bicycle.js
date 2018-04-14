import {
  RENT_BICYCLE,
  CHANG_LEASE_STATUS,
  ERROR_MSG,
  INIT_BICYCLE
} from '../constants';

const init = {
  bicycle_id: "",
  bicycle_pwd: "",
  order_id: "",
  order_status: "",
  create_time: ""
}

const state = {
  ...init
}

const getters = {

}

const actions = {
  rentBicycle({ commit, state, dispatch }, { params, onSuccess, onFail }){
    axios.post('/bicycle/rentBicycle', params).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        let data = res.data.data
        commit(CHANG_LEASE_STATUS, data.lease_status)
        commit(RENT_BICYCLE, data)
        onSuccess && onSuccess()
      } else {
        let msg = res.data.msg
        commit(ERROR_MSG, msg)
        onFail && onFail()
      }
    })
  },
  getOrder({ commit, state, dispatch }, { params, onSuccess, onFail }){
    axios.post('/bicycle/getOrder', params).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        let data = res.data.data
        commit(RENT_BICYCLE, data)
        onSuccess && onSuccess()
      } else {
        let msg = res.data.msg
        commit(ERROR_MSG, msg)
        onFail && onFail()
      }
    })
  },
  returnBicycle({ commit, state, dispatch }, { params, onSuccess, onFail }){
    axios.post('/bicycle/returnBicycle', params).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        let data = res.data
        commit(CHANG_LEASE_STATUS, data.lease_status)
        commit(INIT_BICYCLE)
        onSuccess && onSuccess(data.end_time)
      } else {
        let msg = res.data.msg
        commit(ERROR_MSG, msg)
        onFail && onFail()
      }
    })
  },
  warning({ commit, state, dispatch }, { params, onSuccess, onFail }) {
    axios.post('/bicycle/warning', params).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        let data = res.data
        commit(CHANG_LEASE_STATUS, data.lease_status)
        commit(INIT_BICYCLE)
        onSuccess && onSuccess(data.end_time)
      } else {
        let msg = res.data.msg
        commit(ERROR_MSG, msg)
        onFail && onFail()
      }
    })
  }
}

const mutations = {
  [RENT_BICYCLE](state, data){
    Object.assign(state, data)
  },
  [INIT_BICYCLE](state) {
    Object.assign(state, init)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
