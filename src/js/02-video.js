import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(playedVideo, 1000));

const timePlay = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
if (timePlay && timePlay.seconds) {
  player.setCurrentTime(timePlay.seconds);
}

function playedVideo(event) {
  const currentTime = {
    seconds: event.seconds
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
}
