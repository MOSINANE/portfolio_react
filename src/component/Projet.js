import Card from 'react-bootstrap/Card';

function Projet() {
  return (
    <Card>
        <Card.Header as="h2">Projet de fin de formation </Card.Header>
        <Card.Body>
            <Card.Title>Intelegent-Pointing</Card.Title>
            <Card.Text>
                Une application mobile qui gere l'absence des etudiants
            </Card.Text>
            <Card.Text>
                Java,Android Studio,PHP,MySql..
            </Card.Text>
            <Card.Text><strong>LinkedIn Link:</strong> <a href="https://github.com/MOSINANE/IP_FrontEnd">https://github.com/MOSINANE/IP_FrontEnd</a></Card.Text>
        </Card.Body>
        <br/>

        <Card.Header as="h2">Projet C++</Card.Header>
        <Card.Body>
            <Card.Title>NIX-HOME</Card.Title>
            <Card.Text>
                Une application qui consiste a mettre en place des réseaux reliant différents type d'équipements (électroménager, hifi, équipement domotique, etc) dans la maison.
            </Card.Text>
            <Card.Text>
                C++,MySql..
            </Card.Text>
            <Card.Text><strong>LinkedIn Link:</strong> <a href="https://github.com/NIX-CO/NIX-HOME">https://github.com/NIX-CO/NIX-HOME</a></Card.Text>
        </Card.Body>
        <br/>

        <Card.Header as="h2">Projet Java</Card.Header>
        <Card.Body>
            <Card.Title>NIX-GYM</Card.Title>
            <Card.Text>
                Solution desktop de gestion des adhérents qui aide les salles de sport à gérer les contrats, l'enregistrement des clients et la planification des événements.
            </Card.Text>
            <Card.Text>
                Java,JavaFx,SceneBuilder,MySql..
            </Card.Text>
            <Card.Text><strong>LinkedIn Link:</strong> <a href="https://github.com/NIX-CO/NIX-GYM">https://github.com/NIX-CO/NIX-GYM</a></Card.Text>
        </Card.Body>
    </Card>
    
  );
}

export default Projet