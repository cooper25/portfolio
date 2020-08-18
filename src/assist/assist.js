    /* Update Manager */
     
    var NOTIFY = "yes"
    var NOTIFY_UPDATE = "yes"
    var CUSTOM_NOTIFICATION = ""
    var CUSTOM_MESSAGE;

    if (NOTIFY_UPDATE == "yes") {
        CUSTOM_MESSAGE = "Updated applied! Go to <a id='send' href='https://github.com/myBuildr'>the github</a> to update! || (This will go away in a day)"
    } else if (NOTIFY_UPDATE == "no") {
        CUSTOM_MESSAGE = CUSTOM_NOTIFICATION
    }

    if (NOTIFY == "yes") {
        document.getElementById("notice").style.padding = "1%"
        document.getElementById("notice").style.margin = "0px"
        document.getElementById("notice").style.zIndex = "1000"
        document.getElementById("notice").style.backgroundColor = "rgb(240, 65, 34)"
        document.getElementById("notice").style.color = "white"
        document.getElementById("notice").style.fontFamily = "'Hind Madurai', sans-serif"
        document.getElementById("notice").style.fontWeight = "500"
        document.getElementById("notice").style.textAlign = "center"
        document.getElementById("notice").innerHTML = CUSTOM_MESSAGE
        document.getElementById("send").style.fontWeight = "800"
    } else if (NOTIFY == "no") {
        notice.style.visibility = "hidden"
    }