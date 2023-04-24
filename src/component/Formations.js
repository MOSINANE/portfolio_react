import React from 'react'
import Card from 'react-bootstrap/Card'


function Formations() {
    return (
        
      <Card>
         <Card.Header as="h2">Ingénieur En Informatique Et Réseau</Card.Header>
        <Card.Body>
          <Card.Title>EMSI Marrakech</Card.Title>
          <Card.Text>option Miage</Card.Text>
          <Card.Text>2021-Acctuellement</Card.Text>
        </Card.Body> 
        <br></br>
        <Card.Header as="h2">Technicien spécialisé</Card.Header>
        <Card.Body>
          <Card.Title>ISGI Marrakech</Card.Title>
          <Card.Text>développement informatique</Card.Text>
          <Card.Text>2021</Card.Text>
        </Card.Body> 
        <br></br>
        <Card.Header as="h2">Baccalauréat</Card.Header>
        <Card.Body>
          <Card.Title>lycée SIDI ABDERRAHMANE</Card.Title>
          <Card.Text>Bac sciences physiques</Card.Text>
          <Card.Text>2018</Card.Text>
        </Card.Body>
        <br></br>
       
      </Card>
    );
  }

export default Formations