// EHannan
// 12.23.22
// Data Visualization - Doughnut Attempt
// Last revision 1.15.23

var data = {};
var maritalStatusData = {};
var minYear = 1900;
var maxYear = 2023;
var dropdown;
var selectedData = "deaths_per_year";

// function preload() {
//  var url = "https://www.dropbox.com/s/zsxztzqhldh24ib/UnclaimedEstates%20Data%20Set%20List%20NEW%20REMODEL%20Version.D%201_17_23%20-%20UPDATED%20-%20UnclaimedEstatesList.csv?dl=0";
  table = loadTable(url, 'csv', 'header');
  //}

  //Local CSV data file load

  function preload() {
    var url = "UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy/UnclaimedEstates Data Set List NEW REMODEL Version.D 1_17_23 - UPDATED - UnclaimedEstatesList copy.csv";
    table = loadTable(url, 'csv', 'header');
  }



  function setup() {
    preload();
    createCanvas(1000, 600);
    background(255);
    textSize(14);
    textAlign(CENTER);
    createDropdown();
  }
  
//Data Source csv online and also in file
 {
  var url = "https://www.dropbox.com/s/zsxztzqhldh24ib/UnclaimedEstates%20Data%20Set%20List%20NEW%20REMODEL%20Version.D%201_17_23%20-%20UPDATED%20-%20UnclaimedEstatesList.csv?dl=0";
  table = loadTable(url, 'csv', 'header');
  for (var i = 0; i < table.getRowCount(); i++) {
    var year = table.getString(i, 0);
    var value = table.getNum(i, 1);
    if (!data[year]) {
        data[year] = 0;
    }
    data[year] += value;

    var maritalStatus = table.getString(i, 5);
    if (!maritalStatusData[maritalStatus]) {
        maritalStatusData[maritalStatus] = 0;
    }
    maritalStatusData[maritalStatus]++;
  }

}

  //Dropdown - list options to adjust the doughnut

  function createDropdown() {
    dropdown = createSelect();
    dropdown.position(10, 10);
    dropdown.option("deaths_per_year");
    dropdown.option("marital_status");
    dropdown.option("age");
    dropdown.changed(handleSelection);
  }

  
  function handleSelection() {
    selectedData = dropdown.value();
  }
  
  function draw() {
    background(225);
    
// Data to source from the csv  
    var dataToUse;
    if (selectedData === "deaths_per_year") {
      dataToUse = data;
    } else if (selectedData === "marital_status") {
      dataToUse = maritalStatusData;
    } else if (selectedData === "age") {
      dataToUse = {};
   
 {
  background(225);
    var dataToUse;
  if (selectedData === "deaths_per_year") {
    dataToUse = data;
  } else if (selectedData === "age") {
    dataToUse = {};
    for (var i = 0; i < table.getRowCount(); i++) {
      var age = table.getString(i, "age");
      if (!dataToUse[age]) {
        dataToUse[age] = 0;
      }
      dataToUse[age]++;
    }
  }
  
  else if (selectedData === "marital_status") {
    dataToUse = maritalStatusData;
  }
    var startingAngle = 0;
    var anglePerDataPoint = 360 / Object.values(dataToUse).reduce((a, b) => a + b, 0);
  push();
  translate(width/2, height/2);
  for (var key in dataToUse) {
    var value = dataToUse[key];
    var endAngle = startingAngle + value * anglePerDataPoint;
    var isHovered = false;
    if (dist(mouseX - width/2, mouseY - height/2, 0, 0) < width/4) {
      if (mouseX > width/2) {
        if (startingAngle <= mouseY && mouseY <= endAngle) {
          isHovered = true;
        }
      } else {
        if (endAngle <= mouseY && mouseY <= startingAngle) {
          isHovered = true;
        }


//Doughnut displayed data headers from csv
  var dataToUse;
  if (selectedData === "deaths_per_year") {
    dataToUse = data;
  } else if (selectedData === "marital_status") {
    dataToUse = data;
  }else if (selectedData === "age") {
        dataToUse = age;
  }
        
//Angles of segments of the doughnut
  var startingAngle = 0;
  var anglePerDataPoint = 360 / Object.values(dataToUse).reduce((a, b) => a + b, 0);
  push();
  translate(width/2, height/2);
  for (var key in dataToUse) {
    var value = dataToUse[key];
    var endAngle = startingAngle + value * anglePerDataPoint;
    var isHovered = false;
    if (dist(mouseX - width/2, mouseY - height/2, 0, 0) < width/4) {
      if (mouseX > width/2) {
        if (startingAngle <= mouseY && mouseY <= endAngle) {
          isHovered = true;
        }
      } else {
        if (endAngle <= mouseY && mouseY <= startingAngle) {
          isHovered = true;
        }
      }
    }
    
//Hover text color reveal data point
    if (isHovered) {
        fill("purple");
        textSize(12);
        text(key, 0, 0);
      }

//Hover over segment color change
    fill(isHovered ? "red" : "blue");
    arc(0, 0, width/2, width/2, radians(startingAngle), radians(endAngle));
    startingAngle = endAngle;
    
//Dropdown menu options  }
  function createDropdown() {
    dropdown = createSelect();
    dropdown.position(10, 10);
    dropdown.option("deaths_per_year");
    dropdown.option("marital_status");
    dropdown.option("age");
    dropdown.changed(handleSelection);
  }
  
  function handleSelection() {
    selectedData = dropdown.value();
  }
  
//Doughnut Date 1 Deaths_per_year
    
    var dataToUse;
    if (selectedData === "deaths_per_year") {
      dataToUse = data;
      
//Doughnut Date 2 age 
    } else if (selectedData === "age") {
      dataToUse = {};
      for (var i = 0; i < table.getRowCount(); i++) {
        var age = table.getString(i, "age");
        if (!dataToUse[age]) {
          dataToUse[age] = 0;
        }
        dataToUse[age]++;
      }
      
//Doughnut Date 3 marital_status
    } else if (selectedData === "marital_status") {
      dataToUse = maritalStatusData;
    }
    
//Angles of doughnut segment
    var startingAngle = 0;
    var anglePerDataPoint = 360 / Object.values(dataToUse).reduce((a, b) => a + b, 0);
    push();
    translate(width/2, height/2);
    for (var key in dataToUse) {
      var value = dataToUse[key];
      var endAngle = startingAngle + value * anglePerDataPoint;
      var isHovered = false;
      if (dist(mouseX - width/2, mouseY - height/2, 0, 0) < width/4) {
        if (mouseX > width/2) {
          if (startingAngle <= mouseY && mouseY <= endAngle) {
            
// Hover over doughnut segment
            isHovered = true;
          }
        } else {
          if (endAngle <= mouseY && mouseY <= startingAngle) {
            isHovered = true;
        }
        }
        }
        fill(isHovered ? "purple" : "gray");
        arc(0, 0, width/2, height/2, startingAngle, endAngle);
        if (isHovered) {
        fill(255);
        textSize(12);
        text(key, 0, 0);
        }
        startingAngle = endAngle;
        }
        pop(); }