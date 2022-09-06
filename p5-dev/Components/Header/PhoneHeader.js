import { Box, Heading, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { TbMailOpened } from "react-icons/tb";

import { PhoneMenu } from "./PhoneMenu";

const PhoneHeader = () => {
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      display="flex"
      alignItems="left"
      justifyContent="space-between"
      position='sticky'
      backgroundColor='white'
      top="1px"
      zIndex="916569406"
      >
      <Box
      display="flex"
      alignItems="left"
      p='0.1em'
      > 
      <PhoneMenu />
      <Link href='/'>
            <a>
      <Heading
      color="#ED2D6E"
      
      fontSize="27px"
      >
      WOW!
      </Heading>
      </a>
      </Link>
      </Box>
      <Box
      display="flex"
      alignItems="left"
      pr="2.1em"
      pt="0.75em"
      > 
      <Icon
      as={TbMailOpened}
      width="27px"
      height="24px"
      color="#757575"
      />
      <Link href="/" color="#757575">
      <a color="#757575" fontSize='30px'>Newsletter</a>
      </Link>
      </Box> 
      </Box>
  )
}

export default PhoneHeader