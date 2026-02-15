document.addEventListener('DOMContentLoaded', () => {
    // عرض المنتجات
    const grid = document.querySelector('.products-grid');
    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length > 0) {
        grid.innerHTML = '';
        products.forEach(p => {
            grid.innerHTML += `
                <div class="product-card">
                    <div class="product-img-box"><img src="${p.image}"></div>
                    <p style="color:gray; font-size:0.7rem;">Products Grid</p>
                    <h3>${p.name}</h3>
                    <span class="price-tag">${p.price}.00</span>
                    <p style="color:gray; font-size:0.7rem;">Price: SAR</p>
                </div>
            `;
        });
    }

    // العداد التنازلي
    let time = 259200; 
    setInterval(() => {
        time--;
        let d = Math.floor(time / 86400);
        let h = Math.floor((time % 86400) / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        document.getElementById("timer").innerHTML = `${d}D ${h}H ${m}M ${s}S`;
    }, 1000);
});
