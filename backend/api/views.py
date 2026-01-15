from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import CareerApplicationSerializer,ContactMessageSerializer,MOUSerializer,GalleryImageSerializer,ProjectSerializer,CommunityItemSerializer
from rest_framework.generics import ListAPIView
from .models import CareerApplication,ContactMessage,MOU,GalleryImage,Project,CommunityItem

class CareerApplicationCreate(APIView):
    def post(self, request):
        serializer = CareerApplicationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Application submitted successfully"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class ContactMessageCreate(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()

            # 📧 Send mail to admin
            send_mail(
                subject=f"New Contact: {contact.subject}",
                message=f"""
Name: {contact.name}
Email: {contact.email}
phone:{contact.phone}

Message:
{contact.message}
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.EMAIL_HOST_USER],
                fail_silently=False,
            )

            return Response(
                {"message": "Message sent successfully"},
                status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class MOUListAPIView(ListAPIView):
    serializer_class = MOUSerializer

    def get_queryset(self):
        return MOU.objects.filter(is_active=True)
    
class GalleryImageListAPIView(ListAPIView):
    serializer_class = GalleryImageSerializer

    def get_queryset(self):
        return GalleryImage.objects.all().order_by('-created_at')
    
class ProjectListAPIView(APIView):
    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)


class CommunityItemListAPIView(ListAPIView):
    serializer_class = CommunityItemSerializer

    def get_queryset(self):
        return CommunityItem.objects.filter(section="giveback").order_by("-created_at")
