import React from "react";
import { useState, useEffect, useContext } from "react";
import Papa from "papaparse";
import { PropertyDataCtxInstance } from "../../Context/PropertyDataCtx";

export default function CsvFileUploader() {
  const { setPropertyData } = useContext(PropertyDataCtxInstance);

  const [file, setFile] = useState("");

  useEffect(() => {
    if (file) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          setPropertyData(results.data);
        },
      });
    }
  }, [file]);

  return (
    <div className="Csv-File-Uploader">
      <form>
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type={"file"}
          accept={".csv"}
        />
      </form>
    </div>
  );
}
