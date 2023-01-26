import { dataJson } from "../../data.js";
const chartbox = document.querySelector(".chart-box")
const chartBar = document.querySelectorAll(".chart-bar")
const weeklyAmount = document.querySelector(".weekly-income")
const montlyAmount = document.querySelector(".montly-income")

// ////////////////////////////
// hover chart bars
chartbox.onmouseover = function (clickedBar) {
    if (!clickedBar.target.matches(".chart-bar")) return; /* to no blank click*/
    dataJson.map((obj, i) => {
        if (clickedBar.target.nextElementSibling.innerText == obj.day) {
            clickedBar.target.innerHTML = `<span class="chart-rider">$${obj.amount}</span>`
        }
    })
};

chartbox.onmouseout = function (clickedBar) {
    if (!clickedBar.target.matches(".chart-bar")) return; /* to no blank click*/
    clickedBar.target.innerHTML = ""
};

// ////////////////////////////
// dataload fromjson
const loaddata = (function () {
    let totalWeekly = 0
    dataJson.map((obj, i) => {
        chartBar[i].style.height = obj.amount + "%";
        totalWeekly += obj.amount;
    })
    montlyAmount.innerText = "$" + totalWeekly.toFixed(2);
    weeklyAmount.innerText = "$" + (totalWeekly * 4).toFixed(2); // to month 4x
})()

// ////////////////////////////
// chart animation
setTimeout(() => {
    var elem = document.getElementById("perde");
    var height = 100;
    var id = setInterval(frame, 10);
    function frame() {
        if (height <= 0) {
            clearInterval(id);
        } else {
            height--;
            elem.style.height = height + '%';
        }
    }
}, 500);







