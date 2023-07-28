import React from "react";
import { certificates } from "./data";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { LayoutUI, GlassPanel } from "components";

const CertificationUI = () => {
	return (
		<LayoutUI>
			<div className={styles.certificateContainer}>
				<GlassPanel className={styles.top}>
					<div className={styles.certificateContainer__btn}>
						<Link to="/" className={`btn`}>
							Home
						</Link>
						<h1 className={styles.certificationH1}>My Certifications </h1>
						<Link to="/contact" className={`btn`}>
							Contact
						</Link>
					</div>
				</GlassPanel>
				<p>
					I've worked with a variety of programming languages, frameworks,
					libraries, packages, and tools for years. I began with HTML and worked
					my way up from there. I am now conversant with a variety of
					programming languages and frameworks, including JavaScript, React,
					expressAPI, Python, C, and so on. Check out the complete list below.
					<br />
				</p>
				<div className={styles.certificates}>
					{certificates.map((cert) => (
						<div key={cert.id} className={styles.certificate}>
							<div className={styles.certificateImage}>
								<a href={cert.companyLink} target="_blank" rel="noreferrer">
									<img src={cert.image} alt="" />
								</a>
							</div>
							<div className={styles.certificateDetails}>
								<h3>{cert.name}</h3>
								<h4>{cert.company}</h4>
								<p>Issued {cert.issued} - No Expiration Date</p>
								<a
									href={cert.link}
									target="_blank"
									rel="noreferrer"
									className={styles.credentialLink}
								>
									<button className={styles.credentialBtn}>
										show credential
									</button>
								</a>
							</div>
						</div>
					))}
				</div>
				<GlassPanel className={styles.bottom}>
					<div className={styles.certificateContainer__btn}>
						<Link to="/projects" className={`btn`}>
							Projects{" "}
						</Link>
						<Link to="/about" className={`btn`}>
							About
						</Link>
					</div>
				</GlassPanel>
			</div>
		</LayoutUI>
	);
};

export { CertificationUI };
