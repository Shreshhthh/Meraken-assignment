import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const { cart } = useContext(StoreContext);
  return (
    <div className="relative cursor-pointer">
      <ShoppingCart className="w-6 h-6" />
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default Cart;
