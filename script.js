document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('mainDisplay'); // تأكد من وجود ID في HTML
    const videoCont = document.getElementById('videoBox');
    const imageBox = document.getElementById('imageBox');
    const thumbnails = document.querySelectorAll('.gallery img');

    thumbnails.forEach(img => {
        img.addEventListener('mouseover', () => {
            if(videoCont && imageBox) {
                videoCont.style.display = 'none';
                imageBox.style.display = 'block';
                imageBox.src = img.src;
            }
        });
    });
});

// وظيفة العودة للفيديو
function resetToVideo() {
    document.getElementById('videoBox').style.display = 'block';
    document.getElementById('imageBox').style.display = 'none';
}
