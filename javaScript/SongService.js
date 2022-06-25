//Selectors
const songs = [];
const musicContainer = document.querySelector('.footer');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');
const timeCurrent = document.querySelector('#current-time');
const timeTotal = document.querySelector('#total-time');
const soundContainer = document.querySelector('.sound-container');
const volume = document.querySelector('.sound-progress');
const volumeBtn = document.querySelector('#volume');

//Keep track of songs
let songIndex = 2;

var SongService = {

  loadSong: function (song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  },

  playSong: function () {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
  },

  pauseSong: function () {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
  },

  prevSong: function () {
    const isPlaying = musicContainer.classList.contains('play');
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    SongService.loadSong(songs[songIndex]);

    if (isPlaying) {
      SongService.playSong();
    } else {
      SongService.pauseSong();
    }
  },

  nextSong: function () {
    const isPlaying = musicContainer.classList.contains('play');
    songIndex++;

    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    SongService.loadSong(songs[songIndex]);

    if (isPlaying) {
      SongService.playSong();
    } else {
      SongService.pauseSong();
    }
  },

  seekTimeUpdate: function () {
    var currentMins = Math.floor(audio.currentTime / 60);
    var currentSecs = Math.floor(audio.currentTime - currentMins * 60);
    var durationMins = Math.floor(audio.duration / 60);
    var durationSecs = Math.floor(audio.duration - durationMins * 60);

    if (currentSecs < 10) { currentSecs = "0" + currentSecs; }
    if (durationSecs < 10) { durationSecs = "0" + durationSecs; }
    if (currentMins < 10) { currentMins = "0" + currentMins; }
    if (durationMins < 10) { durationMins = "0" + durationMins; }

    timeCurrent.innerHTML = currentMins + ":" + currentSecs;
    timeTotal.innerHTML = durationMins + ":" + durationSecs;
  },

  updateProgress: function (e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;

    progress.style.width = `${progressPercent}%`;
  },

  setProgress: function (e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  },

  muteVolume: function () {
    musicContainer.classList.add('muted');
    volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up');
    volumeBtn.querySelector('i.fas').classList.add('fa-volume-mute');

    audio.muted = true;
  },

  unmuteVolume: function () {
    musicContainer.classList.remove('muted');
    volumeBtn.querySelector('i.fas').classList.remove('fa-volume-mute');
    volumeBtn.querySelector('i.fas').classList.add('fa-volume-up');

    audio.muted = false;
  },

  setVolume: function (e) {
    const clickX = e.offsetX;
    if (clickX < 60) {
      audio.volume = clickX / 100;
      volumeBtn.querySelector('i.fas').classList.remove('fa-volume-up');
      volumeBtn.querySelector('i.fas').classList.add('fa-volume-down');
    } else {
      audio.volume = clickX / 100;
      volumeBtn.querySelector('i.fas').classList.remove('fa-volume-down');
      volumeBtn.querySelector('i.fas').classList.add('fa-volume-up');
    }
  },

  updateVolume: function (e) {
    const clickX = e.offsetX;
    if (clickX <= 100) {
      volume.style.width = `${clickX}%`;
    }
  },

  getSongs: function () {
    $.ajax({
      type: "GET",
      url: ' rest/song',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          songs.push(data[i].title);
          var html = "";
          html += `<div class="card bg-dark text-white">
              <img class="card-img" src="`+ data[i].cover + `.jpg" alt="Card image" style="opacity:0.8;">
              <div class="card-img-overlay">
                <h5 class="card-title mt-5" style="text-align: center">`+ data[i].title + `</h5>
                <div class="form-group" style="text-align: center">
                  <button type="button" class="btn btn-default btn-sm shadow-none" onClick="SongService.getRandomSong(`+ i + `)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-play"
                      viewBox="0 0 16 16">
                      <path
                        d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg>
                  </button>
                </div>
              </div>
          </div>`;
          $("#1-carousel-item-" + (i + 1)).html(html);
          $("#2-carousel-item-" + (i - 8)).html(html);
          $("#3-carousel-item-" + (i - 16)).html(html);
          $("#4-carousel-item-" + (i - 24)).html(html);
        }
      }
    });
  },

  getRandomSong: function (id) {
    const player = document.querySelector('#bottomPlayer');
    player.style.display = `flex`;
    songIndex = id;
    SongService.loadSong(songs[songIndex]);
    SongService.playSong();
  },


  getSongID: function (name) {
    var result = "";
    $.ajax({
      type: "GET",
      url: ' rest/song/getsong/' + name,
      async: false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        result = data.id;
      }

    });
    return result;
  }
}


//Event Listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    SongService.pauseSong();
  } else {
    SongService.playSong();
  }
});

prevBtn.addEventListener('click', SongService.prevSong);
nextBtn.addEventListener('click', SongService.nextSong);

audio.addEventListener('timeupdate', SongService.updateProgress);

progressContainer.addEventListener('click', SongService.setProgress);

soundContainer.addEventListener('click', SongService.setVolume);
soundContainer.addEventListener('click', SongService.updateVolume);

audio.addEventListener('timeupdate', SongService.seekTimeUpdate);

audio.addEventListener('ended', SongService.nextSong);

volumeBtn.addEventListener('click', () => {
  const isMuted = musicContainer.classList.contains('muted');

  if (isMuted) {
    SongService.unmuteVolume();
  } else {
    SongService.muteVolume();
  }
});
