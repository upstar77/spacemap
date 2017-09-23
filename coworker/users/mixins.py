from django.contrib.auth.mixins import LoginRequiredMixin as BaseLoginRequiredMixin
from django.contrib.auth.views import redirect_to_login
from django.core.exceptions import ImproperlyConfigured, PermissionDenied



class LoginRequiredMixin(BaseLoginRequiredMixin):

    def handle_no_permission(self):
        """
        Redirect to main page
        :return:
        """

        if self.raise_exception:
            raise PermissionDenied(self.get_permission_denied_message())
        return redirect_to_login(self.request.get_full_path(), "/", self.get_redirect_field_name())
