import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import products from "../assets/products.json";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { ShoppingCartIcon } from "lucide-react";
import Cart from "../components/Cart";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  const { handleAddtoCart, cart, handleRemoveFromCart } =
    useContext(StoreContext);
  const isIncart = cart.includes(id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 bg-white text-black border-black border-[0.3px] py-2 px-4 rounded hover:bg-gray-100 transition-colors"
        >
          Back
        </button>
        <Cart />
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-contain"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

          <p className="text-gray-800 mb-4">{product.description}</p>
          <p className="text-gray-600 text-xl mb-3">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex justify-start items-center">
            {!isIncart ? (
              <button
                onClick={() => handleAddtoCart(id)}
                className={`w-[40%] h-auto text-sm bg-green-500 text-white py-2 px-2 rounded hover:bg-green-600 transition-colors flex justify-center items-center md:text-sm`}
              >
                {" "}
                <ShoppingCartIcon className="mr-2 h-4 w-4" /> Add to Cart
              </button>
            ) : (
              <button
                className="w-[40%] h-auto text-sm bg-red-500 text-white py-2 px-2 rounded hover:bg-red-600 transition-colors flex justify-center items-center md:text-sm"
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
    </div>
  );
};

export default DetailPage;
