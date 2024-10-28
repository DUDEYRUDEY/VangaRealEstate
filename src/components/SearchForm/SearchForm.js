import React, { useState } from 'react';
import Button from '../Button/Button.js'; 
import './SearchForm.css';

function SearchForm() {
    const [formData, setFormData] = useState({
        address: '',
        bathrooms: '',
        bedrooms: '',
        carpark: '',
        houseType: '',
        buildingArea: '',
        landsize: '',
    });

    const [showError, setShowError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        console.log('Form submitted:', formData);
        e.preventDefault();
        
        const { address, bathrooms, bedrooms, carpark, houseType, buildingArea, landsize } = formData;//Code destructure. More readable
        if (!address || !bathrooms || !bedrooms || !carpark || !houseType || !buildingArea || !landsize) {
            setShowError(true); // Set the error. Show error component
            console.log("This is true")
            return; // Stop form submission
        }

        console.log('Form submitted:', formData);
        setShowError(false); //Reset error field when user enters field
    };

    return (
        <div className="search-form-wrapper-outer">
            <div className="search-form-wrapper-inner">
                <form onSubmit={handleSubmit} className="search-form">
                    <div className="form-group">
                        <label>Enter your Address:</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter your Address"
                            value={formData.address}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.address ? 'highlight-error' : ''}`}
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Number of Bathrooms:</label>
                        <input
                            type="number"
                            name="bathrooms"
                            placeholder="Number of Bathrooms"
                            value={formData.bathrooms}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.bathrooms ? 'highlight-error' : ''}`}
                            min="0"
                            
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Number of Bedrooms:</label>
                        <input
                            type="number"
                            name="bedrooms"
                            placeholder="Number of Bedrooms"
                            value={formData.bedrooms}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.bedrooms ? 'highlight-error' : ''}`}
                            min="0"
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Number of Carparks:</label>
                        <input
                            type="number"
                            name="carpark"
                            placeholder="Carpark"
                            value={formData.carpark}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.carpark ? 'highlight-error' : ''}`}
                            min="0"
                        />
                    </div>

                    <div className="form-group">
                        <label>Type Of House (e.g., townhouse, unit/apartment):</label>
                        <input
                            type="text"
                            name="houseType"
                            placeholder="Type of House"
                            value={formData.houseType}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.houseType ? 'highlight-error' : ''}`}

                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Building Area:</label>
                        <input
                            type="number"
                            name="buildingArea"
                            placeholder="Building Area"
                            value={formData.buildingArea}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.buildingArea ? 'highlight-error' : ''}`}
                            min="0"
                           
                        />
                    </div>

                    <div className="form-group">
                        <label>Landsize:</label>
                        <input
                            type="number"
                            name="landsize"
                            placeholder="Landsize"
                            value={formData.landsize}
                            onChange={handleChange}
                            className={`input-field ${showError && !formData.landsize ? 'highlight-error' : ''}`}
                            min="0"
                            
                        />
                    </div>

                    {showError && (
                        <div className="error-message">
                            <p>Please enter all required fields.</p>
                        </div>
                    )}

                    <Button label={"Make A Prediction"} buttonType={"primary"} />
                </form>
            </div>
        </div>
    );
}

export default SearchForm;
