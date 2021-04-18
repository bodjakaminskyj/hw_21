import React, { Component } from "react";
import male from './images/male.png'
import female from './images/female.png'
import none from './images/none.png'

class Contact extends Component{
 
    
    render(){
        
        return(
            
            <div className="contact">   
            {this.props.contact.gender ==="male" &&<img className="icon" src={male} alt="male"/>}
            {this.props.contact.gender ==="female" &&<img className="icon" src={female} alt="female"/>}
            {this.props.contact.gender ===undefined &&<img className="icon" src={none} alt="none"/>}
                         
                <div className = "info">
                    
                    <h3>{this.props.contact.firstName} {this.props.contact.lastName}</h3>
                    <span>{this.props.contact.phone}</span>
                    
                   
                </div>
            </div>
        )
    }
}
export default Contact;


                
           