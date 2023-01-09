let estudantes = [
    {id: 1, nome: "Andy", curso: "JavaScript"},
    {id: 2, nome: "Karine", curso: "Python"},
    {id: 3, nome: "João", curso: "JavaScript"},
    {id: 4, nome: "Moni", curso: "JavaScript"},
    {id: 5, nome: "Antônio", curso: "JavaScript"},
    {id: 6, nome: "Luan", curso: "C#"},
    {id: 7, nome: "Bia", curso: "Python"},
    {id: 8, nome: "Vinny", curso: "C#"}
]

function filtraEstudantesPorCurso(nomeDoCurso) {
    return estudantes.filter(alunos => alunos.curso == nomeDoCurso)
}

// alunos JavaScript
let salaDeJavaScript = filtraEstudantesPorCurso('JavaScript')
console.log(salaDeJavaScript);

// alunos Python
let salaDePython = filtraEstudantesPorCurso('Python')
console.log(salaDePython);

// alunos de c#
let salaDeCSharp = filtraEstudantesPorCurso('C#')
console.log(salaDeCSharp);


// Segundo teste
let n = [3, 0 , 2, 1, 10, 100];
console.log(n.sort())       

let p = ['Zequinha', 'anna', 'fábio', 'caio', 'Anna', 'lucas']
console.log(p.sort())


