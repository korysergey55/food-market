import { makeAutoObservable, observable, action, reaction, toJS } from 'mobx'
import axios from 'axios'
import { toast } from 'react-toastify'

class AuthStore {
  @observable token: any = localStorage.getItem('token') ? localStorage.getItem('token') : null
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
      () => this.token,
      _ => console.log('mobx', toJS(this.token))
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
  @action setSubscribeOperationAPI = async (email: string) => {
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL + `subscribe/.json`, JSON.stringify(email))
      if (response && response.status === 200) {
        toast.success('Form was successfuly sent!', {
          theme: 'colored',
        })
      }
      return response
    } catch (error) {
      console.log(error)
    }
    this.setSubscribeData(email)
  }
}
export default new AuthStore()
