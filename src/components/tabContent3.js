import React from "react";

const TabContent3 = ({ show }) => {
	return (
		<div>
			<section className="">
				<div className="container">
					<div
						id="tab-3-content"
						className={show ? "tab-content-item show" : ""}>
						<div className="text-center">
							<p className="text-lg">
								Choose one plan and watch everything on Netflix
							</p>
							<a className="btn btn-lg">Watch Free For 30 Days</a>
						</div>
						<table className="table">
							<thead>
								<tr>
									<th />
									<th>Basic</th>
									<th>Standard</th>
									<th>Premium</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Monthly price after free month ends on 27/06/19</td>
									<td>$9.99</td>
									<td>$13.99</td>
									<td>$17.99</td>
								</tr>
								<tr>
									<td>HD Available</td>
									<td>
										<i className=" fas fa-times" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
								</tr>
								<tr>
									<td>Ultra HD Available</td>
									<td>
										<i className=" fas fa-times" />
									</td>
									<td>
										<i className=" fas fa-times" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
								</tr>
								<tr>
									<td>Screens you can watch on at the same time</td>
									<td>1</td>
									<td>2</td>
									<td>4</td>
								</tr>
								<tr>
									<td>Watch Netflix on your laptop, TV, phone and tablet</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
								</tr>
								<tr>
									<td>Unlimited movies and TV shows</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
								</tr>
								<tr>
									<td>Cancel at anytime</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
								</tr>
								<tr>
									<td>First month free</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
									<td>
										<i className=" fas fa-check" />
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
		</div>
	);
};

export default TabContent3;
