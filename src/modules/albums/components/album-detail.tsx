import { useAlbumContext } from "../../../context/album.context"

const AlbumDetail: React.FC = () => {
  const { album } = useAlbumContext()
  return <p>{album.artists.join(", ")}</p>
}

export default AlbumDetail
