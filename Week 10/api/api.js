var title= "";

$('#submit').click(function(e){
	title = $('title').val();
    e.preventDefault();
    getMovie(title);
});

function getMovie(movieName)
{
    
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json.Director); 
    });
}



