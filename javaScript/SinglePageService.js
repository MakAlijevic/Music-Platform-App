var SinglePageService = {
    showAboutUs: function () {
        $("#aboutUs").removeClass("d-none");
        $("#homepage").addClass("d-none");
        $("#playlist").addClass("d-none");
        $("#search").addClass("d-none");
        $("#profile").addClass("d-none");
        $("#leftNavBar").removeClass("d-none");
    },

    showHomepage: function () {
        $("#homepage").removeClass("d-none");
        $("#aboutUs").addClass("d-none");
        $("#playlist").addClass("d-none");
        $("#search").addClass("d-none");
        $("#profile").addClass("d-none");
        $("#leftNavBar").removeClass("d-none");
    },

    showPlaylist: function () {
        $("#playlist").removeClass("d-none");
        $("#aboutUs").addClass("d-none");
        $("#homepage").addClass("d-none");
        $("#search").addClass("d-none");
        $("#profile").addClass("d-none");
        $("#leftNavBar").removeClass("d-none");
    },

    showSearch: function () {
        $("#search").removeClass("d-none");
        $("#playlist").addClass("d-none");
        $("#aboutUs").addClass("d-none");
        $("#homepage").addClass("d-none");
        $("#profile").addClass("d-none");
        $("#leftNavBar").removeClass("d-none");
    },

    showProfile: function () {
        $("#profile").removeClass("d-none");
        $("#search").addClass("d-none");
        $("#playlist").addClass("d-none");
        $("#aboutUs").addClass("d-none");
        $("#homepage").addClass("d-none");
        $("#leftNavBar").addClass("d-none");
    }
}