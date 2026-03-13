function showImg(src) {
    const videoCont = document.getElementById('videoContainer');
    const imgCont = document.getElementById('mainImage');
    if(videoCont && imgCont) {
        videoCont.style.display = 'none';
        imgCont.style.display = 'block';
        imgCont.src = src;
    }
}

function resetVideo() {
    const videoCont = document.getElementById('videoContainer');
    const imgCont = document.getElementById('mainImage');
    if(videoCont && imgCont) {
        videoCont.style.display = 'block';
        imgCont.style.display = 'none';
    }
}
