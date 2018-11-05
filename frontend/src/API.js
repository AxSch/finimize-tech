import request from "axios"

export const calculate = (savingsAmount, monthlyAmount, interestRate, interestFreq) => {
	return request
		.post("/calculate/", {
			savings_amount: savingsAmount,
			monthly_amount: monthlyAmount,
			interest_rate: interestRate,
			interest_freq: interestFreq
		})
}
