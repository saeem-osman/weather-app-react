import React from 'react'

class Weather extends React.Component {
    
    render(){
        const far = (1.8 * this.props.temperature + 32).toFixed(2)
        
        return(
            <div className="weather__info">
            {
                this.props.city && this.props.country && <p className="weather__key">Location: <span className="weather__value">{this.props.city},{this.props.country}
               </span></p> }
           
            {
                this.props.temperature && <p className="weather__key">Temperature: <span className="weather__value"> {this.props.temperature}℃ | {far} ℉</span>
                 </p>
                }
            
            {
                this.props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{this.props.humidity}</span></p>
                }
            
            {
                this.props.description && <p className="weather__key">Description: <span className="weather__value">{this.props.description}.</span></p>
                }
            
            
            <p className="weather__key">{this.props.error && this.props.error}</p>
            
            
        </div>
        )

    }
}



export default Weather