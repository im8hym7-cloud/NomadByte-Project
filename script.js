function showImg(src) {
    const v = document.getElementById('videoBox');
    const i = document.getElementById('imageBox');
    if(v && i) {
        v.style.display = 'none';
        i.style.display = 'block';
        i.src = src;
    }
}

function resetVideo() {
    document.getElementById('videoBox').style.display = 'block';
    document.getElementById('imageBox').style.display = 'none';
}
