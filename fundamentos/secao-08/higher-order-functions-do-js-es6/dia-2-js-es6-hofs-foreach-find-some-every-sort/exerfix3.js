/* Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista: */

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    return names.find((name) => name.length === 5);
  // Adicione seu código aqui:
};

console.log(findNameWithFiveLetters(names));