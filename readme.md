# random-user-data

Um pacote para facilitar o testes de formulários ou interações com banco de dados com dados aleatórios de usuário.

### Como utilizar o pacote ? 

1. Instale o pacote

```sh
   npm -i random-user-data
```

2. Utilize ele em seu codigo

* Objeto completo

```js

import { randomUser } from "random-user-data";
console.log(randomUser())
// {
//   name: 'Aline Ribeiro',
//   email: 'alineribeiro@email.com',
//   age: 60,
//   birthDate: '1963-7-11'
//   phone: '(67)985341727'
// }
```

* Chave especifica

```js

import { randomUser } from "random-user-data";
console.log(randomUser().email)
// cassiolemos@email.com
```

* Configurações
```js
const gender = 'f' //'f' = female 'm' = male
const minAge = 18
const maxAge = 30

import { randomUser } from "random-user-data";
console.log(randomUser(gender, minAge, maxAge))
// {
//   name: 'Aline Ribeiro',
//   email: 'alineribeiro@email.com',
//   age: 20,
//   birthDate: '2003-2-19'
//   phone: '(67)985341727'
// }
```
