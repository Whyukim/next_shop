import React from 'react'
import styled from 'styled-components'

interface IButton {
  children: React.ReactNode
  onClick?: () => void
}

function Button({ children, onClick }: IButton) {
  return <CustomButton onClick={onClick}>{children}</CustomButton>
}

export default Button

const CustomButton = styled.button`
  border: 1px solid blue;
`
