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
    Link  } from "@chakra-ui/react"
import { useState } from "react";

export const Password =()=>{

    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState(false);

    const expresiones = { 
        password: (/^(?=.*[A-Z]).{6,15}$/), //que contenga de 6 a 15 digitos y al menos una mayuscula.
    }

    const handlePassword = (e) => {
        setPasswordError(false);
        setPassword(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if(!expresiones.password.test(password)){
            setPasswordError(true)
        }else{
            router.push("/");
        }
    }

    return(
        <>
        <Box
                width="100%"
                display="flex"
                justify-content="flex-end"
                position="relative">
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

        <FormControl isInvalid={passwordError}>
          <b>
            <FormLabel htmlFor="password">
              <br />
              Contraseña.
            </FormLabel>
          </b>

          <Input
            id="password"
            type="password"
            width="300px"
            value={password}
            onChange={handlePassword}
          />
          {!passwordError ? (
            <FormHelperText>
              Ingresá una una clave que contenga entre 6 y 12 caracteres y al menos una letra mayúscula.
            </FormHelperText>
          ) : (
            <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Su contraseña debe tener entre 6 y 12 caracteres y contener una letra mayúscula</AlertTitle>
            </Alert>
            )}
          <br />
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
        </>
    )
}