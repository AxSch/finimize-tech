from rest_framework import serializers

class CalculationSerializer(serializers.Serializer):
  savings_amount = serializers.DecimalField(max_digits=None, decimal_places=2, max_value=None, min_value=0)
  monthly_amount = serializers.DecimalField(max_digits=None, decimal_places=2, max_value=None, min_value=0)
  interest_rate = serializers.DecimalField(max_digits=None, decimal_places=2, max_value=10.0, min_value=0)
  interest_freq = serializers.IntegerField(max_value=12, min_value=1, required=True)

  def validate_interest_freq(self, value):
    if value is None:
      raise serializers.ValidationError("Select an interest frequency")
    return value