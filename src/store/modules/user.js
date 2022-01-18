import { loginApi } from '@/api/login'
import { welcome } from '@/utils/util'

const user = {
  state: {
    token: '',
    user_id: 0,
    name: '',
    welcome: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_USER_ID: (state, info) => {
      state.user_id = info
    }
  },

  actions: {

    // 登录
    loginAction ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        loginApi(userInfo).then(response => {
          resolve(response)
          if (response.StatusCode === 0) {
            const result = response.UserInfo
            console.log(result)
            commit('SET_TOKEN', result.token)
            commit('SET_NAME', { name: result.username, welcome: welcome() })
            commit('SET_USER_ID', result.idUser)
          }
          console.log(response)
        }).catch(error => {
          reject(error)
        })
      })
    }

  }
}

export default user
