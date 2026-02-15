document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.products-grid');
    let products = JSON.parse(localStorage.getItem('nomadProducts')) || [];

    if (products.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; opacity:0.5;">لا توجد قطع معروضة حالياً..</p>';
    } else {
        products.forEach(p => {
            grid.innerHTML += `
                <div class="product-card">
                    <img src="${p.image}" alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p class="price">${p.price} SAR</p>
                    <button class="btn-primary" style="width:100%; margin-top:15px; padding:10px;">ADD TO BAG</button>
                </div>
            `;
        });
    }
});
