import { useAlbumContext } from "../../../context/album.context"

const AlbumFolder: React.FC = () => {
  const { album } = useAlbumContext()
  return <img src={album.folder} className="h-72 w-72" />
}

export default AlbumFolder
