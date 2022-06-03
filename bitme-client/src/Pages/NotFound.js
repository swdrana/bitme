import React from "react";
import Nav from "../Components/Nav";

const NotFound = () => {
  return (
    <div>
      <Nav />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-center text-4xl text-red-600">
          404! Page Not Found
        </h1>
      </div>
    </div>
  );
};

export default NotFound;
