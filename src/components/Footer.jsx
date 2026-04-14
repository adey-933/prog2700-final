import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-4 py-3">
      <Container className="text-center">
        <p className="mb-1">PROG2700 Final Project</p>
        <p className="mb-0">Built with React, Axios, React Router, and Bootstrap</p>
      </Container>
    </footer>
  );
}