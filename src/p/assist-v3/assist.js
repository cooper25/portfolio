// Made by Loertis

/* Variables */

// THEMES 
var HEADER_COLOR;  
var HEADER_BACKGROUND_IMAGE;   
var BACKGROUND_COLOR; 
var FONT;
var FAVICON_IMAGE;

// MAIN CONGIF
var DESK_NAME;
var SYSTEMS;
var CONTACTS;
    
// SYSTEMS
var SYSTEM_BUTTON_1;   
var SYSTEM_BUTTON_2;
var SYSTEM_BUTTON_3;
var SYSTEM_BUTTON_4;
var SYSTEM_BUTTON_5;
var SYSTEM_BUTTON_6;
var SYSTEM_BUTTON_7;
var SYSTEM_BUTTON_8;
var SYSTEM_BUTTON_9;
var SYSTEM_BUTTON_10;

// CONTACTS
var CONTACT_BUTTON_1;
var CONTACT_BUTTON_2;
var CONTACT_BUTTON_3;
var CONTACT_BUTTON_4;
var CONTACT_BUTTON_5;

// STATUS
var AUTOMATIC_STATUS;
var SYSTEM_STATUS;

// CSS Loader
var link = document.createElement("link")
link.rel = "stylesheet"
link.type = "text/css"
link.href = "/assist-v3/assistv3.css"
document.getElementsByTagName("head")[0].appendChild(link)
console.log("CSS Loaded succesfully!")

window.onload = function() {

// Footer Loader
var footer = document.createElement("footer")
footer.write = "Powered by Cooper25"
document.getElementsByTagName("body")[0].appendChild(footer)
console.log("Footer loaded succesfully!")

// Font Loader
var link = document.createElement("link")
link.rel = "icon"
link.href = FAVICON_IMAGE
document.getElementsByTagName("head")[0].appendChild(link)
document.getElementById("body").style.fontFamily = FONT
console.log("Fonts loaded succesfully!")

// Favicon
var link = document.createElement("link")
link.rel = "stylesheet"
link.href = "https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600&family=Noto+Sans+JP:wght@300;400;500&family=Open+Sans:wght@400;600;700&family=Roboto:wght@300;400;500&family=Source+Sans+Pro:wght@400;600;700&display=swap"
document.getElementsByTagName("head")[0].appendChild(link)
document.getElementById("body").style.fontFamily = FONT
console.log("Favicon loaded succesfully!")

// Status
var operation = document.getElementById("operation")
if (SYSTEM_STATUS == "Normal") {
    operation.innerHTML = "✔️ Operating Normal"
} else if (SYSTEM_STATUS == "Issues") {
    operation.innerHTML = "💢 Experiencing Issues"
} else if (SYSTEM_STATUS == "Maintenance") {
    operation.innerHTML = "🛠️ Under Maintenance"
} else if (SYSTEM_STATUS == "Down") {
    operation.innerHTML = "🔻 Services Down"
} else if (SYSTEM_STATUS == "CHANGE_ME") {
    operation.innerHTML = "🛠️ CHANGE ME"
} else {
    operation.innerHTML = "⚠️ Incorrect Status Mode"
}

// Name
document.getElementById("name").innerHTML = DESK_NAME

// Colors
document.getElementById("backgroundrgb").style.backgroundImage = HEADER_BACKGROUND_IMAGE
document.getElementById("backgroundrgb").style.backgroundColor = HEADER_COLOR
document.getElementById("body").style.backgroundColor = BACKGROUND_COLOR

} // LOAD