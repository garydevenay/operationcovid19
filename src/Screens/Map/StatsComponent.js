import React, { useState, useEffect } from "react";
import { LiveCount } from '../../API';

export const StatsComponent = (props) => {
	const [confirmed, setConfirmed] = useState(0);
	const [selfReported, setSelfReported] = useState(0);
	const [recovered, setRecovered] = useState(0);
	const [deceased, setDeceased] = useState(0);
	const sum = (key) => {
		return props.data.reduce((a, b) => a + (b[key] || 0), 0);
	}

	const getSelfCount = async() => {
		LiveCount((val) => {
			setSelfReported(val);
		});
	}

	useEffect(() => {
		getSelfCount();
	}, []);

	useEffect(() => {
		if (props.data !== undefined) {
			setConfirmed(sum("TotalConfirmed"))
			setRecovered(sum("TotalRecovered"))
			setDeceased(sum("TotalDeaths"))
		}
	// eslint-disable-next-line
	}, [props.data]);

	return (
		<div className="row no-gutters">
			<div className="col-12 d-lg-none">
				<div className="questionnaire-box mobile">
					<a href="/questionnaire">
						<div className="icon">
							<img src="/images/self-report-white.svg" alt="Self report your symptoms" />
						</div>
						<div className="text">
							<span className="title">Tap here to Self-Report</span><br />
							<span className="sub-title">It's safe and confidential</span>
						</div>
					</a>
				</div>
			</div>
			<div className="col">
				<div className="statistics">
					<div className="stat-left">
						<span className="badge red"></span>
					</div>
					<div className="stat-right">
						<span className="statistic-title">Total Confirmed Cases</span><br />
						<span className="statistic">{confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="statistics">
					<div className="stat-left">
						<span className="badge green"></span>
					</div>
					<div className="stat-right">
						<span className="statistic-title">Total Self Reported</span><br />
						<span className="statistic">{selfReported.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
					</div>
				</div>
			</div>
			<div className="w-100 d-lg-none"></div>
			<div className="col">
				<div className="statistics">
					<div className="stat-left">
						<span className="badge blue"></span>
					</div>
					<div className="stat-right">
						<span className="statistic-title">Total Recovered</span><br />
						<span className="statistic">{recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
					</div>
				</div>
			</div>
			<div className="col">
				<div className="statistics">
					<div className="stat-left">
						<span className="badge black"></span>
					</div>
					<div className="stat-right">
						<span className="statistic-title">Total Deceased</span><br />
						<span className="statistic">{deceased.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
					</div>
				</div>
			</div>
			<div className="d-none d-lg-block col-3">
				<div className="questionnaire-box">
					<a href="/questionnaire">
						<div className="icon">
							<img src="/images/self-report.svg" alt="Self report your symptoms" />
						</div>
						<div className="text">
							<span className="title">Self-Report</span><br />
							<span className="sub-title">It's safe and confidential</span>
						</div>
						<div className="button">
							<img src="/images/self-report-cta.svg" alt="Sub" />
						</div>
					</a>
				</div>
			</div>
		</div>
	)
};
