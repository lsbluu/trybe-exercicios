import React , {Component} from 'react';

class Pokemon extends Component{
    render(){
        const {name, type, averageWeight, image, moreInfo} = this.props.pokemon
        return (
            <section>
                <p>Nome: {name}</p>
                <p>Tipo: {type}</p>
                <p>Peso:{averageWeight.value}</p>
                <img src={image} alt={moreInfo} />
            </section>
        )
    }
}


export default Pokemon;