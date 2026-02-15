document.addEventListener('DOMContentLoaded', function() {
    // 1. تشغيل العداد
    startCountdown();
    
    // 2. عرض المنتجات المضافة من الـ Admin
    displayProducts();
    
    console.log("NomadByte Engine Active 🚀");
});

function displayProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    // جلب المنتجات من التخزين
    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    // عرض كل منتج في الشبكة
    products.forEach(p => {
        const productHTML = `
            <div class="product-card">
                <div class="product-img">
                    <img src="${p.image}" alt="${p.name}">
                </div>
                <div class="product-info">
                    <h3>${p.name}</h3>
                    <p class="price">${p.price} SAR</p>
                </div>
            </div>
        `;
        grid.innerHTML += productHTML;
    });
}

function startCountdown() {
    const timerElement = document.getElementById("timer");
    if (!timerElement) return;
    
    let time = 259200; // 3 أيام بالثواني
    setInterval(() => {
        time--;
        let d = Math.floor(time / 86400);
        let h = Math.floor((time % 86400) / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        timerElement.innerHTML = `${d}d ${h}h ${m}m ${s}s`;
    }, 1000);
}
