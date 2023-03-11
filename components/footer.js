import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Mimika Ackerman . Todos los derechos reservados
    </Box>
  )
}

export default Footer
