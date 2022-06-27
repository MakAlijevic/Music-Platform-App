var SearchService = {
    init: function () {
        //prevents form from reloading page
        $("#searchBar").keypress(function (e) {
            if (e.which == 13)
                return false;
        });

        var searchQuery = document.getElementById("searchInput");
        $('#searchBar').keypress(function (e) {
            if (e.key === 'Enter') {
                localStorage.setItem("searchQuery", searchQuery.value);
                SinglePageService.showSearch();
                $('#spinner').removeClass("d-none");
                $('#searchList').addClass("d-none");

                setTimeout(function () {
                    $('#searchList').removeClass("d-none");
                    $('#spinner').addClass("d-none");
                    var searchParam = localStorage.getItem("searchQuery");
                    $.ajax({
                        type: "GET",
                        url: ' rest/song/search/' + searchParam,
                        beforeSend: function (xhr) {
                            xhr.setRequestHeader('Authorization', localStorage.getItem('token'));
                        },
                        success: function (data) {
                            var html = "";
                            if (data.length == 0) {
                                $("#searchList").addClass("d-none");
                            }
                            for (let i = 0; i < data.length; i++) {
                                $("#searchList").removeClass("d-none");
                                html += `<button type="button" class="btn btn-default pb-4 list-group-item list-group-item-action bg-transparent"
                    aria-current="true" style="color: white;" onClick="SongService.getRandomSong(` + data[i].id + `-1)">
                    <div class="row mt-3">
                        <div class="col-1">
                            <img class="search-cover" src="`+ data[i].cover + `.jpg" alt="Card image"
                                height="90px" width="90px" style="opacity: 0.8;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" style="position: absolute; top: 53px; left: 43px;" class="bi bi-play"
                      viewBox="0 0 16 16">
                      <path
                        d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
                    </svg>
                        </div>
                        <div class="col-9 ms-5" style="font-size: 25px; padding: 10px 0;">
                            `+ data[i].title + `<br>
                            <div style="font-size: 15px; color: gray;">
                            `+ data[i].duration + `
                            </div>
                        </div>
                    </div>
                </button>`;
                                $("#searchList").html(html);
                            }
                        }
                    });
                }, 650);
            }
        });
        localStorage.removeItem("searchQuery");
    }
}