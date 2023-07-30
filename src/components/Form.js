function Form() {
	const resetHandler = () => {
		console.log("RESET");
	};

	const submitHandler = (e) => {
		e.preventDefault();
		console.log("SUBMIT");
	};

	const inputHandler = (input, value) => {
		console.log(input, value);
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
