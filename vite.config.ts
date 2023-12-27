import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import Icons from "unplugin-icons/vite";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte",
		}),
	],
	optimizeDeps: {
		include: ["browser-image-resizer"],
	},
	publicDir: 'public', // Add this line to specify the public directory
});
