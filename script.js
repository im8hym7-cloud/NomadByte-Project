document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateTimer();
});

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    // جلب البيانات من الذاكرة (التي يتم إضافتها عبر Admin)
    const products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length === 0) {
        grid.innerHTML = '<p style="opacity:0.2; grid-column:1/-1; text-align:center;">// WAITING FOR DROP 01...</p>';
        return;
    }

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <span class="product-label">Products Grid</span>
            <div class="img-placeholder">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <h3 style="font-family:'Orbitron'; font-size:1rem;">${p.name}</h3>
            <span class="price-val">${p.price}.00</span>
            <span class="price-sub">Price: SAR</span>
        </div>
    `).join('');
}

function updateTimer() {
    let timeLeft = 259200; // 3 أيام بالثواني
    setInterval(() => {
        timeLeft--;
        const d = Math.floor(timeLeft / 86400);
        const h = Math.floor((timeLeft % 86400) / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;
        document.getElementById('timer').innerText = 
            `${String(d).padStart(2,'0')}D ${String(h).padStart(2,'0')}H ${String(m).padStart(2,'0')}M ${String(s).padStart(2,'0')}S`;
    }, 1000);
}
