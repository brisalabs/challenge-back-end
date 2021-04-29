## Criando Modelagem do Database

### Criando Banco de Dados

```sh
$ docker run --restart=always --name brisapay -e POSTGRES_DB=brisapay -e POSTGRES_PASSWORD=brisapay -p 5432:5432 -d postgres

```

### Criando Migration

```sh
$ yarn typeorm migration:create -n nome_da_migration

```
### Rodando Migration

```sh
$ yarn typeorm migration:run

```
