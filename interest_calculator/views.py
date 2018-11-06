from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import CalculationSerializer
from .utils import calculate

class CalculationView(APIView):
    def post(self, request):
        serializer = CalculationSerializer(data=request.data)
        if serializer.is_valid():
            results, result = calculate(
                serializer.validated_data["savings_amount"],
                serializer.validated_data["monthly_amount"],
                serializer.validated_data["interest_rate"],
                serializer.validated_data["interest_freq"])
            result = round(result, 2)
            return Response({'graph_result': results,'result': result })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
