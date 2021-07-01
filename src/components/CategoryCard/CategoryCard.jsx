const CategoryCard = (props) => {
	const { category, image } = props
	return (
		<li>
			<img src={image} alt={category} />
			<span>{category}</span>
		</li>
	)
}

export default CategoryCard