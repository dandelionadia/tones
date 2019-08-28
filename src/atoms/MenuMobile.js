import React from 'react'
import styled from 'styled-components'

const StyledMenu = styled.div`
  transform: ${({ isOpen }) =>
    isOpen ? 'translate3d(0,0,0)' : 'translate3d(170%, 0, 0)'};
`

const StyledContainer = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;
`
const StyledMenuBtnLine = styled.div`
  background-color: white;
  width: 30px;
  height: 3px;
  margin: 0 0 5px 0;
`

const MenuBtn = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <StyledMenuBtnLine></StyledMenuBtnLine>
      <StyledMenuBtnLine></StyledMenuBtnLine>
      <StyledMenuBtnLine></StyledMenuBtnLine>
    </div>
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
      <StyledContainer>
        <MenuBtn onClick={this.handleMenuClick} />
        <StyledMenu isOpen={this.state.isMenuOpen}>content</StyledMenu>
      </StyledContainer>
    )
  }
}

export default MenuMobile
