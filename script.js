// وظيفة إظهار الصورة المختارة مكان الفيديو
function showImg(src) {
    const videoCont = document.getElementById('videoContainer');
    const imgCont = document.getElementById('mainImage');
    if(videoCont && imgCont) {
        videoCont.style.display = 'none';
        imgCont.style.display = 'block';
        imgCont.src = src;
    }
}

// وظيفة العودة لعرض الفيديو الأساسي
function resetVideo() {
    document.getElementById('videoContainer').style.display = 'block';
    document.getElementById('mainImage').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const buyBtn = document.getElementById('buyNow');
    if(buyBtn) {
        buyBtn.addEventListener('click', () => {
            console.log("جاري التوجه لصفحة الدفع...");
        });
    }
});
