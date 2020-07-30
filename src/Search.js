import React, { useState } from "react";

function Search({search}) {
    const INITIAL_STATE = { search: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
  
    /** Send {name, quantity} to parent
     *    & clear form. */
  
    const handleSubmit = evt => {
      evt.preventDefault();
      search({...formData});
    };
  
    /** Update local state w/curr state of input elem */
  
    const handleChange = evt => {
      const { name, value } = evt.target;
      setFormData(fData => ({
        ...fData,
        [name]: value
      }));
    };
  
    /** render form */
  
    return (
        <div className="Search mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input className="form-control form-control-lg flex-grow-1" 
                    name="search" 
                    placeholder="Enter search term.." 
                    value={formData.search}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Search;