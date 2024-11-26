// utils/storage.js

// Save to local storage without Expiry
export function saveWithoutExpiry(key, value) {
  const now = new Date();
  const item = {
    value: value,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// Save to local storage with Expiry
export function saveWithExpiry(key, value) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + 60000, //3600000,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// Load from local storage
export function loadWithExpiry(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}
