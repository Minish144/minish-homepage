import { Container, Heading } from "@chakra-ui/react";

function TitledLayout({ children, title }) {
  return (
    <Container className="mb-4 mt-2">
      <Heading as="h2" size="md" className="mb-4 underline-gray-custom-thick">
        {title}
      </Heading>
      {children}
    </Container>
  );
}

export default TitledLayout;
