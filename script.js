document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    startTimer();
});

function displayProducts() {
    const grid = document.querySelector('.products-grid');
    // جلب المنتجات من الـ Admin (LocalStorage)
    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length === 0) {
        grid.innerHTML = '<p style="opacity:0.5;">لا توجد قطع معروضة حالياً..</p>';
        return;
    }

    grid.innerHTML = '';
    products.forEach(p => {
        grid.innerHTML += `
            <div class="product-card">
                <div class="product-img"><img src="${p.image}"></div>
                <p style="font-size:0.8rem; color:gray;">Products Grid</p>
                <h3>${p.name}</h3>
                <p class="price">${p.price}.00</p>
                <p style="font-size:0.8rem; color:gray;">Price: SAR</p>
            </div>
        `;
    });
}

function startTimer() {
    let time = 259200; // 3 أيام
    setInterval(() => {
        time--;
        let d = Math.floor(time / 86400);
        let h = Math.floor((time % 86400) / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        document.getElementById("timer").innerHTML = `${d}D ${h}H ${m}M ${s}S`;
    }, 1000);
}
