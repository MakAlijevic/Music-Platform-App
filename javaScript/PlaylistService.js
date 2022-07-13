var PlaylistService = {
  //dropdown playlists
  listPlaylists: function () {
    $.ajax({
      type: "GET",
      url: ' rest/playlists',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        $("#submenu3").html("");
        var html = `  <li class="w-100">
            <h5 class="nav-link px-0"> <span class="d-none d-sm-inline" style="color:#b3b3b3; text-align:center;">  ... </span></h5>
          </li> `
        for (let i = 0; i < data.length; i++) {
          html += `
            <li class="w-100">
              <button class="nav-link px-0"> <span class="d-none d-sm-inline" style="color:#b3b3b3;" onClick="PlaylistService.getPlaylist(`+ data[i].id + `)"">  ▸ ` + data[i].name + `</span></button>
            </li>
          `;

        }
        $("#submenu3").html(html);
      }
    });
  },
//add playlist modal
  listPlaylistsModal: function () {
    $.ajax({
      type: "GET",
      url: ' rest/playlists',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        var html = `<a href="#" onClick="PlaylistService.addNewPlaylistModal()" class="list-group-item list-group-item-action list-group-item-dark">✚ New playlist</a>`
        for (let i = 0; i < data.length; i++) {
          html += `
        <a href="#" onClick="PlaylistService.addToPlaylist(`+ data[i].id + `)" class="list-group-item list-group-item-action list-group-item-dark">♫ ` + data[i].name + `</a>
          `;

        }
        $("#listgroup").html(html);
      }
    });
  },


  addNewPlaylist: function () {
    var playlist = {};
    playlist.userID = UserService.getID();
    playlist.name = $('#playlistName').val();
    if(PlaylistService.checkIfExists(playlist.name))
    {
      alert("Playlist with this name already exists!");
    }
    else {
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
          PlaylistService.addToPlaylist(data.id);
          window.location.reload();

        }
      });
    }
  },

  checkIfExists: function(name) {
    var check=false;
    $.ajax({
      type: "GET",
      url: ' rest/playlists',
      async:false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
       for (let i = 0; i < data.length; i++) {
         if(data[i].name==name)
         {
           check=true;
         }
      }
    }
    });
      return check;
  },

  addNewPlaylistModal: function () {
    $('#addPlaylistModal').modal('toggle');
    $('#addToPlaylistModal').modal('hide');
  },

  addToPlaylist: function (id) {
    var playlist_songs = {};
    playlist_songs.playlistID = id;
    playlist_songs.songID = SongService.getSongID(title.innerText);
    $.ajax({
      type: "POST",
      url: ' rest/playlistsongs',
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
  },
//on profile
  getPlaylists: function () {
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
           <a onClick="PlaylistService.getPlaylist(`+ data[i].id + `)">
            <img src="" id="`+ data[i].id + `" class="img-fluid" style="width:400px; height:300px;"alt="playlistPicture">
             </a>
        </div>
          `;
          PlaylistService.getSrc(data[i].id);
          $("#playlists").html(html);
        }
      }
    });
  },

  getSrc: function (id) {
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
  },
//go to playlist
  getPlaylist: function (id) {
    $.ajax({
      type: "GET",
      url: ' rest/playlists',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == id) {
            SinglePageService.showPlaylist();
            $('#playlistname').text(data[i].name);
            PlaylistService.getPlaylistSongs(data[i].id);
          }
        }
      }
    });
  },


  getPlaylistSongs: function (id) {
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
                  aria-current="true" style="color: white;" onClick="SongService.getPlaylistSong(` + id + `, ` + i + `)">
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
        $("#playPlaylistBtn").attr("onclick", "SongService.playPlaylist(" + id + ")");
      }
    });
  },
  getPlaylistID: function () {
    var id = "";
    $.ajax({
      type: "GET",
      url: ' rest/playlists',
      async: false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          if (data[i].name == $('#playlistname').text()) {
            id = data[i].id;
          }
        }
      }
    });
    return id;
  },
  deletePlaylist: function () {
    var id = PlaylistService.getPlaylistID();
    $.ajax({
      type: "DELETE",
      url: ' rest/playlists/' + id,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
      },
      success: function (data) {
        window.location.reload();
      }
    });
  }
}
