import React, {Component} from 'react';

class Form extends Component {
constructor(){
    super()

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        textArea: '',
        option: '',
        check: false,
    }
}


handleChange({target}){
    const {name} = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
        [name]: value,
    })
}




    render(){
        return (
            <fieldset>
            <form>
                <select value={this.state.option} name='option' onChange={this.handleChange}>
                    <option  value='1'>Valor 1</option>
                    <option value='2'>Valor 2</option>
                </select>
                <textarea name='textArea' onChange={this.handleChange} value={this.state.textArea}></textarea>
                <input name='check' type='checkbox' checked={this.state.check} onChange={this.handleChange} />

            </form>
            </fieldset>
        )
    }
}


export default Form;