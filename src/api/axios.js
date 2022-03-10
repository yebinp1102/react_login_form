import axios from "axios";

export default axios.create({
  // 전체 앱에 대한 기본 url을 localhost:3500로 지정
  baseURL: 'http://localhost:3500'
})