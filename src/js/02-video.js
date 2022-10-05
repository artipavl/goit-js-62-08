import Player from '@vimeo/player';

const throttle = require('lodash.throttle');

const options = {
  width: 640,
  loop: true,
};

const player = new Player('vimeo-player', options);

let playerTime = 0;

if (localStorage.getItem('videoplayer-current-time')) {
  playerTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
  player.setCurrentTime(playerTime);
}

player.on('timeupdate', throttle(setPlayerSecondsinLS, 1000));

function setPlayerSecondsinLS({seconds}) {
  playerTime = seconds;
  localStorage.setItem('videoplayer-current-time', JSON.stringify(playerTime));
}
