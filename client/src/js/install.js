const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('✅', 'beforeinstallprompt', event);
    // store the event for later use
    window.deferredPrompt = event;
    // remove the 'hidden' class from the install button container
    butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('✅', 'butInstall-clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        // The deferred prompt isn't available.
        return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log user response to prompt.
    const result = await promptEvent.userChoice;
    console.log('👍', 'userChoice', result);
    // We no longer need the prompt, clear it up.
    window.deferredPrompt = null;
    // Hide the install button.
    butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
    // Clear up the deferredPrompt event
    window.deferredPrompt = null;
});