from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path




urlpatterns = [
    path("admin/", admin.site.urls),
    # path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
