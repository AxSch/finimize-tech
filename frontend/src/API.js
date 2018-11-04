import request from "axios"

export const calculate = (savingsAmount, monthlyAmount, interestRate, interestFreq) => {
	return request
		.post("/calculate/", {
			savingsAmount,
			monthlyAmount,
			interestRate,
			interestFreq
		})
}
