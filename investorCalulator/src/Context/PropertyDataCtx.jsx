import { createContext, useState } from "react";
export const PropertyDataCtxInstance = createContext();

export default function PropertyDataCtx({ children }) {
  const [propertyData, setPropertyData] = useState({});
  const [selectedProperty, setSelectedProperty] = useState("");

  return (
    <PropertyDataCtxInstance.Provider
      value={{
        propertyData,
        setPropertyData,
        selectedProperty,
        setSelectedProperty,
      }}
    >
      {children}
    </PropertyDataCtxInstance.Provider>
  );
}
