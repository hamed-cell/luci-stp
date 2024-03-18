const answers = [
    "t'as missclick ouuuuu?",
    "WSH CEST BON arrete de troll ??",
    "attend t'es sur sur sur sur sur sur ???",
    "t'as besoin de temps pour reflechir je pense?",
    "c'est parce que j'ai payée les 50 sub ?",
    " C BON j'vais payée les 50sub... maintenant choisi oui",
    "???????? tu veux qu'on en parle ?",
    "non arrete j'vais commencer a croire que tu m'aime pas la ",
    "Ok maintenant c'est blessant!",
    "wsh arrete j'ai dis c'est blessant de fou choisis oui!",
    "remi caca ptdr",
    "AHRHEAHEHRHAHRHAHRRH!",
    "arrete ce que tu fais par pitiée..Remi caca ptdr",
    "Ok tsée quoi on va recommencer .."
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./public/images/giphy (1).gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        alert(answers[i]);
        i = 0;
        no_button.innerHTML = "No";
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});
no_button.addEventListener('click', () => {
    // Logique existante pour changer la taille et le texte...

    // Appliquez l'animation de rebond
    yes_button.style.animation = 'none'; // Réinitialise l'animation
    setTimeout(() => {
        yes_button.style.animation = 'bounce 0.5s ease';
    }, 10); // Un léger délai pour s'assurer que l'animation se réapplique

    // Autres modifications...
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "/public/images/";
    refreshBanner();
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});
no_button.addEventListener('click', () => {
    // Logique existante pour changer la taille et le texte...

    // Appliquez l'animation de rebond
    yes_button.style.animation = 'none'; // Réinitialise l'animation
    setTimeout(() => {
        yes_button.style.animation = 'bounce 0.5s ease';
    }, 10); // Un léger délai pour s'assurer que l'animation se réapplique

    // Autres modifications...
});


function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}