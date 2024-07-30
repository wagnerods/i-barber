// SERVER COMPONENTS (Executado do lado do servidor, acessa recursos sensiveis como DB e variaveis de ambientes)
// Não aceita interações de manipulação de DOM UseState e interações do usuário
//Portanto precisa configurar para "use client";

const About = () =>{
    return <h1 className="text-red-500 mb-5 bg-red-50">about page</h1>;
};

export default About;