import { useEffect, useState } from "react";
import axios from "axios";
import { Alert, Container, Form, Row, Spinner } from "react-bootstrap";
import CharacterCard from "../components/CharacterCard";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load character data.");
        setLoading(false);
      });
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-4">
      <h2 className="mb-3">Characters</h2>

      <Form className="mb-4">
        <Form.Group>
          <Form.Label>Search Characters</Form.Label>
          <Form.Control
            type="text"
            placeholder="Type a character name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Form.Group>
      </Form>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" />
          <p className="mt-2">Loading characters...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && filteredCharacters.length === 0 && (
        <Alert variant="warning">No characters found.</Alert>
      )}

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Row>
    </Container>
  );
}