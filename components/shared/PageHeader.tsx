import React from 'react'
import styled from 'styled-components'

type ComponentProps = {
	number: string;
	text: string;
}

const PageTitle = styled.h5` 
	text-align: left;

	strong{ 
  		color: rgba(255, 255, 255, 0.25);
		margin-right: 1rem;
		font-weight: bold;
	} 
`;

export const PageHeader = ({number, text}: ComponentProps) => {
	return ( 
		<PageTitle><strong>0{number}</strong> {text}</PageTitle> 
	)
}
