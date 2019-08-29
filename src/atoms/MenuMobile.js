import React from 'react'
import styled from 'styled-components'
import NawBar from '../molecules/NawBar'

const StyledContainerMenu = styled.div`
  position: absolute;
  right: -200px;
  top: 1rem;
  width: 250px;
`
const StyledMenu = styled.div`
  transform: ${({ isOpen }) =>
    isOpen ? 'translate3d(-80%, 0, 0)' : 'translate3d(20%, 0, 0)'};
`
const StyledMenuBtn = styled.div``

const StyledMenuBtnLine = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  margin: 0 0 5px 0;
`

const MenuBtn = ({ onClick }) => {
  return (
    <StyledMenuBtn onClick={onClick}>
      <StyledMenuBtnLine></StyledMenuBtnLine>
      <StyledMenuBtnLine></StyledMenuBtnLine>
      <StyledMenuBtnLine></StyledMenuBtnLine>
    </StyledMenuBtn>
  )
}

class MenuMobile extends React.Component {
  state = {
    isMenuOpen: false
  }

  handleMenuClick = () => {
    const isMenuOpen = this.state.isMenuOpen
    this.setState({
      isMenuOpen: !isMenuOpen
    })
  }

  render() {
    return (
      <StyledContainerMenu>
        <MenuBtn onClick={this.handleMenuClick} />
        <StyledMenu isOpen={this.state.isMenuOpen}>
          <NawBar />
        </StyledMenu>
      </StyledContainerMenu>
    )
  }
}

export default MenuMobile
