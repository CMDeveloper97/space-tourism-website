import React from 'react'
import styled from 'styled-components'
import { theme } from '../../pages/_app';

type ComponentProps = {
	number: string;
	text: string;
}

const PageTitle = styled.h5`  
	text-align:center;

	@media (min-width: ${theme.breakpoints.md} ) {
		text-align: left;
		padding-left:5rem;
	} 

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
