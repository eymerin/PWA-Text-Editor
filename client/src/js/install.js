const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Stores events when triggered
    window.deferredPrompt = event;

    // Unhides button
    butInstall.classList.toggle('hidden', false);
});

//  Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Defines promptEvent variable
    const promptEvent = window.deferredPrompt;

    // Exits function if no promptEvent
    if (!promptEvent) {
        return;
    }

    // Shows prompt
    promptEvent.prompt();

    // Resets deferred prompt variable to null
    window.deferredPrompt = null;

    // Hides Button
    butInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => { 
    window.deferredPrompt = null;
});
