import { Image } from "@chakra-ui/next-js";

function Dog() {
  return (
    <Image
      src="/images/dog.svg"
      boxSize="200px"
      alt="A cute dog"
      loading="lazy"
      width={128}
      height={128}
      className="m-28"
    />
  );
}

export default Dog;
