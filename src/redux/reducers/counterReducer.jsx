import React from "react";

const counterReducer = (state = { sayac: 0, text: "" }, { type, payload }) => {
  switch (type) {
    case "ARTTIR":
      return { sayac: state.sayac + 1, text: payload };
    default:
      return state;
  }
};

export default counterReducer;
