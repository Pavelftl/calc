import { useState } from 'react';
import { Button, Display, Main } from './Styles/Styles';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const calculateNumbers = () => {
		switch (operator) {
			case '+':
				setOperand1(parseInt(operand1) + parseInt(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(false);
				break;
			case '-':
				setOperand1(parseInt(operand1) - parseInt(operand2));
				setOperand2('');
				setOperator('');
				setIsResult(false);
				break;
			default:
				setIsResult(true);
				break;
		}
	};

	return (
		<Main>
			<h1>Калькулятор </h1>
			<Display className={isResult ? 'active' : ''}>
				<h2>{[operand1, operator, operand2]}</h2>
			</Display>
			<div className="number-pad">
				{NUMS.map((button) => (
					<Button
						onClick={(e) => {
							operator
								? setOperand2((prev) =>
										prev === '0' ? e.target.textContent : prev + e.target.textContent,
									)
								: setOperand1((prev) =>
										prev === '0' ? e.target.textContent : prev + e.target.textContent,
									);
						}}
						key={button}
					>
						{button}
					</Button>
				))}

				<Button onClick={() => operand1 && [setOperator('+'), setIsResult(false)]}>
					+
				</Button>
				<Button onClick={() => operand1 && [setOperator('-'), setIsResult(false)]}>
					-
				</Button>
				<Button onClick={() => operand2 && [calculateNumbers(), setIsResult(true)]}>
					=
				</Button>
				<Button
					onClick={() => [
						setOperator(''),
						setOperand1(''),
						setOperand2(''),
						setIsResult(false),
					]}
				>
					C
				</Button>
			</div>
		</Main>
	);
};
