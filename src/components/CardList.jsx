import React from "react";
import Card from "./Card";

const CardList = ({ CardsInfo }) => {
  return (
    <div className="wrappers">
      <div className="flex flex-col items-center h-full m-10">
        <h1 className="mb-12 text-8xl text-white">Posts</h1>
        <div className="grid md:grid-cols-3 gap-4 ">
          {CardsInfo.map((curVal, id) => {
            return <Card key={id} myData={curVal} />;
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default CardList;
