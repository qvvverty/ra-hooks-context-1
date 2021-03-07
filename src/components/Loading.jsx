export default function Loading({ isLoading }) {
  return (
    <div className={isLoading ? "loader-container" : "hidden"}>
      <span className="loader" />
    </div>
  )
}
