import { saveUser } from '../data/api.js';
import makeUser from './make-user.js';

// go grab the form from the home page
const userSignUp = document.getElementById('user-sign-up');

// when we submit
userSignUp.addEventListener('submit', function (event) {
    // maske it so it doesnt weirdly redirect
    event.preventDefault();

    // make a new form data object
    const formData = new FormData(userSignUp);
    // use the form data object to make a user
    const user = makeUser(formData);

    // pop that user in local storage
    saveUser(user);

    // redirect us to the map page
    window.location = 'map';
});