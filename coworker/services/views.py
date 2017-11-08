from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.template.response import TemplateResponse
from django.views.generic import DetailView, ListView
from .models import Category, Service



def category_index(request, path, category_id):
    category = get_object_or_404(Category, id=category_id)
    actual_path = category.get_full_path()
    if actual_path != path:
        return redirect('service:category', permanent=True, path=actual_path, category_id=category_id)
    return TemplateResponse(request, 'services/index.html', {'category': category})



class ServiceSearchView(ListView):
    template_name = 'services/search_services.html'
    model = Service


class ServiceDetailView(DetailView):
    model = Service
    template_name = 'services/service_detail.html'

    def get_object(self, queryset=None):
        return get_object_or_404(self.model, id=self.kwargs["service_id"])


def product_details(request, slug, service_id, form=None):
    # """Product details page
    #
    # The following variables are available to the template:
    #
    # product:
    #     The Product instance itself.
    #
    # is_visible:
    #     Whether the product is visible to regular users (for cases when an
    #     admin is previewing a product before publishing).
    #
    # form:
    #     The add-to-cart form.
    #
    # price_range:
    #     The PriceRange for the product including all discounts.
    #
    # undiscounted_price_range:
    #     The PriceRange excluding all discounts.
    #
    # discount:
    #     Either a Price instance equal to the discount value or None if no
    #     discount was available.
    #
    # local_price_range:
    #     The same PriceRange from price_range represented in user's local
    #     currency. The value will be None if exchange rate is not available or
    #     the local currency is the same as site's default currency.
    # """
    # products = products_with_details(user=request.user)
    # product = get_object_or_404(products, id=product_id)
    # if product.get_slug() != slug:
    #     return HttpResponsePermanentRedirect(product.get_absolute_url())
    # today = datetime.date.today()
    # is_visible = (
    #     product.available_on is None or product.available_on <= today)
    # if form is None:
    #     form = handle_cart_form(request, product, create_cart=False)[0]
    # availability = get_availability(product, discounts=request.discounts,
    #                                 local_currency=request.currency)
    # template_name = 'product/details_%s.html' % (
    #     type(product).__name__.lower(),)
    # templates = [template_name, 'product/details.html']
    # product_images = get_product_images(product)
    # variant_picker_data = get_variant_picker_data(
    #     product, request.discounts, request.currency)
    # product_attributes = get_product_attributes_data(product)
    # show_variant_picker = all([v.attributes for v in product.variants.all()])
    # json_ld_data = product_json_ld(product, availability, product_attributes)
    return TemplateResponse(request, 'services/service_detail.html', {})
