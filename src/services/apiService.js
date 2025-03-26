import axios from 'axios';
import cacheService from './cacheService';

const API_BASE_URL = 'https://itx-frontend-test.onrender.com/api';

export const fetchProducts = async () => {
  const cacheKey = 'products_list';
  const cachedData = cacheService.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/product`);
    cacheService.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (id) => {
  const cacheKey = `product_${id}`;
  const cachedData = cacheService.get(cacheKey);

  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await axios.get(`${API_BASE_URL}/product/${id}`);
    cacheService.set(cacheKey, response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export const addToCart = async (productData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart`, productData);
    // Guardamos el contador del carrito en el cache
    cacheService.set('cart_count', response.data.count);
    return response.data;
  } catch (error) {
    console.error('Error adding to cart:', error);
    throw error;
  }
};

export const getCartCount = () => {
  return cacheService.get('cart_count') || 0;
}; 