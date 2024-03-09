import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Card = ({ myData }) => {
  // console.log('myData: ', myData);
  const { title, body, id } = myData;
  //   console.log('title', title);
  //   console.log('body', body);
  //   console.log('id', id);
  return (
    <div className="card">
      <div className="card-info flex flex-col items-center bg-slate-500	p-5 rounded-2xl">
        <p className="card-id text-xl text-slate-800 bg-slate-600 p-4 rounded-full">
          <FontAwesomeIcon icon={faUser} />
        </p>
        <p className="text-slate-200">{body.substring(1, 150)}</p>
        <h2 className="bg-slate-600 p-2 rounded-lg mt-2 text-slate-400">
          {title.substring(0, 20)}
        </h2>
      </div>
    </div>
  );
};

export default Card;
