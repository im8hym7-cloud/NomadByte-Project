document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.products-grid');
    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length === 0) {
        grid.innerHTML = '<p style="opacity:0.5;">لا يوجد قطع في Drop الحالي..</p>';
    } else {
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
});
