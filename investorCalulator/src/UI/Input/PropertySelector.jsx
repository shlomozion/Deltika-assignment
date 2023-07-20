import { useContext } from "react";
import { PropertyDataCtxInstance } from "../../Context/PropertyDataCtx";
import { Select } from "@chakra-ui/react";

export default function PropertySelector() {
  const { propertyData, selectedProperty, setSelectedProperty } = useContext(
    PropertyDataCtxInstance
  );

  return (
    <div>
      <Select
        placeholder="Select Property"
        value={selectedProperty}
        onChange={(e) => setSelectedProperty(e.target.value)}
      >
        {propertyData.length &&
          propertyData.map((property) => (
            <option key={Math.random()} value={JSON.stringify(property)}>
              Property ID: {Object.values(property)[0]}
            </option>
          ))}
      </Select>
    </div>
  );
}
