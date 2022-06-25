var SinglePageService = {
    showAboutUs: function () {
        document.getElementById("aboutUs").classList.remove("d-none");
        document.getElementById("homepage").classList.add("d-none");
        document.getElementById("playlist").classList.add("d-none");
        document.getElementById("search").classList.add("d-none");
        document.getElementById("profile").classList.add("d-none");
        document.getElementById("leftNavBar").classList.remove("d-none");
    },

    showHomepage: function () {
        document.getElementById("homepage").classList.remove("d-none");
        document.getElementById("aboutUs").classList.add("d-none");
        document.getElementById("playlist").classList.add("d-none");
        document.getElementById("search").classList.add("d-none");
        document.getElementById("profile").classList.add("d-none");
        document.getElementById("leftNavBar").classList.remove("d-none");
    },

    showPlaylist: function () {
        document.getElementById("playlist").classList.remove("d-none");
        document.getElementById("aboutUs").classList.add("d-none");
        document.getElementById("homepage").classList.add("d-none");
        document.getElementById("search").classList.add("d-none");
        document.getElementById("profile").classList.add("d-none");
        document.getElementById("leftNavBar").classList.remove("d-none");
    },

    showSearch: function () {
        document.getElementById("search").classList.remove("d-none");
        document.getElementById("playlist").classList.add("d-none");
        document.getElementById("aboutUs").classList.add("d-none");
        document.getElementById("homepage").classList.add("d-none");
        document.getElementById("profile").classList.add("d-none");
        document.getElementById("leftNavBar").classList.remove("d-none");
    },

    showProfile: function () {
        document.getElementById("profile").classList.remove("d-none");
        document.getElementById("search").classList.add("d-none");
        document.getElementById("playlist").classList.add("d-none");
        document.getElementById("aboutUs").classList.add("d-none");
        document.getElementById("homepage").classList.add("d-none");
        document.getElementById("leftNavBar").classList.add("d-none");
    }
}