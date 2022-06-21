import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import bankImg from "./images/barter.jpg";
import bankImg1 from "./images/carbon.png";
import bankImg2 from "./images/kuda.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import { bankDBs } from "./DB";
import BankCard from "./components/Card";
import bankDBs from "./DB.json";
// import { BankCard } from "./DB";
// import bankDBs from "./DB";

const SayHi = () => {
	return (
		<section>
			<h1 style={styledObj}>My first component</h1>
			<GoodMorning />
			{/* <CardComponent /> */}
			<CardMultiply />
			<SingleBank />
		</section>
	);
};

const styledObj = {
	fontSize: "3rem",
	color: "red",
};

let uName = "Johnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn";
let age = 50;
const GoodMorning = () => {
	return (
		<>
			<h2 className="good">My second component</h2>
			<p>
				{uName} is {age} years old
			</p>
			<img src={bankImg} alt={bankImg} />
		</>
	);
};

const CardComponent = (props) => {
	const { imgs, branch, streetNum, children } = props;
	// console.log(props);
	return (
		<section>
			<div className="card mt-4">
				<img src={imgs} className="card-img-top" alt="..." />
				<div className="card-body">
					<p className="card-text text-center">{branch}</p>
					<p className="card-text">{streetNum}</p>
					<p>{children}</p>
				</div>
			</div>
		</section>
	);
};

const CardMultiply = () => {
	return (
		<section>
			<div className="row">
				<div className="col">
					<CardComponent imgs={bankImg} branch="abuja" streetNum={4} />
				</div>
				<div className="col">
					<CardComponent imgs={bankImg1} branch="Lagos" streetNum={4}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						Perferendis, facilis.
					</CardComponent>
				</div>
				<div className="col">
					<CardComponent imgs={bankImg2} branch="PH" streetNum={4} />
				</div>
				<div className="col">
					<CardComponent streetNum={4} />
				</div>
			</div>
		</section>
	);
};

// const bankDBs = [
// 	{
// 		image: bankImg,
// 		bankName: "kuda",
// 		branch: "ikeja",
// 		streetNum: 30,
// 		details:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nisi?",
// 	},

// 	{
// 		image: bankImg1,
// 		bankName: "barter",
// 		branch: "mile 12",
// 		streetNum: 28,
// 		details:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nisi?",
// 	},

// 	{
// 		image: bankImg2,
// 		bankName: "carbon",
// 		branch: "mile 12",
// 		streetNum: 28,
// 		details:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, nisi?",
// 	},
// ];

// const BankCard = (props) => {
// 	const { image, bankName, branch, streetNum, details } = props;
// 	return (
// 		<div>
// 			<div className="card mt-4">
// 				<img src={image} className="card-img-top" alt="..." />
// 				<div className="card-body">
// 					<h2 className="card-text">{bankName}</h2>
// 					<p className="card-text">
// 						{streetNum}
// 						{branch}
// 					</p>
// 					<p className="card-text">{details}</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const SingleBank = () => {
	return (
		<div className="row">
			{bankDBs.map((bankDB) => {
				return (
					<div className="col-md-4 col-sm-12">
						<BankCard {...bankDB}></BankCard>
					</div>
				);
			})}
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<SayHi />);
