import './index.css'

const ImageList = props => {
  const {imageDetails, checkingThumbnail} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const onClickThumbnail = () => {
    checkingThumbnail(imageUrl)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onClickThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ImageList
