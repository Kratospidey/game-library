// import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";

import Button from "./components/Button";

function App() {
	// let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

	// const handleSelectItem = (item: string) => {
	// 	console.log(item);
	// };

	return (
		<div>
			{/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} /> */}
			{/* <Alert>
				Hello <span>World!</span>
			</Alert> */}
			<Button
				onClick={() => {
					console.log("Clicked");
				}}
			>
				Hello
			</Button>
		</div>
	);
}

export default App;
