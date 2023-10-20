import React, { PropsWithChildren } from "react"
import { Card } from "../../../components/card"
import AlbumContext, { Album } from "../../../context/album.context"
import { useCounterContext } from "../../../context/counter.context"

const AlbumCard: React.FC<PropsWithChildren<{ album: Album }>> = ({
  children,
  album,
}) => {
  const { addOne } = useCounterContext()

  const handleClick = () => {
    addOne({ title: album.title, image: album.folder, qty: 1 })
  }

  return (
    <Card>
      <AlbumContext.Provider value={{ album }}>
        <div className="flex flex-col items-center">
          {children}
          <div className="mt-2" />
          <button className="border-2 px-8 py-4" onClick={handleClick}>
            Add to cart
          </button>
        </div>
        <div className="mt-2" />
      </AlbumContext.Provider>
    </Card>
  )
}

export default AlbumCard
