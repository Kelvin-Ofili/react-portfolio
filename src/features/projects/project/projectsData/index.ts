import {
	Tenzi,
	RestaurantRecipe,
	MemesGenerator,
	MovieFight,
	MovieSearch,
	ReduxEcommerce,
	MusicPlayer,
	Ecomms,
	CarQuery,
} from "assets";

const projects = [
	{
		id: 1,
		name: "Car-Genie",
		description:
			"An AI-powered car recommendation chatbot that helps users find their perfect vehicle match through intelligent conversation...",
		tools: ["ReactJS", "TypeScript", "Gemini AI", "Tailwind CSS", "NodeJS", "Express API"],
		projectLink: "https://car-genie-frontend.vercel.app/",
		githubLink: "https://github.com/Kelvin-Ofili/car-genie-frontend.git",
		image: CarQuery,
	},
	{
		id: 2,
		name: "Music-Player",
		description:
			"A music player web-application aimed at providing users snippets to their favorite songs...",
		tools: ["ReactJS", "Redux", "Tailwind", "JavaScript"],
		projectLink: "https://music-player-ofili.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/music-player-react.git",
		image: MusicPlayer,
	},
	{
		id: 3,
		name: "Tenzi",
		description:
			"This is the popular family game with 10 players holding 10 dice to get all die to show the same number...",
		tools: ["ReactJS", "CSS", "HTML"],
		projectLink: "https://kelvins-tenzi-game.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/Tenzi-Game.git",
		image: Tenzi,
	},
	{
		id: 4,
		name: "Memes-Template",
		description:
			"I built this web application to make it possible for users to flexibly generate their very own memes",
		tools: ["ReactJS", "CSS", "HTML"],
		projectLink: "https://memes-generator-ofili.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/Memes-Template.git",
		image: MemesGenerator,
	},
	{
		id: 5,
		name: "Movie-Search",
		description:
			"I utilised the imdbAPI in order to create a User Interface that allows users to search for movie and see results depending on their searches. I created this using ReactJS",
		tools: ["ReactJS", "ImdbApi"],
		projectLink: "https://react-movie-searches.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/movie-search.git",
		image: MovieSearch,
	},
	{
		id: 6,
		name: " Movie-Fight",
		description:
			"This is a fun Web App that I created using the Express Framework and the an API...",
		tools: ["JavaScript", "CSS", "OMDB-API"],
		projectLink: "https://kelvin-ofili.github.io/Movie-fight/",
		githubLink: "https://github.com/Kelvin-Ofili/Movie-fight.git",
		image: MovieFight,
	},
	{
		id: 7,
		name: "Restaurant-Recipes",
		description:
			"This is a web app built with the spoonacular api aimed at providing users with important information about numerous dishes",
		tools: ["ReactJS", "Spoonacular API", "CSS", "JSX"],
		projectLink: "https://restaurant-recipes.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/restaurant-recipes.git",
		image: RestaurantRecipe,
	},
	{
		id: 8,
		name: "Redux-Ecommerce",
		description:
			"This is an E-commerce web application built with Redux and supported with a firebase backend",
		tools: ["ReactJS", "Redux", "Material-ui", "Firebase"],
		projectLink: "https://redux-ecommerce-ofili.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/redux-ecommerce.git",
		image: ReduxEcommerce,
	},
	{
		id: 9,
		name: "Ecomms-Website",
		description:
			"This is an E-commerce Web App where users can potentially buy different products...",
		tools: ["NodeJS", "Express API", "CSS"],
		projectLink: "https://github.com/Kelvin-Ofili/Ecomm-Website.git",
		githubLink: "https://github.com/Kelvin-Ofili/Ecomm-Website.git",
		image: Ecomms,
	},
];

export { projects };
