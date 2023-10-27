import { Route, Routes } from "react-router-dom";
import SignInForm from "./_auth/forms/signin-form";
import Home from "./_root/pages/home";
import SignUpForm from "./_auth/forms/signup-form";
import AuthLayout from "./_auth/auth-layout";
import RootLayout from "./_root/root-layout";

const App = () => {
	return (
		<main className="flex h-screen">
			<Routes>
				{/* public routes */}

				<Route element={<AuthLayout />}>
					<Route path="/signin-form" element={<SignInForm />} />
					<Route path="/signup-form" element={<SignUpForm />} />
				</Route>

				{/* private routes */}
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</main>
	);
};

export default App;
