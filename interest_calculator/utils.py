
def calculate(savings_amount, monthly_amount, interest_rate, interest_freq):
  results=[]
  result = 0 
  t = 50
  for year in range(t):
      P = savings_amount + monthly_amount
      r = interest_rate/100
      n = interest_freq
      result = P * (1 + (r/n))**year
      results.append({"year": year, "amount": result})
  return results, result