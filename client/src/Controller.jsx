import React from 'react';
import ReactDOM from 'react-dom';

class Controller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  const inputChildren = React.Children.map(children, (child) => {
    if (child.type.displayName === 'Select') {
      return React.cloneElement(child);
    }
    return ReactDOM.createPortal(React.cloneElement(child), document.body);
  });
  return inputChildren;
};
export default Controller;
