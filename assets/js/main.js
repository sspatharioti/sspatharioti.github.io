jQuery(document).ready(function($) {

  /*======= Paper Requirement Stuff *=======*/

  $('#ab_button').click(function(){

      $("#abstract").slideToggle('medium', function(){

        if ($(this).is(":visible")) {

          $('html,body').animate({
            scrollTop: $('#abstract').offset().top-50},
            'slow');

        } else {

          // $('html,body').animate({
          //   scrollTop: $('#top_ccis').offset().top},
          //   'slow');
        }

      });

  });
  $('#ad_button').click(function(){

    $("#advisor").slideToggle('medium', function(){

      if ($(this).is(":visible")) {

        $('html,body').animate({
          scrollTop: $('#advisor').offset().top-50},
          'slow');

      } else {
        //
        // $('html,body').animate({
        //   scrollTop: $('#top_ccis').offset().top},
        //   'slow');
      }

    });
  });

    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /*======= (Not so) Secret Codes *=======*/

    var combs = [[37,39,37,39], //l,r,l,r
                [39,37,39,37], //r,l,r,l
                [87,79,82,75], //w,o,r,k
                [40,39,39,80], //d,r,r,p (hadoken)
                [67,79,68,69], //c,o,d,e
                [38,38,38,38] //u,u,u,u
              ];
    var sections = [".publications",".presentations",".work",".maps",".latest",".profile-image"]
    var next = [0,0,0,0,0,0];
    $(window).keydown(function(e){
      var key = e.which;

      for (var i = 0; i < combs.length; i++) {

        var ch = combs[i];

      if (key === ch[next[i]])
          next[i]++;
      else
          next[i] = 0;

      if (next[i] == ch.length) {
          $('html,body').animate({
            scrollTop: $(sections[i]).offset().top},
            'slow');
          }

        }
    });

    /*======= Hadoken Hover *=======*/
    $('.hadoken').hover(

               function () {
                 var hadoken = " <i class=\"fa fa-arrow-down\"></i> + <i class=\"fa fa-arrow-right\"></i> + <i class=\"fa fa-arrow-right\"></i> + <b>p</b> </i>";
                 $(".reveal").fadeIn( 500 );
                 $(".reveal").html(hadoken);
               },

               function () {
                 $( ".reveal" ).fadeOut( 800 );
                 $(".reveal").html("");
               }
            );


    // Sections appear on scroll
    //Source:
  //   $(window).scroll( function(){
   //
  //      /* Check the location of each desired element */
  //      $('.appear').each( function(i){
   //
  //          var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
  //          var bottom_of_window = $(window).scrollTop() + $(window).height();
  //          var height_of_object = $(this).outerHeight()
   //
  //          /* If the object is completely visible in the window, fade it it */
  //          if( bottom_of_window >= bottom_of_object ){
   //
  //              $(this).animate({'opacity':'1'},150);
  //          }
   //
  //      });
   //
  //  });

        // by default your element will be hidden
      $('.appear-left').addClass('animated')
      $('.appear-left').css('opacity', 0)
      $('.appear-left').waypoint(function(direction) {
          // animation
          $(this).animate({'opacity':'1'},150);
          $(this).addClass('fadeIn')
      }, {
         offset: function() {
             // The bottom of the element is in view
             return $.waypoints('viewportHeight') - $(this).outerHeight()/2;
          }
      });
      $('.project-zoom').addClass('animated')
      $('.project-zoom').css('opacity', 0)
      $('.project-zoom').waypoint(function(direction) {
          // animation
          $(this).animate({'opacity':'1'},150);
          $(this).addClass('zoomIn')
      }, {
         offset: function() {
             // The bottom of the element is in view
             return $.waypoints('viewportHeight') - $(this).outerHeight()/2;
          }
      });

      // $('.appear-right').addClass('animated')
      // $('.appear-right').css('opacity', 0)
      // $('.appear-right').waypoint(function(direction) {
      //     // animation
      //     $(this).animate({'opacity':'1'},150);
      //     $(this).addClass('fadeInRight')
      // }, {
      //    offset: function() {
      //        // The bottom of the element is in view
      //        return $.waypoints('viewportHeight') - $(this).outerHeight()/2;
      //     }
      // });



    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    // $("#rss-feeds").rss(
    //
    //     //Change this to your own rss feeds
    //     "http://feeds.feedburner.com/TechCrunch/startups",
    //
    //     {
    //     // how many entries do you want?
    //     // default: 4
    //     // valid values: any integer
    //     limit: 3,
    //
    //     // the effect, which is used to let the entries appear
    //     // default: 'show'
    //     // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
    //     effect: 'slideFastSynced',
    //
    //     // outer template for the html transformation
    //     // default: "<ul>{entries}</ul>"
    //     // valid values: any string
    //     layoutTemplate: "<div class='item'>{entries}</div>",
    //
    //     // inner template for each entry
    //     // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
    //     // valid values: any string
    //     entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
    //
    //     }
    // );

    // /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    // GitHubCalendar("#github-graph", "IonicaBizau");
    //
    //
    // /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    // GitHubActivity.feed({ username: "caseyscarborough", selector: "#ghfeed" });
    //

});
