import { useState } from 'react';


export default function ItemForm ({ onAddItem }) {
    //Section I. State
    const [formData, setFormData] = useState ({
        name: "",
        quantity: "",
        purpose: ""
    });

    const [errors, setErrors] = useState ({
        name: false,
        quantity: false,
        purpose: false
    });

    //Section II. Handlers
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: false
        }));
    };


    const handleSubmit = (event) => {
        event.preventDefault ();

    //Logic flow behind handleSubmit- 
    //Step 1: Create newErrors. 
        const newErrors = {
        name: false,
        quantity: false,
        purpose: false
    };

    //Step 2: Field Validations
    //(Recall: .trim() used for strings to make sure there's no white space)
    if (!formData.name.trim()) {
        newErrors.name = true;
    }

    if (!formData.quantity) {
        newErrors.quantity = true;
    }

    if (!formData.purpose.trim()) {
        newErrors.purpose = true;
    }

    //Step 3: Stop Submission if any errors exist
    if (Object.values(newErrors).some(Boolean)) {
        setErrors(newErrors);
        return;
    }

    //Step 4: Success pathway (submit + reset form)
      //A- call the parent callback
    onAddItem(formData);
    
      //B- clear the form
    setFormData( {
        name:"",
        quantity: "",
        purpose: ""
    });
    
      //C- clear errors
    setErrors( {
        name: false,
        quantity: false,
        purpose: false
    });

    };

    //Section III. Props Wiring. Not used for this case. This is also a child component,
    //in real world this section may be skipped more often for this reason.  
    //Some limited wiring done inline below.

    //Section IV. Render

      return (
               
        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label>
                Name:
                <input
                type= "text"
                name= "name"
                value={formData.name}
                onChange= {handleChange}
                className={errors.name ? "error" : ""}
                required
                />
            </label>

            <label>
                Quantity:
                <input
                type= "number"
                name= "quantity"
                value={formData.quantity}
                onChange= {handleChange}
                className={errors.quantity ? "error" : ""}
                required
                />
            </label>

            <label>
                Purpose:
                <input
                type= "text"
                name= "purpose"
                value={formData.purpose}
                onChange= {handleChange}
                className={errors.purpose ? "error" : ""}
                required
                />
            </label>
          </div>

          <button type="submit">Add Item</button>

        </form>
     );
}

/* Notes:
1. State will also live in this form.  We will need 2 pieces total: one for the object that 
   contains all the keys values and 1 for error handling.  Just use a boolean for validating 
   missing fields.
2. Error handling- Controlled React forms- don't forget that React is the "single source of truth",
   meaning validation is based on the state of formData.  
   -it's updated on every keystroke
   -it's easy to highlight bc UI is driven by state
   -avoids mixing patterns (controlled inputs + reading DOM manually)
3. In <form> tag, added "noValidate" bc the browser was using it's own pop up messages. 
   Browsers have a native form validation feature and you have to disable it to get your own
   style for errors.
*/