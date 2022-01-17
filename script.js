const alunos = [
   {
    nome: 'fulano',
    nota: 8,
    turma: '1a'
    },
    {
    nome: 'beltrano',
    nota: 10,
    turma: '1b'

    },
   {
    nome: 'alcadieno',
    nota: 9,
    turma: '1c'
    },
    {
     nome: 'julino',
     nota: 5,
     turma: '1c'
     },
     {
      nome: 'setembrino',
      nota: 4,
      turma: '1c'
      }
];

function notaAluno({nota}) {
    return nota;
}

function alunosAprovados(alunos, media) {
    let novoArray = [];
    //const nota = 0
    for (let i = 0; i< alunos.length; i++){
        const {nome, nota} = alunos[i];
        if (nota>= media){
            novoArray.push(nome)
        }

        
        
        
        /*if (alunos[i].nota>= media){
            novoArray.push(alunos[i].nome);            
        } */       
    }
    
    console.log(novoArray);
    return novoArray;
      
}
alunosAprovados(alunos, 4);