import React from 'react'
import styled from 'styled-components'

const SocialIcons = () => {
  return (
    <Wrapper>

  
  <li class="icon instagram">
    <span class="tooltip">Instagram</span>
    <span><i class="fab fa-instagram"></i></span>
  </li>
  <li class="icon github">
    <span class="tooltip">Github</span>
    <span><i class="fab fa-github"></i></span>
  </li>
  
</Wrapper>
  )
}

export default SocialIcons

const Wrapper = styled.ul`
display: inline-flex;
  list-style: none;
`
