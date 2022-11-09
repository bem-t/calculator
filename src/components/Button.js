import React from "react";

export default function Button({ fn, btn }) {
  return (
    <>
      <button
        onClick={fn}
        style={{
          color: "BLACK",
          marginLeft: "12px",
          fontSize: "large",
          fontWeight: "bold",
        }}
      >
        {btn}
      </button>
    </>
  );
}
