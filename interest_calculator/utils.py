
def calculate(savings_amount, monthly_amount, interest_rate, interest_freq):
  results=[]
  result = 0 
  t = 10
  for year in range(1, t + 1):
      P = savings_amount
      r = interest_rate/100
      n = interest_freq
      FV = calculateFutureValue(monthly_amount, interest_rate, interest_freq, year)
      compound_interest = P * (1 + r/n)**(n * year)
      result = compound_interest + FV
      print(result)
      results.append({"year": year, "amount": result})
  return results, result

def calculateFutureValue(monthly_amount, interest_rate, interest_freq, year):
  PMT = monthly_amount
  r = interest_rate/100
  n = interest_freq
  step0 = 1 + (r/n)
  step2 = step0**(n * year)
  step3 = step2 - 1
  step4 = r / n
  step5 = step3 / step4
  result = PMT * step5
  return result