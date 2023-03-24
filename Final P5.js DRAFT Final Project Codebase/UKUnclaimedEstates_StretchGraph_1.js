// EHannan
// 12.23.22
// Data Visualization - Stream Graph Extension Attempt
// Last revision 1.15.23





var data = {};
var minYear = 1900;
var maxYear = 2023;


//Data csv source and in local folder
function preload() {
// var url = "https://www.dropbox.com/s/zsxztzqhldh24ib/UnclaimedEstates%20Data%20Set%20List%20NEW%20REMODEL%20Version.D%201_17_23%20-%20UPDATED%20-%20UnclaimedEstatesList.csv?dl=0";
  
//  table = loadTable(url, 'csv', 'header');
  
  //Local CSV data file load
  
  var url = "UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy/UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy.csv";
table = loadTable(url, 'csv', 'header');


//  function preload() {
//    var url = "UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy/UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy.csv";
//    table = loadTable(url, 'csv', 'header');
  
  }

//Create canvas
function setup() {
  createCanvas(1000, 600);
  background(255);
  textSize(14);

  var rows = table.getRows();
  for (var i = 0; i < rows.length; i++) {
    var year = rows[i].getString(0);
    var value = rows[i].getNum(1);
    if (!data[year]) {
        data[year] = 0;
    }
    data[year] += value;
  }
  textSize(14);
  textAlign(CENTER);
}

// Add a global variable to store the hovered data point
var hoveredDataPoint;


//Data value headers call from CSV
function draw() {
    background(225);
    var birth_year = table.getColumn('birth_year');
    var death_year = table.getColumn('death_year');
    var deaths_per_year = table.getColumn('deaths_per_year');

    var w = width / (maxYear - minYear);
    var offset = 0;
    stroke(0);
    strokeWeight(5);

    //birth_year
// Draw first x-axis from birth_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < birth_year.length; i++) {
        var x = (birth_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        if (dist(mouseX, mouseY, x, y) < 10) {
  textSize(14);
  fill(148, 0, 211);
  text(data[i], x, y - 20);

//Display data value at mouse over hover
// Add a global variable to store the hovered data point
var hoveredDataPoint;

function draw() {
    // ... existing code ...

    // Draw first x-axis from birth_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < birth_year.length; i++) {
        var x = (birth_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        // Check if the current data point is being hovered over
        if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredDataPoint = i;
        }
    }
    endShape();

    // ... existing code ...
}

// Add a function to display the data value when the mouse is moved
function mouseMoved() {
    if (hoveredDataPoint !== undefined) {
        fill(255, 0, 255); // purple color
        textSize(14);
        text(birth_year[hoveredDataPoint], mouseX, mouseY);
    }
} 
}
    }
    endShape();
  
// Add fill color around first x-axis birth_year
  fill(250,100,71, 0.25);
  noStroke();
  beginShape();
  for (var i = 0; i < birth_year.length; i++) {
  var x = (birth_year[i] - minYear) * w;
  var y = height/3;
  vertex(x, y);
}
    endShape();

// Draw first x-axis from birth_year data
line(0, height/3*2, width, height/3*2);
text("Birth Year", width/2, height/3*2 + 20);
fill(175,100,31, 0.25);
noStroke();
beginShape();
for (var i = 0; i < birth_year.length; i++) {
    var x = (birth_year[i] - minYear) * w;
    var y = height/3*2;
    vertex(x, y);
    ellipse(x, y, 10, 10);
}
endShape();

// Add equal vertical spacing between the {3} x-axises
var spacing = height/4;

// Add fill color around first x-axis birth_year
fill(250,100,71, 0.25);
noStroke();
beginShape();
for (var i = 0; i < birth_year.length; i++) {
    var x = (birth_year[i] - minYear) * w;
    var y = height/3*2 - spacing;
    vertex(x, y);
}
endShape();


// Draw first x-axis from birth_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < birth_year.length; i++) {
        var x = (birth_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredDataPoint = {x: x, y: y, data: data[i]};
        }
    }
    endShape();

    // Add a global variable to store the hovered data point
var hoveredDataPoint;

function draw() {
    // ... existing code ...

    // Draw first x-axis from birth_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < birth_year.length; i++) {
        var x = (birth_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredDataPoint = {x: x, y: y, data: data[i]};
        }
    }
    endShape();

    // ... existing code ...

    // Show the data value for the hovered data point
    if (hoveredDataPoint) {
        textSize(14);
        fill(148, 0, 211);
        text(hoveredDataPoint.data, hoveredDataPoint.x, hoveredDataPoint.y - 20);
    }
}


