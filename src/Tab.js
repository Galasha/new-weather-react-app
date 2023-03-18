import React from "react";

export default function Tab(props) {
  return (
    <div className="Tab">
      <button className="tablinks" >
        {props.value}
      </button>
    </div>
  );
}
