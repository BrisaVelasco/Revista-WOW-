import { Box, Text, Button } from "@chakra-ui/react";
import {AiOutlinePlusCircle} from 'react-icons/ai'

const ArticleFooter = () => {
  return (
    <Box
      display="-ms-flexbox"
      alignItems="left"
      flexDir={["column", "column", "row", "row"]}
      pt="2em"
      spacing="8px"
      backgroundColor="#F4F4F4"
      //   flexDir='column'
    >
      <Text pl="1em" color="#343434">
        SEGUIR LEYENDO
      </Text>
      {/* aca irian las cards laterales para movile y un grid de verticales para desktop */}
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          colorScheme='pink'
          variant="ghost"
          fontWeight="500"
          fontSize="24px"
        >
          Cargar   <AiOutlinePlusCircle/>
        </Button>
      </Box>
    </Box>
  );
};

export default ArticleFooter;
