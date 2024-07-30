// SERVER COMPONENTS (Executado do lado do servidor, acessa recursos sensiveis como DB e variaveis de ambientes)
// Não aceita interações de manipulação de DOM UseState e interações do usuário
//Portanto precisa configurar para "use client";

import { Button } from "../_components/ui/button";

const About = () =>{
    return <Button>test</Button>;
};

export default About;