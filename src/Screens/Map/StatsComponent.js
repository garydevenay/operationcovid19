import React from "react";

class StatsComponent extends React.PureComponent {
	render() {
		return (
			<div class="row no-gutters">
		    <div class="col stats">
			    <div class="card text-white stats-card stats-card-selected">
					  <div class="card-body text-center">
					    <h5 class="card-title text-uppercase">Confirmed</h5>
					    <h4 class="card-text">300000</h4>
					  </div>
					</div>
				</div>
		    <div class="col">
			    <div class="card text-white stats-card">
					  <div class="card-body text-center">
					    <h5 class="card-title text-uppercase">Death</h5>
					    <h4 class="card-text">0</h4>
					  </div>
					</div>
				</div>
		    <div class="col">
			    <div class="card text-white stats-card">
					  <div class="card-body text-center">
					    <h5 class="card-title text-uppercase">Recovered</h5>
					    <h4 class="card-text">300000</h4>
					  </div>
					</div>
				</div>
		    <div class="col">
		    	<div class="card text-white stats-card">
					  <div class="card-body text-center">
					    <h5 class="card-title text-uppercase">Self-reported</h5>
					   <h4 class="card-text">N/A</h4>
					  </div>
					</div>
				</div>
			</div>
		)		
	}
};

export { StatsComponent };
