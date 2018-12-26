from rest_framework.generics import ListAPIView, RetrieveAPIView

from budgets.models import Account
from .serializers import AccountSerializer

class AccountListView(ListAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

class AccountDetailView(RetrieveAPIView):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
