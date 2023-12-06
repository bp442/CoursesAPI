"use strict";
const urlParams = new URLSearchParams(location.search);
let table = document.getElementById("tableBody");
let id;
if (urlParams.has("courseid") === true) {
    id = Number(urlParams.get("courseid"));
}

window.onload = init;

function init() {

    fetch("http://localhost:8081/api/courses").then(response => response.json())
        .then(data => {
            
            for(let i = 0; i < data.length; i++){
                if(data[i].id == id){
                    let row = table.insertRow(-1);
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    let cell4 = row.insertCell(3);
                    let cell5 = row.insertCell(4);
                    let cell6 = row.insertCell(5);
                    let cell7 = row.insertCell(6);
    
                    cell1.innerText = data[i].id;
                    cell2.innerText = data[i].dept;
                    cell3.innerText = data[i].courseNum;
                    cell4.innerText = data[i].courseName;
                    cell5.innerText = data[i].instructor;
                    cell6.innerText = data[i].startDate;
                    cell7.innerText = data[i].numDays;
                }
            }
           

        });

        let deleteBtn = document.getElementById("deleteBtn");

        deleteBtn.onclick = deleteCourse;
}

function deleteCourse(){
    fetch("http://localhost:8081/api/courses/" + id, {
        method: "DELETE"
    })
    .then(response => response.json())
    .then(json =>{
        location.href = "index.html";
    })
    .catch(err =>{
        location.href = "index.html";  
    })

}