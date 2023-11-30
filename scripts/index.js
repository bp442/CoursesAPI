"use strict";

window.onload = init;

function init() {
    let table = document.getElementById("tableBody");

    fetch("http://localhost:8081/api/courses").then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);


                cell1.innerText = data[i].dept;
                cell2.innerText = data[i].courseNum;
                cell3.innerText = data[i].courseName;
                

                cell4.innerHTML = "<a href =`http://localhost:8081/details.html?courseid=${data[i].id}`>Details Here!</a>"

            }
        })
}