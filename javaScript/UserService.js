var UserService = {
    init: function () {
        var token = localStorage.getItem("token");
        if (token) {
            window.location.replace("homepage.html");
        }

        UserService.getCountriesOnRegister();

        $('#loginForm').validate({
            submitHandler: function (form) {
                var user = Object.fromEntries((new FormData(form)).entries());
                UserService.login(user);
            }
        });

        $('#registerForm').validate({
          rules: {
            firstName: {
                minlength: 2,
                required: true,
                maxlength: 35,
            },
            lastName: {
                minlength: 2,
                required: true,
                maxlength: 35,
            },
            username: {
                minlength: 4,
                required: true,
                maxlength: 20,
            },
            email: {
                required: true,
                email:true,

            },
            password: {
                minlength: 8,
                maxlength: 30,
                required: true,
            }
        },
            submitHandler: function (form) {
                var user = {};
                user.name = $('#registerName').val();
                user.surname = $('#registerSurname').val();
                user.username = $('#registerUsername').val();
                user.password = $('#registerPassword').val();
                user.email = $('#registerEmail').val();
                user.dateOfBirth = $('#registerDateOfBirth').val();
                user.photo = $('#photo').val();
                user.countryID = localStorage.getItem($('#countryMenuButton').text());
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
        if (localStorage.hasOwnProperty('name')) {
            $("#profileFirstName").text(localStorage.getItem("name"));
              $('#editFirstName').val(localStorage.getItem("name"));

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
        if (localStorage.hasOwnProperty('surname')) {
            $("#profileLastName").text(localStorage.getItem("surname"));
              $('#editLastName').val(localStorage.getItem("surname"));

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
        if (localStorage.hasOwnProperty('username')) {
            $("#profileUsername").text(localStorage.getItem("username"));
            $('#editUsername').val(localStorage.getItem("username"));
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
        if (localStorage.hasOwnProperty('username')) {
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
        if (localStorage.hasOwnProperty('email')) {
            $("#profileEmail").text(localStorage.getItem("email"));
            $('#editEmail').val(localStorage.getItem("email"));
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
        if (localStorage.hasOwnProperty('dateOfBirth')) {
            $("#profileDateOfBirth").text(localStorage.getItem("dateOfBirth"));
            $('#editDateOfBirth').val(localStorage.getItem("dateOfBirth"));
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

    getCountry: function () {
        if (localStorage.hasOwnProperty('countryID')) {
            $('#profileCountry').text(UserService.getCountryById(localStorage.getItem("countryID")));
            $("#editCountry").text(UserService.getCountryById(localStorage.getItem("countryID")));

        }
        else {
            $.ajax({
                type: "GET",
                url: ' rest/country/user',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
                },
                success: function (data) {
                    $('#profileCountry').text(UserService.getCountryById(data))
                    $("#editCountry").text(UserService.getCountryById(data));
                }
            });
        }
    },

    getCountryById: function (id) {
        var name = "";
        $.ajax({
            type: "GET",
            url: ' rest/country/' + id,
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                name = data.name;
            }
        });
        return name;
    },

    getPhoto: function () {
        if (localStorage.hasOwnProperty('profilePicture')) {
            $('#profilepicture').attr("src", localStorage.getItem('profilePicture'));
            $('#profilepictureedit').attr("src", localStorage.getItem('profilePicture'));

        }
        else {
            $.ajax({
                url: ' rest/photo',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
                },
                success: function (result) {
                    $('#profilepicture').attr("src", result);
                    $('#profilepictureedit').attr("src", result);
                }
            });
        }

    },
    getPhotoHomepage: function () {
        if (localStorage.hasOwnProperty('profilePicture')) {
            $('#smallphoto').attr("src", localStorage.getItem('profilePicture'));
            $('#bigphoto').attr("src", localStorage.getItem('profilePicture'));
        }
        else {
            $.ajax({
                url: ' rest/photo',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
                },
                success: function (result) {
                    $('#smallphoto').attr("src", result);
                    $('#bigphoto').attr("src", result);
                }
            });
        }

    },
    getPhotosProfile: function () {
        if (localStorage.hasOwnProperty('profilePicture')) {

            $('#smallphoto').attr("src", localStorage.getItem('profilePicture'));
            $('#profilepicture').attr("src", localStorage.getItem('profilePicture'));
        }
        else {
            $.ajax({
                url: ' rest/photo',
                type: 'GET',
                beforeSend: function (xhr) {
                    xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
                },
                success: function (result) {
                    $('#smallphoto').attr("src", result);
                    $('#profilepicture').attr("src", result);
                }
            });
        }

    },
    choosePhoto: function (id) {
        var photoid = $('#' + id);
        var url = photoid.attr("src");
        $('#photo').attr('value', url);
        $('#avatarModal').modal("hide");
        $('#SignUpModal').modal("show");
        $('#chosenavatar').css("visibility", "visible");
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

    chooseAvatar: function (id) {
        var photoid = $("#" + id);
        var url = photoid.attr("src");
        $('#AvatarModal').modal("hide");
        $('#EditProfileModal').modal("show");
        $('#profilepictureedit').attr('src', url);
    },

    deleteUser: function () {
        var id = UserService.getID();
        $.ajax({
            type: "DELETE",
            url: ' rest/user/' + id,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                localStorage.clear();
                window.location.replace("index.html");
            }
        });

    },

    editUser: function () {
        var editUser = {};
        editUser.name = $('#editFirstName').val();
        editUser.surname = $('#editLastName').val();
        editUser.username = $('#editUsername').val();
        editUser.email = $('#editEmail').val();
        editUser.dateOfBirth = $('#editDateOfBirth').val();
        editUser.photo = $('#profilepictureedit').attr('src');
        editUser.countryID = UserService.getCountryByName($('#editCountry').text());
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
                localStorage.setItem("profilePicture", editUser.photo);
                localStorage.setItem("name", editUser.name);
                localStorage.setItem("surname", editUser.surname);
                localStorage.setItem("username", editUser.username);
                localStorage.setItem("email", editUser.email);
                localStorage.setItem("dateOfBirth", editUser.dateOfBirth);
                localStorage.setItem("countryID", editUser.countryID);
                $('#profilepictureedit').attr('src', localStorage.getItem("profilePicture"));
                $("#profileFirstName").text(localStorage.getItem("name"));
                $("#profileLastName").text(localStorage.getItem("surname"));
                $("#profileUsername").text(localStorage.getItem("username"));
                $("#profileEmail").text(localStorage.getItem("email"));
                $("#profileDateOfBirth").text(localStorage.getItem("dateOfBirth"));
                $("#mainUsername").text(localStorage.getItem("username"));
                $('#profileCountry').text(UserService.getCountryById(localStorage.getItem("countryID")));
                window.location.reload();
            }
        });
    },

    getCountriesOnRegister: function () {
        $.ajax({
            type: "GET",
            url: ' rest/country',
            async: false,
            success: function (data) {
                var html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `<li><a class="dropdown-item" onClick="UserService.setCountry('` + data[i].name + `')">` + data[i].name + `</a></li>`;
                    localStorage.setItem(data[i].name, data[i].id);
                }
                $("#countryDropdown").html(html);
            }
        });
    },

    getCountries: function () {
        $.ajax({
            type: "GET",
            url: ' rest/country',
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                var html = "";
                for (let i = 0; i < data.length; i++) {
                    html += `<li><a class="dropdown-item" onClick="UserService.setCountry('` + data[i].name + `')">` + data[i].name + `</a></li>`;
                }
                $("#countryDropdown").html(html);
            }
        });
    },

    setCountry: function (name) {
        $("#countryMenuButton").text(name);
        $("#editCountry").text(name);
    },

    getCountryByName: function (name) {
        var id = "";
        $.ajax({
            type: "GET",
            url: ' rest/country/getcountry/' + name,
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                id = data.id;
            }
        });
        return id;
    }
}
