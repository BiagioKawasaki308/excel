const scriptURL = 'https://script.google.com/macros/s/AKfycbyVpZwDuzeg3QNFpdWTYcar25dRMvNo-9mDudKq3GAvRnfqkzzHNOC5iD8hjyk3Gkh3/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Invia i dati del modulo
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'registered') {
        // Reindirizza a index2.html se l'email è registrata
        window.location.href = 'index2.html';
      } else if (data.result === 'not_registered') {
        // Mostra l'alert se l'email non è registrata
        alert('Questa mail non è registrata. Non sei autorizzato a proseguire');
      } else {
        alert('Si è verificato un errore. Riprova più tardi.');
      }
    })
    .catch(error => {
      console.error('Error!', error.message);
    });
});
