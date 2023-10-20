import { useAlbumContext } from "../../../context/album.context"

const AlbumTitle: React.FC = () => {
  const { album } = useAlbumContext()

  return <h3 className="text-2xl font-bold">{album.title}</h3>
}

export default AlbumTitle
