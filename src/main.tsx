import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import bhanuFavicon from "../assets/bhanu-animated.gif";
// AOS (Animate On Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

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

// Initialize AOS for scroll animations
// `once: true` ensures animation runs only once per element; tweak duration as desired
// Replay animations every time an element enters the viewport while scrolling:
// - once: false  -> allow repeated animations each time element scrolls into view
// - mirror: true  -> animate elements both when scrolling down and when scrolling back up
AOS.init({ once: false, mirror: true, duration: 800 });

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
