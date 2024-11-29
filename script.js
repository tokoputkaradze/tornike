import { data } from './data.js';

const section = document.getElementById('products-list');

const productCards = data.map(product => `
    <div class="product-card">
        <img src="https://via.placeholder.com/150" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>${product.stripped_descr}</p>
        <p class="price">${product.price}</p>
        <button class="delete-btn">წაშლა</button>
        <button class="info-btn">ინფო</button>
    </div>
`).join('');

section.innerHTML = productCards;

document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', event => {
        event.target.closest('.product-card').remove();
    });
});

document.querySelectorAll('.info-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const categoryTitles = data[index].category_tree.map(cat => cat.title).join(', ');
        const infoDiv = document.createElement('div');
        infoDiv.textContent = `კატეგორიები: ${categoryTitles}`;
        btn.after(infoDiv);
    });
});
