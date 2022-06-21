
var ProfileService={

   chooseAvatar: function(id) {
    var photoid = document.getElementById(id);
    var url = photoid.getAttribute("src");
    $('#AvatarModal').modal("hide");
    $('#EditProfileModal').modal("show");
    $('#profilepictureedit').attr('src', url);
  },

}
