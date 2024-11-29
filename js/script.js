
function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('All fields are required.');
    } else {
        alert('Thank you for contacting us!');
        event.target.reset();
    }
}

function validateReservationForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (name === '' || email === '' || phone === '' || date === '' || time === '' || guests === '') {
        alert('All fields are required.');
    } else {
        alert('Your reservation has been submitted!');
        event.target.reset();
    }
}

document.getElementById('contactForm').addEventListener('submit', validateContactForm);
document.getElementById('reservationForm').addEventListener('submit', validateReservationForm);
