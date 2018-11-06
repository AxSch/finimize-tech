from interest_calculator.utils import calculate

def test_calculate():
  savings_amount = 5000
  monthly_amount = 100
  interest_rate = 5
  interest_freq = 12
  results, result = calculate(savings_amount, monthly_amount, interest_rate, interest_freq)
  assert(result == 327462.11)
  assert(len(results) == 50)