## FINAPI

- API para sistema bancário em node, com uma estrutura elegante.

### REQUISITOS

- Deve ser possível criar uma conta.
- Deve ser possível buscar o extrato bancário.
- Deve ser possível realizar um deposito.
- Deve ser possível realizar um saque.
- Deve ser possível buscar o extrato bancário por data.
- Deve ser possível atualizar dados da conta.
- Deve ser possível obter dados da conta.
- Deve ser possível deletar a conta.

### REGRAS DE NEGÓCIO

- Não deve ser possível cadastrar uma conta com o cpf já existente.
- Não deve ser possível fazer um deposito em uma conta não existente.
- Não deve ser possível buscar extrato de uma conta não existente.
- Não deve ser possível fazer um saque em uma conta não existente.
- Não deve ser possível excluir uma conta não existente.
- Não deve ser possível fazer um saque quando o saldo for insuficiente


