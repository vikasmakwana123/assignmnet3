import React from 'react';
import Card from '../components/card.jsx';

const Home = ({ cartItems, totalPrice, NoofItems, addToCart, increaseQuantity, decreaseQuantity }) => {
  const shoes = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 9999,
      image: "https://sneakernews.com/wp-content/uploads/2020/11/Nike-Air-Max-270-DH0268_100-Release-Info-4.jpg",
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      price: 8999,
      image: "https://sneakernews.com/wp-content/uploads/2021/12/adidas-UltraBOOST-22-GX3061-0.jpg",
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 7499,
      image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/369579/01/sv01/fnd/IND/fmt/png",
    },
    {
      id: 4,
      name: "Reebok Classic Leather",
      price: 5999,
      image: "https://reebok.ca/cdn/shop/products/1ZeCTa3GN9l1FUM1m5Ga-1Q6uhW72Jr8L.jpg",
    },
    {
      id: 5,
      name: "New Balance 574",
      price: 6999,
      image: "https://www.80scasualclassics.co.uk/blog/wp-content/uploads/2018/08/New-Balance-574-Trainers-Navy-Yellow-1024x1024.jpg",
    },
  ];

  return (
    <div style={{ width: '100vw', minHeight: '100vh', padding: '20px',backgroundColor: '#b1b1b546', boxSizing: 'border-box' }}>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        borderRadius: '10px',
      }}>
        {/* Product Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '20px',
          flex: 1,
          minWidth: '300px'
        }}>
          {shoes.map((shoe) => (
            <Card key={shoe.id} shoe={shoe} addToCart={addToCart} />
          ))}
        </div>

        {/* Cart Section */}
        <div style={{
          flex: '0 1 350px',
          maxWidth: '100%',
          border: '2px solid #ccc',
          padding: '20px',
          background: '#ffffffcd',
          borderRadius: '10px',
          marginTop: '20px'
        }}>
          {cartItems.length === 0 ? (
            <div style={{
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              Your cart is empty
            </div>
          ) : (
            <>
              <h2>Cart Items</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {cartItems.map((item) => (
                  <li key={item.id} style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    background: '#f9f9f9'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span>{item.name} - ₹{item.price}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '5px' }} onClick={() => decreaseQuantity(item.id)}>-</button>
                        <div style={{
                          backgroundColor: '#e4e3e3ff',
                          padding: '5px 15px',
                          borderRadius: '5px',
                          minWidth: '30px',
                          textAlign: 'center'
                        }}>
                          {item.quantity}
                        </div>
                        <button style={{ backgroundColor: '#e0e0e0', padding: '5px 10px', borderRadius: '5px' }} onClick={() => increaseQuantity(item.id)}>+</button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '15px' }}>
                <p><strong>Total Items:</strong> {NoofItems}</p>
                <p><strong>Total Price:</strong> ₹{totalPrice}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
