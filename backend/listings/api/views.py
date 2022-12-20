from .serializers import ListingSerializer
from listings.models import Listing
from rest_framework import generics

class ListingsList(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer