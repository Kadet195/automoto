/* General styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-image: url('images/garage.jpg');
  background-size: cover;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul li {
  display: inline;
  margin-right: 10px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
}

.hero {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  padding: 100px 0;
}

.hero h2 {
  font-size: 48px;
  margin-bottom: 20px;
}

.hero p {
  font-size: 18px;
  margin-bottom: 40px;
}

.hero .btn {
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  border-radius: 5px;
  margin-right: 10px;
  transition: background-color 0.3s ease;
}

.hero .btn:hover {
  background-color: #ddd;
}

.featured-products {
  padding: 50px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
}

.featured-products h3 {
  font-size: 32px;
  margin-bottom: 30px;
}

.product {
  display: inline-block;
  width: 300px;
  padding: 20px;
  margin: 20px;
  border: 1px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

.product:hover {
  transform: scale(1.05);
}

.product img {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.product h4 {
  font-size: 20px;
  margin-bottom: 10px;
}

.product p {
  margin-bottom: 20px;
}

.btn-add-to-cart {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn-add-to-cart:hover {
  background-color: #555;
}

.ads {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
  background-color: rgba(0, 0, 0, 0.5);
}

.ad {
  display: flex;
  align-items: center;
  margin-right: 20px;
}

.ad img {
  width: 200px;
  height: 200px;
  margin-right: 20px;
  border-radius: 5px;
}

.ad-content h4 {
  font-size: 24px;
  margin-bottom: 10px;
}

.ad-content p {
  margin-bottom: 20px;
}

.ad-content .btn {
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.ad-content .btn:hover {
  background-color: #ddd;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-icons a {
  margin-left: 10px;
}

.social-icons img {
  width: 25px;
  height: 25px;
}

