import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-4">
      <h2>About This Project</h2>
      <p>This project was created for the PROG2700 final project.</p>
      <p>
        It uses Axios to fetch data from an API, React Router for navigation,
        React Bootstrap for styling, and a search feature to filter characters.
      </p>
    </Container>
  );
}