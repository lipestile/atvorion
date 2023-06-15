import Pagina from '@/components/Pagina'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { BsCheckLg } from 'react-icons/bs'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import cursoValidator from '@/validators/cursoValidator'

const form = () => {

    const { push } = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()

    function salvar(dados) {
        const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
        cursos.push(dados)
        window.localStorage.setItem('cursos', JSON.stringify(cursos))
        push('/cursos')
    }
    /*const validacaoNome = {
        required: 'Campo obrigatório',
        minLenght: {
            value: 3,
            message: 'o minimo é 3'
        },
        maxLenght: {
            value: 10,
            message: 'o máximo é 10'
        }
    }
    const validacaoDuracao = {
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
    }
    const validacaoModalidade = {
        required: 'Campo obrigatório',
        minLenght: {
            value: 3,
            message: 'o minimo é 3'
        }
    }*/

    return (
        <Pagina titulo="Curso">
            <Form>
                <Form.Group className="mb-3" controlId="nome">
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control isInvalid={errors.nome} type="text" {...register('nome', cursoValidator.nome)} />
                    {
                        errors.nome &&
                        <small className='text-danger'>{errors.nome.message}</small>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="duracao">
                    <Form.Label>Duração: </Form.Label>
                    <Form.Control type="number" {...register('duracao', cursoValidator.duracao)} />
                    {
                        errors.duracao &&
                        <p className='text-danger'>{errors.duracao.message}</p>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="modalidade">
                    <Form.Label>Modalidade: </Form.Label>
                    <Form.Control type="text" {...register('modalidade', cursoValidator.modalidade)} />
                    {
                        errors.modalidade &&
                        <p className='text-danger'>{errors.modalidade.message}</p>
                    }
                </Form.Group>

                <div className='text-center'>
                    <Button variant="success" onClick={handleSubmit(salvar)}>
                        <BsCheckLg className="me-2" />
                        Salvar
                    </Button>
                    <Link className="ms-2 btn btn-danger" href="/cursos">
                        <AiOutlineArrowLeft className="me-2" />
                        Voltar
                    </Link>
                </div>
            </Form>
        </Pagina>
    )
}

export default form