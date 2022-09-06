import { Box, Heading, Button, IconButton, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { TbMailOpened } from "react-icons/tb";
import { SearchIcon } from "@chakra-ui/icons";

const DesktopHeader = () => {
  return (
    <Box
        border="1px"
        borderColor="gray.200"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor='white'
        position="relative"

      
        >
          <Box
          display="flex"
          alignItems="left"
          pl="5em"
          color="#757575"
          >
            <Icon
              as={TbMailOpened}
              width="27px"
              height="24px"
              
              />
            <Link href="/" color="#757575">
              <a color="#757575">Newsletter</a>
            </Link>
          </Box>
          <Heading
            color="#ED2D6E"
            textAlign="center"
            fontSize="40px"
            >
            WOW!
          </Heading>
          <Box pr= "5em">
            <Button
              backgroundColor=" #E32B6C"
              color="white"
              borderRadius="40px"
              width="120px"
              height="30px"
              >
              SUSCRIBITE
            </Button>
            <IconButton
              aria-label="Search database"
              backgroundColor="white"
              pl="2em"
              icon={<SearchIcon height="20px" width="20px" color="#757575" />}
              />
          </Box>
          </Box>
  )
}

export default DesktopHeader