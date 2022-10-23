// AJUSTANDO LINT, FORMATACAO, e CRIANDO AMBIENTE VIRTUAL ANTES DE TUDO BOA PRATICA VQV

// $ sudo apt install python3

// pip permite intalar as dependencias do python, libs tipo o linter
// $ sudo apt install python3-pip
// $ sudo apt install python3.10-venv

// para criar um ambiente virtual( ambiente usado para desenvolver um determinado projeto, e nele que intalo as libs para o projeto, boa pratica)
// $ python3 -m venv .venv

// toda vez que rodo o -m estou executando aquela lib como um arquivo unico, venv(virtual envailvilmente) e o .venv e o nome do meu ambiente virtual uma boa pratica
// se eu quiser ativar meu ambiente virtual
// $ source .venv/bin/activate
// o terminal ficara assim: (.venv) user:$

// $ pip install flake8
// famoso linter flake8

// se der problema na instalacao do flake8 ou para criar um ambiente virtual isso pode acontecer por conta da biblioteca whell, para instalar $pip install wheel
// $ pip install black
// ajuda na formatacao do codigo
// para usar o linter(flake8), ctrl + shift + p e procura Python: Select Linter escolhe a opcao flake8
// para usar o black eu chamo o arquivo no terminal e passo o black
// python3 -m black 1-teste_black.py

// >>> candidatos_partido.extend([(candidatos[0], 14), (candidatos[1], 15), (candidatos[2], 16)])