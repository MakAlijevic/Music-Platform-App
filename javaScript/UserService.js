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
        $.ajax({
            type: "GET",
            url: ' rest/firstname',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileFirstName').text(data);
            }
        });
    },

    getLastName: function () {
        $.ajax({
            type: "GET",
            url: ' rest/lastname',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileLastName').text(data);
            }
        });
    },

    getUsername: function () {
        $.ajax({
            type: "GET",
            url: ' rest/username',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileUsername').text(data);
            }
        });
    },

    getMainUsername: function () {
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
    },

    getEmail: function () {
        $.ajax({
            type: "GET",
            url: ' rest/email',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileEmail').text(data);
            }
        });
    },

    getDateOfBirth: function () {
        $.ajax({
            type: "GET",
            url: ' rest/dob',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
            },
            success: function (data) {
                $('#profileDateOfBirth').text(data);
                console.log(data);
            }
        });
    }
}
