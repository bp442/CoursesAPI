"use strict";

let deptText = document.getElementById("deptText");
let numCourseText = document.getElementById("numCourseText");
let nameCourseText = document.getElementById("nameCourseText");
let instructorText = document.getElementById("instructorText");
let startDateText = document.getElementById("startDateText");
let numDaysText = document.getElementById("numDaysText");
let detailForm = document.getElementById("completeForm");


window.onload = function init() {

    detailForm.addEventListener("submit", courseSubmit);
}

function courseSubmit(form) {
    form.preventDefault();

        let bodyData = {
            id: "",
            dept: deptText.value,
            courseNum: numCourseText.value,
            courseName: nameCourseText.value,
            instructor: instructorText.value,
            startDate: startDateText.value,
            numDays: Number(numDaysText.value),
        };

        fetch("http://localhost:8081/api/courses", {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                "Content-type":
                    "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                location.href = "index.html";
            })
            .catch(err => {

            })
}