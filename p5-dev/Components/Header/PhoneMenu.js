import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Input,
  Stack,
  Button,
  Box,
  Icon,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { RiSpotifyLine } from "react-icons/ri";
import { TbMailOpened } from "react-icons/tb";
import Link from "next/link";

export const PhoneMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        color="#757575"
        backgroundColor="white"
        onClick={onOpen}
      />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <Box display="flex" alignItems="left">
          <DrawerHeader fontWeight="900" color="#ED2D6E" fontSize="30px">
              WOW! 
            </DrawerHeader>
            <DrawerCloseButton color="#757575" />
          </Box>
          <DrawerBody>
            <Stack spacing={8}>
              <InputGroup size="sm">
                <Input
                  variant="flushed"
                  focusBorderColor="#ED2D6E"
                  placeholder="Buscar"
                  color="#757575"
                />
                <InputRightAddon
                  color="#757575"
                  fontSize="25px"
                  backgroundColor="white"
                  border="none"
                  children={<SearchIcon />}
                />
              </InputGroup>
              <p>
                Actualidad
                <ChevronDownIcon />
              </p>
              <p>
                Calidad de Vida
                <ChevronDownIcon />
              </p>
              <p>
                Liderazgo
                <ChevronDownIcon />
              </p>
              <p>
                Guía WOW!
                <ChevronDownIcon />
              </p>
              <p>
                Amores
                <ChevronDownIcon />
              </p>
              <p>
                Homefullnes
                <ChevronDownIcon />
              </p>
              <p>
                Emociones
                <ChevronDownIcon />
              </p>
              <p>
                Tendencias
                <ChevronDownIcon />
              </p>
              <p>
                Makers
                <ChevronDownIcon />
              </p>
              <Button
                backgroundColor=" #E32B6C"
                color="white"
                borderRadius="40px"
                width="220px"
                height="40px"
                fontSize="15px"
              >
                SUSCRIBITE A LA REVISTA
              </Button>
              <Box
                display="flex"
                alignItems="center"
                justifyContent={"space-between"}
                color="#757575"
                fontSize="25px"
              >
                <FiFacebook /> <FiInstagram />
                <FiYoutube />
                <FaPinterestP />
                <FiTwitter />
                <RiSpotifyLine />
              </Box>
              <Box display="flex" alignItems="left">
                <Icon
                  as={TbMailOpened}
                  width="27px"
                  height="24px"
                  color="#757575"
                />
                <Link href="/" color="#757575">
                  <a color="#757575">Recibí nuestro Newsletter</a>
                </Link>
              </Box>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
