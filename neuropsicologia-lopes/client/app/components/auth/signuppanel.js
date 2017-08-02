import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateField, signup } from '../../actions';
import './signuppanel.css';

class SignUpPanel extends Component {

    render() {

        const {username, email, password, passwordconfirmation, updateField, signup, msg} = this.props;

        return (
            <div className="col-sm-4 col-sm-offset-4 bannerWrapper">
                <div className="panel panel-default banner">
                    <div className="panel-body">
                        <div className="panel-heading">
                            <div className="panel-title">
                                <h2>Registrar</h2>
                                <span className={ msg ? "alert alert-danger" : ""}>{msg}</span>
                            </div>
                        </div>
                        <form onSubmit={e=>signup(e)}>
                            <div className="form-group">
                                <label htmlFor="username">Nome</label>
                                <input name="username" type="text" className="form-control" id="username" placeholder="Nome"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input name="email" type="email" className="form-control" id="email" placeholder="Email"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Senha</label>
                                <input name="password" type="password" className="form-control" id="password" placeholder="Senha"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="passwordconfirmation">Confirmar Senha</label>
                                <input name="passwordconfirmation" type="password" className="form-control" id="passwordconfirmation" placeholder="Senha"
                                onChange={e=>updateField(e.target)}/>
                            </div>
                            <button type="submit" className="btn btn-default"
                            disabled={!(username && email && password && passwordconfirmation)}>Registrar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    username: state.auth.username,
    email: state.auth.email,
    password: state.auth.password,
    passwordconfirmation: state.auth.passwordconfirmation,
    msg: state.auth.msg
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateField: (e) => dispatch(updateField(e)),
    signup: (e) => {
        e.preventDefault();
        dispatch(signup(username.value, email.value, password.value, passwordconfirmation.value));
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpPanel));