"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

// array for quarterly sales of all regions
const quarter1 = [region1[0], region2[0], region3[0], region4[0], region5[0]];
const quarter2 = [region1[1], region2[1], region3[1], region4[1], region5[1]];
const quarter3 = [region1[2], region2[2], region3[2], region4[2], region5[2]];
const quarter4 = [region1[3], region2[3], region3[3], region4[3], region5[3]];

// for loops to sum total sales of each quarter
let quarter1_Sum = 0;
for (var i =0; i < quarter1.length; i++) {
  quarter1_Sum += quarter1[i];
}
let quarter2_Sum = 0;
for (var i =0; i < quarter2.length; i++) {
  quarter2_Sum += quarter2[i];
}
let quarter3_Sum = 0;
for (var i =0; i < quarter3.length; i++) {
  quarter3_Sum += quarter3[i];
}
let quarter4_Sum = 0;
for (var i =0; i < quarter4.length; i++) {
  quarter4_Sum += quarter4[i];
}

// for loops to sum total sales by region
let region1_Sum = 0;
for (var i =0; i < region1.length; i++) {
  region1_Sum += region1[i];
}
let region2_Sum = 0;
for (var i =0; i < region2.length; i++) {
  region2_Sum += region2[i];
}
let region3_Sum = 0;
for (var i =0; i < region3.length; i++) {
  region3_Sum += region3[i];
}
let region4_Sum = 0;
for (var i =0; i < region4.length; i++) {
  region4_Sum += region4[i];
}
let region5_Sum = 0;
for (var i =0; i < region5.length; i++) {
  region5_Sum += region5[i];
}

// array for total sales by region
const regionalTotals = [region1_Sum, region2_Sum, region3_Sum, region4_Sum, region5_Sum];

// for loop to sum total yearly sales of all regions
let totalSales = 0;
for (var i =0; i < regionalTotals.length; i++) {
  totalSales += regionalTotals[i];
}

// display totals
let html0 = `<h2>Sales by Quarter</h2>`;
document.write(html0);

let html1 = `<p>Q1: $${quarter1_Sum}<br>Q2: $${quarter2_Sum}<br>Q3: $${quarter3_Sum}<br>Q4: $${quarter4_Sum}<br><p>`;
document.write(html1);

let html3 = `<h2>Sales by Region</h2>`;
document.write(html3);

let html4 = `<p>Region 1: $${region1_Sum}<br>Region 2: $${region2_Sum}<br>Region 3: $${region3_Sum}<br>Region 4: $${region4_Sum}<br>Region 5: $${region5_Sum}<br><p>`;
document.write(html4);

let html5 = `<h2>Total Sales</h2>`;
document.write(html5);

let html6 = `<p>$${totalSales}</p>`;
document.write(html6);