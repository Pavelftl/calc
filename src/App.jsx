import { useState } from 'react';
import { Button, Display, Main } from './Styles/Styles';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '=', 'C'];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handleClick = (value) => {
		if (value === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			setIsResult(false);
		} else if (value === '+' || value === '-') {
			operand1 && setOperator(value);
			setIsResult(false);
		} else if (value === '=') {
			if (operator === '+') {
				operand2 && setOperand1(parseInt(operand1) + parseInt(operand2));
			} else if (operator === '-') {
				operand2 && setOperand1(parseInt(operand1) - parseInt(operand2));
			}
			setOperand2('');
			setOperator('');
			operand2 && setIsResult(true);
		} else {
			operator
				? setOperand2((prev) => (prev === '0' ? value : prev + value))
				: setOperand1((prev) => (prev === '0' ? value : prev + value));

			setIsResult(false);
		}
	};

	return (
		<Main>
			<h1>Калькулятор</h1>

			<Display className={isResult ? 'active' : ''}>
				<h2>{[operand1, operator, operand2]}</h2>
			</Display>
			<div className="number-pad">
				{NUMS.map((button) => (
					<Button
						key={button}
						onClick={() => {
							handleClick(button);
						}}
					>
						{button}
					</Button>
				))}
			</div>
		</Main>
	);
};
