import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const ProgressBar = () => {
	const answers = useSelector((state) => state.quiz.answers);
	const questions = useSelector((state) => state.quiz.questions);
	const ProgressBarWrapper = styled.div`
		width: 100%;
		height: 10px;
		display: flex;
		position: absolute;
		z-index: 1;
	`;
	const Progress = styled.div`
		width: ${100 / questions.length}%;
		height: 100%;
		background-color: rgb(232, 178, 70);
	`;

	return (
		<ProgressBarWrapper>
			{answers.map((answer) => (
				<Progress key={answer.questionId} />
			))}
		</ProgressBarWrapper>
	);
};
