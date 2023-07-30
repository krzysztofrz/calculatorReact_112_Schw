import { useState } from "react";

const initialUserInput = {
	"current-savings": 10000,
	"yearly-contribution": 1200,
	"expected-return": 7, // 3 z tych elementow sa w "" a czwarty nie tylko dlatego ze nie mozemy uzywac "-" wiec jak myslnik jest w nazwie to musi byc w cudzyslowiu
	duration: 10,
};
///  inital wartosci sa wyniesione do zewnetrznej zmiennej, bo chcemy je uzyc dwa razy, raz w useState, a raz w resecie zeby przywrocic wartosci domyslne
/// dodatkowo to jest calkowicie poza naszym komonentem tj. nad Form bo nie potrzebujemy tego za kazdym renderowaniem

function Form() {
	const [userInput, setUserInput] = useState(initialUserInput);

	const resetHandler = () => {
		console.log("RESET");
		setUserInput(initialUserInput);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("SUBMIT");
	};

	const inputHandler = (input, value) => {
		console.log(input, value);
		setUserInput((prevInput) => {
			return {
				...prevInput, // ... cosTam oznacza kopie tego
				[input]: value, // a tu nadpisujemy wartosc inputa na value jakie bedzie w input
			};
		});
	};

	return (
		<form className="form" onSubmit={submitHandler}>
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						onChange={(e) => {
							inputHandler("current-savings", e.target.value);
						}}
						value={userInput["current-savings"]}
						type="number"
						id="current-savings"
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						onChange={(e) => {
							inputHandler("yearly-contribution", e.target.value);
						}}
						value={userInput["yearly-contribution"]}
						type="number"
						id="yearly-contribution"
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						onChange={(e) => {
							inputHandler("expected-return", e.target.value);
						}}
						value={userInput["expected-return"]}
						type="number"
						id="expected-return"
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						onChange={(e) => {
							inputHandler("duration", e.target.value);
						}}
						value={userInput["duration"]}
						type="number"
						id="duration"
					/>
				</p>
			</div>
			<p className="actions">
				<button onClick={resetHandler} type="reset" className="buttonAlt">
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	);
}

export default Form;

// /////
// /////
// /////////// przyklad ponizje jak uzywac useState bardzo prosty, pojedyncza zmiana stanu

// import { useState } from "react"
// import "./styles.css";

// export default function App() {

// const [name, setName] = useState("krzysiek")

//   function counterHandler(){
//     setName( "franek")
//   }

//   return (
//     <div className="App">
//       <h2>to jest moje imie {name} w reakt</h2>
//       <button onClick={counterHandler}>counter</button>
//     </div>
//   );
// }

// ///////// drugi przyklad jak chemy zmieniac wartosc i polegac na ostatniej, np dodawanie, jak dodamy do 1 1 to juz nowa wartosc nie jest ta poczatkowa czyli 1 tylko 2

// import { useState } from "react";

// function App() {
// 	const [num, setNum] = useState(1);
// 	//// zmienna num zawiera poczatkowy stan czyli 1 bo tak podalismy w useState(1)
// 	//// setNum to funkcja ktora zmienia stan

// 	function counterHandler() {
// 		setNum((prevNum) => prevNum + 1);
// 	}
// 	//// tu powyzej w funkcji musimy uzyc prev i do prev dodac np 1 bo inaczej caly czas by nam dodawalo 1 do 1 i  za kazdym kliknieciem stan poczatkowy bybly 1, wogule by sie to nie sumowalo

// 	return (
// 		<div className="App">
// 			<h2>to jest moj numer {num} w reakt</h2>
// 			<button onClick={counterHandler}>counter</button>
// 		</div>
// 	);
// }
