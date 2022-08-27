$(document).ready(function() {

    all_albums = {}
    current_album = {}

    function shuffle_array(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return(array);
    }


    function show_album(album_name) {
        

        current_album = all_albums[album_name]

        var template = $("#album-template").html();
        var text = Mustache.render(template, shuffle_array(current_album));
        $(".album-container").html(text);

        $("#portfolio-grid-section").hide()

        var elements = document.querySelectorAll( '.intense-img' );
      Intense( elements );

    }

  // load the publications
   $.ajax({
    url: "works_list.json",
    type: 'GET',
    dataType: 'json',
    async: false,
    success: function (works) {
      

      var template = $("#works-template").html();
      var text = Mustache.render(template, shuffle_array(works));
      $(".works-container").html(text);

      $(".show_more_button").click(function(event) {
        var id = $(this).attr('id');
        console.log(id);
        if (all_albums) {
            if (all_albums.hasOwnProperty(id)) {
                show_album(id)
            }
        }
    });

     

    }
});
 // load the publications
 $.ajax({
    url: "albums.json",
    type: 'GET',
    dataType: 'json',
    async: false,
    success: function (albums) {
        all_albums = albums
        console.log(all_albums)
    }
});



})