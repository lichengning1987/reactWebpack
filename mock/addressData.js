
// 使用 Mock
import Mock from 'mockjs';

// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
Mock.setup({
  timeout: '200 - 400'
})

// Mock响应模板                
Mock.mock('/data', {
  content: {
    data: {
      total: 100,
      currentPage: 1,
      pageSize: 10,
      'list|10': [
        {
          'id|+1': 1,
          name: '阿拉蕾',
          age: 32,
          address: '东胜区纺织街道23号1幢',
          tags: ['nice', 'dev'],
          division: '纺织街',
          institutions: '幸福街派出所',
          'policeName|1': ['特朗普', '奥巴马', '老布什'],
          'houseStatus|1': ['未建房未访查', '已建房未访查', '已建房已访查'],
          'addressType|1': ['标准地址', '非标准地址'],
        },
      ]
    }
  }
})

// Mock响应模板                
Mock.mock('/seachData', {
  content: {
    data: {
      total: 100,
      currentPage: 1,
      pageSize: 10,
      'list': [
        {
          'id': 1,
          name: '阿拉蕾',
          age: 32,
          address: '东胜区纺织街道23号1幢',
          tags: ['nice', 'dev'],
          division: '纺织街',
          institutions: '幸福街派出所',
          'policeName|1': ['特朗普', '奥巴马', '老布什'],
          'houseStatus|1': ['未建房未访查', '已建房未访查', '已建房已访查'],
          'addressType|1': ['标准地址', '非标准地址'],
        },
      ]
    }
  }
})

//添加数据接口
Mock.mock('/adddata', {
  content: {
    data: {
      success: 1

    }
  }
})
