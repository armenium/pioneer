import styled from 'styled-components'
import { BorderRad, Colors, Transitions } from '../../constants'
import { Icon } from '../icons'
import { Button } from './Buttons'

export const ToggleButton = styled(Button)`
  background-color: transparent;
  &,
  &:hover,
  &:focus,
  &:active,
  &:disabled {
    background-color: transparent;
    border: 1px solid transparent;
  }
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    color: ${Colors.Black[600]};
  }
`

interface Props {
  isOpen: boolean
  disabled?: boolean
}

export const Toggle = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr 40px;
  grid-template-rows: 1fr;
  grid-column-gap: 4px;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border-radius: ${BorderRad.s};
  background-color: ${({ disabled }) => (disabled ? Colors.Black[75] : Colors.White)};
  font-size: 1em;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: ${Transitions.all};

  ${ToggleButton} ${Icon.type} {
    transition: ${Transitions.all};
    transform: scaleY(${({ isOpen }) => (isOpen ? '-1' : '1')});
  }

  &:focus-within,
  &:active,
  &:focus {
    border-color: ${Colors.Blue[300]};
  }
`
