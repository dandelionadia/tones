import React from 'react'
import styled from 'styled-components'
import NavBar from '../molecules/NavBar'

const StyledContainerMenu = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    position: fixed;
  }
`

const StyledMenu = styled.div`
  margin-left: ${({ isOpen }) => (isOpen ? '0' : '-200px')};
  transition: margin 1s ease-out;
`

const StyledMenuBtn = styled.div`
  padding: 1rem;
`

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
        <StyledMenu isOpen={this.state.isMenuOpen}>
          <NavBar />
        </StyledMenu>
        <MenuBtn onClick={this.handleMenuClick} />
      </StyledContainerMenu>
    )
  }
}

export default MenuMobile
