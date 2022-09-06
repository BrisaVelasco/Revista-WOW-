import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Icon,
  HStack,
  space,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";
import { FaSpotify } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { HiOutlineMailOpen } from "react-icons/hi";

const ListHeader = ({ children }) => {
  return (
    <Text
      fontWeight={"600"}
      fontSize={"16px"}
      lineheight={"18px"}
      letterSpacing={"0.20000000298023224px"}
    >
      {children}
    </Text>
  );
};

const FooterLink = ({ children }) => {
  return (
    <Link
      fontWeight={"400"}
      fontSize={"14px"}
      lineHeight={"18px"}
      letterSpacing={"0.20000000298023224px"}
      color={"#969696"}
      href={"#"}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <Box w={"100%"} bottom="0" justifyContent={"space-around"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                color="#ED2D6E"
                textAlign="left"
                p="0.25em"
                fontSize="40px"
                fontWeight={850}
              >
                WOW!
              </Text>
              <HStack color="#969696">
                <FiFacebook />
                <FiInstagram />
                <FiYoutube />
                <TiSocialPinterest />
                <FiTwitter />
                <FaSpotify />
              </HStack>
            </Box>

            <Flex alignItems={"center"}>
              <HiOutlineMailOpen color="#969696" />
              <Text
                fontSize="18px"
                fontWeight="500"
                lineHeight="30px"
                letterSpacing="0.20000000298023224px"
                textAlign="left"
                color="#969696"
                p={"10px"}
              >
                Recibí nuestro Newsletter
              </Text>
            </Flex>
          </Stack>

          <Stack pt={"10px"} align={"flex-start"}>
            <ListHeader>NOSOTROS</ListHeader>
            <FooterLink href={"#"}>Manifiesto WOW!</FooterLink>
            <FooterLink href={"#"}>Contanos tu historia</FooterLink>
          </Stack>

          <Stack pt={"10px"} align={"flex-start"}>
            <ListHeader>DESCUBRÍ</ListHeader>
            <FooterLink href={"#"}>Actualidad</FooterLink>
            <FooterLink href={"#"}>Guía OHLALÁ!</FooterLink>
            <FooterLink href={"#"}>Estilo de vida</FooterLink>
            <FooterLink href={"#"}>Empoderamiento</FooterLink>
          </Stack>
          <Stack pt={"40px"} align={"flex-start"}>
            <FooterLink href={"#"}>Moda & belleza</FooterLink>
            <FooterLink href={"#"}>Amores & Sexo</FooterLink>
            <FooterLink href={"#"}>Homefullness</FooterLink>
            <FooterLink href={"#"}>Makers</FooterLink>
          </Stack>
        </SimpleGrid>
        <Flex direction={"row"} justifyContent="space-between" pt="20px">
          <Box justifyContent="space-between">
            <FooterLink href={"#"}>Términos y Condiciones | </FooterLink>
            <FooterLink href={"#"}> ¿Cómo anunciar? | </FooterLink>
            <FooterLink href={"#"}>Preguntas frecuentes</FooterLink>
          </Box>
          <Text
            fontSize={"sm"}
            textAlign="right"
            fontWeight="400"
            lineHeight="34px"
            letterSpacing="0.20000000298023224px"
            color="#969696"
          >
            Copyright 2022 SA LA NACION | Todos los derechos reservados.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
