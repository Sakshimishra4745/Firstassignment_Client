import { createContext } from "react";

export const UseContext  = createContext();
import { useState } from "react";



const Appcontext = ({children}) => {
    const [currentPage, setCurrentPage] = useState(0);
 
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        company: '',
        agency: '',
      });
      const reqvalue = {
        formData,
        setFormData,
        currentPage,
        setCurrentPage,
      };
  return (
    <div>

      <UseContext.Provider value={reqvalue}>
{children}
      </UseContext.Provider>
    </div>
  )
}

export default Appcontext
