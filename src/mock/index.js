import Mock from 'mockjs'

import data from './data'

const mocks = [
  ...data
]

// mock请求方法放在这里统一处理
for (const i of mocks) {
  Mock.mock(i.url, i.type, i.response)
}
