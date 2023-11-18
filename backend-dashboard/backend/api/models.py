from django.db import models
from decimal import Decimal

class DesempenhoMensalVendas(models.Model):
    id = models.AutoField(primary_key=True)
    espectativa = models.CharField(max_length=50)
    totalVendaNoMes = models.CharField(max_length=50)
    mes = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade = models.IntegerField()
    
    # Novo campo para armazenar a porcentagem de vendas
    porcentagem_vendas = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    def save(self, *args, **kwargs):
        # Calcular a porcentagem de vendas antes de salvar o objeto
        if self.valor and self.totalVendaNoMes:
            try:
                self.porcentagem_vendas = (self.valor / Decimal(self.totalVendaNoMes)) * 100
            except ZeroDivisionError:
                # Lidar com o caso de total_venda_no_mes sendo zero
                self.porcentagem_vendas = 0.0

        super().save(*args, **kwargs)

    def __str__(self):
        return self.espectativa

class DesempenhoTrimestralVendas(models.Model):
    id = models.AutoField(primary_key=True)
    espectativa = models.CharField(max_length=50)
    totalVendaNoTrimestre = models.CharField(max_length=50)
    trimestre = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade = models.IntegerField()

    def __str__(self):
        return self.espectativa

class MetasVendas(models.Model):
    id = models.AutoField(primary_key=True)
    espectativa = models.CharField(max_length=50)
    totalVendaNoMes = models.CharField(max_length=50)
    mes = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.espectativa
    
class MetasTendenciasVendas(models.Model):
    id = models.AutoField(primary_key=True)
    espectativa = models.CharField(max_length=50)
    totalVendaNoMes = models.CharField(max_length=50)
    mes = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.espectativa

class DesempenhoEmpresarial(models.Model):
    id = models.AutoField(primary_key=True)
    espectativa = models.CharField(max_length=50)
    totalVendaAnual = models.CharField(max_length=50)
    mes = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.espectativa