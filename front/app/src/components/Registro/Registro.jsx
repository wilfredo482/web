import {
    Center, Box, Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    ButtonGroup
} from '@chakra-ui/react'
import Header from "../Header/Header";

export default function Registro() {
    return (
        <>
            {
                //Se reutiliza el Header creado para acortar el codigo
            }
            <Header />

            {
                //Esto es un body de misma estructura que el creado solo que contiene el Formulario de Registro de Usuario
            }
            <Box h='1200px' bgGradient='linear(to-r, gray.900,  purple.500)'>
                <Center>
                    <Box color="white" padding="30px">
                        <Heading padding="3px">Registro de Usuario</Heading>
                        <FormControl color="white">
                            <FormLabel>Nombre</FormLabel>
                            <Input type='text' placeholder="Ingresa tu Nombre" placeholderColor="white" />
                        </FormControl>

                        <FormControl color="white">
                            <FormLabel>Apellido</FormLabel>
                            <Input type='text' placeholder="Ingresa tu Apellido" placeholderColor="white" />
                        </FormControl>

                        <FormControl color="white">
                            <FormLabel>Email address</FormLabel>
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