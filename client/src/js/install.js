const butInstall = document.getElementById('buttonInstall'); // get the install button

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => { // listen for the beforeinstallprompt event
    event.preventDefault();
    deferredPrompt = event; // store the event for later use
    butInstall.style.display = 'block'; // show the install button
  });


// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => { // listen for a click event on the install button
  if (!deferredPrompt) { // if the deferredPrompt is not available, return
    return;
  }
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice; // wait for the user to make a choice
  console.log(`User response to the install prompt: ${outcome}`);
  deferredPrompt = null;
  butInstall.style.display = 'none'; // hide the install button after install
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed'); // log a message when the app is installed
  });