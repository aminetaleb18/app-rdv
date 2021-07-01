import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import CategoryCard from '../CategoryCard/CategoryCard'
import ProductCard from '../ProductCard/ProductCard'

const Home = () => {
	const [products, setProducts] = useState([])
	const [categories, setCategories] = useState([])


	useEffect(() => {

		fetch('http://localhost:3000/retroviseur', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/capot', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/roue', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/parechoc', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/siege', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/potechappement', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/suspension', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/phare', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/volant', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/aile', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/boitevitesse', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
        fetch('http://localhost:3000/porte', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setProducts(data)
			})
			.catch(error => {
				console.error(error)
			})
		fetch('http://localhost:3000/categories', {method: 'GET'})
			.then(response => response.json())
			.then(data => {
				setCategories(data)
			})
			.catch(error => {
				console.error(error)
			})
	}, [])
	

	return (
		<div className='app'>
			{/* {isOpen && <Navbar />} */}
			
			<main >
				
				<section>
					<Swiper
						spaceBetween={30}
						
						slidesPerView={'auto'}
					>
						{
							products.map(product => (
								<SwiperSlide key={product.id}>
									<ProductCard
										name={product.name}
										image={product.image}
										price={product.price}
									/>
								</SwiperSlide>
							))
						}
					
					</Swiper>
				</section>
				<section>
					<ul className='flex flex-wrap justify-around'>
						{categories.map(category => (
							<CategoryCard
								key={category.id}
								category={category.name}
								image={category.image}
							/>
						))}
					</ul>
				</section>
			</main>
		</div>
	)
}

export default Home
