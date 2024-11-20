import React from "react";
import { Loader } from "lucide-react";

const LoaderComponent = () => {
  return (
    <div className="flex justify-center items-center w-100 h-lvh flex-col">
      <Loader className="h-10 w-10 animate-spin mb-2" />
      <p className="text-md">Loading Items...</p>
    </div>
  );
};

export default LoaderComponent;
