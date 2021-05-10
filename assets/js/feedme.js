jQuery(document).ready(function($) {




  $('.feedme_button').click(function(){

    // which one got clicked
    var food_category = this.id.split('_')[0]
    console.log(food_category)

    //change all other buttons to light
    var button_array = ["snack","breakfast","dinner","special"]
    button_array.forEach(function(bt){
    
      if (bt != food_category){
          $( "#" + bt + "_button" ).removeClass( "btn-cta-primary" ).addClass( "btn-cta-light" );
      } else {
        $( "#" + bt + "_button" ).removeClass( "btn-cta-light" ).addClass( "btn-cta-primary" );
      }
    })

    //read from options
    d3.csv("assets/files/feedme.csv").then(function(data){ 
      //filter by category:
      var filtered = data.filter(function(d) {
        return d["category"] === food_category
      })
      //pick one at random
      d3.shuffle(filtered)
      var picked = filtered[0]
      // console.log(picked)
      document.getElementById("food-choice-name").innerHTML = picked.name
      if (picked.link){
        document.getElementById("food-choice-link").href = picked.link
        document.getElementById("food-choice-link").style.display = "block"
      } else {
        document.getElementById("food-choice-link").style.display = "none"

      }
      if (picked.photo){
        var tmp = document.createElement ('a');
        tmp.href   = picked.photo
        document.getElementById("food-choice-img").src = picked.photo
        document.getElementById("food-choice-img").style.display = "block"
        document.getElementById("food-choice-source").innerHTML = "Source: " + tmp.hostname

      } else {
        document.getElementById("food-choice-img").style.display = "block"
        document.getElementById("food-choice-img").src = "assets/images/plate.jpg"
        document.getElementById("food-choice-source").innerHTML = "<span>Photo by <a href=\"https://unsplash.com/@mockupgraphics?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\">Mockup Graphics</a> on <a href=\"https://unsplash.com/s/photos/utensils?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText\">Unsplash</a></span>"

      }




      document.getElementById("food-choice").style.display = "block"

    
    });


   

      
    });







});
