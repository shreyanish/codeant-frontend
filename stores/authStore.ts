import { makeAutoObservable } from 'mobx'
import Cookies from 'js-cookie'

class AuthStore {
  signedIn: boolean = false
  
  constructor() {
    makeAutoObservable(this)
    this.signedIn = Cookies.get('signedIn') === 'true'
  }

  setSignedIn(value: boolean) {
    this.signedIn = value
    Cookies.set('signedIn', value.toString(), { path: '/' })
  }
}

// Create a singleton instance
const authStore = new AuthStore()
export default authStore 