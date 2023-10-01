# Sobre o projeto
Esse projeto foi desenvolvido como Teste Técnico para o **Processo Seletivo Maeztra**.
É constituido em duas partes: Teste Lógico e Layout.
Para o Teste Lógico foi utilizada a linguagem **JavaScript**.
Para o Layout foi utilizada a biblioteca **React**, e para simular um banco de dados, **Json Server**.

# Como executar
Para executar o Teste lógico é necessário ter o node instalado em sua máquina. Se não o possuir, você pode seguir esse link para fazer a instalação: **https://nodejs.org/en** 
Tendo o node em sua máquina, apenas rode o comando a seguir:
**node nome_arquivo.js**

Para executar o Teste de Layout basta rodar **npm install** e depois **npm run dev** na pasta layout.

# Links
- GitHub Pages **https://paloma-cruz.github.io/maeztra-test/**
- GitHub (Layout e Teste Técnico): **https://github.com/Paloma-Cruz/maeztra-test/tree/master**  
- Link GitHub Back End: **https://github.com/Paloma-Cruz/maeztra-db**
- Link Vercel para hospedagem do Fake BackEnd: **https://maeztra-db.vercel.app/products**

# Autor
Esse projeto foi desenvolvido por **Paloma da Cruz**, desenvolvedora Front End, com 3 anos de experiência com foco no desenvolvimento de ecommerce utilizando as tecnologias React e VTEX IO. Tenho como portifólio grandes lojas como:
- **Vitivinícola Jolimont: https://www.vinhosjolimont.com.br/**
- **Imporium: https://www.lojasimporium.com.br/**
- **Horus Acabamentos: https://www.horusacabamentos.com.br/**
- **Visual Jeans: https://www.visualjeans.com.br/**

Aqui estão os meus contatos. Estou disponível para sanar qualquer dúvida.
- E-mail: **palomacruzperes@hotmail.com**
- Telefone: **(+351) 937 821 016**

# Desafio Maeztra
Olá candidato,
Este teste se divide em duas etapas, a primeira é um teste lógico onde iremos analisar a sua forma de pensar e como você lida com problemas abstratos. Os códigos dessa etapa devem ser feitos em Javascript, e não se esqueça de documentar todo o processo de cada resposta.

Para iniciar o teste você pode clonar o repositório, e no prazo de dois dias enviar os arquivos em formato .rar/.zip (pode hospedar na nuvem e enviar o link, enviar por anexo etc) para o email queroser@maeztra.com com o assunto **Processo Seletivo Maeztra**, assim como o link para o github pages (mais informações no tópico layout).

## Teste lógico
Dentro do repositório existem cinco arquivos já nomeados para você realizar os seus algoritmos.

***1 - Crie uma função que receba um valor INTEIRO positivo, e verifique se os DÍGITOS estão em ordenação sequencial CRESCENTE ou DECRESCENTE. Pode considerar dígitos iguais como sequenciais (Variação de um dígito para o outro deve ser 1 ou menor)***

> Exemplo:<br/>
> Input 12345678 -> Está ordenado <br/>
> Input 1223455678 -> Está ordenado <br/>
> Input 876543210 -> Está ordenado <br/>
> Input 152456457 -> Não está ordenado <br/>
> Input 12356789 -> Não está ordenado <br/>
> Input 13579 -> Não está ordenado <br/>
> Input 9765421 -> Não está ordenado <br/>
> Input 123454321 -> Não está ordenado <br/>
> Input 12222222 -> Está ordenado <br/>
> Input 2111111 -> Está ordenado <br/>
> Input 1599 -> Não está ordenado



***2 - Crie uma função que receba um array de inteiros como parâmetro e verifique se neste array existem números duplicados, caso exista, retorne um novo array com os valores que se repetem.***

> Exemplo:<br/>
> Input `[4,5,44,98,4,5,6,7]` &rarr; Output `[4,5]`

***3 - Crie uma função que recebe uma string com qualquer sequência dos seguintes caracteres*** `'[', '{', '(', ')', '}', ']'` ***e retorne se a sequência é uma sequência válida ou não. Uma sequência é válida se as chaves, parênteses e colchetes abrem e fecham corretamente***
> Exemplo:<br/>
> `{ [ ( ) ( ) { } [ ] ] { } }` é uma sequência válida<br/>
> `{ [ ( ( ) ] }` não é uma sequência válida (Há um parêntese posicionado incorretamente)<br/>
> `{ } [ ] ( )` é uma sequência válida<br/>
> `( ( ) { } [ [ ] )` não é uma sequência válida (Há uma chave posicionado incorretamente)
> `[ { } ( [ ) ] ]` não é uma sequência válida (O número de caracteres está correto, mas o posicionamento de uma chave/parêntese está incorreto)

Dica: Os espaços nos exemplos são apenas para favorecer a leitura.<br/>
Espaços não farão parte das strings de teste

***4 - Considere um conjunto de pessoas aposentadas, onde cada pessoa começou a trabalhar em ano X e aposentou em ano Y. Crie uma função que receba uma matriz na seguinte estrutura*** `[[x1,y1],[x2,y2],...[xn,yn]]` ***e calcule em qual/quais ano/anos houve mais pessoas trabalhando.***

*Considere:*
- Os valores de X como o ano que os indívíduos começaram a trabalhar (x>0, x<y );
- Os valores de Y como o ano que os indívíduos se aposentaram (y>0);
- O ano de início deve ser considerado como ano trabalhado;
- O ano de aposentadoria deve ser considerado como ano trabalhado.

> Exemplo:<br/>
> Input `[[1960,2005],[1945,2008],[1938,1999],...]`

***5 - Um grupo de amigos será colocado lado a lado para tirar uma foto. De quantos modos distintos os amigos podem se organizar para tirar a foto? Desenvolva uma função que receba um número de pessoas (valor inteiro) e retorne quantas possibilidades de organização existem para que o fotografo saiba o número de modos distintos que esse grupo e outros grupos possam se organizar.***

## Layout
Essa é a segunda etapa do teste onde iremos analisar o ~~seu perfeccionismo~~ perfect pixel e de como você constrói os seus layouts.

Requisitos:
- O layout que você vai utilizar é este: [Layout Figma](https://www.figma.com/file/3RqPfS5PW9whbQNCTTaoqA/%5B2020-09%5D-MZ---Layout-Teste-de-vagas-para-time-de-Devs). **Atenção:** Para poder visualizar corretamente o figma, faça login na ferramenta. Caso acesse o link sem logar, não poderá ver espaçamento, cores etc;
- Você pode utilizar qualquer framework ou library que você preferir;
- A sua página deve ser hospedada no [Github Pages](https://pages.github.com/) e o link deve ser enviado no e-mail;
- Estruture os seus arquivos em uma pasta chamada **layout** e se possível crie um *README*.

## Dúvidas
Caso você tenha alguma dúvida sobre os exercícios ou o layout, você pode nos mandar um email e nós responderemos por lá.

Boa sorte!
