import React, { useState } from "react";
import StudentForm from "./StudentForm";
import Success from "./Success";
import "./App.css";

function App() {
  const [submittedData, setSubmittedData] = useState(null); // null initially

  const handleSuccess = (data) => {
    setSubmittedData(data); // save form data
  };

  const handleReset = () => {
    setSubmittedData(null); // reset to show form again
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
