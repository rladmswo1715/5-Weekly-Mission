import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ISnsLink {
  url: string;
  img: StaticImageData;
  imgAlt: string;
}

const SnsLink = ({ url, img, imgAlt }: ISnsLink) => {
  return (
    <li>
      <Link href={url} target="_blank" rel="noreferrer">
        <Image src={img} alt={imgAlt} />
      </Link>
    </li>
  );
};

export default SnsLink;
