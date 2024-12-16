let myLinks = ['https://www.facebook.com/', 'https://www.youtube.com/', 'https://www.instagram.com/', 'https://www.tiktok.com/', 'https://www.x.com/', 'https://www.linkedin.com/']

function manageLinks() {
    const myRandomNumber = Math.floor(Math.random() * ((myLinks.length -1) - 0 + 1) - 0);
    // console.log(myRandomNumber);
    document.getElementById('butto').href = myLinks[myRandomNumber];
}

setInterval(manageLinks, 1000);