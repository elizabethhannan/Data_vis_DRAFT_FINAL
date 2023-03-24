// EHannan
// 12.23.22
// Data Visualization - Bubble Cloud Graph Extension Attempt
// Last revision 1.15.23


var data = {};
var minYear = 1900;
var maxYear = 2023;
var purple = '#7b1fa2'


//Data csv source and in local folder
function preload() {
// var url = "https://www.dropbox.com/s/zsxztzqhldh24ib/UnclaimedEstates%20Data%20Set%20List%20NEW%20REMODEL%20Version.D%201_17_23%20-%20UPDATED%20-%20UnclaimedEstatesList.csv?dl=0";
  
//  table = loadTable(url, 'csv', 'header');
  
  //Local CSV data file load
  
  var url = "UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy/UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy.csv";
table = loadTable(url, 'csv', 'header');

var death_locations;
var death_years;
var deaths_per_year

{
  var url = "https://www.dropbox.com/s/zsxztzqhldh24ib/UnclaimedEstates%20Data%20Set%20List%20NEW%20REMODEL%20Version.D%201_17_23%20-%20UPDATED%20-%20UnclaimedEstatesList.csv?dl=0";  ";
  var table = loadTable(url, 'csv', 'header');
  death_locations = table.getColumn("death_location");
  death_years = table.getColumn("death_years");
  deaths_per_year = table.getColumn("deaths_per_year");
}



//  function preload() {
//    var url = "UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy/UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy.csv";
//    table = loadTable(url, 'csv', 'header');
  
  }

  // import death_locations data from CSV file
var death_locations = loadStrings('death_locations.csv');

// find min and max death_locations
var minDeath = min(death_locations);
var maxDeath = max(death_locations);

// create an array to hold the randomly chosen death_locations
var chosenLocations = [];

// randomly choose 35 death_locations from the data set
for (var i = 0; i < 35; i++) {
  var randomIndex = floor(random(death_locations.length));
  chosenLocations.push(death_locations[randomIndex]);
  death_locations.splice(randomIndex, 1);
}


//Create canvas
function setup() {
  preload();
  createCanvas(1000, 600);
  background(255);
  fill(0); // set font color to black
  textSize(11); // set font size to 11
  textAlign(CENTER);
  
//create an array of objects that store the x, y, and deaths_per_year values for each bubble
var bubbles = [];
for (var i = 0; i < chosenLocations.length; i++) {
  var x = map(death_years[i], 1900, 2023, 0, width);
  var y = map(chosenLocations[i], minDeath, maxDeath, height, 0);
  var deaths = deaths_per_year[i];
  bubbles.push({x: x, y: y, deaths: deaths});
}

// create the x-axis
line(x1, y1, x2, y2);

//Add label to x-axis
textSize(14);
textAlign(CENTER);
text("Death Years", width/2, height-20);

// create the data points (bubbles) for the x-axis
for (var i = 1900; i <= 2023; i += 10) {
  var x = map(i, 1900, 2023, 0, width);
  ellipse(x, y, r, r);
}

textSize(11);
textAlign(CENTER);
text("Death Years", width/2, height-20);

// import death_locations data from CSV file
var death_locations = loadStrings('death_locations.csv');

// find min and max death_locations
var minDeath = min(death_locations);
var maxDeath = max(death_locations);

// create an array to hold the randomly chosen death_locations
var chosenLocations = [];

// randomly choose 35 death_locations from the data set
for (var i = 0; i < 35; i++) {
  var randomIndex = floor(random(death_locations.length));
  chosenLocations.push(death_locations[randomIndex]);
  death_locations.splice(randomIndex, 1);
}

//create an array of objects that store the x, y, and deaths_per_year values for each bubble
var bubbles = [];
for (var i = 0; i < chosenLocations.length; i++) {
  var x = map(death_years[i], 1900, 2023, 0, width);
  var y = map(chosenLocations[i], minDeath, maxDeath, height, 0);
  var deaths = deaths_per_year[i];
  bubbles.push({x: x, y: y, deaths: deaths});
}


  function draw() {
    for (var i = 0; i < bubbles.length; i++) {
      var d = dist(mouseX, mouseY, bubbles[i].x, bubbles[i].y);
      if (d < r) {
        fill(255, 255, 255, 200);
        rect(bubbles[i].x, bubbles[i].y - 25, 20, 20);
        textSize(11);
        fill(0);
        text(bubbles[i].deaths, bubbles[i].x, bubbles[i].y - 10);
      }
    }
  }
  
  
  // create the x-axis
  line(x1, y1, x2, y2);
  
  //Add label to x-axis
  textSize(14);
  textAlign(CENTER);
  text("Death Years", width/2, height-20);
  
  // create the data points (bubbles) for the x-axis
  for (var i = 1900; i <= 2023; i += 10) {
    var x = map(i, 1900, 2023, 0, width);
    ellipse(x, y, r, r);
  }
  
  // create the y-axis
  line(x1, y1, x2, y2);
  
  //Add label to y-axis
  push();
  rotate(-HALF_PI);
  textSize(14);
  textAlign(CENTER);
  text("Country", -height/2, 20);
  pop();
  
  // create the data points (bubbles) for the y-axis
  for (var i = 0; i < chosenLocations.length; i++) {
    var y = map(chosenLocations[i], minDeath, maxDeath, height, 0);
    ellipse(x, y, r, r);
  }
}

// create the y-axis
line(x1, y1, x2, y2);

//Add label to y-axis
textSize(14);
textAlign(CENTER);
text("Death Years", width/2, height-20);

//iterate through the rows of the CSV file
for (var i = 0; i < table.getRowCount(); i++) {
  var death_year = table.getNum(i, 'death_year');
  var death_location = table.getString(i, 'death_location');
  var x = map(death_year, 1900, 2023, 0, width);
  var y = map(death_location, minDeath, maxDeath, height, 0);
  if (death_year >= minYear && death_year <= maxYear) {
    fill(purple);
    ellipse(x, y, r, r);
  }
}
}

//Add label to y-axis
push();
rotate(-HALF_PI);
textSize(14);
textAlign(CENTER);
text("Country", -height/2, 20);
pop();

// create the data points (bubbles) for the y-axis
for (var i = 0; i < death_locations.length; i++) {
  var y = map(death_locations[i], minDeath, maxDeath, height, 0);
  ellipse(x, y, r, r);
}
push();
rotate(-HALF_PI);
textSize(14);
textAlign(CENTER);
text("Country", -height/2, 20);
pop();
