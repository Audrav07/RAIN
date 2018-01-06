


//========================== signup/signin form ========================//

$(window).on('load', function(){
 // initApp();



$("#signInModal").modal("show");

$(".team-clean").hide();
// $("#home").hide();



$(".log-in").click(function(){
    $(".signIn").addClass("active-dx");
    $(".signUp").addClass("inactive-sx");
    $(".signUp").removeClass("active-sx");
    $(".signIn").removeClass("inactive-dx");
});

$(".back").click(function(){
    $(".signUp").addClass("active-sx");
    $(".signIn").addClass("inactive-dx");
    $(".signIn").removeClass("active-dx");
    $(".signUp").removeClass("inactive-sx");
});





// Validating Empty Field
function check_empty() {
if (document.getElementById('Email').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
alert("Fill All Fields !");
} else {
document.getElementById('my-form').submit();
alert("Form Submitted Successfully...");
}
}
//Function To Display Popup
function div_show() {
document.getElementById('abc').style.display = "block";
}
//Function to Hide Popup
function div_hide(){
document.getElementById('abc').style.display = "none";
}



});
//======================= end form ==================================//

//======================= card popup ===============================//

$("#searchButton").on("click", function(){
	console.log('clicked');
	// $('.card-block').fadeIn('slow');

	$('.cardcontainer, fa fa-window-close').toggleClass('active');
  	$('.search-form').hide();

    let wineValue = $('#searchValue').val().trim();
    wineSearch(wineValue);


});

$('.fa').on('click', function(){
	console.log('click');
		$('.cardcontainer').toggleClass('active');
		$('.search-form').show();
	})

//======================= end card ===============================//

