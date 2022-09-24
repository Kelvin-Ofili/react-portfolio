import React from "react";
import certificates from "./Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Certification = () => {
	AOS.init();
	return (
		<motion.div
			className="certificate-container"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Link to="/about" className="certification-btn">
				to previous page
			</Link>
			<h1 className="certification-h1">My Certifications </h1>
			<div className="certificates">
				{certificates.map((cert) => (
					<div
						key={cert.id}
						className="certificate"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div className="certificate-image">
							<a href={cert.companyLink} target="_blank" rel="noreferrer">
								<img src={cert.image} alt="" />
							</a>
						</div>
						<div className="certificate-details">
							<h3>{cert.name}</h3>
							<h4>{cert.company}</h4>
							<p>Issued {cert.issued} - No Expiration Date</p>
							<a
								href={cert.link}
								target="_blank"
								rel="noreferrer"
								className="credential-link"
							>
								<button className="credential-btn">show credential</button>
							</a>
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Certification;
