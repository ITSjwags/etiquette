import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = props => {
  const { background, color, text, onClick } = props

  return (
    <StyledButton
      background={background}
      color={color}
      onClick={onClick}
      title="Keep clicking to see more answers!"
    >
      {text}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: ${({ background }) => background};
  border: none;
  border-radius: 10px;
  color: ${({ color }) => color};
  cursor: pointer;
  font-size: calc(16px + 1vw);
  line-height: 1;
  padding: 10px;
  text-transform: uppercase;
  transition: all 150ms ease-out;
  width: 100%;

  &:hover {
    transform: scale(1.05);
  }
  &:active,
  &:focus {
    transform: scale(1);
  }

  @media (min-width: 768px) {
    font-size: 3.3vw;
  }
`

Button.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
