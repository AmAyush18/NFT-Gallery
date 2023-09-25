import Card from './Card'

function Gallery({nfts}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      { nfts && nfts.map((nft) => (
          <Card key={nft.identifier} nft={nft} />
      ))}
    </div>
  )
}

export default Gallery