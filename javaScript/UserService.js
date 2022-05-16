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
    }
}