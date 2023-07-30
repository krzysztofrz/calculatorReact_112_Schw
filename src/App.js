import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
	const [userInput, setUserInput] = useState(null);
	const calculateHandler = (userInput) => {
		setUserInput(userInput);
	};
	const yearlyData = []; // per-year results

	if (userInput) {
		let currentSavings = +userInput["current-savings"];
		const yearlyContribution = +userInput["yearly-contribution"];
		const expectedReturn = +userInput["expected-return"] / 100;
		const duration = +userInput["duration"];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
			});
		}
	}

	return (
		<div>
			<Header />
			<Form onCalculate={calculateHandler} />{" "}
			{/* onCalculate pochodzi z Form.js zzs calculateHander bylo wczesniej w App na gorze
			calculateHandler oczekuje userInput tak jak to mamy w App na gorze */}
			<Table />
			{/* Todo: Show below table conditionally (only once result data is available) */}
			{/* Show fallback text if no data is available */}
		</div>
	);
}

export default App;
