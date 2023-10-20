import { useAlbumContext } from "../../../context/album.context"

const AlbumFolder: React.FC = () => {
  const { album } = useAlbumContext()
  return <img src={album.folder} />
}

export default AlbumFolder
