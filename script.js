function showAsnwer(answerID , iconID , showID){
    document.getElementById(iconID).classList.remove("none");
    document.getElementById(answerID).classList.remove("none");
    document.getElementById(showID).classList.add("none");
    document.getElementById(showID).classList.remove("show");
}
function hideAnswer(answerID , iconID , showID){
    document.getElementById(iconID).classList.remove("show");
    document.getElementById(iconID).classList.add("none");
    document.getElementById(answerID).classList.add("none");
    document.getElementById(answerID).classList.remove("show");
    document.getElementById(showID).classList.add("show");
    document.getElementById(showID).classList.remove("none");
}