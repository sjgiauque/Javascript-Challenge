// from data.js
var tableData = data;

// from data.js
var tableData = data;

// Select tbody 
tbody = d3.select("tbody")

// Loop through table using Object.entries
function displayData(data){ 
    tbody.text("")
    data.forEach(function(sighting){
    new_tr = tbody.append("tr")
    Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

// Select "filter" button
var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent page from default refresh
  d3.event.preventDefault();

  // Select elementInput to get raw HTML node
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  // Print (console.log) elementInput value (property)
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  // Create a variable which parses the table if a user enters partial filter criteria
 var filtered = tableData.filter(sighting =>{
  return (sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 // Filter entries using displayData to update table
 displayData(filtered);

});

var filterInputs = d3.selectAll('.form-control');

// Clear Input Fields and Input Objects
function clearEntries() {
    filters = {};

    // Set every input field to "0" (empty)
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// Clear button on click clears fields
clearButton.on('click', function () {

// Create Handling Event to keep page from refreshing completely, only want the table to refresh
    d3.event.preventDefault();
    
// Clear input fields
    clearEntries()
});
