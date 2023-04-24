import React from 'react'
import Card from 'react-bootstrap/Card'


    function Expérience() {
        return (
          <Card>
            <Card.Header as="h2">Stage Fin d'année 2022</Card.Header>
            <Card.Body>
              <Card.Title>Green-Com</Card.Title>
              <Card.Text>développement d'un logiciel scrapping</Card.Text>
              <Card.Text>nodejs, axios....</Card.Text>
            </Card.Body>
            <br/><br/>
              <Card.Header as="h2">Stage Fin de formation 2021</Card.Header>
              <Card.Body>
                  <Card.Title>Faculté de Médecine et de Pharmacie de Marrakech</Card.Title>
                  <Card.Text>développement d'une application mobile qui gere l'absence des etudiants</Card.Text>
                  <Card.Text>Java, Android....</Card.Text>
              </Card.Body>
          </Card>
        );
      }


export default Expérience