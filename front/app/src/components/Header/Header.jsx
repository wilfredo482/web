//Importacion de los componentes del Header
import {
    Box,
    Flex,
    Center,
    Spacer,
    Button,
    ButtonGroup,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react';

//Importacion del icono del menu centrado del Header
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function Header() {
    return (
        <>
        {//Parte Izquiera del Header donde ira el Logo
        }
            <Flex color='white' >
                <Box p='2' color='white' bg="gray.900">
                    <h4>MasterCoders</h4>
                </Box>

                {
                    //Parte Central en donde esta el menu principal del Header
                }
                <Center w='1400px' h='50px' bg='gray.900'>
                    <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>About</BreadcrumbLink>
                        </BreadcrumbItem>
                        
                        <BreadcrumbItem >
                            <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Center>
                <Spacer />

                {
                    //Parte final del Header donde se encuentran los Botones de Logeo e Inicio de Sesion
                }
                <ButtonGroup gap='2' bg="gray.900">
                    <Button colorScheme='gray.900' variant="outline">Registro de Usuario</Button>
                    <Button colorScheme='gray.900' variant="outline">Inicio de Sesion</Button>
                </ButtonGroup>
            </Flex>
        </>
    )
}