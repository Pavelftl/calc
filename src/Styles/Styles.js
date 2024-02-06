import styled from 'styled-components';

export const Main = styled.div`
	display: grid;
	justify-items: center;

	h1 {
		font-size: 4rem;
		margin: 50px 0;
	}

	.number-pad {
		margin-top: 50px;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(4, 1fr);

		width: 450px;
	}
`;

export const Display = styled.div`
	border: 4px solid white;
	margin: 60px;
	width: 700px;
	height: 100px;
	border-radius: 20px;
	background: #1b4f45;

	&.active {
		border: 4px solid #b11515;

		color: rgb(231, 16, 27);
	}

	h2 {
		font-weight: 700;
		font-size: 3rem;
		text-align: right;

		padding: 15px 20px;
	}
	p {
		margin: 5px 0;
	}
`;

export const Button = styled.button`
	height: 80px;
	border-radius: 20px;
	border: 3px solid white;
	font-size: 2rem;
	color: white;

	background: #1b4f45;

	&:hover {
		background-color: #2c974b;
	}
`;
