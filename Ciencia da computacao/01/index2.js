//    COMECANDO PYTHON

// As distribuições do sistema operacional Linux e Mac, normalmente, já vem com uma versão Python instalada, pois utilizam a linguagem em diversos programas essenciais
// Estou usando arquivos js porque python nao aceita comentarios muito grandes
// Para ver se o python ja esta instalado no terminal digita $ python3
// Este tipo de terminal é chamado de REPL (Read-Eval-Print Loop), sendo traduzido para o português como loop de leitura-avaliação-impressão ou terminal interativo. Esse terminal recebe uma entrada digitada pela pessoa, avalia sua execução e imprime seu resultado
// usando o terminal interativo vamos ver a filosofia da linguagem, por meio dela podemos entender um pouco mais sobre como o Python foi escrito.
// $ import this

//      PYTHON COM DOCKER
// # Baixe a última versão do python
// $ docker pull python
// $ docker run -it --rm python:tag

//      OPERADORES ARITIMETICOS
// >>> 3 // 2               retorna o Quociente da divisao sem o resto
// >>> 2 ** 10              potenciacao

//      OPERADORES DE ATRIBUICAO
// >>> counter = 10             
// >>> counter +=1              somei counter +1

//      OPERADORES DE COMPARACAO
// >>> 10 < 18
// >>> 18 < 25
// >>> 10 < 18 < 25             dezoito esta entre 10 e 25?

//      OPERADORES DE CONDICIONAIS
// >>> True and False               &&JS
// >>> True or False                ||JS

//      TIPOS DE DADOS EMBUTIDOS
// Os valores booleanos True e False pertencem ao tipo embutido (bool).

//      Números inteiros(int)
// O primeiro dos tipos numéricos é o int, é escrito sem parte fracionária.
// O método type(operando)              typeof operando do JavaScript

// para ajudar a entender algum comando o python dispoe do help 
// >>> help(list)
// O comando help() também pode ser utilizado em cláusulas if ou for, desde que colocado entre aspas e para sair de dentro do comando, basta apertar a tecla q.
// >>> help("if")

//      Números fracionários(float)
// O segundo tipo numérico é o float, também conhecido por ponto flutuante, ele representa um número decimal ou fracionário.

//      Temos ainda estruturas do tipo:
// sequência(list, tuple, range);
// conjuntos(set, frozenset);
// mapeamento(dict);
// sequências binárias(bytes, bytearray, memoryview).
// 
// EM JAVASCRIPT ARRAYS, EM PYTHON LISTA(list)            Estrutura de dados diferentes mas funciona da mesma forma
// >>> lista = ['a', 'b']
// >>> lista[0]                             'a'
// >>> lista.append('c')                    adicionei 'c' na lista
// >>> lista.remove('c')                    removi 'c' da lista
// >>> outra_lista = ['d', 'e', 'f']
// >>> lista.extend(outra_lista)            ['a', 'b', 'd', 'e', 'f'] e tambem posso extender passando como parametro um ['com', 'os', 'valores aqui']
// >>> fruits = ['banana', 'uva', 'morango', 'laranja']
// >>> fruits[a:b:c]                        # slice(fateamento) posso passar 3 parametros[indice onde comeco:elemento ate onde vou: pular de quanto em quanto] 
// >>> fruits[0:3]                          #['banana', 'uva', 'morango']
// >>> fruits[:2]                           #['banana', 'uva']  posso omitir
// >>> fruits[::-1]                         #['laranja', 'morango', 'uva', 'banana']
// >>> 

//  TUPLAS(tuple) conjunto com x entidades
// São similares a listas, porém não podem ser modificados durante a execução do programa IMUTAVEL
// talvez tenha o mesmo comportamento de uma lista so que imutavel
// >>> city, uf, year, cep = ('Petrolina', 'PE', 2022, 563_000)             ai fiz um desempacotamento de tupla ultimo campo da tupla esta com um separador de milhar nao muda nada mas ajuda na leitura
// vou fazer tuplas contendo os candidatos e seus numeros como exemplo
// >>> candidatos = ['Padre KelmonPTB', 'Simone TebetMDB', 'Vera LuciaPSTU', 'Sofia Manzano21PCB', 'Jair Bolsonaro22PL', 'Eymael27DC']
// >>> 
// >>> pdt = ('Ciro Gomes', 12)
// >>> pdt[0]                                       'Ciro Gomes' me retorna o indice da tupla
// >>> candidatos_partido = [pdt]
// >>> candidatos_partido                           [('Ciro Gomes', 12)]
// >>> candidatos_partido.append(('LulaPT', 13))      adicionei outra tupla com o PT
// >>> candidatos_partido.extend(
//...    [
//...        (candidatos[0], 14),
//...        (candidatos[1], 15),
//...        (candidatos[2], 16)
//...    ]
//)
//  CONJUNTOS(set)
// Um conjunto é uma coleção de elementos únicos e não ordenados. Conjuntos implementam operações de união, intersecção e outras
// permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

// permissions.add("root")  # adiciona um novo elemento ao conjunto

// permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

// permissions.union({"user"})  # retorna um conjunto resultado da união

// permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

// permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

//  CONJUNTOS imutáveis(frozenset)
// É uma variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.
// permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

// permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

// permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

// permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

//  Dicionários (dict)
// Estrutura que associa uma chave a um determinado valor. É a representação do tão famoso objeto que utilizamos em JavaScript
// people_by_id = {1: "Maria", 2: "Fernanda", 3: "Felipe"}  # elementos no formato "chave: valor" separados por vírgula, envolvidos por chaves

// people_by_name = {"Maria": 1, "Fernanda": 2, "Felipe": 3}  # outro exemplo, dessa vez usando strings como chaves. As aspas são necessárias para que o Python não ache que `Maria`, `Fernanda` e `Felipe` sejam variáveis.

// # elementos são acessados por suas chaves
// people_by_id[1]  # saída: Maria

// # elementos podem ser removidos com a palavra chave del
// del people_by_id[1]
// people_by_id.items()  # dict_items([(1, "Maria"), (2, "Fernanda"), (3, "Felipe")])
// # um conjunto é retornado com tuplas contendo chaves e valores

//  Range (range)
// 'Estrutura capaz de gerar uma sequência numérica de um valor inicial até um valor final, modificando seu valor de
// acordo com o passo (step) definido. Pode ser declarado como range( [start], stop[, step] ), em que start e step podem ser omitidos,
// possuindo valores iniciais iguais a 0 e 1 respectivamente.'
// O stop não é incluído na sequência, portanto, caso queira uma sequência de 1 até 10 a chamada deverá ser range(1, 11)
// Seus valores são criados à medida que esta sequência é percorrida.
// # vamos converter o range em uma lista para ajudar na visualização

// # definimos somente o valor de parada
// >>> list(range(5))  # saída: [0, 1, 2, 3, 4]

// # definimos o valor inicial e o de parada
// >>> list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

// # definimos valor inicial, de parada e modificamos o passo para 2
// >>> list(range(1, 11, 2))  # saída: [1, 3, 5, 7, 9]

// # podemos utilizar valores negativos para as entradas também
// >>> list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// >>> 
// 
// Um = é atribuição 2 “=“ é comparação
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
//
// 
// 
// 
// 
// 
// 
// 
// 