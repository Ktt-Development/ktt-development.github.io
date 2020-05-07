$( document ).ready(function() {
    setTimeout(function() {
        if ( typeof(window.google_jobrunner) === "undefined" )
            document.getElementById("sec-head").style.display = "block";
    }, 10000);
});