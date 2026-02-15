document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    runTimer();
});

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    const data = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; opacity: 0.3;">لا توجد قطع معروضة حالياً في الـ Drop..</p>`;
        return;
    }

    grid.innerHTML = data.map(p => `
        <div class="product-card">
            <div class="img-container">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <span class="card-label">PRODUCTS GRID // RECENT</span>
            <h3 style="font-family:'Orbitron'; font-size: 1.1rem;">${p.name}</h3>
            <div class="price-val">${p.price}.00</div>
            <span class="price-sub">PRICE: SAR</span>
            <button class="glow-button" style="width:100%; margin-top:20px; padding:12px; font-size:0.8rem;">ADD TO BAG</button>
        </div>
    `).join('');
}

function runTimer() {
    let seconds = 259200; // 3 أيام
    setInterval(() => {
        seconds--;
        let d = Math.floor(seconds / 86400);
        let h = Math.floor((seconds % 86400) / 3600);
        let m = Math.floor((seconds % 3600) / 60);
        let s = seconds % 60;
        document.getElementById('timer').innerText = 
            `${String(d).padStart(2,'0')}D ${String(h).padStart(2,'0')}H ${String(m).padStart(2,'0')}M ${String(s).padStart(2,'0')}S`;
    }, 1000);
}
