const user = {
    nome: "Juliana",
    email: "j@j",
    nascimento: "2021/06/22",
    role: "admin",
    cpf:123456789,
    ativo: true, 
    exibirInfos:function () {
        console.log(this.nome, this.email, this.cpf)
    }
}
user.exibirInfos()
//cosnt exibir = user.exibirInfos
//exibir()

const exibir = function () {
    console.log(this.nome, this.email)
}