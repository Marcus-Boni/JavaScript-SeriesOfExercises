function load () {
    let msg = window.document.querySelector('.msg');
    let img = window.document.querySelector('.img');
    let body = window.document.querySelector('.body');
    let data = new Date();
    let hour = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    hour = (hour < 10) ? '0' + hour : hour;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    msg.innerHTML = `A hora atual é: ${hour}: ${minutes}: ${seconds}`;
    
    if (hour >= 5 && hour < 12) {
        img.setAttribute('src', 'style/images/morning-photo.jpg')
        body.classList.add ('morning')
    } else if (hour >= 12 && hour < 18) {
        img.setAttribute('src', 'style/images/evening-photo.jpg')
        body.classList.add ('evening')
    } else if (hour => 18 && hour < 5){
        img.setAttribute('src', 'style/images/night-photo.jpg')
        body.classList.add ('night')
    }
}
setInterval(load, 1000)