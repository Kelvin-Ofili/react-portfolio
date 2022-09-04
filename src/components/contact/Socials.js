function Socials() {
	return (
		<div className="socials">
			<p className="with-me">Connect With Me:</p>
			<ul className="social-icon">
				<li>
					<a href="https://github.com/Kelvin-Ofili">
						<i className="fa-brands fa-github fa-lg" id="git"></i>
					</a>
				</li>
				<li>
					<a href="https://linkedin.com/in/kelvin-ofili/">
						<i className="fa-brands fa-linkedin fa-lg" id="linked"></i>
					</a>
				</li>
				<li>
					<a
						href="https://mail.google.com/mail/u/0/#inbox/FMfcgzGqPzFzRwzGJMqLGTffJPPPbZlg?compose=CllgCHrgltbTRnJQRpMTfRXzngGjcwVZhqKZXdWLMfRwmlGtCqhmzTxJbZqtbWpxczGFqRXQCrL"
						style={{ color: "white" }}
					>
						<i className="fa-solid fa-envelope fa-lg" id="envelope"></i>
					</a>
				</li>
			</ul>
		</div>
	);
}

export default Socials;
