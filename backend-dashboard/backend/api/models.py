from django.db import models

class DesempenhoMensalVendas(models.Model):
    id = models.AutoField(primary_key=True)
    espectativa = models.CharField(max_length=50)
    totalVendaNoMes = models.CharField(max_length=50)
    mes = models.CharField(max_length=50)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade = models.IntegerField()

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