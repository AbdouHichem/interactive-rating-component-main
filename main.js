
const submitButton = document.querySelector(".submitbtn");
const ratingState = document.querySelector(".ratingState");
const thankYouState = document.querySelector(".thankYouState");
const list = [...ratingState.getElementsByTagName("li")];
const ul = ratingState.querySelector("ul");
let rateValueText= thankYouState.querySelector(".rating");
var rateValue = 0;



thankYouState.classList.add('hide');


submitButton.addEventListener("click", submitFnc);

list.forEach(element => {
    element.classList.add('initBtn');
});


ul.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
       
        restoreState();
        rateValue = e.target.textContent;
        e.target.classList.add('active');
    }
})

ul.addEventListener("mouseover", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        e.target.classList.remove('initBtn');
        e.target.classList.add('mousein');
       

    }
});

ul.addEventListener("mouseout", function (e) {
    if (e.target && e.target.nodeName == "LI" && e.target.textContent != rateValue) {
       
       e.target.classList.remove('mousein');
       e.target.classList.add('initBtn');
    } else if (e.target.textContent === rateValue) {
       e.target.classList.add('active');
    }
});

function restoreState() {
    list.forEach(element => {
        element.classList.remove('active');
        element.classList.add('initBtn');
    });
}
function submitFnc() {
    if (rateValue === 0) {
        alert("Please select a rate");
        return;
    }
    rateValueText.textContent = "You selected "+ rateValue+" out of 5";
    ratingState.classList.add('hide');
    thankYouState.classList.remove('hide');

}
