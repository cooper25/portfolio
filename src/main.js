window.onload = function() {

    /* Usage Detection */

    var webUrl = location.hostname;
    if (webUrl == "localhost" || webUrl == "coopertsoris.dev") {
        var link = document.createElement("link")
        link.rel = "stylesheet"
        link.type = "text/css"
        link.href = "/main.css"
        document.getElementsByTagName("head")[0].appendChild(link)
        console.log("CSS Loaded")
    } else {
        document.body.remove()
        alert("Please don't steal the source code.\nYour location is being tracked.\n© Cooper Tsoris 2020")
        while (true) {
            console.log("You stole the source-code!")
        }
    }
};