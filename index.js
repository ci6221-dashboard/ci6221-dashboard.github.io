// create data_set
var data1 = [{
    group: "Aljunied",
    value: 45.28
}, {
    group: "Ang Mo Kio",
    value: 69.33
}, {
    group: "Bishan Toa Payoh",
    value: 56.93
}, {
    group: "Chua Chu Kang",
    value: 61.2
}, {
    group: "East Coast",
    value: 54.83
}, {
    group: "Holland Bukit Timah",
    value: 60.08
}, {
    group: "Jurong",
    value: 66.96
}, {
    group: "Marine Parade",
    value: 56.64
}, {
    group: "Moulmein Kallang",
    value: 58.55
}, {
    group: "Nee Soon",
    value: 58.4
}, {
    group: "Pasir Ris Punggol",
    value: 64.79
}, {
    group: "Sembawang",
    value: 63.9
}, {
    group: "Tampines",
    value: 57.22
}, {
    group: "Tanjong Pagar",
    value: 100
}, {
    group: "West Coast",
    value: 66.57
}];

var data2 = [{
    group: "Aljunied",
    value: 49.04
}, {
    group: "Ang Mo Kio",
    value: 78.64
}, {
    group: "Bishan Toa Payoh",
    value: 73.59
}, {
    group: "Chua Chu Kang",
    value: 76.91
}, {
    group: "East Coast",
    value: 60.73
}, {
    group: "Holland Bukit Timah",
    value: 66.6
}, {
    group: "Jalan Besar",
    value: 67.75
}, {
    group: "Jurong",
    value: 79.29
}, {
    group: "Marine Parade",
    value: 64.07
}, {
    group: "Marsiling Yew Tee",
    value: 68.73
}, {
    group: "Nee Soon",
    value: 66.83
}, {
    group: "Pasir Ris Punggol",
    value: 72.89
}, {
    group: "Sembawang",
    value: 72.28
}, {
    group: "Tampines",
    value: 72.07
}, {
    group: "Tanjong Pagar",
    value: 77.71
}, {
    group: "West Coast",
    value: 78.57
}];

var data3 = [{
    group: "Aljunied",
    value: 40
}, {
    group: "Ang Mo Kio",
    value: 72
}, {
    group: "Bishan Toa Payoh",
    value: 67
}, {
    group: "Choa Chu Kang",
    value: 59
}, {
    group: "East Coast",
    value: 54
}, {
    group: "Holland Bukit Timah",
    value: 68
}, {
    group: "Jalan Besar",
    value: 67
}, {
    group: "Jurong",
    value: 75
}, {
    group: "Marine Parade",
    value: 57
}, {
    group: "Marsiling Yew Tee",
    value: 64
}, {
    group: "Nee Soon",
    value: 61
}, {
    group: "Pasir Ris Punggol",
    value: 63
}, {
    group: "Sembawang",
    value: 69
}, {
    group: "Tampines",
    value: 67
}, {
    group: "Tanjong Pagar",
    value: 63
}, {
    group: "West Coast",
    value: 52
}];

// set the dimensions and margins of the graph
var margin = {
        top: 30,
        right: 30,
        bottom: 70,
        left: 60
    },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("#my_dataviz2")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Initialize the X axis
var x2 = d3.scaleBand()
    .range([0, width])
    .padding(0.2);
var xAxis2 = svg2.append("g")
    .attr("transform", "translate(0," + height + ")")


// Initialize the Y axis
var y2 = d3.scaleLinear()
    .range([height, 0]);
var yAxis2 = svg2.append("g")
    .attr("class", "myYaxis")



// A function that create / update the plot for a given variable:
function update1(data) {

    // Update the X axis
    x2.domain(data.map(function(d) {
        return d.group;
    }))
    xAxis2.call(d3.axisBottom(x2))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-25)")
        .style("text-anchor", "end");
    //Add X axis label
    svg2.append("text")
        .attr("transform",
            "translate(" + (width / 2) + " ," +
            (height + margin.top + 38) + ")")
        .style("text-anchor", "middle")
        .text("GRCs");

    // Update the Y axis
    y2.domain([0, 100]);
    yAxis2.transition().duration(1000).call(d3.axisLeft(y2));
    //Add Y axis label
    svg2.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 10)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("PAP Voting % Result");

    // Create the u variable
    var u2 = svg2.selectAll("rect")
        .data(data)

    u2
        .enter()
        .append("rect") // Add a new rect for each new elements
        .merge(u2) // get the already existing elements as well
        .transition() // and apply changes to all of them
        .duration(1000)
        .attr("x", function(d) {
            return x2(d.group);
        })
        .attr("y", function(d) {
            return y2(d.value);
        })
        .attr("width", x2.bandwidth())
        .attr("height", function(d) {
            return height - y2(d.value);
        })
        .attr("fill", "#69b3a2")

    // If less group in the new dataset, I delete the ones not in use anymore
    u2
        .exit()
        .remove()
}