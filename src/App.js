import React from 'react'
import Form from './Form'
import Weather from './Weather';
import './App.css'
import Header from './Header'

const API_KEY = "94d053faafd658c3af0b6ae21b44bbf7"

class App extends React.Component {

  state = {
    temperature: undefined,
    city        : undefined,
    country     : undefined,
    humidity    : undefined,
    description : undefined,
    error       : undefined,

}

        

    
    handleSubmit = async (event) => {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      const city = event.target.elements.city.value
      console.log(city)
      const country = event.target.elements.country.value
      console.log(country)
        
        const api_calls = await fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+','+country+'&APPID=94d053faafd658c3af0b6ae21b44bbf7&units=metric');
        const data = await api_calls.json();
        console.log(data)
        if(data.name && data.sys.country){
          this.setState({
            temperature : data.main.temp,
            city : data.name,
            country : data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
          })
        }
          else{
            this.setState({
              temperature : undefined,
              city : undefined,
              country: undefined,
              humidity : undefined,
              description : undefined,
              error : "Please Enter correct information"
            })
           
          }
        }
    
      
    render(){
        return(
           <div>
             <div className="wrapper">
              <div className="main">
                <div className="container">
                  <div className="row">
                    <div className="col-xs-5 title-container">
                      <Header />
                    </div>
                      <div className="col-xs-7 form-container">
                            <Form
                            handleSubmit = {this.handleSubmit}
                            />
                            <Weather 
                            temperature = {this.state.temperature}
                            city = {this.state.city}
                            country = {this.state.country}
                            humidity = {this.state.humidity}
                            description = {this.state.description}
                            error = {this.state.error}
                            />
                      </div>
                  </div>  
                </div>
              </div>
            </div>

           </div>
        )
    }
}



export default App 