import { fetchData, setCurrentUser } from './main.js'



// Register form

const registerForm = document.querySelector('reg-form');

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // user input
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#pswd').value;

  // Create a new user object
  const newUser = {
    username: username,
    password: password
  };

  // Send a POST request to create a new user
  fetchData('/users/register', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        // Redirect to the notes page if the user was successfully registered
        window.location.href = '/notes';
      } else {
        // Display an error message if there was a problem
        const errorMessage = 'registration error';
        errorMessage.textContent = data.message;
      }
    });
});

// Login form

const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user input
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#pswd').value;

  // Create a login request object
  const loginRequest = {
    username: username,
    password: password
  };

  // Send a POST request to the server to log the user in
  fetchData('/users/login', {
    method: 'POST',
    body: JSON.stringify(loginRequest),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        // Redirect to the notes page if the user was successfully logged in
        window.location.href = '/notes';
      } else {
        // Display an error message if there was a problem
        const errorMessage = 'login error';
        errorMessage.textContent = data.message;
      }
    });
});


  // Fetch and display all notes for the logged-in user

  fetchData('/notes'
    {
    method: 'GET',
    body: JSON.stringify(loginRequest),
    headers: {
      'Content-Type': 'application/json'
    })
  setCurrentUser(data);
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Iterate over the array of notes
        data.notes.forEach((note) => {
          // Create an HTML for the note
          const noteElement = document.createElement('div');
          noteElement.textContent = note.noteContent;

          // Append the note element to the page
          const notesContainer = document.querySelector('#notes-container');
          notesContainer.appendChild(noteElement);
        });
      } else {
        // Display an error message
        const errorMessage = 'error';
        errorMessage.textContent = data.message;
      }
    });



    // Note creation form


  const noteForm = document.querySelector('#note-form');

  noteForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the text of the note from the form
    const text = document.querySelector('note_text').value;

  // Create a new note object
  const newNote = {
    noteContent: text,
  };

    // Send a POST request to the backend to create the note
    fetchData('/notes', {
      method: 'POST',
      body: JSON.stringify({ newNote }),
      headers: { 'Content-Type': 'application/json' },
    })
    setCurrentUser(data);
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Display success message
          const successMessage = 'success';
          errorMessage.textContent = data.message;
        } else {
          // Display an error message
          const errorMessage = 'error';
          errorMessage.textContent = data.message;
        }
      });
  });