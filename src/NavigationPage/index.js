import React from 'react';
import'./nav.css';
const NavigationPage = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/product">Product</a>
        </li>
        <li>
          <a href="/addproduct">Add products</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavigationPage;
