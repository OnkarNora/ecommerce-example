import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Products({ item, setData }) {

    const sortArray = type => {
        const types = {
            id: 'id',
            price: 'price',
        };
        const sortProperty = types[type];
        const sorted = [...item].sort((a, b) => b[sortProperty] - a[sortProperty]);
        console.log(sorted);
        setData(sorted);
    };

    return (
        <>
            <Container>
                    <select className="justify-content-md-center btn btn-secondary dropdown-toggle mx-5 " onChange={(e) => sortArray(e.target.value)} >
                        <option className='' value="Sort">Sort</option>
                        <option value="id">Newest First</option>
                        <option value="price">Price</option>
                    </select>
                <Row className="justify-content-md-center mt-5 " >

                    {
                        item.map((val) => {
                            return (
                                <Card key={val.id} className='mt-3 mx-3' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={val.image} width="286" height="300" />
                                    <Card.Body>
                                        <Card.Title>{val.title}</Card.Title>
                                        <Card.Text>

                                        </Card.Text>
                                        <span className="px-4 py-3 badge bg-dark">$ {val.price}</span><br />

                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </Row>
            </Container>

        </>
    );
}

export default Products