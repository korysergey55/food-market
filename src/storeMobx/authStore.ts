import {
  makeAutoObservable,
  observable,
  action,
  reaction,
  toJS,
  configure,
  computed,
  runInAction,
} from 'mobx'
import axios from 'axios'

const baseURL = 'https://food-market-35c08-default-rtdb.firebaseio.com/'

class AuthStore {
  @observable token: any = localStorage.getItem('token')
    ? localStorage.getItem('token')
    : null
  @observable user: any = null
  @observable registUser: any = null
  @observable modal: boolean = false
  @observable antModal: boolean = false
  @observable forgotPassword: boolean = false

  @observable subscribeData: string = ''
  @observable contactForm: any = []

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.orderData,
      _ => console.log('mobx', toJS(this.orderData))
    )
  }
  //Login-Registration
  @action loginUserAction(token: any) {
    this.token = token
    localStorage.setItem('token', JSON.stringify(token))
  }
  @action logoutUserAction() {
    this.token = null
    localStorage.setItem('token', '')
  }
  @action registerUserAction(data: any) {
    this.registUser = data
  }
  @action setForgotPasswordAction() {
    this.forgotPassword = true
  }
  @action resetForgotPasswordAction() {
    this.forgotPassword = false
  }
  //Modal
  @action toggleModalAction() {
    this.modal = !this.modal
  }
  @action toggleAntModalAction() {
    this.antModal = !this.antModal
  }
  //Forms
  @action setSubscribeData(email: string) {
    this.subscribeData = email
  }
  @action setContactForm(data: any) {
    this.contactForm = [...this.contactForm, data]
  }
  // API
  @action setSubscribeDataAPI = async (email: string) => {
    try {
      const response = await axios.post(
        baseURL + `subscribe/.json`,
        JSON.stringify(email)
      )
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
export default new AuthStore()
