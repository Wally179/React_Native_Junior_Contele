# React Native Junior
## _Teste Contele Santos_
![image](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![image](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
)![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
)![image](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

As principais dependências utilizadas:
- react-native-community/geolocation
- react-navigation
- axios
- expo
- expo-location
- redux

## Passo a passo do desenvolvimento

- Expo
Utilizei o Expo para formular o projeto, pensando na portabilidade android/iphone, o Expo em suas funcionalidades facilita bastante a realização da portabilidade.

- React Navigation
Já de inicio instalei o react navigation para utilizar ele além da navegação, fazer o Header do aplicativo. a partir do Stack Navigator.

- Expo-location
Utilizado para pedir permissão ao usuário, para acesso ao GPS e sua localização.

- Redux
Utilizado para formular a fila quando offline.

- Geolocation
Utilizado para capturar a latitude e longitude do usuário
- Axios
Utilizado para comunicação com o backend

## Instalação

Baixe os arquives e os execute
```sh
npm i
yarn start
```


## Dificuldades

Nunca fiz nada que envolvesse funcionamento offline, então assim que recebi o desafio comecei a estudar sobre Redux e como executar essa tarefa. mas no fim, não foi essa minha maior dificuldade ao realizar o teste. a maior dificuldade foi no loop da tarefa, quando eu definia 3 segundos repetir a função, a função emitia sempre o mesmo resultado.
