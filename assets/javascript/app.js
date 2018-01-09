//========================== signup/signin form ========================//
$(window).on('load', function() {
    // initApp();
    $("#signInModal").modal("show");
    $(".team-clean").hide();
     $(".contact-clean").hide();
    // $("#home").hide();
    $(".wine-cellar").hide();
    $(".log-in").click(function() {
        $(".signIn").addClass("active-dx");
        $(".signUp").addClass("inactive-sx");
        $(".signUp").removeClass("active-sx");
        $(".signIn").removeClass("inactive-dx");
    });
    $(".back").click(function() {
        $(".signUp").addClass("active-sx");
        $(".signIn").addClass("inactive-dx");
        $(".signIn").removeClass("active-dx");
        $(".signUp").removeClass("inactive-sx");


    });
    // Validating Empty Field
    function check_empty() {
        if (document.getElementById('Email').value == "" || document.getElementById(
                'email').value == "" || document.getElementById('msg').value == "") {
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
    function div_hide() {
        document.getElementById('abc').style.display = "none";
    }
});
//======================= end form ==================================//
//======================= card popup ===============================//
$("#searchButton").on("click", function() {
    console.log('clicked');
    // $('.card-block').fadeIn('slow');
    $('.cardcontainer, fa fa-window-close').toggleClass('active');
    $('.search-form').hide();
    let wineValue = $('#searchValue').val().trim();
    wineSearch(wineValue);
});
$('.fa').on('click', function() {
    console.log('click');
    $('.cardcontainer').toggleClass('active');
    $('.search-form').show();
})
//======================= end card ===============================//
//=================== search function ============================//
let cityToSearch = new String();
function wineSearch(value) {
    let key = new String();
    //get access to the wine API
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type',
        'application/x-www-form-urlencoded;charset=UTF-8');
    let data = new FormData();
    data.append('email', 'ian.haizlip@gmail.com');
    data.append('password', 'danmit5698');
    var init = {
        method: 'POST',
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
    let queryURL =
        `https://quiniwine.com/api/pub/wineKeywordSearch/${wineSearch}/0/1`;
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
            let print =
                `   <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/zin.jpg" id="photoA" alt="Zinfandel">
                  
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Raspberry, Black cherry, Blackberry, Blueberry, Black currant, Black plum, Raisin, Fig, Apricot,
                             Cranberry jam, Jammy/Brambly Fruit, Licorice, Star anise, Smoke, Black pepper, and Black cardamom
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium to Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium to Medium-high</span></h6>

                        <div id="map"></div>
                      
                      <div>

                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Cabernet Sauvignon') {
            console.log('cab');
            let print =
                `
                    <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/cab-sauv.jpg" id="photoA" alt="Cabernet Sauvignon">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Black cherry, Black currant, Blackberry, Black pepper, Tobacco, Licorice, Vanilla, and Violet
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">9-18 months French oak (some American and Hungarian)</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium-high</span></h6>

                        <div id="map"></div>
                         
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Pinot Noir') {
            console.log('pinot');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/pinot-noir.jpg" id="photoA" alt="Pinot Noir">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Cranberry, Cherry, Rasberry, Vanilla, Clove, Licorice, Mushroom, Wet leaves, Tobacco, Cola, and Caramel
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">French oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium-low</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Sauvignon Blanc') {
            console.log('sauv blanc');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/sauv-blanc.jpg" id="photoA" alt="Sauvignon Blanc">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lime, Green apple, Asian pear, Kiwi, Passionfruit, Guava, White peach, Nectarine, Green bell pepper,
                             Gooseberry, Basil, Jalapeno, Grass, Tarragon, Lovage, Celery, Lemongrass, Chalk, and Wet concrete
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">Can be oaked</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium to medium-high</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Chardonnay') {
            console.log('chard');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/chard.jpg" id="photoA" alt="Chardonnay">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lemon, Apple, Pear, Pineapple, Jackfruit, Passionfruit, Peach, Fig, Apple Blossom, Lemon Zest,
                             Citrus Peel, Celery leaf, Beeswax, Lemon balm, Honeysuckle, Wet flint rocks, Saline solution, 
                             Vanilla bean, Almond, and Jasmine
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">When oaked will taste buttery</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium-low (warm climate) to medium-high (unoaked/cool climate)</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Riesling') {
            console.log('riesling');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/riesling.jpg" id="photoA" alt="Riesling">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Apricot, Nectarine, Peach, Apple, Pear, Pineapple, Lime, Meyer lemon, Honey, Honeycomb, Beesxwax,
                             Petrol, Ginger, Citrus blossom, Rubber, and Diesel fuel
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">High</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Gewürztraminer') {
            console.log('gewurzt');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/gewurzt.jpg" id="photoA" alt="Gewürztraminer">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lychee, Grapefruit, Pineapple, Peach, Apricot, Orange, Cantaloupe, Rose honey, Ginger,
                             Incense, Allspice, Cinnamon, and Smoke
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium-low</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Malbec') {
            console.log('malbec');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/malbec.jpg" id="photoA" alt="Malbec">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Black cherry, Pomegranate, Plum, Raspberry, Blackberry, Blueberry, Cocoa, Milk chocolate,
                             Coffee, Mocha, Molasses, Leather, Black pepper, Green stem, Gravel, and Tobacco
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Syrah' || grape === 'Shiraz') {
            console.log('syrah/shiraz');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/syrah.jpg" id="photoA" alt="Syrah/Shiraz">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Blackberry, Blueberry, Boysenberry, Olive, Pepper, Clove, Vanilla, Mint, Licorice, Chocolate,
                             Allspice, Rosemary, Cured meat, Bacon fat, Tobacco, Herbs, and Smoke
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">Oak is commonly used</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium-high</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Tempranillo') {
            console.log('temp');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/tempranillo.jpg" id="photoA" alt="Tempranillo">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Cherry, Plum, Tomato, Dried fig, Cedar, Leather, Tobacco, Vanilla, Dill, and Clove
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">6-18 months in American or French oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium-high</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium-low</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Albarino') {
            console.log('ablba');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/albarino.jpg" id="photoA" alt="Albarino">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lemon zest, Grapefruit, Honeydew melon, Nectarine, and Saline
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">High</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Nebbiolo') {
            console.log('neb');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/nebbiolo.jpg" id="photoA" alt="Nebbiolo">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Rose, Cherry, Leather, Clay, and Anise
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">9-18 months in neutral or French oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">High</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">High</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Pinot Grigio' || grape === 'Pinot Gris') {
            console.log('pinot gri');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/pinot-gri.jpg" id="photoA" alt="Pinot Gri">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Lime, Green apple, Lemon, Meyer lemon, Pear, White nectarine, White peach, Almond, Honeysuckle,
                             Honey, Saline, Clove, Ginger, and Spice
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium to medium-high</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Barbera') {
            console.log('barbera');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/barbera.jpg" id="photoA" alt="Barbera">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Dark cherry, Dried strawberry, Plum, Blackberry, Violet, Lavender, Dried leaves, Incense,
                             Vanilla, Nutmeg, and Anise
                        </p>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">High</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Low</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Sangiovese') {
            console.log('sangio');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/sangiovese.jpeg" id="photoA" alt="Sangiovese">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Tart cherry, Red plum, Strawberry, Fig, Roasted Pepper, Tomato, Leather, Clay, Brick, Tobacco,
                             Smoke, Oregano, Thyme, Dried Roses, and Potpourri
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">Light oak aging in neutral oak barrels</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">High</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">High</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);
        };
        if (grape === 'Merlot') {
            console.log('no more');
            let print =
                `
                <div class="caption">
                    <h4>${data.items[0].Varietal}</h4>
                    </div>
                    <img class="card-img-top img-responsive" src="assets/images/merlot.jpg" id="photoA" alt="Merlot">
                    <div class="card-block">
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Region: ${data.items[0].Area}</h4>
                        <h6 class="text-muted">Flavor Characteristics:</h6>
                        <p class="card-text">
                            Black cherry, Raspberry, Plum, Graphite, Cedar, Tobacco, Vanilla, Clove, and Mocha
                        </p>
                        <h6 class="text-muted">Oak: <span class="text-dark">8-12 months in medium oak</span></h6>
                        <h6 class="text-muted">Acidity (sour): <span class="text-dark">Medium</span></h6>
                        <h6 class="text-muted">Tannin (bitter): <span class="text-dark">Medium</span></h6>

                        <div id="map"></div>
                        
                    </div>
                `;
            $('#cardPrint').html(print);   
        };

            cityToSearch = data.items[0].Country;
            console.log(cityToSearch);
            mapInitialization(cityToSearch);
    });
};

