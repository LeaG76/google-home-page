var url = "google.com";

function searchOnGoogle() {
    url = 'https://'+url+'/search?q='+inputValue('#inputSearch').value;
    window.open(url);
}

function inputValue(e) {
    return document.querySelector(e);
}