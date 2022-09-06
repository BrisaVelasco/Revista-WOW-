import {
  Grid,
  GridItem,
  Heading,
  Flex,
  Icon,
  Box,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { GoFlame } from "react-icons/go";
import LargeNewsCard from "../../Common/LargeNewsCard";

import SmallNewsCard from "../../Common/SmallNewsCard";

const LatestNews = () => {
  return (
    <Box>
      <Flex pl="20px">
        <Icon as={GoFlame} w={7} h={7} color="#EB522D" mt={["20px", "40px"]} />
        <Text
          fontFamily="Inter"
          fontSize="25px"
          fontStyle="normal"
          fontWeight="100"
          lineHeight="16px"
          letterSpacing="0.2px"
          textAlign="left"
          mt={["20px", "40px"]}
          p="10px"
          color="#EB522D"
        >
          ÚLTIMAS NOTICIAS
        </Text>
      </Flex>
      <Flex direction="column" mt={["10px", "20px"]}>
        <LargeNewsCard />
        <Flex direction={["column", "row"]}>
          <SmallNewsCard />
          <SmallNewsCard />
        </Flex>
      </Flex>
    </Box>
  );
};

export default LatestNews;
