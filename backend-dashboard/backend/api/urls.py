from django.urls import path
from .views import DesempenhoMensalVendasView, DesempenhoTrimestralVendasView, MetasVendasView, MetasTendenciasVendasView, DesempenhoEmpresarialView, PorcentagemVendasView, CalculoDesempenhoEmpresarial

urlpatterns = [
    path('desempenho-mensal-vendas/', DesempenhoMensalVendasView.as_view()),
    path('desempenho-mensal-vendas/<int:pk>/', DesempenhoMensalVendasView.as_view()),
    path('desempenho-trimestral-vendas/', DesempenhoTrimestralVendasView.as_view()),
    path('desempenho-trimestral-vendas/<int:pk>/', DesempenhoTrimestralVendasView.as_view()),
    path('metas-vendas/', MetasVendasView.as_view()),
    path('metas-vendas/<int:pk>/', MetasVendasView.as_view()),
    path('metas-tendencias-vendas/', MetasTendenciasVendasView.as_view()),
    path('metas-tendencias-vendas/<int:pk>/', MetasTendenciasVendasView.as_view()),
    path('desempenho-empresarial/', DesempenhoEmpresarialView.as_view()),
    path('desempenho-empresarial/<int:pk>/', DesempenhoEmpresarialView.as_view()),
    path('porcentagem-vendas/', PorcentagemVendasView.as_view()),
    path('porcentagem-desempenhoempresarial/', CalculoDesempenhoEmpresarial.as_view()),
    
]
