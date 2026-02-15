document.addEventListener('DOMContentLoaded', () => {
    // 1. تشغيل وظيفة عرض المنتجات
    displayProducts();
    
    // 2. تشغيل العداد التنازلي
    startCountdown();
});

// وظيفة جلب وعرض المنتجات من لوحة الإدارة (Admin)
function displayProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length === 0) {
        grid.innerHTML = '<p style="opacity:0.5; text-align:center; grid-column:1/-1;">لا يوجد قطع في Drop الحالي..</p>';
    } else {
        grid.innerHTML = ''; // تنظيف الشبكة قبل العرض
        products.forEach(p => {
            grid.innerHTML += `
                <div class="product-card">
                    <div class="product-img-box">
                        <img src="${p.image}" alt="${p.name}">
                    </div>
                    <p style="color:#444; font-size:0.7rem; margin-bottom:5px;">Products Grid</p>
                    <h3>${p.name}</h3>
                    <span class="price-tag">${p.price}.00</span>
                    <p class="currency">Price: SAR</p>
                    <button class="btn-cyan" style="width:100%; margin-top:20px; padding:12px; font-size:0.7rem;">ADD TO BAG</button>
                </div>
            `;
        });
    }
}

// وظيفة العداد التنازلي (ليطابق النص في الصورة)
function startCountdown() {
    const timerElement = document.getElementById('timer');
    if (!timerElement) return;

    // تحديد وقت النهاية (مثلاً بعد يومين)
    let time = 259190; // ثواني تقريبية تعادل 2D 23H 59M

    const x = setInterval(() => {
        time--;
        
        let days = Math.floor(time / (24 * 3600));
        let hours = Math.floor((time % (24 * 3600)) / 3600);
        let minutes = Math.floor((time % 3600) / 60);
        let seconds = time % 60;

        // تحديث النص في الشريط العلوي
        timerElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;

        if (time <= 0) {
            clearInterval(x);
            timerElement.innerHTML = "DROP IS LIVE";
        }
    }, 1000);
}
