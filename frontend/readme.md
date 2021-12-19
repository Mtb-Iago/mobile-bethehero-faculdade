# Projeto Be the Hero - Nova Versão

## Para rodar o projeto 

#### Use o `npm` ou `yarn` para adicionar as dependências e criar a node_modules

#### Após instalados de um `yarn start` para buildar o projeto

#### Para executar o app direto do celular baixe o app `EXPO no play store`, clique em scanear Qrcode, ao scanear o Qrcode o app irá carregar no celular, caso deseje rodar no browser basta apertar a tecla `W` dentro do prompt e abrir no caminho que o expo vai exibir.


## Para rodar o projeto com o Docker [Imagem Docker](https://github.com/Mtb-Iago/docker-image-reactnative-expo)
##### Crie uma pasta->adicione os arquivos `{Dockerfile, docker-compose.yml, .env, (Pasta APP contendo o projeto Be the Hero)}`-> dentro da pasta execute as intruções abaixo.

## React Native and Expo-cli with Docker 

### Settings .env

Put your ip to `.env`.

```
REACT_NATIVE_PACKAGER_HOSTNAME=192.168.11.5 {YOUR IP || .env}
```

### Docker run

```bash
docker-compose up -d --build
```

### Run React Native app

```bash
docker-compose exec app bash
```

```bash
cd app
yarn start
```
[![Github Badge](https://img.shields.io/badge/-Github-000?style=flat-square&logo=Github&logoColor=white&link=LINK_GIT)](https://github.com/Mtb-Iago/mobile-bethehero-faculdade)
