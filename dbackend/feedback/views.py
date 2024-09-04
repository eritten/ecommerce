from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ContactSerializer
from django.conf import settings
from django.core.mail import send_mail
from rest_framework import status  # Added import for status

# Create your views here.

# View to save contact and forward the name, email, telephone number, and content to mail.
@api_view(['POST'])
def contact_view(request):
    if request.method == 'POST':
        contact_data = ContactSerializer(data=request.data)
        if contact_data.is_valid():
            # Save the data in the database.
            contact_data.save()
            # Send the mail
            send_mail(
                "Customer Contact",
                contact_data.data['content'],  # Corrected the string literal
                contact_data.data['email'],
                [settings.EMAIL_HOST_USER],
                fail_silently=False
            )
            return Response(contact_data.data, status=status.HTTP_201_CREATED)
