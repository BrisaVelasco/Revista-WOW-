import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Box,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import ArticleFooter from "./ArticleFooter";
import { useMediaQuery } from "@chakra-ui/react";
import { FiFacebook, FiInstagram, FiYoutube, FiTwitter } from "react-icons/fi";

const ArticleComponent = ({news}) => {
  const [isMobile] = useMediaQuery("(max-width: 62em)");
  return (
    <>
      <Box
        display="-ms-flexbox"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        p="1em"
      >
        <Breadcrumb
          p="2em"
          pb="2em"
          separator="•"
          fontSize={["10px",'12px','14px','16px']}
          lineHeight=" 12px"
          letterSpacing=" 0.05em"
          color="#CF02BB"
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="/">WOW!</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">UNIVERSO WO</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">
              <strong>{news.field_category}</strong>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading
          fontWeight="500"
          fontSize={["36px",'40px','52px','60px']}
          lineHeight="1em"
          letterSpacing="0.2px"
        >
          {news.title}
        </Heading>
        <Text p="1em" px="3.5em" pt='1.25em'fontSize={["18px",'24px','30px','32px']} lineHeight="1.25em">
          {news.subtitle}
        </Text>
        <MinusIcon width="24px" />
        <Text pt="1em">
          Por <strong>{news.field_credits}</strong>
        </Text>
        <Text pb="1em" color="#757575">
          28 de noviembre de 2021
        </Text>
        <Image
          pt="2em"
          src={news.field_img_primary}
        />
        <Text pb="1em" textAlign="left" fontSize="12px" color="#757575">
        {news.title}
        </Text>
        <Box
          display="flex"
          alignItems="left"
          flexDir={["column", "column", "row", "row"]}
          pt="1em"
            px="0.5em"
        >
          {!isMobile && (
            <Box
              color="#757575"
              pr="0.5em"
              display="flex"
              alignItems="left"
              flexDir="column"
              fontSize='25px'
              justifyContent="space-between"
              pt='0.1em'
              >
              <FiFacebook /> <FiInstagram />
              <FiTwitter />
            </Box>
          )}
          <Text
            borderLeft={['0em','0em','0px',"1px"]}
            borderColor="#757575"
            fontWeight="500"
            fontSize='18px'
            lineHeight="1.5em"
            color="#343434"
            textAlign="left"
            px={['0em','0em','0em',"1em"]}
          >
            Un día equis del mes equis de hace no tantos años, Ailin Bisi
            encontró un pescadito agonizando en la orilla. Lo tomó con cuidado
            entre sus manos y lo llevó de nuevo al mar. Y, mientras lo salvaba,
            recordó que esa misma noche tenía una reserva en un restaurante de
            sushi. Fue aquel día equis que Ailin se dio cuenta de que no había
            coherencia entre lo que sentía y lo que hacía. Y fue entonces que
            decidió dejar de comer carne.
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="left"
          flexDir={["column", "column", "row", "row"]}
          pt="2em"
          spacing="8px"
        >
          <Text pl="0.5em" textAlign="left" color="#757575" fontSize="18px">
            En esta nota:
          </Text>
          <Button
            variant="outline"
            border="2px"
            backgroundColor="white"
            borderColor="#E32B6C"
            borderRadius="439px"
            fontWeight="600"
            fontSize="14px"
            color="#343434"
            width="160px"
          >
            ESTILO DE VIDA
          </Button>
        </Box>
      </Box>
      <ArticleFooter />
    </>
  );
};

export default ArticleComponent;


