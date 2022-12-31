from django.contrib import admin
from django.urls import path, include
from listings.api import views as listings_api_views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/listings/', listings_api_views.ListingsList.as_view()),
    path('api-auth-djoser/', include('djoser.urls')),
    path('api-auth-djoser/', include('djoser.urls.authtoken')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)



