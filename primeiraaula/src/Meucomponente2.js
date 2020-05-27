import React from 'react';
import PropTypes from 'prop-types';

export default class Meucomponente2 extends React.Component {
    render() {
        return <p>{this.props.primeiroNumero} x 
        {this.props.segundoNumero} = {this.props.resultado}</p>;
    }
}

Meucomponente2.propTypes = {
    primeiroNumero : PropTypes.string,
    segundoNumero : PropTypes.string,
    resultado : PropTypes.string
};