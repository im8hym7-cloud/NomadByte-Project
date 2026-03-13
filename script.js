document.addEventListener('DOMContentLoaded', () => {
    // 1. تعريف العناصر
    const mainVideoContainer = document.getElementById('videoContainer');
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.image-gallery img');
    const buyButton = document.querySelector('.buy-btn');

    // 2. وظيفة تبديل الميديا (إظهار الصورة وإخفاء الفيديو)
    thumbnails.forEach(img => {
        // عند مرور الماوس أو الضغط
        const changeToImage = () => {
            mainVideoContainer.style.display = 'none'; // إخفاء الفيديو
            mainImage.style.display = 'block';        // إظهار الصورة
            mainImage.src = img.src;                 // وضع رابط الصورة المختارة
            
            // إضافة إطار أصفر للصورة المختارة
            thumbnails.forEach(t => t.style.borderColor = 'transparent');
            img.style.borderColor = '#ffc107';
        };

        img.addEventListener('mouseover', changeToImage);
        img.addEventListener('click', changeToImage);
    });

    // 3. وظيفة العودة للفيديو (اختياري: عند الضغط على زر العودة أو النقر على الصورة الكبيرة)
    if (mainImage) {
        mainImage.addEventListener('click', () => {
            mainImage.style.display = 'none';
            mainVideoContainer.style.display = 'block';
            thumbnails.forEach(t => t.style.borderColor = 'transparent');
        });
    }

    // 4. تفعيل زر "شراء الآن"
    if (buyButton) {
        buyButton.addEventListener('click', (e) => {
            // إذا كان الزر رابط <a> فسيقوم بالتحويل تلقائياً، 
            // لكن هذا الكود للتأكيد أو لإضافة سجل (Log)
            console.log("العميل قرر الشراء، يتوجه الآن لصفحة الدفع...");
        });
    }
});

// وظيفة العودة للفيديو التي استدعيناها في HTML
function resetToVideo() {
    document.getElementById('videoContainer').style.display = 'block';
    document.getElementById('mainImage').style.display = 'none';
    const thumbnails = document.querySelectorAll('.image-gallery img');
    thumbnails.forEach(t => t.style.borderColor = 'transparent');
}
