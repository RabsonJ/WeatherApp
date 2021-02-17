const Spinner = ({ message }) => {
	return (
		<button className="btn btn-primary w-75" type="button" disabled>
			<span
				className="spinner-border spinner-border-sm mr-3"
				role="status"
				aria-hidden="true"
			/>
			{message}
		</button>
	);
};

Spinner.defaultProps = {
	message: 'Loading...',
};

export default Spinner;
