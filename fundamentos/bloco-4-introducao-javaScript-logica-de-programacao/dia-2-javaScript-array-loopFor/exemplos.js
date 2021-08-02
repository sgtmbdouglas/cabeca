//Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
    console.log(menuServices);
//Procure o índice do valor "Portfólio" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Portfólio');
    console.log(menuServices);
//Adicione o valor "Contato" no final do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('contato');
    console.log(menu);

//exemplos:
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
    console.log(tasksList.length);
// 3

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
let searchForFirstTask = tasksList[0];
    console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
    console.log(searchForLastTask);
// Brincar com o cachorro

let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.pop();  // remove a última tarefa
    console.log(tasksList);
// [ 'Tomar café', 'Reunião' ]

