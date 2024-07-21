import { Image } from "@chakra-ui/next-js";
import { Container, Heading, Box } from "@chakra-ui/react";

function Personal() {
  return (
    <Container className="flex flex-col md:flex-row items-center md:items-start justify-between mb-5">
      <Box className="mb-5 md:mb-0">
        <Heading className="text-center md:text-left">Nikolay Varlamov</Heading>
        <p>Software engineer, hackathon participant</p>
      </Box>
      <Box
        borderColor="whiteAlpha.800"
        borderWidth={2}
        borderStyle="solid"
        w="100px"
        h="100px"
        display="inline-block"
        borderRadius="full"
        overflow="hidden"
      >
        <Image
          src="/images/myphoto.jpg"
          alt="Profile image"
          loading="lazy"
          width={100}
          height={100}
        />
      </Box>
    </Container>
  );
}

export default Personal;
