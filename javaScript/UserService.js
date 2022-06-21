var UserService = {
    init: function () {
        var token = localStorage.getItem("token");
        if (token) {
            window.location.replace("homepage.html");
        }


        $('#loginForm').validate({
            submitHandler: function (form) {
                var user = Object.fromEntries((new FormData(form)).entries());
                UserService.login(user);
            }
        });

        $('#registerForm').validate({
            submitHandler: function (form) {
                var user = {};
                user.name = $('#registerName').val();
                user.surname = $('#registerSurname').val();
                user.username = $('#registerUsername').val();
                user.password = $('#registerPassword').val();
                user.email = $('#registerEmail').val();
                user.dateOfBirth = $('#registerDateOfBirth').val();
                user.photo=$('#photo').val();
                UserService.register(user);
            }
        });

    },
    login: function (user) {
        $.ajax({
            type: "POST",
            url: ' rest/login',
            data: JSON.stringify(user),
            contentType: "application/json",
            dataType: "json",

            success: function (data) {
                console.log(data);
                localStorage.setItem("token", data.token);
                window.location.replace("homepage.html");

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
            }
        });
    },

    logout: function () {
        localStorage.clear();
        window.location.replace("index.html");
    },

    register: function (user) {
        $.ajax({
            type: "POST",
            url: ' rest/register',
            data: JSON.stringify(user),
            contentType: "application/json",
            dataType: "json",

            success: function (data) {
                $('#SignUpModal').modal('toggle');
                localStorage.setItem("token", data.token);
                toastr.success('You have been succesfully registered.');
                localStorage.clear();

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                toastr.error(XMLHttpRequest.responseJSON.message);
            }
        });
    },
    getID: function () {
        var result = "";
        $.ajax({
            type: "GET",
            url: ' rest/id',
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                result = data;
            }
        });
        return result;
    },

    getFirstName: function () {
      if(localStorage.hasOwnProperty('name'))
      {
           $("#profileFirstName").text(localStorage.getItem("name"));
           $.ajax({
               type: "GET",
               url: ' rest/firstname',
               beforeSend: function (xhr) {
                   xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
               },
               success: function (data) {
                   $('#editFirstName').val(data);
               }
           });

      }
      else {
        $.ajax({
            type: "GET",
            url: ' rest/firstname',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileFirstName').text(data);
                $('#editFirstName').val(data);
            }
        });
    }
    },

    getLastName: function () {
      if(localStorage.hasOwnProperty('surname'))
      {
           $("#profileLastName").text(localStorage.getItem("surname"));
           $.ajax({
               type: "GET",
               url: ' rest/lastname',
               beforeSend: function (xhr) {
                   xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
               },
               success: function (data) {
                   $('#editLastName').val(data);
               }
           });

      }
      else {
        $.ajax({
            type: "GET",
            url: ' rest/lastname',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileLastName').text(data);
                $('#editLastName').val(data);
            }
        });
    }
    },

    getUsername: function () {
      if(localStorage.hasOwnProperty('username'))
      {
           $("#profileUsername").text(localStorage.getItem("username"));
           $.ajax({
               type: "GET",
               url: ' rest/username',
               beforeSend: function (xhr) {
                   xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
               },
               success: function (data) {
                   $('#editUsername').val(data);
               }
           });
      }
      else {
        $.ajax({
            type: "GET",
            url: ' rest/username',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileUsername').text(data);
                $('#editUsername').val(data);

            }
        });
    }
    },

    getMainUsername: function () {
      if(localStorage.hasOwnProperty('username'))
      {
           $("#mainUsername").text(localStorage.getItem("username"));

      }
      else {
        $.ajax({
            type: "GET",
            url: ' rest/username',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#mainUsername').text(data);
            }
        });
    }
    },

    getEmail: function () {
      if(localStorage.hasOwnProperty('email'))
      {
           $("#profileEmail").text(localStorage.getItem("email"));
           $.ajax({
               type: "GET",
               url: ' rest/email',
               beforeSend: function (xhr) {
                   xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
               },
               success: function (data) {
                   $('#editEmail').val(data);
               }
           });

      }
      else {
        $.ajax({
            type: "GET",
            url: ' rest/email',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileEmail').text(data);
                $('#editEmail').val(data);
            }
        });
    }
    },

    getDateOfBirth: function () {
      if(localStorage.hasOwnProperty('dateOfBirth'))
      {
           $("#profileDateOfBirth").text(localStorage.getItem("dateOfBirth"));
           $.ajax({
               type: "GET",
               url: ' rest/dob',
               beforeSend: function (xhr) {
                   xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
               },
               success: function (data) {
                   $('#profileDateOfBirth').text(data);
                   $('#editDateOfBirth').val(data);
               }
           });

      }
      else {
        $.ajax({
            type: "GET",
            url: ' rest/dob',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileDateOfBirth').text(data);
                $('#editDateOfBirth').val(data);
            }
        });
    }
    },
    getPhoto: function() {

      if(localStorage.hasOwnProperty('profilePicture'))
      {
        document.getElementById('profilepicture').src =localStorage.getItem('profilePicture');
        document.getElementById('profilepictureedit').src =localStorage.getItem('profilePicture');

      }
      else {
        $.ajax({
            url: ' rest/photo',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (result) {
                document.getElementById('profilepicture').src = result;
                document.getElementById('profilepictureedit').src =result;


            }
        });
      }

    },
    getPhotoHomepage: function() {
      if(localStorage.hasOwnProperty('profilePicture'))
      {

        document.getElementById('smallphoto').src = localStorage.getItem('profilePicture');
        document.getElementById('bigphoto').src = localStorage.getItem('profilePicture');
      }
      else {
        $.ajax({
            url: ' rest/photo',
            type: 'GET',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (result) {
              document.getElementById('smallphoto').src = result;
              document.getElementById('bigphoto').src = result;
            }
        });
      }

    },
    choosePhoto: function(id) {
      var photoid = document.getElementById(id);
      var url = photoid.getAttribute("src");
      $('#photo').attr('value', url);
      $('#avatarModal').modal("hide");
      $('#SignUpModal').modal("show");
      document.getElementById('chosenavatar').style.visibility = "visible";
    },

    getHomepageUsername: function () {
      $.ajax({
        type: "GET",
        url: ' rest/username',
        beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
        },
        success: function (data) {
          $('#usernamesmall').text(data);
          $('#usernamelarge').text(data);
          $('#welcomeback').text("Welcome back, " + data);
        }
      });
    },
    chooseAvatar: function(id) {
     var photoid = document.getElementById(id);
     var url = photoid.getAttribute("src");
     $('#AvatarModal').modal("hide");
     $('#EditProfileModal').modal("show");
     $('#profilepictureedit').attr('src', url);
   },

    deleteProfile: function()
    {
      var id=UserService.getID();
      $.ajax({
          type: "DELETE",
          url: ' rest/user/ ' +id,
          beforeSend: function (xhr) {
              xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
          },
          success: function (data) {
            localStorage.clear();
            window.location.replace("index.html");
          }
      });

    },
    editUser: function() {
     var editUser = {};
     editUser.name = $('#editFirstName').val();
     editUser.surname = $('#editLastName').val();
     editUser.username = $('#editUsername').val();
     editUser.email = $('#editEmail').val();
     editUser.dateOfBirth = $('#editDateOfBirth').val();
     editUser.photo = $('#profilepictureedit').attr('src');
     var id = UserService.getID();

     $.ajax({
       url: ' rest/user/' + id,
       type: 'PUT',
       data: JSON.stringify(editUser),
       contentType: "application/json",
       dataType: "json",
       beforeSend: function (xhr) {
         xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
       },
       success: function (result) {
           localStorage.setItem("profilePicture",editUser.photo);
           localStorage.setItem("name",editUser.name);
           localStorage.setItem("surname",editUser.surname);
           localStorage.setItem("username",editUser.username);
           localStorage.setItem("email",editUser.email);
           localStorage.setItem("dateOfBirth",editUser.dateOfBirth);
            $('#profilepictureedit').attr('src',localStorage.getItem("profilePicture"));
            $("#profileFirstName").text(localStorage.getItem("name"));
            $("#profileLastName").text(localStorage.getItem("surname"));
            $("#profileUsername").text(localStorage.getItem("username"));
            $("#profileEmail").text(localStorage.getItem("email"));
            $("#profileDateOfBirth").text(localStorage.getItem("dateOfBirth"));
            $("#mainUsername").text(localStorage.getItem("username"));

            $("#EditProfileModal").modal('hide');
       }
     });
   }

}
