"use strict";

window.onload = init;

function init() {
    const urlParams = new URLSearchParams(location.search);
    let table = document.getElementById("tableBody");
    let id = -1;
    if (urlParams.has("courseid") === true) {
        id = urlParams.get("courseid")
    }

    fetch("http://localhost:8081/api/courses").then(response => response.json())
        .then(data => {
            id -= 1;
            let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5);
                let cell7 = row.insertCell(6);

                cell1.innerText = data[id].id;
                cell2.innerText = data[id].dept;
                cell3.innerText = data[id].courseNum;
                cell4.innerText = data[id].courseName;
                cell5.innerText = data[id].instructor;
                cell6.innerText = data[id].startDate;
                cell7.innerText = data[id].numDays;

        });
}