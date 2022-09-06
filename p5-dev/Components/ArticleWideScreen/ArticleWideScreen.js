import { Box, Heading, Button, IconButton, Icon,useMediaQuery } from "@chakra-ui/react";
import { Image, Text } from '@chakra-ui/react'


export const ArticleWideScreen = ()=>{
    const [isMobile] = useMediaQuery("(max-width: 775px)");

    return(
        <>
        <Box position="relative"  >
            <Text
                fontSize={isMobile?"25":"40"}
                color="black"
                textAlign='center'            
                zIndex="2"
                fontWeight="bold"
            >
                ¿Por qué el movimiento de la positividad <br/>
                del cuerpo es fundamental? 5 Claves para sumarte
            </Text>
            <Image src='/ArticleWideScreen.webp' alt='Article' width="100%" height="30 em"/>
        </Box>
        
        </>
    )
}
    
