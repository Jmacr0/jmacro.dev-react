import React, { useEffect, useState } from 'react'

export const Blinker = () => {
	const [blink, setBlink] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setBlink((blink ? false : true))
		}, 500);
		return () => {
			clearTimeout(timer)
		}
	}, [blink])

	return (
		<span
			style={{ visibility: (blink ? 'visible' : 'hidden') }}>|
		</span >
	)
}
