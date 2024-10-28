import './Prediction.css'
import SearchForm from "../../components/SearchForm/SearchForm.js"

function Prediction() {
    return (
        <div className="prediction-wrapper">
            <div className="prediction-header">
                <h1 className="prediction-header__heading">Housing Price Search</h1>
                <p className="prediction-header__text">
                    Housing prices play a crucial role in the real estate market, influencing decisions for buyers, sellers, and investors alike.
                    Predicting these prices accurately is essential for navigating the complexities of the market, particularly in the face of
                    fluctuating economic conditions and regional factors. We have created a tool to help you predict the price of your house.
                </p>
            </div>
            <div className="prediction-content">
                <SearchForm />
            </div>
        </div>
    )
}

export default Prediction; 