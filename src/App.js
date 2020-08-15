import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import Quote from './components/ui/Quote';

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [query, setQuery] = useState('');
	//const [quote, setQuote] = useState([]);

	useEffect(() => {
		const fetchItems = async () => {
			const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
			//console.log(result.data);
			setItems(result.data);
			setIsLoading(false);
		};
		fetchItems();
	}, [query]);
	// useEffect(() => {
	// 	const fetchQuote = async () => {
	// 		const ans = await axios(`https://www.breakingbadapi.com/api/quote/random`);
	// 		//console.log(ans.data);
	// 		setQuote(ans.data);
	// 	};
	// 	fetchQuote();
	// },[]);
	return (
		<div className="container">
			<Header />
			<Search getQuery={(q) => setQuery(q)} />
			<CharacterGrid isLoading={isLoading} items={items} />
		</div>
	);
};

export default App;
