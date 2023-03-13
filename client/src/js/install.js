const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

  window.deferredPrompt = event;

  showInstallButton();
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
        const promptEvent = window.deferredPrompt;
        if (promptEvent) {
          promptEvent.prompt();
          const result = await promptEvent.userChoice;
          if (result.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          window.deferredPrompt = null;
        }
    });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
        console.log('App installed successfully');
    });
