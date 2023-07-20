import { Select } from "@chakra-ui/react";

export default function LoanSelector() {
  return (
    <div>
      <Select placeholder="Select Loan Type">
        <option value="Normal Loan">Normal Loan</option>
        <option value="Spitzer Mortgage">Spitzer Mortgage</option>
      </Select>
    </div>
  );
}
