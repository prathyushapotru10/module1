const con = require("./db_connect");


async function createTable() {
await con.query(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DB}`);
await con.query(`USE ${process.env.MYSQL_DB}`) ;
let sql=`CREATE TABLE IF NOT EXISTS notes (
  noteID INT NOT NULL AUTO_INCREMENT,
  emailid VARCHAR(255) NOT NULL,
  notes VARCHAR(255) NOT NULL,
  userID INT NOT NULL,
  CONSTRAINT notePK PRIMARY KEY(noteID),
  CONSTRAINT notefk FOREIGN KEY(userID) REFERENCES users(userID)
  
); `

await con.query(sql);
}
createTable();

async function create(note) {

const sql = `INSERT INTO notes (emailid, notes)
  VALUES ("${note.emailid}","${note.notes}");
`

await con.query(sql);
return {success:"Note Added"};
}


async function getAllNotes() {
 const sql = "SELECT * FROM notes;";
 let notes = await con.query(sql);
 console.log(notes)
 return notes;
}


async function getNote(note) {
  let sql;
  
    sql = `
      SELECT * FROM notes
       WHERE noteID = ${note.noteID}
    `
  
  return await con.query(sql);  
  }


async function updateNote(note) {
  let sql = `UPDATE notes 
    SET notes = "${note.notes}"
    WHERE noteID = ${note.noteID}
  `;
  
  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
  }

async function removeNote(note) {
  let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}
  `
  await con.query(sql);
  }

module.exports = { getAllNotes, getNote, create, removeNote, updateNote};