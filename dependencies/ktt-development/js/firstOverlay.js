$( document ).ready(function() {
    firstLoad();
});

function firstLoad(){
    document.getElementById("arrow").style.display = getCookie("learnedNavigation") != "true" ? "block" : "none";
}

function confirmFirstLoad(){
    setCookie("learnedNavigation",true,1/24);
    firstLoad();
}
