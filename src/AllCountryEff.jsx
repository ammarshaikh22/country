import React from "react";
export const AllCountryEff = () => {
  return Array.from({ length: 50 }).map(() => {
    return <div className="box effectBox"></div>;
  });
};
