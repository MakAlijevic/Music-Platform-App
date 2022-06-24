function listPlaylists() {
  $.ajax({
    type: "GET",
    url: ' rest/playlists',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      $("#submenu3").html("");
      var html = "";
      for (let i = 0; i < data.length; i++) {
        html += `
            <li class="w-100">
              <button class="nav-link px-0"> <span class="d-none d-sm-inline" style="color:white;" onClick="getPlaylistID(`+ data[i].id + `)"">` + data[i].name + `</span></button>
            </li>
          `;

      }
      $("#submenu3").html(html);
    }
  });
}

function listPlaylistsModal() {
  $.ajax({
    type: "GET",
    url: ' rest/playlists',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      var html = `<a href="#" onClick="addNewPlaylistModal()" class="list-group-item list-group-item-action list-group-item-dark">✚ New playlist</a>`
      for (let i = 0; i < data.length; i++) {
        html += `
        <a href="#" onClick="addToPlaylist(`+ data[i].id + `)" class="list-group-item list-group-item-action list-group-item-dark">♫ ` + data[i].name + `</a>
          `;

      }
      $("#listgroup").html(html);
    }
  });
}


function getPlaylistID(id) {
  localStorage.setItem("playlistID", id);
  showPlaylist();
}

function addNewPlaylist() {
  var playlist = {};
  playlist.userID = UserService.getID();
  playlist.name = $('#playlistName').val();
  $.ajax({
    type: "POST",
    url: ' rest/playlists',
    data: JSON.stringify(playlist),
    contentType: "application/json",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      $('#addPlaylistModal').modal('hide');
      addToPlaylist(data.id);
    }
  });
}


function addNewPlaylistModal() {
  $('#addPlaylistModal').modal('toggle');
  $('#addToPlaylistModal').modal('hide');

}

function addToPlaylist(id) {
  var playlist_songs = {};
  playlist_songs.playlistID = id;
  playlist_songs.songID = getSongID(title.innerText);
  $.ajax({
    type: "POST",
    url: ' rest/addsongs',
    data: JSON.stringify(playlist_songs),
    contentType: "application/json",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      $('#addToPlaylistModal').modal('hide');
    }
  });
}
function getPlaylists() {
  $.ajax({
    type: "GET",
    url: ' rest/playlists',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      $("#playlists").html("");
      var html = "";
      for (let i = 0; i < data.length; i++) {
        html += `
        <div class="col mt-3">
          <h4 class="text-center mt-5">`+ data[i].name + `</h4>
           <a href="#" onClick="getPlaylistID(`+ data[i].id + `)">
            <img src="" id="`+ data[i].id + `" class="img-fluid" style="width:400px; height:300px;"alt="playlistPicture">
             </a>
        </div>
          `;

        getSrc(data[i].id);
        $("#playlists").html(html);
      }

    }
  });
}

function getSrc(id) {
  $.ajax({
    type: "GET",
    url: ' rest/playlistsongs/' + id,
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      for (var i = 0; i < 1; i++) {
        $("#" + id).attr('src', data[i].cover + ".jpg");
      }

    }

  });
}

function getPlaylist() {

  $.ajax({
    type: "GET",
    url: ' rest/playlists',
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].id == localStorage.getItem("playlistID")) {
          $('#playlistname').text(data[i].name);
          getPlaylistSongs(data[i].id);
        }

      }
    }
  });
}


function getPlaylistSongs(id) {

  $.ajax({
    type: "GET",
    url: ' rest/playlistsongs/' + id,
    beforeSend: function (xhr) {
      xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
    },
    success: function (data) {
      var html = "";
      for (let i = 0; i < data.length; i++) {
        html += `<button type="button" class="pb-4 list-group-item list-group-item-action bg-transparent"
                  aria-current="true" style="color: white;">
                  <div class="row mt-3">
                      <div class="col-1">
                          <img class="search-cover" src="`+ data[i].cover + `.jpg" alt="Card image"
                              height="90px" width="90px">
                      </div>
                      <div class="col-9 ms-5" style="font-size: 25px; padding: 10px 0;">
                          `+ data[i].title + `<br>
                          <div style="font-size: 15px; color: gray;">
                          `+ data[i].duration + `
                          </div>
                      </div>
                  </div>
              </button>`;
        $("#playlistList").html(html);
      }

    }
  });
}
