# Cadastro de carro

**RF**

[x] Deve ser possível cadastrar um novo carro.

**RN**

[x] Não deve ser possível cadastrar um carro com uma placa já existente.
[x] O carro deve ser cadastrado, por padrão, com disponibilidade.
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Listagem de carros

**RF**

[x] Deve ser possivel listar todos os carros disponíveis.
[x] Deve ser possivel listar todos os carros disponíveis pelo nome da categoria.
[x] Deve ser possivel listar todos os carros disponíveis pelo nome da marca.
[x] Deve ser possivel listar todos os carros disponíveis pelo nome do carro.

**RN**

[x] O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**

[x] Deve ser possível cadastrar uma especificação para um carro.

**RN**

[x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
[x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**

[x] Deve ser possível cadastrar a imagem do carro.

**RNF**

[x] Utilizar o multer para upload dos arquivos.

**RN**

[x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**

[ ] Deve ser possível cadastrar um aluguel.

**RN**

[ ] O aluguel deve ter duração mínima de 24 horas.
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.
[ ] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.
