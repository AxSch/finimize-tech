from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

@require_POST
@csrf_exempt
def calculate(request):
    params = json.loads(request.body)
    savings_amount = params.get('savingsAmount', None)
    interest_rate = params.get('interestRate', None)
    monthly_amount = params.get('monthlyAmount', None)
    interest_freq = params.get('interestFreq', None)

    if savings_amount is None or interest_rate is None:
        return HttpResponseBadRequest('Required parameters are not provided')
    
    results = []
    t = 50
    for i in range(t):
        P = savings_amount + monthly_amount
        r = interest_rate/100
        n = interest_freq
        result = P * (1 + (r/n))**i
        results.append(result)
    return JsonResponse({'result': results})