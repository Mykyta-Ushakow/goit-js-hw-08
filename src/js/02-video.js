import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(timeSaver, 1000));

function timeSaver(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}

window.addEventListener("load", setPlayerTime);

function setPlayerTime(event) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
}