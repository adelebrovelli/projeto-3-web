# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).
_________________________________

Educalivros é um aplicativo multifuncional que integra biblioteca digital, cursos online e e-commerce em uma única plataforma. Com uma interface amigável e uma estrutura bem organizada, o projeto proporciona uma experiência agradável e eficiente para os usuários.# Educalivros

Educalivros é um projeto de aplicativo móvel desenvolvido utilizando o framework React Native com a ajuda do Expo, que mostra as atualizações e desenvolvimento do código no Snack. O objetivo principal do aplicativo é fornecer uma plataforma integrada para que os usuários possam acessar uma biblioteca digital, cursos online e uma loja de e-commerce para compra de livros e materiais educativos.

## Descrição do Projeto

O Educalivros é um aplicativo que visa enriquecer a experiência dos usuários no âmbito educacional e literário. O aplicativo possui várias funcionalidades que permitem ao usuário explorar e interagir com diversos recursos, como livros, cursos e e-commerce, de forma simples e intuitiva.

## Estrutura do Projeto

### Componentes Principais

#### 1. App.js

Este é o arquivo principal do projeto onde o navegador de telas é configurado. Utiliza `NavigationContainer` do `@react-navigation/native` e `createStackNavigator` do `@react-navigation/stack` para gerenciar as navegações entre as diferentes telas do aplicativo.

#### 2. Header.js

Componente de cabeçalho personalizado que é exibido em todas as telas do aplicativo. Contém um logo e um botão de navegação para a tela de biblioteca.

#### 3. HomeScreen.js

Tela inicial do aplicativo, que dá as boas-vindas aos usuários e apresenta uma breve descrição da biblioteca.

#### 4. LibraryScreen.js

Tela da biblioteca que utiliza o componente `LibraryBooks` para exibir uma lista de livros disponíveis. Cada item da lista é clicável e redireciona para a tela de detalhes do livro.

#### 5. BookDetailsScreen.js

Tela que mostra os detalhes de um livro específico, incluindo o título, autor e imagem do livro. Também oferece opções para alugar ou comprar o livro.

#### 6. LoginScreen.js

Tela de login onde os usuários podem inserir suas credenciais para acessar funcionalidades adicionais, como alugar ou comprar livros.

### Contexto de Autenticação

#### AuthContext.js

Contexto de autenticação que fornece o estado de login e as funções para fazer login e logout. É utilizado para proteger certas rotas e funcionalidades que requerem autenticação.

### Fontes Personalizadas

O aplicativo utiliza uma fonte personalizada, `Cinzel-Regular`, que é carregada no início do aplicativo utilizando a biblioteca `expo-font`.
_________________________________
## Metodologia Utilizada

### React Navigation

O `@react-navigation/native` é utilizado para gerenciar a navegação entre as diferentes telas do aplicativo. O `createStackNavigator` é usado para configurar a navegação em pilha.

### Expo Font

A biblioteca `expo-font` é utilizada para carregar a fonte personalizada `Cinzel-Regular`, garantindo uma aparência única e consistente em todo o aplicativo.

### Context API

A Context API do React é utilizada para gerenciar o estado global de autenticação, permitindo que o estado de login seja compartilhado entre diferentes componentes.

### Componentização

O projeto foi desenvolvido com uma abordagem de componentização, onde cada parte do aplicativo é dividida em componentes reutilizáveis. Isso facilita a manutenção e a escalabilidade do código.

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- Expo CLI

# Application screenshots

![image](https://github.com/adelebrovelli/projeto-3-web/assets/101191931/6bbd6780-5a87-46b2-8b97-388506a1c649)
![image](https://github.com/adelebrovelli/projeto-3-web/assets/101191931/6a046b7a-949f-4809-81b5-11c9d5f1e28e)
![image](https://github.com/adelebrovelli/projeto-3-web/assets/101191931/1f5c846f-0836-4685-8dba-0840f22f04f6)
![image](https://github.com/adelebrovelli/projeto-3-web/assets/101191931/36e90a8d-d7dc-41f4-b7cc-d5f9c1d373ca)
![image](https://github.com/adelebrovelli/projeto-3-web/assets/101191931/af324b9e-f14a-407d-81a6-6d92af4d715f)

_________________________________
# Quick video-preview
https://github.com/adelebrovelli/projeto-3-web/assets/101191931/477b9575-8c80-416a-9c22-d7993a7c5b54

