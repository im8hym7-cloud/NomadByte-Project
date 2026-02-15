document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    initTimer();
});

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    const products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; opacity:0.5;">No drops available yet.</p>';
        return;
    }

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div style="width:100%; aspect-ratio:1; background:#000; border-radius:10px; overflow:hidden;">
                <img src="${p.image}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <h3 style="margin-top:20px; font-family:'Orbitron'; font-size:1.1rem;">${p.name}</h3>
            <span class="price-tag">${p.price}.00</span>
            <p style="color:#555; font-size:0.8rem; font-weight:bold;">CURRENCY: SAR</p>
            <button class="btn-cyan" style="width:100%; margin-top:20px; cursor:pointer; border:none; padding:12px;">ADD TO BAG</button>
        </div>
    `).join('');
}

function initTimer() {
    let timeLeft = 259200; // 3 أيام بالثواني
    setInterval(() => {
        timeLeft--;
        let d = Math.floor(timeLeft / 86400);
        let h = Math.floor((timeLeft % 86400) / 3600);
        let m = Math.floor((timeLeft % 3600) / 60);
        let s = timeLeft % 60;
        document.getElementById('timer').innerText = `${d}D ${h}H ${m}M ${s}S`;
    }, 1000);
}
