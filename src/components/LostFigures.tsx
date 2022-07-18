import React, { FC } from "react";
import { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
	title: string;
	figures: Figure[];
}

const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
	return (
		<div className='lost-figures'>
			<h3>{title}</h3>
			<ul>
				{figures.map((figure, index) => (
					<li key={index + figure.name + figure.color}>
						{figure.logo && <img src={figure.logo} alt={figure.name}></img>}
					</li>
				))}
			</ul>
		</div>
	);
};

export default LostFigures;
