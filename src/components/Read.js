import { Button, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const onDelete = (id) => {
        axios.delete(`http://localhost:1337/delete/${id}`)
        .then(() => {
            getData();
        })
    }
    const getData = () => {
        axios.get(`http://localhost:1337/read`)
        .then((getData) => {
            setAPIData(getData.data);
        })
    }
    const setData = (data) => {
        console.log(data);
        let { id, firstName, lastName, email, phoneNumber  } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Email', email);
        localStorage.setItem('Phone Number', phoneNumber);
    }
    useEffect(() => {
        axios.get(`http://localhost:1337/read`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, []);
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>Phone Number</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.email}</Table.Cell>
                            <Table.Cell>{data.phoneNumber}</Table.Cell>
                            <Link to='/Update'>
                                <Table.Cell>
                                    <Button onClick={() => setData(data)}>Update</Button>
                                </Table.Cell>
                            </Link>
                            <Table.Cell>
                                <Button onClick={() => onDelete(data.id)}>
                                    Delete
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}