// getUsers button 
 document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
  fetch("http://localhost:3000/users/")
  .then((res)=> res.json())
  .then((data) => console.log(data))
  .catch((err)=> console.log(err))
 }
class MainPage {
    constructor(fname, lname, uname, pwd, note) {
      this.FN = fname;
      this.LN = lname;
      this.UN = uname;
      this.Pwd = pwd;
      this.Note = note;
    }
    getFN() {
      return this.FN;
    }
    getLN() {
      return this.LN;
    }
    getUN() {
      return this.UN;
    }
    getPwd() {
      return this.Pwd;
    }
    setFN(fname) {
      this.FN = fname;
    }
    setLN(lname) {
      this.LN = lname;
    }
    setUN(uname) {
      this.UN = uname;
    }
    setPwd(pwd) {
      this.Pwd = pwd;
    }
    getNote() {
      return this.Note;
    }
    setNote(note) {
      this.Note = note;
    }
  }
  const registration = document.getElementById("formreg");
  if (registration) registration.addEventListener('submit', register)
  
  function register(e) {
    e.preventDefault();
    let firstname = document.getElementById('fname').value;
    let lastname = document.getElementById('lname').value;
    let username = document.getElementById('uname').value;
    let passwrd = document.getElementById('password').value;
  
    let regi = new MainPage(firstname, lastname, username, passwrd,);
    console.log(regi.FN)
    console.log(regi.LN)
    console.log(regi.UN)
    console.log(regi.Pwd)
    registration.reset();
  }
  const loginform = document.getElementById("login");
  if (loginform) loginform.addEventListener('submit', loginuser)
  
  function loginuser(l) {
    l.preventDefault();
    let user = document.getElementById('uname').value;
    let password = document.getElementById('password').value;
  
    let log = new MainPage(undefined,undefined,user,password,);
    console.log(log.UN);
    console.log(log.Pwd);
    loginform.reset();
  }
  
  const noteform = document.getElementById("note");
  if (noteform) noteform.addEventListener('submit', notem)
  
  function notem(f) {
    f.preventDefault();
    let notetext = document.getElementById('noteid').value;
  
    let n = new MainPage(undefined,undefined,undefined,undefined,notetext);
    console.log(n.Note);
    noteform.reset();
  }