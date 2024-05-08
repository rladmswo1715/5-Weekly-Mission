interface ISnsLink {
  url: string;
  img: string;
  imgAlt: string;
}

const SnsLink = ({ url, img, imgAlt }: ISnsLink) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img src={img} alt={imgAlt} />
      </a>
    </li>
  );
};

export default SnsLink;
