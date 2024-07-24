import { Image, Link } from "@chakra-ui/next-js";

function Gopher() {
  return (
    <Link href="https://go.dev/" isExternal={true}>
      <Image
        src="/images/gopher.gif"
        alt="A cute dog"
        loading="lazy"
        width={50}
        height={50}
        className="mt-20 mr-72 animate-move"
      />
    </Link>
  );
}

export default Gopher;
