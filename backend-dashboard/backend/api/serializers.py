from rest_framework import serializers
from .models import DesempenhoEmpresarial, DesempenhoMensalVendas, DesempenhoTrimestralVendas, MetasTendenciasVendas, MetasVendas

class DesempenhoEmpresarialSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesempenhoEmpresarial
        fields = ['id', 'espectativa', 'totalVendaAnual', 'mes', 'valor']

class DesempenhoMensalVendasSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesempenhoMensalVendas
        fields = ['id', 'espectativa', 'totalVendaNoMes', 'mes', 'valor', 'quantidade']

class DesempenhoTrimestralVendasSerializer(serializers.ModelSerializer):
    class Meta:
        model = DesempenhoTrimestralVendas
        fields = ['id', 'espectativa', 'totalVendaNoTrimestre', 'trimestre', 'valor', 'quantidade']

class MetasTendenciasVendasSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetasTendenciasVendas
        fields = ['id', 'espectativa', 'totalVendaNoMes', 'mes', 'valor']

class MetasVendasSerializer(serializers.ModelSerializer):
    class Meta:
        model = MetasVendas
        fields = ['id', 'espectativa', 'totalVendaNoMes', 'mes', 'valor']