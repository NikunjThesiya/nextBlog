import React, { useState } from "react"
import { RadioGroup } from "@headlessui/react"

const countries = [
	{ id: 1, name: "USA", flag: "/images/countries/usa.svg" },
	{ id: 2, name: "UK", flag: "/images/countries/uk.svg" },
	{ id: 3, name: "Canada", flag: "/images/countries/canada.svg" },
	{ id: 4, name: "Australia", flag: "/images/countries/australia.svg" },
	{ id: 5, name: "Ireland", flag: "/images/countries/ireland.svg" },
	{ id: 6, name: "Open to All" },
]

function CheckIcon(props) {
	return (
		<svg viewBox="0 0 24 24" fill="none" {...props}>
			<circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
			<path
				d="M7 13l3 3 7-7"
				stroke="#fff"
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

const Question1 = () => {
	const [selectedCountry, setSelectedCountry] = useState(countries[0])
	return (
		<div className="w-full px-10 py-10 flex flex-col items-center space-y-6">
			<h6 className="text-blue-900 font-extrabold text-2xl">
				Help Us build your Journey
			</h6>
			<h4 className="text-blue-900 text-3xl">
				What is your desire country to to pursue your education in?
			</h4>

			<div className="w-full px-4 py-16">
				<div className="mx-auto w-full max-w-md">
					<RadioGroup value={selectedCountry} onChange={setSelectedCountry}>
						<RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
						<div className="space-y-2">
							{countries.map((country) => (
								<RadioGroup.Option
									key={country.name}
									value={country}
									className={({ active, checked }) =>
										`${
											active
												? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
												: ""
										}
                  ${
										checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
									}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
									}
								>
									{({ active, checked }) => (
										<>
											<div className="flex w-full items-center justify-between">
												<div className="flex items-center">
													<div className="text-sm">
														<RadioGroup.Label
															as="p"
															className={`font-medium  ${
																checked ? "text-white" : "text-gray-900"
															}`}
														>
															{country.name}
														</RadioGroup.Label>
														<RadioGroup.Description
															as="span"
															className={`inline ${
																checked ? "text-sky-100" : "text-gray-500"
															}`}
														></RadioGroup.Description>
													</div>
												</div>
												{checked && (
													<div className="shrink-0 text-white">
														<CheckIcon className="h-6 w-6" />
													</div>
												)}
											</div>
										</>
									)}
								</RadioGroup.Option>
							))}
						</div>
					</RadioGroup>
				</div>
			</div>
		</div>
	)
}

export default Question1
