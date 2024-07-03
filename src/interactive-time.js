const currentTime = document.getElementById('current-time');
const footer = document.getElementById('display-year');
let time = new Date ();

footer.innerText = time.getFullYear();


const displayCurrentTime = setInterval(()=>{

    let time = new Date();

    currentTime.innerText = time.toLocaleTimeString() + ' ' + 'CET';
}, 1000) 