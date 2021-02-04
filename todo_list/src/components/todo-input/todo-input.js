import React from 'react';
import PropTypes from 'prop-types';

import '../todo-input/todo-input.css';

const ToDoInput = ({ onChange }) => (
    <div className="todo-input-wrapper">
        <i className="fas fa-plus" /> 
        <input
        className="todo-input"
        placeholder="Click to add new thing to do"
        onChange={onChange}
        />
     </div>
);

ToDoInput.propTypes = {
    onChange: PropTypes.func,
}

ToDoInput.defaultProps = {
    onChange: () => {},
}

export dafeult ToDoInput;