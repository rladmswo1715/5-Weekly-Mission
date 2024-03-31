const SnsLink = ({url, img, imgAlt}) => {
    return (
        <li>
            <a href={url} target="_blank">
                <img src={img} alt={imgAlt} />
            </a>
        </li>
    )
}

export default SnsLink;