/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

  /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

function changeImgfeature() {
    var image = document.getElementById('arrowfeature')
    if (image.src.match("/images/icon-arrow-down.svg")){
        image.src = "/images/icon-arrow-up.svg"
    }else {
        image.src = "/images/icon-arrow-down.svg"
    }
}
function changeImgcompany() {
    var image = document.getElementById('arrowcompany')
    if (image.src.match("/images/icon-arrow-down.svg")){
        image.src = "/images/icon-arrow-up.svg"
    }else {
        image.src = "/images/icon-arrow-down.svg"
    }
}
