function popUpFunction()
{
    const message = "It's me, hi";
    alert(message);
    console.log("PopUpFunction called successfully");
}

const form = document.querySelector("#contact-form");
const submitButton = document.querySelector("#submit-button");
const scriptURL = 'https://httpbin.org/post';

form.addEventListener('submit', e => {
  e.preventDefault();
  submitButton.disabled = true;
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      if (response.ok) {
        form.reset();
        alert('Your message was sent successfully! We will get back to you soon.');
      } else {
        alert('There was an error sending your message. Please try again later.');
      }
      submitButton.disabled = false;
    })
    .catch(error => {
      alert('There was an error sending your message. Please try again later.');
      submitButton.disabled = false;
    });
});
