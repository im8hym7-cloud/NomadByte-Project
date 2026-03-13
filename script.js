document.addEventListener('DOMContentLoaded', () => {
    const buyButton = document.getElementById('buyNow');
    const images = document.querySelectorAll('.image-grid img');

    // تفاعل عند الضغط على زر الشراء
    buyButton.addEventListener('click', () => {
        // هنا يمكنك التوجيه لصفحة checkout.html
        window.location.href = 'checkout.html';
    });

    // إضافة تأثير بسيط عند الضغط على الصور المصغرة
    images.forEach(img => {
        img.addEventListener('click', () => {
            console.log("تم اختيار صورة المنتج: " + img.src);
            // يمكنك هنا تطوير كود لتكبير الصورة (Lightbox)
        });
    });
});
