import { useState, useEffect } from "react";

const useForms = (inputData, Keys, Data) => {
  const modelData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "male",
    Age: 15,
    notes: []
  };
  const [formData, setFormData] = useState(
    inputData !== {} ? inputData : modelData
  );

  useEffect(() => {
    setFormData({
      ...formData,
      [Keys]: Data
    });
  }, []);

  console.log(formData);
  return formData;
};

export default useForms;
