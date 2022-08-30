//Importacion del componente Box, similar a un Div
import { Box } from "@chakra-ui/react"

export default function Body() {
    return (
            //Lo usamos con la Propiedad bgGradient para darle el tono degradado entre colores
            <Box bgGradient='linear(to-r, gray.900,  purple.500)' w='100%' h='800px' p={4} color='white'>
                This is the Box
            </Box>
    )
}