//=================== search function ============================//

    function wineSearch (value) {

            let key = new String();

            //get access to the wine API
            let headers = new Headers();
            headers.append('Accept', 'application/json');
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

            let data = new FormData();
            data.append('email','ian.haizlip@gmail.com');
            data.append('password','danmit5698');

            var init = { method: 'POST',
                           headers: headers,
                           mode: 'cors',
                           body: 'email=ian.haizlip%40gmail.com&password=danmit5698'
                            };

            fetch('https://quiniwine.com/signin', init).then(function(response) {
              return response.json();
            }).then(function(json) {
              console.log(json) 
              key = json.token; 
            });

            //Wine to Search for
            let wineFind = value;

            let wineSearch = spaceReplace(wineFind);
            console.log(wineSearch);

            let queryURL = `https://quiniwine.com/api/pub/wineKeywordSearch/${wineSearch}/0/1`;

            let headerGet = new Headers();
            headerGet.append('Accept', 'application/json');
            headerGet.append('Authorization', `Bearer ${key}`);


            //get and use responce form wine API
            $.ajax({
              url: queryURL,
              method: 'GET',
              header: headerGet
            }).done(function(data) {
              console.log(data);
              let grape = data.items[0].Varietal;
              console.log(data.items[0].Varietal);
              if (grape === 'Zinfandel') {
                console.log('zin');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/zin.jpg" id="photoA" alt="Zinfandel">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Raspberry, Black Cherry, Blackberry, Blueberry, Black Currant, Black Plum, Raisin, Fig, Apricot,
                             Cranberry Jam, Jammy/Brambly Fruit, Licorice, Star Anise, Smoke, Black Pepper, Black Cardamom
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium to Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium to Medium-high</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Cabernet Sauvignon') {
                console.log('cab');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/cab-sauv.jpg" id="photoA" alt="Cabernet Sauvignon">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Black cherry, black currant, blackberry, black pepper, tobacco, licorice, vanilla and violet
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">9-18 months French oak (some American and Hungarian)</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium-high</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Pinot Noir') {
                console.log('pinot');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/pinot-noir.jpg" id="photoA" alt="Pinot Noir">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Cranberry, Cherry, Rasberry, vanilla, clove, licorice, mushroom, wet leaves, tobacco, cola, caramel
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">French oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium-low</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Sauvignon Blanc') {
                console.log('sauv blanc');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/sauv-blanc.jpg" id="photoA" alt="Sauvignon Blanc">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lime, Green Apple, Asian Pear, Kiwi, Passionfruit, Guava, White Peach, Nectarine, Green Bell Pepper,
                             Gooseberry, Basil, Jalapeno, Grass, Tarragon, Lovage, Celery, Lemongrass, Chalk, Wet concrete
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">can be oaked</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium to Medium-high</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);

              };
              if (grape === 'Chardonnay') {
                console.log('chard');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/chard.jpg" id="photoA" alt="Chardonnay">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lemon, Apple, Pear, Pinapple, Jackfruit, Passionfruit, Peach, Fig, Apple Blossom, Lemon Zest,
                             Citrus Peel, Celery leaf, Beeswax, Lemon balm, Honeysuckle, Wet flint rocks, Saline Solution, 
                             Vanilla Bean, Almond, Jasmine
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">When oaked will taste buttery</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium-low (warm climate) to Medium-high (unoaked/cool climate)</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);

              };
              if (grape === 'Riesling') {
                console.log('riesling');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/riesling.jpg" id="photoA" alt="Riesling">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Apricot, nectarine, peach, apple, pear, pineapple, lime, Meyer lemon, honey, honeycomb, beesxwax,
                             petrol, ginger, citrus blossom, rubber, diesel fuel
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">High</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Gewürztraminer') {
                console.log('gewurzt');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/gewurzt.jpg" id="photoA" alt="Gewürztraminer">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lychee, Grapefruit, Pineabpple, Peach, Apricot, Orange, Cantaloupe, Rose Honey, Ginger,
                             Incense, Allspice, Cinnamon, Smoke
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium-low</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Malbec') {
                console.log('malbec');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/malbec.jpg" id="photoA" alt="Malbec">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Black cherry, pomengranate, plum, raspberry, blackberry, blueberry, cocoa, milk chocolate,
                             coffee, mocha, molasses, leather, black pepper, green stem, gravel, tobacco
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Syrah' || grape === 'Shiraz') {
                console.log('syrah/shiraz');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/syrah.jpg" id="photoA" alt="Syrah/Shiraz">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            blackberry, blueberry, boysenberry, Olive, pepper, clove, vanilla, mint, licorice, chocolate,
                             allspice, rosemary, cured meat, bacon fat, tobacco, herbs and smoke
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">Oak is commonly used</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium-high</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Tempranillo') {
                console.log('temp');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/tempranillo.jpg" id="photoA" alt="Tempranillo">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            cherry, plum, tomato, dried fig, cedar, leather, tobacco, vanilla, dill, and clove
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">6-18 months in American or French Oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium-low</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Albarino') {
                console.log('ablba');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/albarino.jpg" id="photoA" alt="Albarino">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            lemon zest, grapefruit, honeydew melon, nectarine, saline
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">High</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Nebbiolo') {
                console.log('neb');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/nebbiolo.jpg" id="photoA" alt="Nebbiolo">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            rose, cherry, leather, clay, anise
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">9-18 months in Neutral or French Oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">High</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">High</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Pinot Grigio' || grape === 'Pinot Gris') {
                console.log('pinot gri');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/pinot-gri.jpg" id="photoA" alt="Pinot Gri">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            lime, green apple, lemon, meyer lemon, pear, white nectarine, white peach, almond, honeysuckle,
                             honey, saline, clove, ginger, spice
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium to Medium-high</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Barbera') {
                console.log('barbera');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/barbera.jpg" id="photoA" alt="Barbera">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            dark cherry, dried strawberry, plum, blackberry, violet, lavender, dried leaves, incense,
                             vanilla, nutmeg, anise
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">High</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Low</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Sangiovese') {
                console.log('sangio');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/sangiovese.jpg" id="photoA" alt="Sangiovese">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            tart cherry, red plum, strawberry, fig, Roasted Pepper, Tomato, Leather, Clay, Brick, Tobacco,
                             Smoke, Oregano, Thyme, Dried Roses, Potpourri
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">Light oak agging in neutral oak barrels</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">High</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">High</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };
              if (grape === 'Merlot') {
                console.log('no more');
                let print = `
                    <h4>${data.items[0].Varietal}</h4>
                    <img class="card-img-top img-responsive" src="assets/images/merlot.jpg" id="photoA" alt="Merlot">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            black cheery, raspberry, plum, Graphite, Cedar, Tobacco, Vanilla, Clove, Mocha
                        </p>
                        <h6 class="text-muted">Oak: <span class="card-text">8-12 months in medium oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="card-text">Medium</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="card-text">Medium</span></h6>

                        <p>

                            map goes here
                            <img class="google" src="assets/images/SFmap.png" id="map" alt="googlemap">
                        </p>
                        
                    </div>
                `;
                $('#cardPrint').html(print);
              };


            }); 

        };

    function spaceReplace(wineInput){
        return wineInput.split(' ').join('%20');
    };

//==================== end search function ====================//














//======================== about page ===============================//


$("#about").on("click", function(){
    console.log("clicked about")
    $(".team-clean").show();
    $("#mainPage").hide();
})


$("#home").on("click", function(){
    console.log("clicked")
    $(".team-clean").hide();
    $("#mainPage").show();
})





//========================about======================//


//==========================img for search bar=====================//


 // var grapeImage = $('<img>');
 //            grapeImage.attr('src', response.results[j].image);
 //            grapeImage.addClass('grapeImage');
 //            grapeImage.addClass('img-responsive');
 //            grapeImage.attr('data-Id', response.results[j].id);
 //            grapeImage.attr('data-sourceUrl', response.results[j].sourceUrl);







