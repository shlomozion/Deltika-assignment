import React from "react";
import PropertySelector from "./PropertySelector";
import LoanSelector from "./LoanSelector";
import NormalLoan from "./NormalLoan";
import SpitzerMortgage from "./SpitzerMortgage";
import CsvFileUploader from "./CsvFileUploader";

export default function Input() {
  return (
    <div className="input-div">
      <CsvFileUploader />
      <PropertySelector />
      <LoanSelector />
      <NormalLoan />
      <SpitzerMortgage />
    </div>
  );
}
