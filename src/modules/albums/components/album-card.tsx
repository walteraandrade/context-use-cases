import React, { PropsWithChildren } from "react"
import { Card } from "../../../components/card"
import AlbumContext, { Album } from "../../../context/album.context"

const AlbumCard: React.FC<PropsWithChildren<{ album: Album }>> = ({
  children,
  album,
}) => {
  return (
    <Card>
      <AlbumContext.Provider value={{ album }}>
        {children}
      </AlbumContext.Provider>
    </Card>
  )
}

export default AlbumCard
