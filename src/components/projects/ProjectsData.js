import restaurantRecipe from "../../images/restaurant-recipe.png";
import tenzi from "../../images/Tenzi.png";
import memes from "../../images/memes-generator.png";
import movieFight from "../../images/movie-fight.png";
import ecomms from "../../images/ecomms.png";
import musicPlayer from "../../images/musicPlayer.png"
import reduxEcommerce from "../../images/reduxEcommerce.png"

const projects = [
	{
		id: 1,
		name: "Music-Player",
		description:
			"A music player web-application aimed at providing users snippets to their favorite songs...",
		tools: ["ReactJS", "Redux", "Tailwind", "JavaScript"],
		projectLink: "https://music-player-ofili.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/music-player-react.git",
		image: musicPlayer,
		tap: false,
	},
	{
		id: 2,
		name: "Tenzi",
		description:
			"This is the popular family game with 10 players holding 10 dice to get all die to show the same number...",
		tools: ["ReactJS", "CSS", "HTML"],
		projectLink: "https://kelvins-tenzi-game.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/Tenzi-Game.git",
		image: tenzi,
		tap: false,
	},
	{
		id: 3,
		name: "Memes-Template",
		description:
			"I built this web application to make it possible for users to flexibly generate their very own memes",
		tools: ["ReactJS", "CSS", "HTML"],
		projectLink: "https://memes-generator-ofili.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/Memes-Template.git",
		image: memes,
		tap: false,
	},
	{
		id: 4,
		name: " Movie-Fight",
		description:
			"This is a fun Web App that I created using the Express Framework and the an API...",
		tools: ["JavaScript", "CSS", "OMDB-API"],
		projectLink: "https://kelvin-ofili.github.io/Movie-fight/",
		githubLink: "https://github.com/Kelvin-Ofili/Movie-fight.git",
		image: movieFight,
		tap: false,
	},
	{
		id: 5,
		name: "Restaurant-Recipes",
		description:
			"This is a web app built with the spoonacular api aimed at providing users with important information about numerous dishes",
		tools: ["ReactJS", "Spoonacular API", "CSS", "JSX"],
		projectLink: "https://restaurant-recipes.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/restaurant-recipes.git",
		image: restaurantRecipe,
		tap: false,
	},
	{
		id: 6,
		name: "Redux-Ecommerce",
		description:
			"This is an E-commerce web application built with Redux and supported with a firebase backend",
		tools: ["ReactJS", "Redux", "Material-ui", "Firebase"],
		projectLink: "https://redux-ecommerce-ofili.netlify.app/",
		githubLink: "https://github.com/Kelvin-Ofili/redux-ecommerce.git",
		image: reduxEcommerce,
		tap: false,
	},
	{
		id: 7,
		name: "Ecomms-Website",
		description:
			"This is an E-commerce Web App where users can potentially buy different products...",
		tools: ["NodeJS", "Express API", "CSS"],
		projectLink: "https://github.com/Kelvin-Ofili/Ecomm-Website.git",
		githubLink: "https://github.com/Kelvin-Ofili/Ecomm-Website.git",
		image: ecomms,
		tap: false,
	},
];

export default projects;
