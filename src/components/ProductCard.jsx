import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "lucide-react";
import { StoreContext } from "../context/StoreContext";

const ProductCard = ({ image, title, price, id }) => {
  const { handleAddtoCart, cart, handleRemoveFromCart } =
    useContext(StoreContext);
  const isIncart = cart.includes(id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-[100%] h-48 object-contain p-1"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title.substring(0, 22)}</h2>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 mb-4">${price.toFixed(2)}</p>
        </div>
        <div className="mt-auto flex flex-col gap-2 justify-between items-center">
          <Link
            to={`/detail/${id}`}
            className="w-[100%]  border-[0.3px] border-black bg-white h-10 text-sm text-black py-1 px-4 rounded hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            View Details
          </Link>

          {!isIncart ? (
            <button
              onClick={() => handleAddtoCart(id)}
              className={`w-[100%] h-auto text-sm bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors flex justify-center items-center md:text-sm`}
            >
              {" "}
              <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
            </button>
          ) : (
            <button
              className="w-[100%] h-auto text-sm bg-red-500 text-white py-2 rounded hover:bg-red-600 transition-colors flex justify-center items-center md:text-sm"
              onClick={() => handleRemoveFromCart(id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
