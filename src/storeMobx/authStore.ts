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
  @observable token: any = null
  @observable user: any = null
  @observable registUser: any = null
  @observable modal: boolean = false
  @observable antModal: boolean = false
  @observable forgotPassword: boolean = false

  @observable subscribeData: string = ''
  @observable orderData: any = {}
  @observable contactForm: any = []

  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.orderData,
      _ => console.log('mobx', toJS(this.orderData))
    )
  }

  @action loginUserAction(token: any) {
    this.token = token
  }
  @action logoutUserAction() {
    this.token = null
  }
  @action registerUserAction(data: any) {
    this.registUser = data
  }
  @action toggleModalAction() {
    this.modal = !this.modal
  }
  @action toggleAntModalAction() {
    this.antModal = !this.antModal
  }
  @action setForgotPasswordAction() {
    this.forgotPassword = true
  }
  @action resetForgotPasswordAction() {
    this.forgotPassword = false
  }
  //Forms
  @action setSubscribeData(email: string) {
    this.subscribeData = email
  }

  @action setOrderData(data: any) {
    this.orderData = data
  }

  @action setContactForm(data: any) {
    this.contactForm = [...this.contactForm, data]
  }
}
export default new AuthStore()
