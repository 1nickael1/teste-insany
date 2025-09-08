# Teste Insany - E-commerce

Este é um projeto de e-commerce desenvolvido com [Next.js](https://nextjs.org) que permite navegar por produtos, adicionar itens ao carrinho e finalizar compras.

## 🌐 Aplicação Online

Acesse a aplicação em produção: **[https://teste-insany.vercel.app/](https://teste-insany.vercel.app/)**

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.2** - Framework React
- **React 19.1.0** - Biblioteca de interface
- **TypeScript** - Tipagem estática
- **Styled Components** - Estilização
- **Axios** - Cliente HTTP

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/1nickael1/teste-insany.git
cd teste-insany
```

2. **Configure as variáveis de ambiente:**
```bash
cp .env.example .env
```

3. **Instale as dependências:**
```bash
npm install
# ou
yarn install
```

## ⚙️ Configuração das Variáveis de Ambiente

O arquivo `.env.example` contém as variáveis de ambiente necessárias para o funcionamento da aplicação:

- **BASE_URL**: URL base da API

Após copiar o arquivo `.env.example` para `.env`, você pode editar as variáveis conforme necessário para seu ambiente.

## 🏃‍♂️ Como Executar

### Modo Desenvolvimento

Para executar a aplicação em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

### Modo Produção

Para construir e executar em modo de produção:

```bash
# Construir a aplicação
npm run build
# ou
yarn build

# Executar em modo produção
npm run start
# ou
yarn start
```

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e componentes da aplicação
│   ├── _components/        # Componentes reutilizáveis
│   ├── cart/              # Página do carrinho
│   ├── categoria/         # Páginas de categorias
│   ├── produto/           # Páginas de produtos
│   └── globals.css        # Estilos globais
├── lib/                   # Utilitários e configurações
├── public/                # Arquivos estáticos
└── package.json           # Dependências e scripts
```

## 🎯 Funcionalidades

- ✅ Navegação por produtos
- ✅ Filtros por categoria
- ✅ Adicionar produtos ao carrinho
- ✅ Gerenciar quantidade no carrinho
- ✅ Remover produtos do carrinho
- ✅ Cálculo automático de totais

## 📚 Documentação Adicional

Para aprender mais sobre as tecnologias utilizadas:

- [Next.js Documentation](https://nextjs.org/docs) - Documentação oficial do Next.js
- [React Documentation](https://react.dev/) - Documentação oficial do React
- [Styled Components](https://styled-components.com/) - Documentação do Styled Components
- [TypeScript](https://www.typescriptlang.org/) - Documentação do TypeScript

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