//death_year
// Draw second x-axis from death_year data
    var death_year = table.getColumn("death_year");
  
    stroke(0);
    strokeWeight(5);
    line(0, height/3, width, height/3);
    text("Death Year", width/2, height/3 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < death_year.length; i++) {
        var x = (death_year[i] - minYear) * w;
        var y = height/3;
        vertex(x, y);
    }
    endShape();

  // Add fill color around second x-axis
fill(250,100,71, 0.25);
noStroke();
beginShape();
for (var i = 0; i < death_year.length; i++) {
  var x = (death_year[i] - minYear) * w;
  var y = height/3;
  vertex(x, y);
  ellipse(x, y, 10, 10);

  if (dist(mouseX, mouseY, x, y) < 10) {
    textSize(14);
    fill(148, 0, 211);
    text(data[i], x, y - 20);


function draw() {
    // ... existing code ...

    // Draw first x-axis from heath_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < death_year.length; i++) {
        var x = (death_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        // Check if the current data point is being hovered over
        if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredDataPoint = i;
        }
    }
    endShape();

    // ... existing code ...
}

// Add a function to display the data value when the mouse is moved
function mouseMoved() {
    if (hoveredDataPoint !== undefined) {
        fill(255, 0, 255); // purple color
        textSize(14);
        text(death_year[hoveredDataPoint], mouseX, mouseY);
    }
}

  }
  

}
endShape();
//deaths_per_year
// Draw third x-axis from deaths_per_year data
var deaths_per_year = table.getColumn("death_year");
  
stroke(0);
strokeWeight(5);
line(0, height/3, width, height/3);
text("Death Year", width/2, height/3 + 20);
fill(75,100,31, 0.25);
noStroke();
beginShape();
for (var i = 0; i < deaths_per_year.length; i++) {
    var x = (deaths_per_year[i] - minYear) * w;
    var y = height/3;
    vertex(x, y);
}
endShape();

// Add fill color around third x-axis line
fill(85,100,71, 0.25);
noStroke();
beginShape();
for (var i = 0; i < deaths_per_year.length; i++) {
var x = (deaths_per_year[i] - minYear) * w;
var y = height/3;
vertex(x, y);
ellipse(x, y, 10, 10);

if (dist(mouseX, mouseY, x, y) < 10) {
    textSize(14);
    fill(148, 0, 211);
    text(data[i], x, y - 20);
  }
  
// Add a global variable to store the hovered data point
var hoveredDataPoint;

function draw() {
    // ... existing code ...

    // Draw first x-axis from birth_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < birth_year.length; i++) {
        var x = (birth_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        // Check if the current data point is being hovered over
        if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredDataPoint = i;
        }
    }
    endShape();

    // ... existing code ...
}

// Add a function to display the data value when the mouse is moved
function mouseMoved() {
    if (hoveredDataPoint !== undefined) {
        fill(255, 0, 255); // purple color
        textSize(14);
        text(birth_year[hoveredDataPoint], mouseX, mouseY);
    }
}
// Add a global variable to store the hovered data point
var hoveredDataPoint;

function draw() {
    // ... existing code ...

    // Draw first x-axis from birth_year data
    line(0, height/3*2, width, height/3*2);
    text("Birth Year", width/2, height/3*2 + 20);
    fill(175,100,31, 0.25);
    noStroke();
    beginShape();
    for (var i = 0; i < birth_year.length; i++) {
        var x = (birth_year[i] - minYear) * w;
        var y = height/3*2;
        vertex(x, y);
        ellipse(x, y, 10, 10);

        // Check if the current data point is being hovered over
        if (dist(mouseX, mouseY, x, y) < 10) {
            hoveredDataPoint = i;
        }
    }
    endShape();

    // ... existing code ...
}

// Add a function to display the data value when the mouse is moved
function mouseMoved() {
    if (hoveredDataPoint !== undefined) {
        fill(255, 0, 255); // purple color
        textSize(14);
        text(birth_year[hoveredDataPoint], mouseX, mouseY);
    }
}

}
endShape();
  
// Add mouseover hover event to display death_year data point
  var msg = "";
  for (var i = 0; i < deaths_per_year.length; i++) {
  var x = (deaths_per_year[i] - minYear) * w;
  var y = height/3;
  ellipse(x, y, 10, 10);
  if (dist(mouseX, mouseY, x, y) < 10) {
  msg = float(deaths_per_year[i]).toFixed(1);
}
}
  text(msg, width/2, height/3 - 20);
}
