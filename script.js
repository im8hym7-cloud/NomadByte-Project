document.addEventListener('DOMContentLoaded', function() {
    // تشغيل العداد التنازلي
    startCountdown();
    // عرض المنتجات من الـ LocalStorage
    displayProducts();
});

// وظيفة جلب وعرض المنتجات
function displayProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    // نمسح المحتوى القديم عشان ما يتكرر
    grid.innerHTML = '';

    // جلب البيانات المخزنة
    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    // إذا ما فيه منتجات، نعرض منتج تجريبي
    if (products.length === 0) {
        grid.innerHTML = '<p style="color:#666; text-align:center; grid-column: 1/-1;">لا توجد قطع معروضة حالياً..</p>';
        return;
    }

    // بناء كروت المنتجات
    products.forEach((p, index) => {
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-img">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p class="price">${p.price} SAR</p>
                    <button class="btn-primary" style="width:100%; padding:10px; margin-top:10px; font-size:0.7rem;">ADD TO BAG</button>
                </div>
            </div>
        `;
    });
}

// وظيفة العداد التنازلي
function startCountdown() {
    const timer = document.getElementById("timer");
    if (!timer) return;
    let time = 259200; // 3 أيام
    setInterval(() => {
        time--;
        let d = Math.floor(time / 86400);
        let h = Math.floor((time % 86400) / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        timer.innerHTML = `${d}D ${h}H ${m}M ${s}S`;
    }, 1000);
}
