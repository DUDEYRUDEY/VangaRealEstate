import React, { useState } from 'react';

function SearchForm() {
    const [formData, setFormData] = useState({
        address: '',
        bathrooms: '',
        carpark: '',
        buildingArea: '',
        landsize: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Need to implement API call logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div style={{
            border: '2px solid #ccc',
            padding: '30px',
            maxWidth: '600px',
            margin: '0 auto',
            borderRadius: '10px',
            backgroundColor: '#f9f9f9',
            marginBottom: '50px'
        }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                    <label style={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                    }}>Enter your Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your Address"
                        value={formData.address}
                        onChange={handleChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                    <label style={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                    }}>Number of Bathrooms</label>
                    <input
                        type="number"
                        name="bathrooms"
                        placeholder="Number of Bathrooms"
                        value={formData.bathrooms}
                        onChange={handleChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                    <label style={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                    }}>Number of Carparks?</label>
                    <input
                        type="number"
                        name="carpark"
                        placeholder="Carpark"
                        value={formData.carpark}
                        onChange={handleChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                    <label style={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                    }}>Building Area</label>
                    <input
                        type="number"
                        name="buildingArea"
                        placeholder="Building Area"
                        value={formData.buildingArea}
                        onChange={handleChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                }}>
                    <label style={{
                        fontWeight: 'bold',
                        marginBottom: '5px',
                    }}>Landsize</label>
                    <input
                        type="number"
                        name="landsize"
                        placeholder="Landsize"
                        value={formData.landsize}
                        onChange={handleChange}
                        style={{
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            fontSize: '16px',
                            outline: 'none',
                        }}
                    />
                </div>

                <button type="submit" style={{
                    padding: '15px 20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '16px',
                }}>
                    Make A Prediction
                </button>
            </form>
        </div>
    );
}

export default SearchForm;
