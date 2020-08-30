import React, { Component } from 'react';
import styledcomponents from 'styled-components';

const styled = window.styled ? window.styled : styledcomponents;
const DialogContainer = styled.span`
  height: 17px;
`;

function withPopover(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isMousedOver: false,
        position: []
      };

      this.userNameSpan = React.createRef();
      this.handleFocus = this.handleFocus.bind(this);
      this.handleLeave = this.handleLeave.bind(this);
      this.timer = null;
    }

    handleFocus(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ isMousedOver: true });
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }

    handleLeave(e) {
      e.preventDefault();
      this.timer = setTimeout(() => {
        this.setState({ isMousedOver: false });
      }, 200);
    }

    render() {
      const { isMousedOver, position } = this.state;
      const { user } = this.props;

      return (
        <>
          <DialogContainer>
            <div
              onMouseEnter={this.handleFocus}
              onMouseLeave={this.handleLeave}
            >
              <span ref={this.userNameSpan}>
                <WrappedComponent
                  user={user}
                  isMousedOver={isMousedOver}
                  position={position}
                  onFocus={this.handleFocus}
                  onLeave={this.handleLeave}
                />
              </span>
            </div>
          </DialogContainer>
        </>
      );
    }
  };
}

export default withPopover;