function spaceReplace(wineInput) {
    return wineInput.split(' ').join('%20');
};
//==================== end search function ====================//

//======================== map funtion =============================//
    
            var map;
            
 
            function mapInitialization(cityToSearch) {
                findLocation(cityToSearch);
            }
 
            function findLocation(location) {
                const queryUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyDb4uBl0aaR-tUU5eHUyT-WcDZP7d1YHuQ`;
 
                $.ajax({
                    url: queryUrl,
                    method: 'GET'
                }).done(function(response) {
                    initMap(response.results[0].geometry.location, cityToSearch);
                });
 
            };
            var countries = {
                spain: 5,
                usa: 3,
                france: 5,
                italy: 5,
                germany: 5,
                argentina: 4,
                southafrica: 4,
                newzealand: 5,
                australia: 4
            };
            const chooseYourZoom = (country)=> {
                const keyName = country.toLowerCase().replace(' ', '');
                console.log('ZOOM LEVEL',countries[keyName]);
                return countries[keyName];
            };
             
            function initMap(obj) {
 
            map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: obj.lat,
                    lng: obj.lng
                },
                zoom: chooseYourZoom(cityToSearch)
            });
 
 
            }
    
//======================== map funtion =============================//

//======================== about page ===============================//
$("#about").on("click", function() {
    console.log("clicked about")
    $(".team-clean").show();
    $("#mainPage").hide();
    $(".contact-clean").hide();
    $(".wine-cellar").hide();
})
$("#aboutPage").on("click", function() {
    console.log("clicked about")
    $(".team-clean").show();
    $(".wine-cellar").hide();
    $(".contact-clean").hide();
    $("#mainPage").hide();
})


//==========================home=============================//
$("#home").on("click", function() {
    console.log("clicked")
    $(".team-clean").hide();
    $("#mainPage").show();
})

$("#homePage").on("click", function(){
    $(".team-clean").hide();
    $("#mainPage").show();
})
//========================end about======================//
//==========================wine cellar=====================//
$("#cellar").on("click", function() {
    console.log('cellar');
    $(".wine-cellar").show();
    $("#mainPage").hide();
    $(".team-clean").hide();
})
$("#home").on("click", function() {
    console.log("clicked")
    $(".wine-cellar").hide();
    $("#mainPage").show();
})

//=================contact page================================//

$("#contactPage").on("click", function(){
    console.log('contact');
    $(".contact-clean").show();
    $(".wine-cellar").hide();
    $(".team-clean").hide();
    $("#mainPage").hide();
})

$("#home").on("click", function(){
    console.log('contact');
    $(".contact-clean").hide();
    $("#mainPage").show();
})

$("#homePage").on("click", function(){
    $(".contact-clean").hide();
    $("#mainPage").show();
})






