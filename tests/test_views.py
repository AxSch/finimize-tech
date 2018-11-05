from rest_framework import status
from rest_framework.test import APITestCase, APIRequestFactory
from interest_calculator.views import CalculationView
import json

class CalculationAPITest(APITestCase):
  factory = APIRequestFactory()
  view = CalculationView.as_view()

  def test_response(self):
      request_data = {
        'savings_amount': 1000,
        'monthly_amount': 100,
        'interest_rate': 1.3,
        'interest_freq': 1
        }
      request = CalculationAPITest.factory.post(
        '/calculate/',
        json.dumps(request_data),
        content_type='application/json')
      api_response = CalculationAPITest.view(request)
      self.assertTrue(status.is_success(api_response.status_code))
  
  def test_invalid_response(self):
      request_data = {
        'savings_amount': 1000,
        'monthly_amount': 100,
        'interest_rate': 1.3,
        'interest_freq': ''
        }
      request = CalculationAPITest.factory.post(
        '/calculate/',
        json.dumps(request_data),
        content_type='application/json')
      api_response = CalculationAPITest.view(request)
      self.assertTrue(status.is_client_error(api_response.status_code))