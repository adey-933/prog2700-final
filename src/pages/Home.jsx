import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="py-4">
      <h2>Welcome</h2>
      <p>This app uses the Rick and Morty API to display character data and images.</p>
      <p>Use the navigation bar to open the Characters page and search for characters.</p>
    </Container>
  );
}