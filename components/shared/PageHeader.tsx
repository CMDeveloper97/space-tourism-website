import React from 'react'

type ComponentProps = {
	number: string;
	text: string;
}

export const PageHeader = ({number, text}: ComponentProps) => {
	return ( 
		<h5 className="page-header"><strong>0{number}</strong> {text}</h5> 
	)
}
