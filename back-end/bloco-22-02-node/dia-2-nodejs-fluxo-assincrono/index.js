const functresparans = async (um, dois, tres) =>{
    return new Promise((resolve, reject) => {
        console.log('param1: ', um);
        console.log('param2: ', dois);
        console.log('param3: ', tres);
        if(typeof um !== 'number' && typeof dois !== 'number' && typeof tres !== 'number'){
            reject('Informe apenas números')
        }
        const sumNumbers = (um + dois) * tres;
        minvalue = 50;
        if (um + dois + tres <= minvalue){
            reject('Valor muito baixo');
        }
        resolve(sumNumbers);
    })
};
// then pega o resolve, catch pega o reject da promisse
const ramdomNumber = () =>{
    Math.floor(Math.random() * 100 + 1);
}
console.log('entrando na functres:', functresparans(ramdomNumber, ramdomNumber, ramdomNumber)
    .then(resolve => console.log('resolve: ', resolve))
    .catch(reject => console.log('reject: ', reject))
);

// export default functresparans;