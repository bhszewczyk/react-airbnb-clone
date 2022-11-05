import './App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import data from '../data';

function App() {
	const cards = data.map((item) => {
		return (
			<Card
				key={item.id}
				img={`public/images/${item.coverImg}`}
				rating={item.stats.rating}
				reviewCount={item.stats.reviewCount}
				location={item.location}
				title={item.title}
				price={item.price}
				tag={item.tag}
			/>
		);
	});

	return (
		<div className='App'>
			<Navbar />
			<Hero />
			<div className='wrapper'>{cards}</div>
		</div>
	);
}

export default App;
