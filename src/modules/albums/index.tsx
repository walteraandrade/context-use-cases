import * as React from "react"
import { Album } from "../../context/album.context"
import AlbumCard from "./components/album-card"
import AlbumTitle from "./components/album-title"
import AlbumFolder from "./components/album-folder"
import AlbumDetail from "./components/album-detail"

const Albums: React.FC = () => {
  const [albums, setAlbums] = React.useState<{ albums: Album[] } | null>()

  const getAlbums = React.useCallback(async () => {
    const data = await fetch("http://localhost:8080/albums.json")
    const albums = await data.json()
    setAlbums(albums)
  }, [])

  React.useEffect(() => {
    getAlbums()
  }, [getAlbums])

  return (
    <div className="flex flex-wrap gap-4 py-12">
      {albums?.albums?.length
        ? albums.albums.map((album) => (
            <AlbumCard key={album.title} album={album}>
              <AlbumFolder />
              <AlbumTitle />
              <AlbumDetail />
            </AlbumCard>
          ))
        : "Loading..."}
    </div>
  )
}

export default Albums
