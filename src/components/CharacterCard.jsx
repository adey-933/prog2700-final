import { Card, Col } from "react-bootstrap";

export default function CharacterCard({ character }) {
  return (
    <Col>
      <Card className="h-100 shadow-sm">
        <Card.Img variant="top" src={character.image} alt={character.name} />
        <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text><strong>Status:</strong> {character.status}</Card.Text>
          <Card.Text><strong>Species:</strong> {character.species}</Card.Text>
          <Card.Text><strong>Gender:</strong> {character.gender}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}