


//========================== signup/signin form ========================//

$(window).on('load', function(){
 // initApp();



$("#signInModal").modal("show");




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

              let print = `
                        <h4 class="card-title">Winery: ${data.items[0].Winery}</h4>
                        <h4 class="card-title">Wine: ${data.items[0].Name}</h4>
                        <h4 class="card-title">Country: ${data.items[0].Country}</h4>
                        <h4 class="card-title">Vintage: ${data.items[0].vintage}</h4>
                        ${data.items[0].Province ? `<h4 class="card-title">Province: ${data.items[0].Province}</h4>`: ''}
                        <h6 class="text-muted">Another Label</h6>
                        <p class="card-text">
                            Praesent ac nisi nec lorem facilisis laoreet. Duis elit quam, blandit id euismod ut, sodales vel magna. Donec gravida enim euismod posuere interdum. Praesent sodales eget diam vitae blandit. Sed condimentum molestie erat eu tincidunt. Quisque bibendum ullamcorper finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ut aliquet nibh. Fusce scelerisque a lorem ut ultrices. Proin convallis metus ac ante condimentum, ut congue justo mattis. Quisque ultrices id mauris vitae dignissim. Pellentesque vel orci velit. Mauris eget hendrerit ex, eget volutpat eros. Pellentesque in nisi turpis. Maecenas tempor nisi vitae odio mattis, ac volutpat nunc mattis. Integer lectus dui, vehicula nec fermentum vel, tincidunt non massa.
                        </p>`;

              if (grape === 'Zinfandel') {
                console.log('zin');
              };
              if (grape === 'Cabernet Sauvignon') {
                console.log('cab');
              };
              if (grape === 'Pinot Noir') {
                console.log('pinot');
              };
              if (grape === 'Sauvignon Blanc') {
                console.log('sauv blanc');
              };
              if (grape === 'Chardonnay') {
                console.log('chard');
              };
              if (grape === 'Riesling') {
                console.log('reiz');
              };
              if (grape === 'Gewürztraminer') {
                console.log('gewurzt');
              };
              if (grape === 'Malbec') {
                console.log('malbec');
              };
              if (grape === 'Syrah' || grape === 'Shiraz') {
                console.log('syrah/shiraz');
              };
              if (grape === 'Tempranillo') {
                console.log('temp');
              };
              if (grape === 'Albarino') {
                console.log('ablba');
              };
              if (grape === 'Nebbiolo') {
                console.log('neb');
              };
              if (grape === 'Pinot Grigio' || grape === 'Pinot Gris') {
                console.log('pinot gri');
              };
              if (grape === 'Barbera') {
                console.log('barb');
              };
              if (grape === 'Sangiovese') {
                console.log('sangio');
              };
              if (grape === 'Merlot') {
                console.log('no more');
              };
              
              document.getElementsByClassName('index__wine-info')[0].innerHTML = print;
            }); 

        };

    function spaceReplace(wineInput){
        return wineInput.split(' ').join('%20');
    };

//==================== end search function ====================//


