document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    startCountdown();
});

// عرض المنتجات من الذاكرة المحلية
function displayProducts() {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;

    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];
    grid.innerHTML = ''; 

    if (products.length === 0) {
        grid.innerHTML = '<p style="color:#666; grid-column: 1/-1; text-align:center;">المتجر فارغ حالياً. أضف منتجات من صفحة الإدارة.</p>';
        return;
    }

    products.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <img src="${p.image}" alt="${p.name}">
                <h3>${p.name}</h3>
                <p class="price">${p.price} SAR</p>
                <button class="btn-primary" style="width:100%; margin-top:15px; padding:12px; font-size:0.8rem;">ADD TO BAG</button>
            </div>
        `;
    });
}

// العداد التنازلي
function startCountdown() {
    const timer = document.getElementById("timer");
    if (!timer) return;
    let time = 259200; 
    setInterval(() => {
        time--;
        let d = Math.floor(time / 86400);
        let h = Math.floor((time % 86400) / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        timer.innerHTML = `${d}D ${h}H ${m}M ${s}S`;
    }, 1000);
}
