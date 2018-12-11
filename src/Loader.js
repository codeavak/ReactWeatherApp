import React from "react";

function Loader(props) {
  return (
    <div>
      <div class="ui active dimmer">
        <div class="ui big text loader">{props.message || "Loading..."}</div>
      </div>
    </div>
  );
}

export default Loader;
