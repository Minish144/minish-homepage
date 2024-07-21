import { Box } from "@chakra-ui/react";
import TitledLayout from "./layouts/titled";

function Bio() {
  return (
    <TitledLayout title="Bio">
      <Box className="mb-3 flex">
        <Box className="mr-5 font-bold">2001</Box>
        <Box>Born in Moscow, Russia</Box>
      </Box>

      <Box className="mb-3 flex">
        <Box className="mr-4">
          <Box className="font-bold">2021-</Box>
          <Box className="font-bold">2022</Box>
        </Box>
        <Box>Worked at Qoollo</Box>
      </Box>

      <Box className="mb-3 flex">
        <Box className="mr-4">
          <Box className="font-bold">2022-</Box>
          <Box className="font-bold">now</Box>
        </Box>
        <Box>Working at Samokat.tech</Box>
      </Box>

      <Box className="flex">
        <Box className="mr-5 font-bold">2023</Box>
        <Box>
          Completed a bachelor&apos;s program in applied informatics at the
          Bauman Moscow State Technical University
        </Box>
      </Box>
    </TitledLayout>
  );
}

export default Bio;
