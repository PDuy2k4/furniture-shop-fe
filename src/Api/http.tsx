import axios, { Axios } from 'axios'

class Http {
  instance: Axios
  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_SERVER_URL,
      timeout: 2000
    })
  }
  get(url: string) {
    return this.instance.get(url)
  }
  post(url: string, data: any) {
    return this.instance.post(url, data)
  }
  put(url: string, data: any) {
    return this.instance.put(url, data)
  }
  delete(url: string) {
    return this.instance.delete(url)
  }
  patch(url: string, data: any) {
    return this.instance.patch(url, data)
  }
}

const http = new Http()
export default http
