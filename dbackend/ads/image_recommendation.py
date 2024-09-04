import torch
from torchvision import models, transforms
from PIL import Image
import numpy as np
from .models import Product, ProductImage

def extract_image_features(image_path):
    model = models.resnet18(pretrained=True)
    model.eval()
    preprocess = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])

    image = Image.open(image_path)
    image_tensor = preprocess(image).unsqueeze(0)  # Add batch dimension

    with torch.no_grad():
        features = model(image_tensor)

    return features.flatten().numpy()

def find_similar_products_by_image(product, top_k=5):
    product_images = product.images.all()
    if not product_images:
        return []

    product_image_features = np.frombuffer(product_images[0].image_features, dtype=np.float32)

    products = Product.objects.exclude(id=product.id)
    similarities = []

    for other_product in products:
        other_product_images = other_product.images.all()
        if other_product_images:
            other_image_features = np.frombuffer(other_product_images[0].image_features, dtype=np.float32)
            similarity = np.dot(product_image_features, other_image_features) / (np.linalg.norm(product_image_features) * np.linalg.norm(other_image_features))
            similarities.append((similarity, other_product))

    similarities.sort(reverse=True, key=lambda x: x[0])
    return [product for _, product in similarities[:top_k]]