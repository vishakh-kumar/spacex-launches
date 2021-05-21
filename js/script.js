//pseudocode
//1. page loads - fetch data from space x api
//2. store resulting data in a list(array) so we can loop over and create UI
//3. using the data to create UI and append to DOM

/*----- constants -----*/
/*----- app's state (variables) -----*/
let launches;

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

//adding query string by '?'
$.ajax("https://api.spacexdata.com/v3/launches?order=desc&limit=9")
.then(function(data) { 
   launches = data;
   render();
 });

 //whenever you create a function with will display on the screen, name it render
 function render(){
    const html = launches.map(function(launch) {
        return `
           <article>
               <h2>${launch.mission_name}</h2>
                <p>${launch.launch_year}</p>
               
           </article>
        `;
    });
    //
    //.html will just add the html element
    $('main').html(html);
 }
