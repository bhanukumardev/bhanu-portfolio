import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import bhanuFavicon from "../assets/bhanu-animated.gif";

// Dynamically set favicon to the local animated profile asset
const setFavicon = (href: string) => {
	let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
	if (!link) {
		link = document.createElement('link');
		link.rel = 'icon';
		document.getElementsByTagName('head')[0].appendChild(link);
	}
	link.href = href;
};

setFavicon(bhanuFavicon as string);
createRoot(document.getElementById("root")!).render(<App />);

// Register Service Worker for PWA functionality
if ('serviceWorker' in navigator && import.meta.env.PROD) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/bhanu-portfolio/service-worker.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}
