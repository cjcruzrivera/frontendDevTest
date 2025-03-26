const CACHE_EXPIRATION_TIME = 60 * 60 * 1000;

const cacheService = {
  set: (key, data) => {
    const item = {
      data,
      timestamp: new Date().getTime()
    };
    localStorage.setItem(key, JSON.stringify(item));
  },

  get: (key) => {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const parsedItem = JSON.parse(item);
    const now = new Date().getTime();

    if (now - parsedItem.timestamp > CACHE_EXPIRATION_TIME) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedItem.data;
  },

  clear: (key) => {
    localStorage.removeItem(key);
  }
};

export default cacheService; 