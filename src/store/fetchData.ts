import { makeAutoObservable } from "mobx"
import { getData } from "../utils/getData"
import { IElem } from "../components/cards-page/type"

class FetchData {
  data: Array<IElem> = []
  images: Array<any> = []
  constructor() {
    makeAutoObservable(this)
  }

  async getDataPosts(url: RequestInfo | URL) {
    this.data = await getData(url)
  }

  async getDataImages(url: RequestInfo | URL) {
    this.images = await getData(url)
  }
}

export default new FetchData()