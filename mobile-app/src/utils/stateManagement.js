import { useState, useEffect } from 'react';

export const useDeviceState = (initialState) => {
	const [state, setState] = useState(initialState);

	const updateState = (deviceId, newState) => {
		setState((prevState) =>
			prevState.map((device) =>
			device.id === deviceId ? { ...device, ...newState } : device
			)
		);
	};

	return [state, updateState];
};
