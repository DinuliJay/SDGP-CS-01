import React, { createContext, useState, useContext } from 'react';

// Creating the Context
const JobRoleContext = createContext();

// Define the Provider
export const JobRoleProvider = ({ children }) => {
  const [selectedJobRole, setSelectedJobRole] = useState('Software Engineer');

  return (
    <JobRoleContext.Provider value={{ selectedJobRole, setSelectedJobRole }}>
      {children}
    </JobRoleContext.Provider>
  );
};

// Custom hook to use the JobRoleContext
export const useJobRole = () => useContext(JobRoleContext);