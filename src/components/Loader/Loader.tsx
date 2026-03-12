export default function Loader() {
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {Array.from({ length: 12 }).map((_, i) => (
    <div
      key={i}
      className="animate-pulse bg-gray-800 h-64 rounded-lg"
    />
  ))}
</div>
}
