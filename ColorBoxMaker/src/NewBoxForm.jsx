import React, {useState} from "react";
import {v4 as uuid} from "uuid"

function NewBoxForm({addBox}) {
    const INITIAL_STATE ={
        height: "",
        width: "",
        backgroundColor: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)
    const handleChange = (evt) =>{
        const {name, value} = evt.target
        setFormData(formData => ({...formData, [name]: value}))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox({...formData, id: uuid()});
        setFormData(INITIAL_STATE)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height</label>
            <input 
            id="height"
            type="text"
            name="height"
            placeholder="Height"
            value={formData.height}
            onChange={handleChange}
            />
            <label htmlFor="width">Width</label>
            <input 
            id="width"
            type="text"
            name="width"
            placeholder="Width"
            value={formData.width}
            onChange={handleChange}
            />
            <label htmlFor="backgroundColor">Color</label>
            <input
            id="backgroundColor"
            type="text" 
            name="backgroundColor"
            placeholder="Color"
            value={formData.backgroundColor}
            onChange={handleChange}
            />
            <button>Add Box</button>
            
        </form>
    );
}

export default NewBoxForm;
