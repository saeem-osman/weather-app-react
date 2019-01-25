import React from 'react';

class Form extends React.Component{
    render(){
        return(
            <div>
    <form onSubmit={this.props.handleSubmit}>
      
           <input type="text" name="city" placeholder="City..."  />
            <input type="text" name="country" placeholder="Country..."
            
            />
            <button>Submit</button>
            
    </form>
    </div>
        )
    }
    

}




export default Form