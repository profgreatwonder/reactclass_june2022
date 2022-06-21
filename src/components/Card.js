const BankCard = (props) => {
	const { image, bankName, branch, streetNum, details } = props;
	return (
		<div>
			<div className="card mt-4">
				<img src={image} className="card-img-top" alt="..." />
				<div className="card-body">
					<h2 className="card-text">{bankName}</h2>
					<p className="card-text">
						{streetNum}
						{branch}
					</p>
					<p className="card-text">{details}</p>
				</div>
			</div>
		</div>
	);
};

export default BankCard;
