window.onload = function() {

    /* Opacity Error Prevention */

    setTimeout(contentFadedInComplete, 1000)

    /* Usage Detection */

    if (location.hostname !== "coopertsoris.dev") {
        document.body.remove()
        alert("Please don't steal the source code.\n© Cooper Tsoris 2020")
    } else {
        console.warn("Correct Hostname!")
    }

    /* Confetti */

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

    /* Animation */

    let content = document.getElementById("ct")
    content.addEventListener("animationend", contentFadedInComplete);
    function contentFadedInComplete() {
        content.style.opacity = "100%"
    }
    
};