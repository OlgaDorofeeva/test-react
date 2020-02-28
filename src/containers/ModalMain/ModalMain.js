import React, {Component} from 'react'
import Field from '../../components/Field/Field'
import Select from '../../components/Select/Select'
import BtnShow from '../../components/BtnShow/BtnShow'

const arr = ["Ivan","Ivanov","+7 999 888 77 55","ivan@ivanov.ru"]
class ModalMain extends Component{
   constructor(props){
      super(props)
      this.state = {
         results: {},
         options: ['name', 'surname', 'phone', 'email'],
         data: arr,
         selectedValue: ['','','','',''],
      }
   }
   
   handleInput = (index => {
      return (event) => {
         
         let value = event.target.value;
         let selectedValue = [...this.state.selectedValue]
         let i = selectedValue.findIndex(el => el === value)
         if (i > -1) selectedValue[i] = "" 
         selectedValue[index] = event.target.value;
         
         this.setState( prevState => ({ 
            selectedValue,
            results: {...prevState.results, [value]: index }
         }), () => console.log(this.state.results))
         
      }
   })
   
   handleFormSubmit = (event) => {
      // event.preventDefault();
      let data = this.state.results;
         console.log('results:', data)
   }
   
   render(){
      return (
         <form style={{padding: '20px 0'}}>
            { this.state.data.map((field, index) => {
               return (
                  
                  <div key={field} style={{display: 'flex', alignItems:'center'}}>
                     <Field 
                        id={`id-${field}`}
                        name = {'input'}
                        key={field}
                        label={index.toString()}
                        value={field}
                     />
                     <Select
                        id={`id-${index}`}
                        name={'list'}
                        options = {this.state.options} 
                        value = {this.state.selectedValue[index] || ''}                        
                        handleChange = {this.handleInput(index)}
                     />
                  </div>   
               )
            }) 
            }
            <BtnShow action = {this.handleFormSubmit} />
         </form>
      )
   }
}
   

export default ModalMain