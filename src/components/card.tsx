export const Card: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="border-2 shadow-sm rounded inline-block">{children}</div>
  )
}
