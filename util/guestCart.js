// Manage a guest cart purely in a cookie (no DB writes)

function readCookie(name) {
  if (typeof document === "undefined") return null;
  const v = document.cookie.match("(^|;)\\s*" + name + "\\s*=\\s*([^;]+)");
  return v ? decodeURIComponent(v.pop()) : null;
}

function writeCookie(name, value, days = 365) {
  if (typeof document === "undefined") return;
  const expires = new Date();
  expires.setDate(expires.getDate() + days);
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires.toUTCString()}`;
}

export function getGuestCartItems() {
  try {
    const raw = readCookie("guest_cart_items");
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading guest cart cookie", err);
    return [];
  }
}

export function saveGuestCartItems(items) {
  try {
    writeCookie("guest_cart_items", JSON.stringify(items));
    return true;
  } catch (err) {
    console.error("Error saving guest cart cookie", err);
    return false;
  }
}

export async function addToGuestCart(product_id, quantity = 1) {
  try {
    const items = getGuestCartItems();
    const idx = items.findIndex((i) => i.product_id === product_id);
    if (idx > -1) {
      items[idx].quantity = (items[idx].quantity || 0) + quantity;
      items[idx].updatedAt = Date.now();
    } else {
      items.push({ product_id, quantity, addedAt: Date.now() });
    }
    saveGuestCartItems(items);
    return { success: true, message: "Added to cart", data: items };
  } catch (err) {
    console.error(err);
    return { success: false, message: "Could not add to cart" };
  }
}

export function clearGuestCart() {
  saveGuestCartItems([]);
}
