import React from "react";

function Count() {
  return (
    <div className="flex justify-between  section_padding mt-10 flex-col laptop:flex-row gap-5 items-center">
      <div className="flex gap-2 items-center">
        <h1 className="text-white text-3xl laptop:text-4xl font-bold">3800+</h1>
        <p className="font_color text-lg laptop:text-2xl">ACTIVE USERS</p>
      </div>
      <div className="flex gap-2 items-center">
        <h1 className="text-white text-3xl laptop:text-4xl font-bold">230+</h1>
        <p className="font_color text-lg laptop:text-2xl">COMPANY'S TRUSTED</p>
      </div>
      <div className="flex gap-2 items-center">
        <h1 className="text-white text-3xl laptop:text-4xl font-bold">
          $250M+
        </h1>
        <p className="font_color text-lg laptop:text-2xl">Transactions</p>
      </div>
    </div>
  );
}

export default Count;
