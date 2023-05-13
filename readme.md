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

import { randomUser } from "random-user-data";
console.log(randomUser({genre: 'female', minAge: 18, maxAge: 25}))
// {
//   name: 'Andréa Campos',
//   email: 'andreacampos@email.com',
//   age: 21,
//   birthDate: '2002-2-18',
//   phone: '(31)943881364'
// }
```
