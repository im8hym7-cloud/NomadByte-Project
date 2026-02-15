document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    startTimer();
});

function loadProducts() {
    const grid = document.getElementById('productsGrid');
    const data = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (data.length === 0) {
        grid.innerHTML = '<p style="opacity:0.3; grid-column:1/-1; text-align:center;">No Products Found.</p>';
        return;
    }

    grid.innerHTML = data.map(p => `
        <div class="product-card">
            <div style="width:100%; aspect-ratio:1; background:#000; border-radius:10px; overflow:hidden;">
                <img src="${p.image}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <h3 style="margin-top:15px; font-family:'Orbitron'; font-size:1rem;">${p.name}</h3>
            <span class="price-tag">${p.price}.00</span>
            <p style="color:gray; font-size:0.7rem;">Price: SAR</p>
            <button class="glow-button" style="width:100%; margin-top:15px; padding:10px; font-size:0.8rem;">ADD TO BAG</button>
        </div>
    `).join('');
}

function startTimer() {
    let time = 259200;
    setInterval(() => {
        time--;
        let d = Math.floor(time / 86400);
        let h = Math.floor((time % 86400) / 3600);
        let m = Math.floor((time % 3600) / 60);
        let s = time % 60;
        document.getElementById('timer').innerText = `${d}D ${h}H ${m}M ${s}S`;
    }, 1000);
}
