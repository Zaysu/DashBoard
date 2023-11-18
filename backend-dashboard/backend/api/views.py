from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DesempenhoEmpresarial, DesempenhoMensalVendas, DesempenhoTrimestralVendas, MetasTendenciasVendas, MetasVendas
from .serializers import DesempenhoEmpresarialSerializer, DesempenhoMensalVendasSerializer, DesempenhoTrimestralVendasSerializer, MetasTendenciasVendasSerializer, MetasVendasSerializer
from django.http.response import JsonResponse
from django.http.response import Http404

class DesempenhoEmpresarialView(APIView):
    
    def get_object(self, pk):
        try:
            return DesempenhoEmpresarial.objects.get(pk=pk)
        except DesempenhoEmpresarial.DoesNotExist:
            raise Http404
    
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = DesempenhoEmpresarialSerializer(data)
        else:
            data = DesempenhoEmpresarial.objects.all()
            serializer = DesempenhoEmpresarialSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data = request.data
        serializer = DesempenhoEmpresarialSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def put(self, request, pk, format=None):
        data = request.data
        dataObject = self.get_object(pk)
        serializer = DesempenhoEmpresarialSerializer(dataObject, data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def delete(self, request, pk, format=None):
        dataObject = self.get_object(pk)
        dataObject.delete()
        return JsonResponse("Successfully", safe=False)

class DesempenhoMensalVendasView(APIView):
    
    def get_object(self, pk):
        try:
            return DesempenhoMensalVendas.objects.get(pk=pk)
        except DesempenhoMensalVendas.DoesNotExist:
            raise Http404
    
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = DesempenhoMensalVendasSerializer(data)
        else:
            data = DesempenhoMensalVendas.objects.all()
            serializer = DesempenhoMensalVendasSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data = request.data
        serializer = DesempenhoMensalVendasSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def put(self, request, pk, format=None):
        data = request.data
        dataObject = self.get_object(pk)
        serializer = DesempenhoMensalVendasSerializer(dataObject, data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def delete(self, request, pk, format=None):
        dataObject = self.get_object(pk)
        dataObject.delete()
        return JsonResponse("Successfully", safe=False)

        
class DesempenhoTrimestralVendasView(APIView):
    
    def get_object(self, pk):
        try:
            return DesempenhoTrimestralVendas.objects.get(pk=pk)
        except DesempenhoTrimestralVendas.DoesNotExist:
            raise Http404
    
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = DesempenhoTrimestralVendasSerializer(data)
        else:
            data = DesempenhoTrimestralVendas.objects.all()
            serializer = DesempenhoTrimestralVendasSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data = request.data
        serializer = DesempenhoTrimestralVendasSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def put(self, request, pk, format=None):
        data = request.data
        dataObject = self.get_object(pk)
        serializer = DesempenhoTrimestralVendasSerializer(dataObject, data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def delete(self, request, pk=None, format=None):
        dataObject = self.get_object(pk)
        dataObject.delete()
        return JsonResponse("Successfully", safe=False)


class MetasTendenciasVendasView(APIView):
    
    def get_object(self, pk):
        try:
            return MetasTendenciasVendas.objects.get(pk=pk)
        except MetasTendenciasVendas.DoesNotExist:
            raise Http404
    
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = MetasTendenciasVendasSerializer(data)
        else:
            data = MetasTendenciasVendas.objects.all()
            serializer = MetasTendenciasVendasSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data = request.data
        serializer = MetasTendenciasVendasSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def put(self, request, pk, format=None):
        data = request.data
        dataObject = self.get_object(pk)
        serializer = MetasTendenciasVendasSerializer(dataObject, data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def delete(self, request, pk, format=None):
        dataObject = self.get_object(pk)
        dataObject.delete()
        return JsonResponse("Successfully", safe=False)

class MetasVendasView(APIView):
    
    def get_object(self, pk):
        try:
            return MetasVendas.objects.get(pk=pk)
        except MetasVendas.DoesNotExist:
            raise Http404
    
    def get(self, request, pk=None, format=None):
        if pk:
            data = self.get_object(pk)
            serializer = MetasVendasSerializer(data)
        else:
            data = MetasVendas.objects.all()
            serializer = MetasVendasSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        data = request.data
        serializer = MetasVendasSerializer(data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def put(self, request, pk, format=None):
        data = request.data
        dataObject = self.get_object(pk)
        serializer = MetasVendasSerializer(dataObject, data=data)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Successfully", safe=False)
        return JsonResponse("Failed", safe=False)
    
    def delete(self, request, pk, format=None):
        dataObject = self.get_object(pk)
        dataObject.delete()
        return JsonResponse("Successfully", safe=False)


class PorcentagemVendasView(APIView):
    def get(self, request, format=None):
        try:
            # Obter todos os objetos do modelo DesempenhoMensalVendas
            desempenhos = DesempenhoMensalVendas.objects.all()

            # Filtrar os valores não nulos e somar
            porcentagens = [desempenho.porcentagem_vendas for desempenho in desempenhos if desempenho.porcentagem_vendas is not None]
            total_porcentagem = sum(porcentagens)

            # Calcular a média das porcentagens
            if porcentagens:
                media_porcentagem = total_porcentagem / len(porcentagens)
            else:
                media_porcentagem = 0.0

            return Response({'media_porcentagem': media_porcentagem, 'total_porcentagem': total_porcentagem})

        except Exception as e:
            return Response({'mensagem': str(e)}, status=500)
