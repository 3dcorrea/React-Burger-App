import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxx';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends PureComponent {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                {this.props.isAuth ? <p>Authenticated</p> : <p>Please Log In</p>}
            <p key='i1' onClick={this.props.click}>
                I'm {this.props.name} and I am {this.props.age} years old!
            </p>
            <p  key='i2'>{this.props.children}</p>
                <input
                key="i3"
                ref={this.inputElementRef}
                type="text"
                onChange={this.props.changed}
                value={this.props.name}
                />
             </Aux>
        );
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);