import {   
    Box,
    Image,
    Text,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Alert,
    AlertIcon,
    AlertTitle,
    Link } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

export const ForgotPassword =()=>{

    const router = useRouter();

    const [email, setEmail] = useState("");

    const [emailError, setEmailError] = useState(false);



    const expresiones = {
        email: (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) //verifica que sea un email
    }


  const handleEmail = (e) => {
    setEmailError(false);
    setEmail(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if(!expresiones.email.test(email)){
        setEmailError(true)
    }else{
        router.push("/");
    }
    
  };

 return(


    <Box
      width="100%"
      display="flex"
      justify-content="flex-end"
      position="relative"
    >
      <Box width="40%" margin="10px 5% 1em">
        <Text color="#ED2D6E" textAlign="start" p="0.25em" fontSize="40px">
          WOW!
          <br />
        </Text>

        <b>
          <Text fontSize="40px">
            <br />
            Recupera tu clave.
            <br />
          </Text>
        </b>

         <FormControl isInvalid={emailError}>
          <b>
            <FormLabel htmlFor="email">
              <br />
              Completa con tu Email.
              <br />
            </FormLabel>
          </b>
          <Input
            id="email"
            type="email"
            width="300px"
            value={email}
            onChange={handleEmail}
          />
            {!emailError ? (
                <FormHelperText>Ingresá tu Email para recuperar tu password.</FormHelperText>
          ) : (
            <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Introduzca una dirección de correo electrónico válida</AlertTitle>
            </Alert>
          )}


        </FormControl> 
        <br />
        
        <Link href="/password">
            <Button
            backgroundColor=" #E32B6C"
            color="white"
            borderRadius="40px"
            width="400px"
            height="50px"
            textAlign="center"
            onClick={handleClick}
            
            >
            Enviar
            </Button>
        </Link> 

      </Box>

      <Box width="60%" height="100%" display="flex">
        <Image src="/escritorioOhlalá.webp" alt="Article" height="100%" />
      </Box>
    </Box>

 )
}