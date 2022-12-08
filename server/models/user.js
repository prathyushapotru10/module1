const users = [
  {
      firstname:"pratyusha",
      lastname:"potru",
      emailid: "potru@gmailcom",
       pwd: "12345"
  },
  {
      user: "Potru1",
       pwd: "12345"
    
  },
];


const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS users (
  userID INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  emailid VARCHAR(255) NOT NULL UNIQUE,
  pwd VARCHAR(255) NOT NULL,
  CONSTRAINT userPK PRIMARY KEY(userID)
); `
await con.query(sql);
}
createTable();

async function register(user) {
let cUser = await getUser(user.emailid);
console.log(user)
if(cUser.length > 0) throw error("email already in use");

const sql = `INSERT INTO users (firstname,lastname,emailid, pwd)
  VALUES ("${user.firstname}", "${user.lastname}","${user.emailid}","${user.pwd}");
`
await con.query(sql);
return await login(user);
}
async function getUser(user) {
  let sql;
  
  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE emailid = "${user.Email}"
  `;
  }
  return await con.query(sql);  
  }


async function login(user) { 
  console.log(user.Email);
let cUser = await getUser(user); 

if(!cUser[0]) throw Error(user.Email+" Email not found");
if(cUser[0].pwd !== user.pwd) throw Error("Pwd incorrect");
console.log(cUser[0]);

return cUser[0];
}

async function updateUser(user) {
  let sql = `UPDATE users 
    SET Email = "${user.Email}"
    WHERE userID = ${user.userID}
  `;
  
  await con.query(sql);
  let updatedUser = await getUser(user);
  return updatedUser[0];
  }

async function removeUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
  }


module.exports = {login, register, removeUser, updateUser}