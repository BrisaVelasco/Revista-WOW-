import { Heading, Flex, Box, Image, VStack } from "@chakra-ui/react";

const SmallNewsCard = () => {
  return (
    <VStack
      //borderStyle={"solid"}
      m={["0", "2"]}
      pb="5"
      // borderBottom="1px"
      borderWidth="1px"
      borderColor="#E3E3E3"
      mb="15px"
    >
      <Image
        objectFit={["none", "cover"]}
        w="100%"
        src="https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/KXX6PHTSLBDXTA4WQZNKHHEKSM.jpg?itok=z4IG0Jfe"
      ></Image>
      <Box
        fontSize="20px"
        lineHeight="26px"
        letterSpacing="0.20000000298023224px"
        fontFamily="PP Eiko"
        textAlign="left"
        fontWeight="500"
        p={5}
        m={10}
      >
        Sabrina la bruja adolescente. El elenco de Sabrina la bruja adolescente
        compartió un divertido video junto al resto del elenco que se viralizó
        entre los fanáticos
      </Box>
    </VStack>
  );
};

export default SmallNewsCard;
