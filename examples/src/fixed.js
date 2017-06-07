import React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
]

ReactDOM.render(
  <Select
    autofocus
    options={ options }
    simpleValue
    clearable={ false }
    name="selected-state"
    searchable={ true }
    popperModifiers={{
      preventOverflow: {
        boundariesElement: 'viewport'
      }
    }}
  />,
  document.getElementById('panel')
);
