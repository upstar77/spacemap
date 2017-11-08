from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
from django.template.response import TemplateResponse

from .models import Category



def category_index(request, path, category_id):
    category = get_object_or_404(Category, id=category_id)
    actual_path = category.get_full_path()
    if actual_path != path:
        return redirect('service:category', permanent=True, path=actual_path, category_id=category_id)
    return TemplateResponse(request, 'service/index.html', {'category': category})
