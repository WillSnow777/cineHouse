const catalogo = require("./catalogo");

const cinema = "CineHouse";
console.log(cinema);
console.log(catalogo);

function adicionarFilme (titulo, duracao, atores, anoDeLancamento, emCartaz){
    const novoFilme = {
        codigo: catalogo.length +1,
        titulo,
        duracao,
        atores,
        anoDeLancamento,
        emCartaz,
    }
    catalogo.push(novoFilme);
    
    console.log(`O Filme cod: ${novoFilme.codigo}, nome: ${novoFilme.titulo}, Foi adicionado com sucesso`);
    console.table(catalogo)
    console.log('-'.repeat(120))
}

adicionarFilme('Matrix 4', 240, ['Neo', 'Synd'], 2022, true )

function buscarFilme(cod){
    //const filmeProcurado = catalogo[cod -1]
    //if(!filmeProcurado){
    //  console.log("Filme não encontrado");
    // } else {
    //    console.log(filmeProcurado)
    // }
    for (let i=0; i<cod.length; i++){
        if(catalogo[i].codigo == cod)
        return catalogo[i];
    }

}

function alterarStatusEmCartaz(cod){
    for (let i=0; i<catalogo.length; i++){
        if(catalogo[i].codigo == cod){
            if(catalogo[i].emCartaz == true){
                catalogo[i].emCartaz = false
            } else {
                catalogo[i].emCartaz = true
            }
        }   
    }
}

console.table(catalogo)
alterarStatusEmCartaz(5)
console.table(catalogo)

