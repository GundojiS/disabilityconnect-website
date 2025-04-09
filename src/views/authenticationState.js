import { reactive } from 'vue';

export const authState = reactive({
  isAuthenticated: !!sessionStorage.getItem('isAuthenticated'),
  
  login() {
    sessionStorage.setItem('isAuthenticated', 'true');
    this.isAuthenticated = true;
  },

  logout() {
    sessionStorage.removeItem('isAuthenticated');
    this.isAuthenticated = false;
  }
});