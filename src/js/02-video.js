import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const frame = document.querySelector('#vimeo-player');
const player = new Player(frame);
const KEY = 'videoplayer-current-time';
let currentTime = localStorage.getItem(KEY);
if (!currentTime) {
  currentTime = 0;
}

player.setCurrentTime(currentTime);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem(KEY, data.seconds);
}
