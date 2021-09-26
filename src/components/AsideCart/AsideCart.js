import React from "react";
import "./AsideCart.css";

const AssideCart = ({ carts }) => {
  let total = 0;
  let totalSalary = 0;
  for (const singleCart of carts) {
    singleCart.quantily = !singleCart.quantily ? 1 : singleCart.quantily;
    totalSalary = totalSalary + singleCart.expectedSalary;
    total = total + singleCart.quantily;
  }

  return (
    <aside className="cart-aside">
      <h2>Choice List Details</h2>
      <h3>Developer added: {total}</h3>
      <h3>Expected salary: ${totalSalary}</h3>
      <div>
        {carts.map((singleCart,ind) => <div className="added-cart-item" key={ind}>
            <img src={singleCart.picture} alt="" />
            <h4>{singleCart.name}</h4>
            {/* <i class="fas fa-user-times"></i> */}
        </div>)}
      </div>
    </aside>
  );
};

export default AssideCart;
