import { fetchData, getCurrentUser, setCurrentUser } from '../main.js'
// document.getElementById("btn-users").addEventListener('click', getUsers);

function getUsers() {
 fetch("http://localhost:3000/users/")
 .then((res)=> res.json())
  .then((data) => console.log(data))
   .catch((err)=> console.log(err))
}

class main
{
    constructor(fname,lname,uname,pwd)
    {
    this.firstname=fname;
    this.lastname=lname;
    this.emailid=uname;
    this.password=pwd;

    }
    getfirstname(){
        return this.firstname;
    }
    getlastname(){
        return this.lastname;
    }
    getemailid(){
        return this.emailid;
    }
    getpassword()
    {
        return this.password;
    }
    setfirstname(fname){
        this.firstname=fname;
    }
    setlastname(lname){
        this.lastname=lname;
    }      
    setemailid(uname){
        this.emailid=uname;
    }
    setpassword(pwd)
    {
        this.password=pwd;
    }
}

class note{
  constructor(note1){
    this.notes= note1;
  }
  setnotes(note1)
  {
    this.notes=note1;
  }
  getnotes(){
    return this.notes;
  }
}
const register=document.getElementById("formreg");
if(register) register.addEventListener('submit',registertion)
function registertion(e){
    e.preventDefault();
    let firstname1=document.getElementById('firstname').value;
    let lastname1=document.getElementById('lastname').value;
    let username=document.getElementById('emailid').value;
    let passwrd=document.getElementById('password').value;

    let regi= new main(firstname1,lastname1,username,passwrd);
    
    fetchData("/users/register", regi, "POST")
  .then((data) => {
    setCurrentUser(data);
   
    window.location.href = "note.html";

  })
  .catch((err) =>{
    
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
  })

   // console.log(regi.FN)
   // console.log(regi.LN)
   // console.log(regi.UN)
   //  console.log(regi.Pwd)
    register.reset();
}
const loginform=document.getElementById("login");
if(loginform) loginform.addEventListener('submit', loginuser)
function loginuser(l){
    l.preventDefault();
    let user1=document.getElementById('emailid').value;
    let password1=document.getElementById('password').value;
    let login1= new main(user1,password1);
    fetchData("/users/login", login1,"POST")
 .then((data) => {
    setCurrentUser(data)
     console.log(data);
    window.location.href ="note.html";
  })
  // console.log(`${user}`);
   // console.log(`${password}`);
   loginform.reset();
  }
  let user= getCurrentUser()
  const noteform=document.getElementById("note");
  if(noteform) noteform.addEventListener('submit',notem)
  function notem(f)
  {
      f.preventDefault();
      let notetext=document.getElementById('notes').value;
      let note12= new note(notetext);
      note12.userID= user.userID;
      fetchData("/notes/createNote",note12, "POST")
      .then((data) => {
          alert("added");
        window.location.href = "note.html";
      })
      .catch((err) => {
       console.log(`Error!!! ${err.message}`)
       alert("Error");
      })
      console.log(`${notetext}`);
      noteform.reset();
  }
  
  
  if(user&&noteform) getallnotes();
  
  function getallnotes(){
    let notetext=document.getElementById('notes');
      fetchData("/notes/getNote",user,"POST")
      .then((data) => {
   console.log(data);
   for(let i=0;i<data.length;i++){
  notetext.value='\n'+data[i].notes
   } 
  
      })
  }