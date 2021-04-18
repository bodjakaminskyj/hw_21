import React, { Component } from 'react'
import Contact from './Contact'
import search from './images/search.png'

class Contacts extends Component{

    state = { 
        contacts : [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
           
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        search : "",
        male: 'male',
        female: "female",
        none: undefined
        

    }
    

    handleInputMaleChange= e => {
        e.target.checked ? this.setState({male: "male"}) : this.setState({male: ""})
        }
    handleInputFemaleChange= e => {
        e.target.checked ? this.setState({female: "female"}) : this.setState({female: ""})  
        }
    handleInputNoneChange= e => {
        e.target.checked ? this.setState({none: undefined}) : this.setState({none: ""})  
        
        }
                  
    handleSearchChange = e => {
        this.setState({search: e.target.value})     
        
        }
        
            
    render(){
       
        return(
        <div>
           <nav>
            <div className="contact">
                <img className="search" src={search} alt="search"/>
                <input type="text" value={this.state.search} onChange={this.handleSearchChange} />
                <div className="M">
                    <input type="checkbox" defaultChecked onChange={this.handleInputMaleChange} />
                    <label>Ч</label>
                </div>
                <div className="F">
                    <input type="checkbox" defaultChecked onChange={this.handleInputFemaleChange}/>
                    <label>Ж</label>
                </div>
                <div className="N">
                    <input type="checkbox" defaultChecked onChange={this.handleInputNoneChange}/>
                    <label>Не вказано</label>
                </div>
                </div>
            </nav>
            <div className="contacts">
            <div>{
                this.state.contacts.filter(contact =>(
                    contact.gender === this.state.male.toLowerCase() ||
                    contact.gender === this.state.female.toLowerCase() ||
                    contact.gender === this.state.none
                    ) && (
                    contact.lastName.toLowerCase().includes(this.state.search.toLowerCase()) || 
                    contact.firstName.toLowerCase().includes(this.state.search.toLowerCase()) ||
                    contact.phone.toLowerCase().includes(this.state.search.toLowerCase()))
                    ).map((contact, i)=><Contact contact={contact} key={i}/>) } </div>  
            </div>    
             
        </div>
        )
    }
}
export default Contacts;
