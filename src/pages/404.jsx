import React from "react";
import ErrorImage from "../Screenshots/404.png";

const ErrorPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        className="bg-cover bg-center w-full h-full"
        style={{ backgroundImage: `url(${ErrorImage})` }}
      ></div>
    </div>
  );
};

export default ErrorPage;
