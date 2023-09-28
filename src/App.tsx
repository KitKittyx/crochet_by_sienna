import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './components/NavBar';
import { Box, Container } from '@mui/material';
import HomePage from './components/HomePage';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#E0C2FF',
		},
	},
});

function App() {
	const [selectedPage, setSelectedPage] = useState<string>('home');

	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
			<Box>
				<RouterProvider router={router} />
			</Box>
		</ThemeProvider>
	);
}

export default App;
