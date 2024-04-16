import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Button({ name, color }) {
  return (
    <div
      className={`bg-${color}-500 cursor-pointer hover:bg-${(color =
        "zinc")}-800 text-white rounded-lg flex items-center justify-center px-5 py- text-[1.3vw]`}
    >
      <h1 className="px-1 py-2 text-[3vw] md:text-[1.1vw] flex items-center gap-2">{name} </h1>
      {/* {console.log(color, name)} */}
    </div>
  );
}

export default Button;
