# Auth Users

## O que é?

É o sistema responsável por realizar o CRUD de usuários e login.

## Arquitetura

Por que ter uma aplicação que só faça login?
Pensando na escalabilidade da aplicação a arquitetura foi feita em DDD(Domain-Driven Design)

## Tecnologias envolvidas

* Node 14.15.5

## Desenvolvimento

De forma geral, quando nós adicionamos código na nossa aplicação, ele fica
refletido no [`localhost:3000`](http://localhost:3000) após rodarmos o script `start` dentro do package.json


### Como subir a aplicação

Executar para importar as migrations:
- yarn migration:run ou npm run migration:run

Para subir a aplicação, rodamos yarn `start` e acessamos através do
[`localhost:3000`](http://localhost:3000).



### Endpoints
 Para cada endpoint chamado é feita uma autenticação de acordo com o token gerado atraves do login.

## Login
# Loga o usuario na plataforma
URL:
```
POST http://localhost:3000/auth/login
```
JSON
{
	"username": "admin",
	"password": "admin"
}

Resposta:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2MjA3MDcwMzQsImV4cCI6MTYyMDcxMDYzNH0.jEGOEI9nef3hw0R2WYHjwwM8KSb2WYv1nXSLOHOsI2w



## Usuários
# Lista todos os usuários cadastrados
URL:
```
GET http://localhost:3000/user
```

Resposta:
```
[
  {
    "id": 1,
    "username": "admin",
    "role": "ADMIN"
  }
]

```

# Cria um usuario

URL:
```
POST http://localhost:3000/user
```

JSON 
{
	"username": "root",
	"password": "root",
    "role": "root",
	"mail": "root@teste.com"
}

Resposta:
```
[
  {
    "id": 1,
    "username": "admin",
    "role": "ADMIN"
  },
  {
    "id": 2,
    "username": "root",
    "role": "root"
  }
]
```
# Atualiza um usuario atraves do id

URL:
```
PATCH http://localhost:3000/user/1
```

JSON 
{
    "username": "root",
	"role": "ROOT",
	"mail": "root@teste.com"
}

# Deleta um usuario atraves do id

URL:
```
DELETE http://localhost:3000/user/2
```

Resposta:
```
204 No Content
```
