// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// PROPERTY SEARCH
function searchProperty() {
    alert(
        "Property search activated! Your selected location, property type and price range will be processed here."
    );
}


// VIEW PROPERTY
function viewProperty(propertyName) {
    alert(
        "You selected: " +
        propertyName +
        "\n\nContact SVA Properties for more information about this property."
    );
}


// VIEW ALL PROPERTIES
function showMessage() {
    alert(
        "More properties will be available here. Connect this section to your property database."
    );
}


// CONTACT FORM
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "!\n\nYour message has been received by SVA Properties."
    );

    event.target.reset();
}


// CLOSE MOBILE MENU AFTER CLICKING A LINK
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});