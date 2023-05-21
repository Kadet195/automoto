// Fonction pour ajouter un produit au panier
function addToCart(productId) {
  // Vérifier si le produit existe déjà dans le panier
  if (localStorage.getItem(productId)) {
    // Le produit est déjà dans le panier, incrémenter la quantité
    let quantity = parseInt(localStorage.getItem(productId));
    localStorage.setItem(productId, quantity + 1);
  } else {
    // Le produit n'est pas encore dans le panier, initialiser la quantité à 1
    localStorage.setItem(productId, 1);
  }
}

// Fonction pour récupérer le contenu du panier
function getCartItems() {
  let cartItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let quantity = parseInt(localStorage.getItem(key));
    let item = {
      productId: key,
      quantity: quantity
    };
    cartItems.push(item);
  }
  return cartItems;
}

// Fonction pour supprimer un produit du panier
function removeCartItem(productId) {
  localStorage.removeItem(productId);
}

// Exemple d'utilisation des fonctions
addToCart('product1');
addToCart('product2');
addToCart('product1');
console.log(getCartItems());
removeCartItem('product2');
console.log(getCartItems());
