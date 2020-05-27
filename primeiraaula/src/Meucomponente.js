import React from 'react';
import PropTypes from 'prop-types';

export default class Meucomponente extends React.Component {
    render() {
    return <p>Olá {this.props.nome}!</p>;
    }
}

Meucomponente.propTypes = {
    nome : PropTypes.string
};