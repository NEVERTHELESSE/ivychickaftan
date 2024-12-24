import React from "react";


function ShowCloth(props) {
  function hideImage() {
    props.setshow(false);
  }

  return (
    <div className="absolute top-0 flex items-center justify-center w-full h-full p-8 show">
      <img src={props.src} alt="cloth " className="h-[80%]" />
      <p
        className="p-3 text-4xl duration-200 bg-red-600 cursor-pointer hover:bg-red-500"
        onClick={hideImage}
      >
        X
      </p>
    </div>
  );
}

export default ShowCloth;
