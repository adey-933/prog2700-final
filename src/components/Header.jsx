import { Container } from "react-bootstrap";

export default function Header() {
  return (
    <header className="bg-dark text-white py-4">
      <Container>
        <h1 className="mb-1">Rick and Morty Character Browser</h1>
        <p className="mb-0">
          Final project for PROG2700 - API, routing, search, and Bootstrap
        </p>
      </Container>
    </header>
  );
}