
function Card({ nft }) {
  return (
    <div className="p-4 border rounded-lg">
      <img src={nft.image_url} alt={nft.name} className="w-full" />
      <div className="mt-2">
        <p className="text-lg font-bold">{nft.name}</p>
        <p className="text-sm text-gray-500">{nft.description}</p>
      </div>
    </div>
  )
}

export default Card