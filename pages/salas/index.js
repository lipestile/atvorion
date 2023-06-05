import Pagina from '@/components/Pagina'
import axios from 'axios'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

const index = () => {

    const [salas, setSalas] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    function getAll(){
        axios.get('/api/salas').then( resultado => {
            setSalas(resultado.data);
        })
    }
    
    function excluir(id){
        if (confirm('Deseja realmente excluir o registro?')) { 
        axios.delete('/api/salas/' + id)
        getAll()
        }
    }

    return (
        <Pagina titulo="Salas">

            <Link href="/salas/form" className='mb-2 btn btn-primary'>
                Novo
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>capacidade</th>
                    </tr>
                </thead>
                <tbody>
                    {salas.map( item => (
                        <tr key={item.id}>
                            <td>
                                <Link href={'/salas/' + item.id}>
                                    <BsPencilFill title="Alterar" className='text-primary' />
                                </Link>
                                {' '}
                                <BsFillTrash3Fill title="Excluir" onClick={() => excluir(item.id)} className='text-danger' />
                            </td>
                            <td>{item.nome}</td>
                            <td>{item.capacidade}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}

export default index