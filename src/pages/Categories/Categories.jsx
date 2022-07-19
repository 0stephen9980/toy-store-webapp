import React from "react";

function Categories() {
  return (
    <div className="responsive lg:mt-16" id="Categories">
      <div className="grid grid-col-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-6 gap-y-10 xl:gap-x-12 justify-center">
        {[...Array(4)].map((_, index) => {
          return (
            <div
              key={index}
              className="trannsition ease-in-out hover:-translate-y-1 hover:scale-110 bg-green-300 shadow-xl w-80 h-80"
            >
              <img src={require("../../assets/Logo.png")} alt="image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(Categories);
