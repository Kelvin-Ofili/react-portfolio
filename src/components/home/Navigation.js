import { Link } from "react-router-dom";

function Navigation() {
	const showOptions = () => {
		const bars = document.getElementById("bars");
		const smaller = document.querySelector(".btn-2");
		const navHome = document.querySelector(".nav-home");
		smaller.classList.remove("hide");
		bars.style.display = "none";
		navHome.classList.remove("adjust");
	};
	const hideOptions = () => {
		const bars = document.getElementById("bars");
		const smaller = document.querySelector(".btn-2");
		const navHome = document.querySelector(".nav-home");
		smaller.classList.add("hide");
		bars.style.display = "flex";

		navHome.classList.add("adjust");
	};
	return (
		<nav className="nav-home adjust">
			<Link to="/about" className="btn">
				About
			</Link>
			<Link to="/profile" className="btn">
				Profile
			</Link>
			<Link to="/projects" className="btn">
				Projects
			</Link>
			<Link to="/contact" className="btn">
				Contact
			</Link>

			<i className="fa fa-bars" id="bars" onClick={showOptions}></i>
			<div className="smaller-screen btn-2 hide">
				<i className="fa fa-times" id="ex" onClick={hideOptions}></i>
				<ul className="smaller-screen-ul">
					<li className="smaller-list-items">
						<Link to="/about">About</Link>
					</li>
					<li className="smaller-list-items">
						<Link to="/profile">Profile</Link>
					</li>
					<li className="smaller-list-items">
						<Link to="/projects">Projects</Link>
					</li>
					<li className="smaller-list-items">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
