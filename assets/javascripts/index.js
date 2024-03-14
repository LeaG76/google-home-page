var url = "google.com";
var base = "https://leag76.github.io/google-home-page/"

function searchOnGoogle() {
    url = 'https://'+url+'/search?q='+inputValue('#inputSearch').value;
    window.open(url);
    goBackHome();
}

function inputValue(e) {
    return document.querySelector(e);
}

function goBackHome() {
    window.location.href = base;
}
