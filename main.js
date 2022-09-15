
const submitButton = document.querySelector(".submitbtn");
const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");
const list = [...ratingState.getElementsByTagName("li")];
const ul = ratingState.querySelector("ul");
let rateValueText= thankYouState.querySelector(".rating");
var rateValue = 0;

submitButton.addEventListener("click", submitFnc);

ul.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        console.log(e.target.textContent + " was clicked");
        restoreState();
        rateValue = e.target.textContent;
        e.target.style.color = "white";
        e.target.style.backgroundColor = "orange";
    }
})
ul.addEventListener("mouseover", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        console.log(e.target.textContent + " is mouse in");
        e.target.style.color = "white";
        e.target.style.backgroundColor = "#7c8798";
    }
});
ul.addEventListener("mouseout", function (e) {
    if (e.target && e.target.nodeName == "LI" && e.target.textContent != rateValue) {
        console.log(e.target.textContent + " is mouse out");
        e.target.style.color = "#7c8798";
        e.target.style.backgroundColor = "#252d37";
    } else if (e.target.textContent === rateValue) {
        e.target.style.color = "white";
        e.target.style.backgroundColor = "orange";
    }
});



function restoreState() {
    list.forEach(element => {
        element.style.backgroundColor = "#252d37";
        element.style.color = "#7c8798";
    });
}
function submitFnc() {
    if (rateValue === 0) {
        alert("Please select a rate");
        return;
    }
    ratingState.style.display = "none";
    rateValueText.textContent = "You selected "+ rateValue+" out of 5";
    thankYouState.style.display = "flex";

}
function itemSelected() {

}