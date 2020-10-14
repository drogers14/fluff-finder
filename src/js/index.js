import store from './store/index'
import { signUp, submitPet } from './actions/index'

window.store = store;
window.signUp = signUp;
window.submitPet = submitPet;