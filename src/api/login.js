import { axios } from '@/utils/request'
import { PROXY_URL } from '@/config/global'

export const loginApi = params => {
  return axios({
    url: PROXY_URL + '/login',
    method: 'post',
    data: params
  })
}
