# Cadastro de carro

**RF**

[x] Deve ser possível cadastrar um novo carro.

**RN**

[x] Não deve ser possível cadastrar um carro com uma placa já existente.<br/>
[x] O carro deve ser cadastrado, por padrão, com disponibilidade.<br/>
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.<br/>

# Listagem de carros

**RF**

[x] Deve ser possivel listar todos os carros disponíveis.<br/>
[x] Deve ser possivel listar todos os carros disponíveis pelo nome da categoria.<br/>
[x] Deve ser possivel listar todos os carros disponíveis pelo nome da marca.<br/>
[x] Deve ser possivel listar todos os carros disponíveis pelo nome do carro.<br/>

**RN**

[x] O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**

[x] Deve ser possível cadastrar uma especificação para um carro.

**RN**

[x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br/>
[x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.<br/>
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.<br/>

# Cadastro de imagens do carro

**RF**

[x] Deve ser possível cadastrar a imagem do carro.

**RNF**

[x] Utilizar o multer para upload dos arquivos.

**RN**

[x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.<br/>
[x] O usuário responsável pelo cadastro deve ser um usuário administrador.<br/>

# Aluguel de carro

**RF**

[x] Deve ser possível cadastrar um aluguel.

**RN**

[x] O aluguel deve ter duração mínima de 24 horas.<br/>
[x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br/>
[x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.<br/>
[x] O usuário deve estar logado na aplicação.<br/>
[x] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível.<br/>
