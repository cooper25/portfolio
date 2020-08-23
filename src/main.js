window.onload = function() {

    /* Usage Detection */

    var webUrl = location.hostname;
    if (!webUrl == "localhost" || !webUrl == "coopertsoris.dev") {
        document.body.remove()
        alert("Please don't steal the source code.\n© Cooper Tsoris 2020")
    }

    confetti({
        angle: 60,
        spread: 50,
        startVelocity: 50,
        origin: { x: 0, y:1}
    });
    confetti({
        angle: 120,
        spread: 50,
        startVelocity: 50,
        origin: { x: 1, y:1 }
    });

    var content = document.getElementById("ct")
    content.addEventListener("animationend", contentFadedInComplete);
    function contentFadedInComplete() {
        content.style.opacity = "100%"
    }
};