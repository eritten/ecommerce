from django.db.models.signals import post_save
from django.dispatch import receiver
from django_otp.oath import totp
from django.utils.timezone import now
from datetime import timedelta
from .models import User


@receiver(post_save, sender=User)
def send_otp(sender, instance, created, **kwargs):
    if created:
        totp_instance = totp(key=instance.otp_secret_key, step=30)
        otp = totp_instance.generate(now())
