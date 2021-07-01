const ProductCard = (props) => {
	const { image, name , price} = props
	return (
		<article >
			<div>
				<img src={image}/>
			</div>
			<div >
				<h3 >{name}</h3>
				
				<div>
					<span>{price}</span>
					<button>Ajouter</button>
				</div>
			</div>
		</article>
	)
}

export default ProductCard