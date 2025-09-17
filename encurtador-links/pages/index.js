export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Encurtador de Links Grátis</h1>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          placeholder="Cole seu link aqui"
          className="border p-2 rounded w-64"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Encurtar
        </button>
      </div>

      <div className="mt-4 p-2 bg-white rounded shadow w-64 text-center">
        {/* Aqui o link curto vai aparecer */}
      </div>
    </div>
  )
}
