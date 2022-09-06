import {Box } from '@chakra-ui/react'

export const SubHeader = () => {
  return (
    <Box
    border="1px"
    borderColor="gray.200"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    backgroundColor='white'
    pl="5em"
    pr="5em"
    fontSize={['8px','10px','12px','14px']}
    fontWeight='500'
    color='#757575'
    height='45px'
    zIndex="10"
     > 
          <p>
                ACTUALIDAD
              </p>
              <p>
                CALIDAD DE VIDA
              </p>
              <p>
                LIDERAZGO
              </p>
              <p>
                GUIíA WOW!
              </p>
              <p>
                AMORES
              </p>
              <p>
                HOMEFULLNES
              </p>
              <p>
                EMOCIONES
              </p>
              <p>
                TENDENCIAS
              </p>
              <p>
                MEKERS
              </p>
     </Box>
  )
}
