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
    }
}