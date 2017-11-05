# from allauth.account.forms import SignupForm
#
# def auth_forms(request):
#     return {'sign_up_form': SignupForm()}


def categories(request):
    return {'categories': Category.tree.root_nodes().filter(hidden=False)}
