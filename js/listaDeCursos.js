const cursos = [
    {
        nome: 'Java COMPLETO Programação Orientada a Objetos',
        icon: 'img/udemyIcon.png',
        link: 'https://www.udemy.com/certificate/UC-2f90b6a8-0899-4925-944c-c5e11a676f4e/'
    },
    {
        nome: 'Formação JavaScript Developer',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/7BDC9CBC'
    },
    {
        nome: 'Testes Unitários Com JUnit',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/63651376'
    },
    {
        nome: 'BOOTCAMP:Desenvolvimento Java com Cloud AWS',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/546A32E6'
    },
    {
        nome: 'Linux do Zero',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/48A94EED'
    },
    {
        nome: 'Curso completo de Banco de Dados e SQL',
        icon: 'img/udemyIcon.png',
        link: 'https://www.udemy.com/certificate/UC-7fd8eb4f-8b3b-4e02-9fee-1e97f7568f9e/'
    },
    {
        nome: 'Versionamento de Código com Git e GitHub',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/B698C09A'
    },
    {
        nome: 'Projetos ágeis com SCRUM',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/54B18673'
    },
    {
        nome: 'Santander Bootcamp 2023',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/D1D70807'
    },
    {
        nome: 'Conhecendo o Kotlin e Sua Documentação Oficial',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/88D17E90'
    },
    {
        nome: 'Desenvolvimento Web com Spring Boot 3',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/6BB4369C'
    },
    {
        nome: 'Desmistificando Microsserviços, BFF e DDD',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/B4134486'
    },
    {
        nome: 'Gerenciamento de Dependências e Build em Java com Maven',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/F92F3C5C'
    },
    {
        nome: 'Prática à Linguagem de Programação Kotlin',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/27BC8375'
    },
    {
        nome: 'Banco de Dados NoSQL',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/BCCB4776'
    },
    {
        nome: 'Introdução a Banco de Dados Relacionais (SQL)',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/8D101D72'
    },
    {
        nome: 'Fundamentos da Programação Orientada a Objetos',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/D0B6C44D'
    },
    {
        nome: 'Aprendendo a Sintaxe Java',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/BD454C0A'
    },
    {
        nome: 'Conhecendo Collections Java',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/9BCA326B'
    },
    {
        nome: 'Estruturas Condicionais com Java',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/3B2F7C13'
    },
    {
        nome: 'Java e Tratamento de Exceções',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/7E8D1E0B'
    },
    {
        nome: 'Ganhando Produtividade com Stream API',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/92AD161D'
    },
    {
        nome: 'Publicando Sua API REST na Nuvem Usando Spring Boot 3, Java 17',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/F7B0E69A'
    },
    {
        nome: 'Imersão no Spring Framework com Spring Boot',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/B75E7BCE'
    },
    {
        nome: 'Criando uma API REST Documentada',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/F08C5515'
    },
    {
        nome: 'Adicionando Segurança a uma API REST com Spring Security',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/F5EFD2BC'
    },
    {
        nome: 'AWS: Descubra a Nuvem',
        icon: 'img/dioIcon.png',
        link: 'https://www.dio.me/certificate/96B79ED2'
    },
];

const cursosContainer = document.getElementById('cursos');
const lerMaisButton = document.getElementById('lerMais');
let cursosExibidos = 0;

function exibirCursos() {
    const cursosParaExibir = cursos.slice(cursosExibidos, cursosExibidos + 5);

    cursosParaExibir.forEach(curso => {
        const cursoElement = document.createElement('li');
        cursoElement.innerHTML = `<img src="${curso.icon}" alt=""><a href="${curso.link}">${curso.nome}</a>`;
        cursosContainer.appendChild(cursoElement);
    });

    cursosExibidos += cursosParaExibir.length;

    
    if (cursosExibidos >= cursos.length) {
        lerMaisButton.style.display = 'none';
    }
}

lerMaisButton.addEventListener('click', exibirCursos);

exibirCursos();
