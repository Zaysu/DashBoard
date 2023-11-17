from django.contrib import admin
from .models import DesempenhoMensalVendas, DesempenhoTrimestralVendas, MetasVendas, MetasTendenciasVendas, DesempenhoEmpresarial

modelsList = [DesempenhoMensalVendas, DesempenhoTrimestralVendas, MetasVendas, MetasTendenciasVendas, DesempenhoEmpresarial]

admin.site.register(modelsList)
