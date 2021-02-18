const errorMessage = ({errorMessage}) => {
	return (
		<div className="container mt-5">
			<div className="card p-4 text-center text-danger">
				<h3>{errorMessage} 😭</h3>
			</div>
		</div>
	);
}

export default errorMessage;
