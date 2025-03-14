import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'recentlyViewed';

const ProductList = () => {
    const products = ['📱Телефон', '💻Ноутбук', '🎧Құлаққап', '⌚Смарт сағат', '📺Теледидар', '📸 Камера'];
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        const storedProducts = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        setRecentlyViewed(storedProducts);
    }, []);

    const viewProduct = (product) => {
        let updatedProducts = [...recentlyViewed];
        const index = updatedProducts.indexOf(product);
        if (index !== -1) {
            updatedProducts.splice(index, 1);
        }
        updatedProducts.unshift(product);
        setRecentlyViewed(updatedProducts);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProducts));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <h2>Өнімдер</h2>
            <div>
                {products.map((product) => (
                    <button key={product} onClick={() => viewProduct(product)} style={{ margin: '5px', padding: '10px' }}>
                        {product}
                    </button>
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
                <h3>Соңғы қаралғандар</h3>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {recentlyViewed.map((product) => (
                        <li key={product} style={{ margin: '5px 0', padding: '10px', background: '#f0f4' }}>
                            {product}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductList;
