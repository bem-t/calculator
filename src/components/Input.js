import React from "react";
export default function Input({ vlu }) {
  return (
    <>
      <input
        type="text"
        value={vlu}
        style={{
          height: "70px",
          width: "260px",
          margin: "15px",
          backgroundColor: "rgb(179, 173, 173)",
          borderRadius: "10px",
          boxShadow: " inset 0px 0px 10px black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "large",
          fontWeight: "BOLD",
        }}
      />
    </>
  );
}
