import axios from 'axios'

const heroku = axios.create({
  baseURL: 'http://github-calendar.herokuapp.com'
})

export default heroku
