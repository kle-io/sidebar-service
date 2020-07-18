import React from 'react';
import styledcomponents from 'styled-components';
import PropTypes from 'prop-types';

const styled = window.styled ? window.styled : styledcomponents;
const Btn = styled.button`
  font-size: 11px;
  padding: 2px 9px 2px 8px;
  height: 22px;
  line-height: 16px;
  display: inline-block;
  position: relative;
  margin: 0;
  text-indent: 2px;
  border: 1px solid;
  border-radius: 3px;
  border-color: ${(props) => (props.selected ? '#ff5500' : '#e5e5e5')};
  background-color: ${(props) => (props.selected ? '#ff5500' : '#ffffff')};
  cursor: pointer;
  white-space: nowrap;
  font-weight: 100;
  text-align: center;
  vertical-align: baseline;
  box-sizing: border-box;

  &:before {
    width: 20px;
    height: 20px;
  }

  & .follow {
    color: ${(props) => (props.selected ? '#fff' : '#999')};
  }
`;

const UserCardButton = (props) => {
  const { selected } = props;
  return (
    <div>
      <Btn
        type="button"
        selected={selected}
        onClick={(e) => {
          e.preventDefault();
          props.handleFollow();
        }}
      >
        <span className="follow">Follow</span>
      </Btn>
    </div>
  );
};

UserCardButton.propTypes = {
  handleFollow: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired,
};

export default UserCardButton;
