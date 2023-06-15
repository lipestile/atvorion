const cursoValidator = {
    nome: {
        required: 'Campo obrigatório',
        minLenght: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLenght: {
            value: 10,
            message: 'o máximo é 10'
        }
    },
    duracao: {
        required: 'Campo obrigatório',
        maxLenght:{
            value: 3,
            message:'minimo3'
        },
        min: {
            value: 2.5,
            message: 'o minimo é 2.5 semestre'
        },
        max: {
            value: 10,
            message: 'o máximo é 10'
        }
    },
    modalidade:{
        required: 'Campo obrigatório',
        minLenght: {
            value: 3,
            message: 'o minimo é 3'
        }
    }

}

export default cursoValidator