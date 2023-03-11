import { chakra, Image } from '@chakra-ui/react'
import React from 'react'





const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
  })


const Logo = () => {
  return (
   <>
   <ProfileImage
              src="/images/logo.png"
             
              borderRadius="10px"
              width="100"
              height="100"
            />
    </>
  )
}

export default Logo