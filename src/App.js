import React, { useState } from "react";
import StudentForm from "./StudentForm";
import Success from "./Success";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSuccess = (data) => {
    setSubmittedData(data); 
  };

  const handleReset = () => {
    setSubmittedData(null); 
  };

  return (
    <div>
      <div className="header">
        WARRTI College Student Registration
      </div>

      {submittedData ? (
        <Success data={submittedData} onReset={handleReset} />
      ) : (
        <StudentForm onSuccess={handleSuccess} />
      )}

      <div className="footer">
        © 2025 WARRTI College. All Rights Reserved.
      </div>
    </div>
  );
}

export default App;
