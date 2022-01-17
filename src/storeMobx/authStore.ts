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

class AuthStore {
  @observable token: any = null
  @observable user: any = null
  @observable registUser: any = null
  @observable modal: boolean = false
  @observable antModal: boolean = false
  @observable forgotPassword: boolean = false

  @observable subscribeForm: any = []
  @observable contactForm: any = []
  @observable orders: any = []


  constructor() {
    makeAutoObservable(this)
    reaction(
      () => this.contactForm,
      _ => console.log('mobx', toJS(this.contactForm))
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
  @action setSubscribeForm(data: any) {
    this.subscribeForm = [...this.subscribeForm, data]
  }
  @action setContactForm(data: any) {
    this.contactForm = [...this.contactForm, data]
  }
  @action setOrder(data: any) {
    this.orders = [...this.orders, data]
  }
  
}
export default new AuthStore()
