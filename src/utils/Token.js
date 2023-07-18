class Token {
  setAccessToken(token) {
      localStorage.setItem("access", token);
  }
  getAccessToken() {
      return localStorage.getItem("access");
  }
  logOut() {
      localStorage.clear();
  }
}

const token = new Token();

export default token;