import { Image, Link } from "@chakra-ui/next-js";

function Gopher() {
  return (
    <Link href="https://go.dev/" isExternal={true}>
      <Image
        src="/images/gopher.gif"
        alt="Cute jumping gohper"
        unoptimized={true}
        loading="lazy"
        width={50}
        height={50}
        className="mt-20 mr-72 animate-jump-inf"
      />
    </Link>
  );
}

export default Gopher;
