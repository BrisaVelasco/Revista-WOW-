import { Heading, Text, Flex, Box, Image, VStack } from "@chakra-ui/react";

const LargeNewsCard = () => {
  return (
    <Box pb="10px" mb="15px">
      <Image src="https://ohlala-drupal-do.bd-it.com/sites/default/files/styles/story_medium/public/2022-06/Anita%20Alvarez.jpg?itok=5ujZWNye"></Image>
      <Box>
        <Heading>
          Este deporte no es para ella: por qué prohibieron que compita la
          nadadora que se desmayó en el Mundial de natación",
        </Heading>
        <Text>por Angela Marquez</Text>
      </Box>
    </Box>
  );
};

export default LargeNewsCard;
