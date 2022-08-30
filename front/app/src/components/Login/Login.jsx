import Header from "../Header/Header";
import { Box, FormControl, FormLabel, Input, Center, Heading, Button, ButtonGroup } from "@chakra-ui/react";

export default function Login() {
    return (
        <>
        {
            //Se reutiliza el Header creado para acortar el codigo
        }
            <Header/>

            {
                //Esto es un body de misma estructura que el creado solo que contiene el Formulario de Inicio de Sesion
            }
            <Box h='1200px' bgGradient='linear(to-r, gray.900,  purple.500)'>
                <Center>
                    <Box color="white" padding="50px">
                        <Heading padding="3px">Inicio De Sesion</Heading>
                        <FormControl color="white">
                            <FormLabel>Correo Electronico</FormLabel>
                            <Input type='email' placeholder="Ingresa tu correo" placeholderColor="white" />
                        </FormControl>

                        <FormControl color="white">
                            <FormLabel>Contraseña</FormLabel>
                            <Input type='password' placeholder="Ingresa tu Clave" placeholderColor="white" />
                        </FormControl>
                    </Box>
                </Center>

            {
                //Boton para enviar Datos
            }
                <Center>
                    <ButtonGroup gap='4' bg="gray.900" color="White">
                        <Button colorScheme='gray.900' variant="outline">Inicio de Sesion</Button>
                    </ButtonGroup>
                </Center>
            </Box>
        </>
    )
}