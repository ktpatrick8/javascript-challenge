// from data.js
var tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear out any existing data
  tbody.html("");

  // loop through each row and append data to table
  data.forEach((dataRow) => {
    var row = tbody.append("tr");

    Object.values(dataRow).forEach((value) => {
      var cell = row.append("td");
        cell.text(value);
      }
    );
  });
}

function handleClick() {

  // Grab the value from the filter
  var date = d3.select("#datetime");
  let filteredData = tableData;

  // filter the data
  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  // Rebuild the table using the filteredData
  buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table
buildTable(tableData);
