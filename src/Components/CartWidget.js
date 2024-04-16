// components/CartWidget.js

import React from 'react';

function CartWidget() {
  const itemCount = 5; 

  return (
    <div className="cart-widget">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 18c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm8-10h-4.24l-2.53-5.06C11.27 2.45 10.66 2 10 2H4c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h2.07l2.52 5.05-2.16 4.85c-.07.16-.11.33-.11.5 0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1h-10c0-.09.02-.17.05-.25l2.41-5.39C15.46 7.62 16 6.88 16 6c0-1.1-.9-2-2-2zM7.07 6H10v6H6.93l.7-1.5H9c.28 0 .53-.17.63-.43L10.94 6H7.07zM18 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4 2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm-4-2c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
      </svg>
      {itemCount > 0 && <span className="badge bg-danger">{itemCount}</span>} 
    </div>
  );
}

export default CartWidget;