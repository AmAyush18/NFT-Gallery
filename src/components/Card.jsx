
function Card({ nft }) {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-slate-900">
      <img src={nft.image_url} alt={nft.name} className="w-full" />
      <div className="mt-2">
        <p className="text-lg font-bold text-stone-200">{nft.name}</p>
        <p className="text-sm text-gray-100">{nft.description}</p>
      </div>
    </div>
  )
}

export default Card