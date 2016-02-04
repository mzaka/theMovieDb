// Function for calling the Now Showing Movie API 

function NowShowing() {
    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'Now Showing';
    document.getElementById("moviePosters").innerHTML = '';

    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/movie/now_playing?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
        console.log(mydata);
        baseurl = window.movies_image_url;
        console.log(baseurl);
        posterSizes = window.movies_posters_sizes;

        for (i in mydata.results) {
            var movies_title = mydata.results[i].original_title;
            var movies_overview = mydata.results[i].overview;
            var movies_votes = mydata.results[i].vote_average;

            //document.getElementById("result").appendChild("result") = (mydata.results[i].original_title + "<br />");
            var posters = mydata.results[i].poster_path;

            var posters_Url = baseurl + posterSizes + posters;
            console.log(posters_Url);
            var div = document.getElementById('moviePosters');
            var imgDiv = document.createElement('div')
            imgDiv.className = "col-md-7 movie_poster";
            var img = document.createElement('img');
            img.setAttribute('src', posters_Url);
            imgDiv.appendChild(img);

            var node = document.createElement("div");
            node.className = "col-md-5 movie_desc ";
            var textnode = document.createTextNode(movies_title);
            var textOverview = document.createTextNode(movies_overview);
            var textVote = document.createTextNode(movies_votes);
            var textRatting = document.createTextNode('Ratings ');


            node.appendChild(textnode);
            //headingforMovies.appendChild(textnode);
            node.appendChild(document.createElement('br'));
            node.appendChild(document.createElement('br'));
            node.appendChild(textRatting)
            node.appendChild(textVote);
            node.appendChild(document.createElement('br'));

            node.appendChild(document.createElement('br'));
            node.appendChild(textOverview);

            //console.log(mydata.results[i].original_title);


            document.getElementById("moviePosters").appendChild(imgDiv);
            document.getElementById("moviePosters").appendChild(node);


        }
        //document.getElementById("result").innerHTML = mydata;
    };
    xhr.send();
};

// Function for calling the Most Popular Movie API 

function MostPopular() {
    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'Most Popular';
    document.getElementById("moviePosters").innerHTML = '';
    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/movie/popular?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
        console.log(mydata);
        baseurl = window.movies_image_url;
        console.log(baseurl);
        posterSizes = window.movies_posters_sizes;

        for (i in mydata.results) {
            var movies_title = mydata.results[i].original_title;
            var movies_overview = mydata.results[i].overview;
            var movies_votes = mydata.results[i].vote_average;

            //document.getElementById("result").appendChild("result") = (mydata.results[i].original_title + "<br />");
            var posters = mydata.results[i].poster_path;

            var posters_Url = baseurl + posterSizes + posters;
            console.log(posters_Url);
            var div = document.getElementById('moviePosters');
            var imgDiv = document.createElement('div')
            imgDiv.className = "col-md-7 movie_poster";
            var img = document.createElement('img');
            img.setAttribute('src', posters_Url);
            imgDiv.appendChild(img);

            var node = document.createElement("div");
            node.className = "col-md-5 movie_desc ";
            var textnode = document.createTextNode(movies_title);
            var textOverview = document.createTextNode(movies_overview);
            var textVote = document.createTextNode(movies_votes);
            var textRatting = document.createTextNode('Ratings ');


            node.appendChild(textnode);
            //headingforMovies.appendChild(textnode);
            node.appendChild(document.createElement('br'));
            node.appendChild(document.createElement('br'));
            node.appendChild(textRatting)
            node.appendChild(textVote);
            node.appendChild(document.createElement('br'));

            node.appendChild(document.createElement('br'));
            node.appendChild(textOverview);

            //console.log(mydata.results[i].original_title);


            document.getElementById("moviePosters").appendChild(imgDiv);
            document.getElementById("moviePosters").appendChild(node);


        }
        //document.getElementById("result").innerHTML = mydata;
    };
    xhr.send();
};

// Function for calling the Top Rated Movie API 

