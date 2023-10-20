import * as React from "react"

export interface Album {
  folder: string
  title: string
  artists: string[]
  year: number
}

const AlbumContext = React.createContext<{ album: Album } | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAlbumContext() {
  const context = React.useContext(AlbumContext)
  if (!context) {
    throw new Error("AlbumContext must be used inside AlbumCard")
  }

  return context
}

export default AlbumContext
