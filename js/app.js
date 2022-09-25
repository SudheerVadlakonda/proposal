// navigation bar toggle
var menuIcon = document.getElementById('menuIcon');
menuIcon.addEventListener("click", function () {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("navbarToggle")
});


// dynamically hiding the price block
document.querySelectorAll("input[class='radioBtn']").forEach((input) => {
    input.addEventListener('change', function (e) {
        if(e.target.id === "Hiring"){
            document.getElementById("hideBlock").style.display = "block";
        }else{
            document.getElementById("hideBlock").style.display = "none";

        }
    });
});
// dynamically render date 
(function freshDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    let month = months[d.getMonth()];
    let date = [d.getDate()];
    let year = [d.getFullYear()];
    var res = month + " " + date + ", " + year;
    document.getElementById("freshDate").innerText = res;
})();


// scroll smooth on anchors
document.querySelectorAll('a[href^="#"]').forEach(function (e){
    e.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
