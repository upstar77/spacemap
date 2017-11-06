from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView
from django.views import defaults as default_views
from django.conf.urls.i18n import i18n_patterns

#
# blog_urls = ([
#     url(r'^', include('zinnia.urls.capabilities')),
#     url(r'^search/', include('zinnia.urls.search')),
#     url(r'^sitemap/', include('zinnia.urls.sitemap')),
#     url(r'^trackback/', include('zinnia.urls.trackback')),
#     url(r'^blog/tags/', include('zinnia.urls.tags')),
#     url(r'^blog/feeds/', include('zinnia.urls.feeds')),
#     url(r'^blog/random/', include('zinnia.urls.random')),
#     url(r'^blog/authors/', include('zinnia.urls.authors')),
#     url(r'^blog/categories/', include('zinnia.urls.categories')),
#     url(r'^blog/comments/', include('zinnia.urls.comments')),
#     url(r'^blog/', include('zinnia.urls.entries')),
#     url(r'^blog/', include('zinnia.urls.archives')),
#     url(r'^blog/', include('zinnia.urls.shortlink')),
#     url(r'^blog/', include('zinnia.urls.quick_entry'))
# ], 'zinnia')
#



urlpatterns = i18n_patterns(
    # Django Admin, use {% url 'admin:index' %}
    url(settings.ADMIN_URL, admin.site.urls),
    url(r'^i18n/', include('django.conf.urls.i18n')),
    # User management
    url(r'^select2/', include('django_select2.urls')),

    url(r'^', include('coworker.main.urls', namespace='main')),
    # url(r'^(?P<country>[\w-]+)/', include('coworker.place.urls', namespace='place')),
    url(r'^profile/', include('coworker.users.urls', namespace='users')),

    url(r'^accounts/', include('allauth.urls')),

    url(r'^places/', include('coworker.place.urls', namespace='place')),
    url(r'^events/', include('coworker.events.urls', namespace='events')),
    url(r'^services/', include('coworker.services.urls', namespace='services')),
    # url(r'^', include(blog_urls)),
    url(r'^lab/', include('coworker.lab.urls', namespace='lab')),

    url(r'^tinymce/', include('tinymce.urls')),
    url(r'^comments/', include('django_comments.urls')),
    # Your stuff: custom urls includes go here


) + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



if 'rosetta' in settings.INSTALLED_APPS:
    urlpatterns += [
        url(r'^rosetta/', include('rosetta.urls'))
    ]

if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(r'^400/$', default_views.bad_request, kwargs={'exception': Exception('Bad Request!')}),
        url(r'^403/$', default_views.permission_denied, kwargs={'exception': Exception('Permission Denied')}),
        url(r'^404/$', default_views.page_not_found, kwargs={'exception': Exception('Page not Found')}),
        url(r'^500/$', default_views.server_error),
    ]
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [
            url(r'^__debug__/', include(debug_toolbar.urls)),
        ] + urlpatterns
