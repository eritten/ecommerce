# ads/recommendations.py

from transformers import BertTokenizer, BertModel
import torch
from .models import Product
import logging

# Setup logging
logger = logging.getLogger(__name__)
logging.basicConfig(level=logging.INFO)

# Load pre-trained model and tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')


# Encode product descriptions
def encode(text):
    inputs = tokenizer(text, return_tensors='pt', truncation=True, padding=True, max_length=512)
    outputs = model(**inputs)
    return outputs.last_hidden_state.mean(dim=1)


# Fetch and encode all product descriptions from the database
def get_encoded_descriptions():
    products = Product.objects.all()
    descriptions = [product.description for product in products]
    encoded_descriptions = [encode(desc) for desc in descriptions]
    return products, encoded_descriptions


# Function to find similar products
def find_similar_products(product, top_k=5):
    description = product.description
    logger.info(f"Finding similar products for: {description}")
    encoded_input = encode(description)
    products, encoded_descriptions = get_encoded_descriptions()
    similarities = [torch.nn.functional.cosine_similarity(encoded_input, ed).item() for ed in encoded_descriptions]

    # Exclude the actual product from the results
    product_index = list(products).index(product)
    similarities.pop(product_index)
    encoded_descriptions.pop(product_index)
    products = list(products)
    products.pop(product_index)

    top_k_indices = sorted(range(len(similarities)), key=lambda i: similarities[i], reverse=True)[:top_k]
    similar_products = [products[i] for i in top_k_indices]
    logger.info(f"Similar products found: {[p.description for p in similar_products]}")
    return similar_products
