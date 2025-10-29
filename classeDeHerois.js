class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let tipoDoAtaque;

        if (this.tipo === "mago") {
            tipoDoAtaque = "magia";
        } else if (this.tipo === "guerreiro") {
            tipoDoAtaque = "espada";
        } else if (this.tipo === "monge") {
            tipoDoAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            tipoDoAtaque = "shuriken";
        } else {
            tipoDoAtaque = "tipo de ataque não definido"
        }

        console.log(`O ${this.tipo} atacou usando ${tipoDoAtaque}`)
        
    }

}