function TopRated() {
    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'TOP Rated';
    document.getElementById("moviePosters").innerHTML = '';
    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/movie/top_rated?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
        console.log(mydata);
        baseurl = window.movies_image_url;
        console.log(baseurl);
        posterSizes = window.movies_posters_sizes;

        for (i in mydata.results) {
            var movies_title = mydata.results[i].original_title;
            var movies_overview = mydata.results[i].overview;
            var movies_votes = mydata.results[i].vote_average;

            //document.getElementById("result").appendChild("result") = (mydata.results[i].original_title + "<br />");
            var posters = mydata.results[i].poster_path;

            var posters_Url = baseurl + posterSizes + posters;
            console.log(posters_Url);
            var div = document.getElementById('moviePosters');
            var imgDiv = document.createElement('div')
            imgDiv.className = "col-md-7 movie_poster";
            var img = document.createElement('img');
            img.setAttribute('src', posters_Url);
            imgDiv.appendChild(img);

            var node = document.createElement("div");
            node.className = "col-md-5 movie_desc ";
            var textnode = document.createTextNode(movies_title);
            var textOverview = document.createTextNode(movies_overview);
            var textVote = document.createTextNode(movies_votes);
            var textRatting = document.createTextNode('Ratings ');


            node.appendChild(textnode);
            //headingforMovies.appendChild(textnode);
            node.appendChild(document.createElement('br'));
            node.appendChild(document.createElement('br'));
            node.appendChild(textRatting)
            node.appendChild(textVote);
            node.appendChild(document.createElement('br'));

            node.appendChild(document.createElement('br'));
            node.appendChild(textOverview);

            //console.log(mydata.results[i].original_title);


            document.getElementById("moviePosters").appendChild(imgDiv);
            document.getElementById("moviePosters").appendChild(node);


        }
        //document.getElementById("result").innerHTML = mydata;
    };
    xhr.send();
};

// Function for calling the Up Comming Movie API 

function upComming() {
    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'Upcomming';
    document.getElementById("moviePosters").innerHTML = '';
    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/movie/upcoming?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
        console.log(mydata);
        baseurl = window.movies_image_url;
        console.log(baseurl);
        posterSizes = window.movies_posters_sizes;

        for (i in mydata.results) {
            var movies_title = mydata.results[i].original_title;
            var movies_overview = mydata.results[i].overview;
            var movies_votes = mydata.results[i].vote_average;

            //document.getElementById("result").appendChild("result") = (mydata.results[i].original_title + "<br />");
            var posters = mydata.results[i].poster_path;

            var posters_Url = baseurl + posterSizes + posters;
            console.log(posters_Url);
            var div = document.getElementById('moviePosters');
            var imgDiv = document.createElement('div')
            imgDiv.className = "col-md-7 movie_poster";
            var img = document.createElement('img');
            img.setAttribute('src', posters_Url);
            imgDiv.appendChild(img);

            var node = document.createElement("div");
            node.className = "col-md-5 movie_desc ";
            var textnode = document.createTextNode(movies_title);
            var textOverview = document.createTextNode(movies_overview);
            var textVote = document.createTextNode(movies_votes);
            var textRatting = document.createTextNode('Ratings ');


            node.appendChild(textnode);
            //headingforMovies.appendChild(textnode);
            node.appendChild(document.createElement('br'));
            node.appendChild(document.createElement('br'));
            node.appendChild(textRatting)
            node.appendChild(textVote);
            node.appendChild(document.createElement('br'));

            node.appendChild(document.createElement('br'));
            node.appendChild(textOverview);

            //console.log(mydata.results[i].original_title);


            document.getElementById("moviePosters").appendChild(imgDiv);
            document.getElementById("moviePosters").appendChild(node);


        }
        //document.getElementById("result").innerHTML = mydata;
    };
    xhr.send();
};

// Config function for Movie Poster API. 

function baseUrl_Image() {

    var xhr = new XMLHttpRequest();
    var data = [];
    document.getElementById("result").innerHTML = 'BaseURL';
    document.getElementById("moviePosters").innerHTML = '';
    xhr.open('GET', encodeURI('http://api.themoviedb.org/3/configuration?api_key=12865ae0cb6774f79f4732530a443938'));
    xhr.onload = function() {
        if (xhr.status === 200) {
            //alert('User\'s name is ' + xhr.responseText);
            data.push(xhr.responseText);
            var mydata = JSON.parse(data);
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }

        movies_image_url = mydata.images.base_url;
        console.log(movies_image_url);
        movies_posters_sizes = mydata.images.poster_sizes[2];
        console.log(movies_posters_sizes);



    };
    xhr.send();
    //return movies_image_url;
};