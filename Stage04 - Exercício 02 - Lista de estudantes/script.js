alert("Exercício 02 - Lista de estudantes");

let students = [
  {
    name: "João",
    nota1: 10,
    nota2: 4,
  },

  {
    name: "Letícia",
    nota1: 5,
    nota2: 7,
  },
  {
    name: "Marcos",
    nota1: 10,
    nota2: 9,
  },
  {
    name: "Mario",
    nota1: 5,
    nota2: 6,
  },
];

let media = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
};

function printLista(students) {
  return `
    A média do(a) aluno(a) ${students.name} é: ${media(
    students.nota1,
    students.nota2
  )}
  `;
}

for (let student of students) {
  let Mediamessage = printLista(student);
  alert(Mediamessage);

  if (media(student.nota1, student.nota2) >= 7) {
    alert(`Parabéns ${student.name}! Você foi aprovado no concurso!`);
  } else {
    alert(`Não foi dessa vez, ${student.name}! Tente novamente.`);
  }
}
