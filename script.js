/* =============================================
   STYLEHUB - script.js
   Product Data + Cart + Display Logic
   ============================================= */

// ===== ALL PRODUCTS DATABASE =====
const allProducts = [

  // ============ WOMEN ============
  { id: 1, category: "women", sub: "saree", name: "Banarasi Silk Saree - Royal Blue", price: 2499, original: 4999, brand: "FabIndia", size: ["Free"], color: "Royal Blue", rating: 4.5, reviews: 312, badge: "sale", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80" },
  { id: 2, category: "women", sub: "saree", name: "Chiffon Georgette Saree - Pastel Pink", price: 1299, original: 2599, brand: "Meena Bazaar", size: ["Free"], color: "Pink", rating: 4.3, reviews: 187, badge: "sale", image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80" },
  { id: 3, category: "women", sub: "saree", name: "Cotton Linen Saree - Earthy Tones", price: 899, original: 1799, brand: "Utsav Fashion", size: ["Free"], color: "Beige", rating: 4.2, reviews: 95, badge: "new", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80" },
  { id: 4, category: "women", sub: "kurti", name: "Anarkali Embroidered Kurti - Teal", price: 799, original: 1499, brand: "W for Woman", size: ["S","M","L","XL","XXL"], color: "Teal", rating: 4.4, reviews: 421, badge: "sale", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80" },
  { id: 5, category: "women", sub: "kurti", name: "Straight Fit Cotton Kurti - White", price: 549, original: 999, brand: "Biba", size: ["XS","S","M","L","XL"], color: "White", rating: 4.1, reviews: 256, badge: "", image: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=400&q=80" },
  { id: 6, category: "women", sub: "bodycon", name: "Bodycon Midi Dress - Black", price: 1199, original: 2299, brand: "Zara", size: ["XS","S","M","L"], color: "Black", rating: 4.6, reviews: 534, badge: "hot", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80" },
  { id: 7, category: "women", sub: "bodycon", name: "Ruched Bodycon Dress - Emerald", price: 1499, original: 2799, brand: "H&M", size: ["XS","S","M","L","XL"], color: "Emerald", rating: 4.5, reviews: 289, badge: "new", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80" },
  { id: 8, category: "women", sub: "jeans", name: "High Waist Skinny Jeans - Blue", price: 1699, original: 3299, brand: "Levi's", size: ["26","28","30","32","34"], color: "Blue", rating: 4.7, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&q=80" },
  { id: 9, category: "women", sub: "jeans", name: "Wide Leg Jeans - Stone Wash", price: 1999, original: 3799, brand: "Pepe Jeans", size: ["26","28","30","32"], color: "Light Blue", rating: 4.4, reviews: 342, badge: "new", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80" },
  { id: 10, category: "women", sub: "tops", name: "Off-Shoulder Crop Top - Coral", price: 599, original: 999, brand: "Forever 21", size: ["XS","S","M","L"], color: "Coral", rating: 4.2, reviews: 178, badge: "", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80" },
  { id: 11, category: "women", sub: "tops", name: "Printed Satin Blouse - Floral", price: 849, original: 1699, brand: "AND", size: ["S","M","L","XL"], color: "Multi", rating: 4.3, reviews: 224, badge: "sale", image: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=400&q=80" },
  { id: 12, category: "women", sub: "gown", name: "Floor Length Evening Gown - Burgundy", price: 3299, original: 5999, brand: "SHEIN", size: ["XS","S","M","L","XL"], color: "Burgundy", rating: 4.5, reviews: 156, badge: "hot", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&q=80" },
  { id: 13, category: "women", sub: "gown", name: "A-Line Maxi Dress - Ivory", price: 2499, original: 4499, brand: "Vero Moda", size: ["S","M","L"], color: "Ivory", rating: 4.4, reviews: 98, badge: "new", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&q=80" },
  { id: 14, category: "women", sub: "dress", name: "Floral Mini Dress - Sundress", price: 1299, original: 2299, brand: "Zudio", size: ["XS","S","M","L","XL"], color: "Yellow", rating: 4.3, reviews: 267, badge: "sale", image: "https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=400&q=80" },
  { id: 15, category: "women", sub: "dress", name: "Shirt Dress - Denim Blue", price: 1799, original: 3299, brand: "Mango", size: ["XS","S","M","L"], color: "Denim", rating: 4.5, reviews: 341, badge: "", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&q=80" },

  // ============ MEN ============
  { id: 20, category: "men", sub: "shirt", name: "Oxford Button-Down Shirt - White", price: 1299, original: 2499, brand: "Allen Solly", size: ["S","M","L","XL","XXL"], color: "White", rating: 4.5, reviews: 678, badge: "sale", image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=400&q=80" },
  { id: 21, category: "men", sub: "shirt", name: "Slim Fit Casual Shirt - Navy", price: 999, original: 1999, brand: "Peter England", size: ["S","M","L","XL"], color: "Navy", rating: 4.3, reviews: 445, badge: "", image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400&q=80" },
  { id: 22, category: "men", sub: "shirt", name: "Linen Shirt - Sky Blue", price: 1499, original: 2799, brand: "Fabindia", size: ["S","M","L","XL","XXL"], color: "Sky Blue", rating: 4.4, reviews: 312, badge: "new", image: "https://images.unsplash.com/photo-1603252109360-909baaf261ae?w=400&q=80" },
  { id: 23, category: "men", sub: "jeans", name: "Slim Fit Jeans - Dark Indigo", price: 1799, original: 3499, brand: "Levi's", size: ["28","30","32","34","36"], color: "Dark Blue", rating: 4.7, reviews: 1024, badge: "hot", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&q=80" },
  { id: 24, category: "men", sub: "jeans", name: "Relaxed Fit Cargo Jeans", price: 1599, original: 2999, brand: "Jack & Jones", size: ["30","32","34","36"], color: "Olive", rating: 4.3, reviews: 267, badge: "sale", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&q=80" },
  { id: 25, category: "men", sub: "hoodie", name: "Heavyweight Pullover Hoodie - Charcoal", price: 1999, original: 3799, brand: "H&M", size: ["S","M","L","XL","XXL"], color: "Charcoal", rating: 4.6, reviews: 534, badge: "sale", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80" },
  { id: 26, category: "men", sub: "hoodie", name: "Zip-Up Fleece Hoodie - Forest Green", price: 2299, original: 4299, brand: "Roadster", size: ["S","M","L","XL"], color: "Green", rating: 4.4, reviews: 189, badge: "new", image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e4a?w=400&q=80" },
  { id: 27, category: "men", sub: "tshirt", name: "Graphic Oversized T-Shirt - Black", price: 699, original: 1299, brand: "HRX", size: ["S","M","L","XL","XXL"], color: "Black", rating: 4.2, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80" },
  { id: 28, category: "men", sub: "tshirt", name: "Round Neck Basic Tee - White", price: 399, original: 799, brand: "Jockey", size: ["S","M","L","XL","XXL"], color: "White", rating: 4.1, reviews: 1203, badge: "", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80" },
  { id: 29, category: "men", sub: "tshirt", name: "Polo T-Shirt - Navy Blue", price: 799, original: 1499, brand: "U.S. Polo Assn.", size: ["S","M","L","XL"], color: "Navy", rating: 4.5, reviews: 678, badge: "hot", image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400&q=80" },
  { id: 30, category: "men", sub: "jacket", name: "Bomber Jacket - Olive Green", price: 2999, original: 5999, brand: "Roadster", size: ["S","M","L","XL"], color: "Olive", rating: 4.6, reviews: 312, badge: "sale", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80" },
  { id: 31, category: "men", sub: "jacket", name: "Denim Jacket - Classic Blue", price: 2499, original: 4799, brand: "Pepe Jeans", size: ["S","M","L","XL","XXL"], color: "Blue", rating: 4.4, reviews: 245, badge: "new", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&q=80" },
  { id: 32, category: "men", sub: "jacket", name: "Puffer Down Jacket - Black", price: 3499, original: 6999, brand: "Puma", size: ["S","M","L","XL"], color: "Black", rating: 4.7, reviews: 189, badge: "hot", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80" },

  // ============ SHOES ============
  // Sneakers
  { id: 40, category: "shoes", sub: "sneakers", name: "Air Force Classic Sneakers", price: 7999, original: 12999, brand: "Nike", size: ["6","7","8","9","10","11"], color: "White", rating: 4.8, reviews: 2134, badge: "hot", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { id: 41, category: "shoes", sub: "sneakers", name: "Ultraboost 22 Running Shoes", price: 12999, original: 19999, brand: "Adidas", size: ["6","7","8","9","10","11","12"], color: "Black/White", rating: 4.9, reviews: 3421, badge: "hot", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400&q=80" },
  { id: 42, category: "shoes", sub: "sneakers", name: "Classic Leather Sneakers", price: 4999, original: 8999, brand: "Reebok", size: ["6","7","8","9","10","11"], color: "White/Green", rating: 4.5, reviews: 876, badge: "sale", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&q=80" },
  { id: 43, category: "shoes", sub: "sneakers", name: "Gel-Kayano Running Shoes", price: 9499, original: 14999, brand: "Asics", size: ["7","8","9","10","11"], color: "Blue/Orange", rating: 4.7, reviews: 567, badge: "sale", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=400&q=80" },
  { id: 44, category: "shoes", sub: "sneakers", name: "Chuck Taylor All Star Hi", price: 3999, original: 6499, brand: "Converse", size: ["5","6","7","8","9","10","11"], color: "Black", rating: 4.6, reviews: 1893, badge: "", image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=400&q=80" },
  { id: 45, category: "shoes", sub: "sneakers", name: "Old Skool Checkerboard", price: 5499, original: 8999, brand: "Vans", size: ["6","7","8","9","10","11"], color: "Black/White", rating: 4.5, reviews: 1243, badge: "new", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&q=80" },
  // Heels & Pumps
  { id: 46, category: "shoes", sub: "heels", name: "Stiletto Heels - Classic Red", price: 2999, original: 5499, brand: "Steve Madden", size: ["4","5","6","7","8","9"], color: "Red", rating: 4.4, reviews: 445, badge: "sale", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80" },
  { id: 47, category: "shoes", sub: "heels", name: "Block Heel Pumps - Nude", price: 1999, original: 3799, brand: "Nine West", size: ["4","5","6","7","8"], color: "Nude", rating: 4.3, reviews: 287, badge: "", image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80" },
  { id: 48, category: "shoes", sub: "heels", name: "Kitten Heel Mules - Black", price: 2499, original: 4299, brand: "Aldo", size: ["5","6","7","8","9"], color: "Black", rating: 4.5, reviews: 192, badge: "new", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&q=80" },
  // Ankle Boots
  { id: 49, category: "shoes", sub: "boots", name: "Chelsea Ankle Boots - Black", price: 4999, original: 8999, brand: "Dr. Martens", size: ["5","6","7","8","9","10"], color: "Black", rating: 4.8, reviews: 789, badge: "hot", image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=400&q=80" },
  { id: 50, category: "shoes", sub: "boots", name: "Cowboy Ankle Boots - Brown", price: 3999, original: 7499, brand: "Clarks", size: ["5","6","7","8","9"], color: "Brown", rating: 4.4, reviews: 342, badge: "sale", image: "https://images.unsplash.com/photo-1618898909019-010e4e234c55?w=400&q=80" },
  // Sandals
  { id: 51, category: "shoes", sub: "sandals", name: "Birkenstock Arizona - Cork", price: 5499, original: 7999, brand: "Birkenstock", size: ["4","5","6","7","8","9","10"], color: "Brown", rating: 4.7, reviews: 1234, badge: "hot", image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=400&q=80" },
  { id: 52, category: "shoes", sub: "sandals", name: "Havaianas Slim Flip Flops", price: 799, original: 1499, brand: "Havaianas", size: ["5","6","7","8","9"], color: "Pink", rating: 4.3, reviews: 2145, badge: "sale", image: "https://images.unsplash.com/photo-1563620915-b6b9b5e63cf5?w=400&q=80" },
  { id: 53, category: "shoes", sub: "sandals", name: "Strappy Gladiator Sandals", price: 1499, original: 2799, brand: "Aldo", size: ["4","5","6","7","8","9"], color: "Gold", rating: 4.2, reviews: 189, badge: "new", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  // Crocs
  { id: 54, category: "shoes", sub: "crocs", name: "Classic Clog - Ocean Blue", price: 3499, original: 4999, brand: "Crocs", size: ["4","5","6","7","8","9","10","11"], color: "Blue", rating: 4.6, reviews: 3421, badge: "hot", image: "https://images.unsplash.com/photo-1625048260855-5a69dc0e4a0e?w=400&q=80" },
  { id: 55, category: "shoes", sub: "crocs", name: "Crocs Literide Slide", price: 2799, original: 4499, brand: "Crocs", size: ["5","6","7","8","9","10"], color: "White", rating: 4.4, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  // Cleats / Sports
  { id: 56, category: "shoes", sub: "cleats", name: "Mercurial Vapor Football Cleats", price: 6999, original: 11999, brand: "Nike", size: ["7","8","9","10","11"], color: "Neon Yellow", rating: 4.7, reviews: 534, badge: "hot", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { id: 57, category: "shoes", sub: "cleats", name: "Predator Edge+ FG Cleats", price: 8999, original: 14999, brand: "Adidas", size: ["7","8","9","10","11","12"], color: "Black/Gold", rating: 4.8, reviews: 312, badge: "new", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" },
  // Saddle shoes
  { id: 58, category: "shoes", sub: "saddle", name: "Classic Saddle Oxford Shoes", price: 2999, original: 4999, brand: "Bata", size: ["5","6","7","8","9","10"], color: "Black/White", rating: 4.2, reviews: 178, badge: "new", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&q=80" },

  // ============ BEAUTY ============
  // Skincare - Cleansers
  { id: 60, category: "beauty", sub: "cleanser", name: "Foaming Face Wash - Vitamin C", price: 399, original: 699, brand: "Nykaa", size: ["100ml"], color: "", rating: 4.4, reviews: 1234, badge: "sale", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80" },
  { id: 61, category: "beauty", sub: "cleanser", name: "Micellar Cleansing Water", price: 499, original: 899, brand: "Garnier", size: ["200ml","400ml"], color: "", rating: 4.6, reviews: 2341, badge: "hot", image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80" },
  { id: 62, category: "beauty", sub: "cleanser", name: "CeraVe Hydrating Cleanser", price: 699, original: 1199, brand: "CeraVe", size: ["236ml"], color: "", rating: 4.8, reviews: 3421, badge: "hot", image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&q=80" },
  // Moisturizers
  { id: 63, category: "beauty", sub: "moisturizer", name: "Hydra Boost Water Gel SPF 30", price: 899, original: 1599, brand: "Neutrogena", size: ["50ml"], color: "", rating: 4.6, reviews: 1876, badge: "sale", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80" },
  { id: 64, category: "beauty", sub: "moisturizer", name: "Peptide Complex Night Cream", price: 1299, original: 2299, brand: "Olay", size: ["50g"], color: "", rating: 4.5, reviews: 892, badge: "new", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80" },
  { id: 65, category: "beauty", sub: "moisturizer", name: "Aloe Vera Gel - Daily Moisturiser", price: 299, original: 499, brand: "Nykaa", size: ["200ml"], color: "", rating: 4.3, reviews: 3124, badge: "sale", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=400&q=80" },
  // Serums
  { id: 66, category: "beauty", sub: "serum", name: "Vitamin C Brightening Serum", price: 799, original: 1499, brand: "Minimalist", size: ["30ml"], color: "", rating: 4.7, reviews: 4521, badge: "hot", image: "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&q=80" },
  { id: 67, category: "beauty", sub: "serum", name: "Hyaluronic Acid 2% + B5 Serum", price: 599, original: 1099, brand: "The Ordinary", size: ["30ml"], color: "", rating: 4.8, reviews: 6789, badge: "hot", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&q=80" },
  { id: 68, category: "beauty", sub: "serum", name: "Retinol 0.5% Renewal Serum", price: 899, original: 1699, brand: "Minimalist", size: ["30ml"], color: "", rating: 4.6, reviews: 2134, badge: "sale", image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=400&q=80" },
  // Foundation
  { id: 69, category: "beauty", sub: "foundation", name: "Fit Me Matte + Poreless Foundation", price: 499, original: 899, brand: "Maybelline New York", size: ["30ml"], color: "Various", rating: 4.5, reviews: 5678, badge: "hot", image: "https://images.unsplash.com/photo-1631214524020-3c69b3b8d9a5?w=400&q=80" },
  { id: 70, category: "beauty", sub: "foundation", name: "HD Pro Coverage Foundation", price: 799, original: 1399, brand: "Lakme", size: ["25ml"], color: "Various", rating: 4.4, reviews: 2341, badge: "sale", image: "https://images.unsplash.com/photo-1625166408528-aa43e5b4e9b4?w=400&q=80" },
  { id: 71, category: "beauty", sub: "foundation", name: "Stay Matte Long Lasting Foundation", price: 599, original: 1099, brand: "SUGAR Cosmetics", size: ["15ml"], color: "12 Shades", rating: 4.3, reviews: 1892, badge: "new", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&q=80" },
  // Lipsticks
  { id: 72, category: "beauty", sub: "lipstick", name: "SuperStay Matte Ink Liquid Lipstick", price: 699, original: 1199, brand: "Maybelline New York", size: [""], color: "Red Alert", rating: 4.6, reviews: 4512, badge: "hot", image: "https://images.unsplash.com/photo-1586495777744-4e6fdf192b4e?w=400&q=80" },
  { id: 73, category: "beauty", sub: "lipstick", name: "Enrich Matte Lipstick", price: 349, original: 599, brand: "Lakme", size: [""], color: "Brick Red", rating: 4.4, reviews: 3421, badge: "sale", image: "https://images.unsplash.com/photo-1631214524020-3c69b3b8d9a5?w=400&q=80" },
  { id: 74, category: "beauty", sub: "lipstick", name: "Ace Of Face Lipstick - Velvet", price: 799, original: 1299, brand: "SUGAR Cosmetics", size: [""], color: "Berry Burst", rating: 4.7, reviews: 2134, badge: "new", image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=400&q=80" },
  // Eye Palettes
  { id: 75, category: "beauty", sub: "eyepalette", name: "Naked Reloaded Eye Palette", price: 1499, original: 2799, brand: "Nykaa", size: [""], color: "Nude", rating: 4.5, reviews: 1234, badge: "sale", image: "https://images.unsplash.com/photo-1583241475880-083f84372725?w=400&q=80" },
  { id: 76, category: "beauty", sub: "eyepalette", name: "Colour Riche Eye Shadow", price: 899, original: 1599, brand: "L'Oreal", size: [""], color: "Smokey", rating: 4.4, reviews: 892, badge: "", image: "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?w=400&q=80" },
  // Haircare
  { id: 77, category: "beauty", sub: "haircare", name: "Argan Oil Hair Mask - Deep Repair", price: 599, original: 999, brand: "Nykaa", size: ["200ml"], color: "", rating: 4.5, reviews: 1892, badge: "sale", image: "https://images.unsplash.com/photo-1560759226-14da22a643ef?w=400&q=80" },
  { id: 78, category: "beauty", sub: "haircare", name: "Keratin Bond Shampoo", price: 449, original: 799, brand: "Tresemme", size: ["200ml","400ml"], color: "", rating: 4.3, reviews: 3124, badge: "", image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&q=80" },
  { id: 79, category: "beauty", sub: "haircare", name: "Coconut Hair Oil - Growth Booster", price: 299, original: 599, brand: "Mamaearth", size: ["150ml","250ml"], color: "", rating: 4.6, reviews: 5678, badge: "hot", image: "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?w=400&q=80" },

  // ============ ACCESSORIES ============
  // Hair
  { id: 80, category: "accessories", sub: "hair", name: "Floral Bow Hair Clips - Set of 6", price: 299, original: 599, brand: "Clovia", size: [""], color: "Multi", rating: 4.3, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80" },
  { id: 81, category: "accessories", sub: "hair", name: "Mini Claw Clips - Pastel Pack", price: 199, original: 399, brand: "Accessorize", size: [""], color: "Pastel", rating: 4.2, reviews: 1234, badge: "new", image: "https://images.unsplash.com/photo-1619604668993-ca74e5d7234c?w=400&q=80" },
  { id: 82, category: "accessories", sub: "hair", name: "Satin Scrunchie Set - Aesthetic", price: 349, original: 699, brand: "Clovia", size: [""], color: "Various", rating: 4.4, reviews: 567, badge: "", image: "https://images.unsplash.com/photo-1625304765776-4e1b35b50a58?w=400&q=80" },
  // Bracelets
  { id: 83, category: "accessories", sub: "bracelet", name: "DIY Charm Bracelet Kit - Boho", price: 499, original: 999, brand: "Accessorize", size: ["Free"], color: "Gold/Multi", rating: 4.5, reviews: 456, badge: "new", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80" },
  { id: 84, category: "accessories", sub: "bracelet", name: "Beaded Stretch Bracelet Stack", price: 349, original: 699, brand: "H&M", size: ["Free"], color: "Blue/White", rating: 4.3, reviews: 312, badge: "sale", image: "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=400&q=80" },
  // Rings
  { id: 85, category: "accessories", sub: "rings", name: "Gold Adjustable Butterfly Ring", price: 399, original: 799, brand: "Accessorize", size: ["Free"], color: "Gold", rating: 4.4, reviews: 789, badge: "hot", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" },
  { id: 86, category: "accessories", sub: "rings", name: "Stackable Silver Band Rings - Set 5", price: 599, original: 1199, brand: "Malabar Gold", size: ["6","7","8","9"], color: "Silver", rating: 4.5, reviews: 445, badge: "sale", image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80" },
  // Bags
  { id: 87, category: "accessories", sub: "bag", name: "Aesthetic Tote Bag - Canvas", price: 799, original: 1499, brand: "H&M", size: [""], color: "Beige", rating: 4.5, reviews: 1234, badge: "hot", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { id: 88, category: "accessories", sub: "bag", name: "Mini Crossbody Bag - Quilted", price: 1299, original: 2499, brand: "Aldo", size: [""], color: "Black", rating: 4.6, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  { id: 89, category: "accessories", sub: "bag", name: "Aesthetic Bag Charm - Teddy Bear", price: 299, original: 599, brand: "Accessorize", size: [""], color: "Brown", rating: 4.2, reviews: 312, badge: "new", image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&q=80" },
  { id: 90, category: "accessories", sub: "bag", name: "Structured Work Tote - Tan", price: 2499, original: 4999, brand: "Charles & Keith", size: [""], color: "Tan", rating: 4.7, reviews: 678, badge: "sale", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80" },
  // Necklaces
  { id: 91, category: "accessories", sub: "necklace", name: "Layered Gold Necklace Set", price: 899, original: 1799, brand: "Accessorize", size: ["Free"], color: "Gold", rating: 4.5, reviews: 567, badge: "hot", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" },
  { id: 92, category: "accessories", sub: "necklace", name: "Pearl Statement Necklace", price: 1299, original: 2499, brand: "Mango", size: ["Free"], color: "White", rating: 4.4, reviews: 289, badge: "sale", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80" },
  // Earrings
  { id: 93, category: "accessories", sub: "earrings", name: "Gold Hoop Earrings - Chunky", price: 599, original: 1199, brand: "Accessorize", size: [""], color: "Gold", rating: 4.6, reviews: 1234, badge: "hot", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80" },
  { id: 94, category: "accessories", sub: "earrings", name: "Floral Stud Earrings - Set of 3", price: 399, original: 799, brand: "H&M", size: [""], color: "Multi", rating: 4.3, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80" },
  { id: 95, category: "accessories", sub: "earrings", name: "Crystal Drop Earrings - Silver", price: 799, original: 1599, brand: "Aldo", size: [""], color: "Silver", rating: 4.5, reviews: 456, badge: "new", image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&q=80" },
  // Watches
  { id: 96, category: "accessories", sub: "watch", name: "Analogue Rose Gold Watch", price: 2999, original: 5999, brand: "Fossil", size: ["Free"], color: "Rose Gold", rating: 4.7, reviews: 1234, badge: "hot", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { id: 97, category: "accessories", sub: "watch", name: "Smart Watch - Health Tracker", price: 4999, original: 8999, brand: "Fastrack", size: ["Free"], color: "Black", rating: 4.5, reviews: 2341, badge: "sale", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80" },
  { id: 98, category: "accessories", sub: "watch", name: "Minimalist Leather Strap Watch", price: 3499, original: 6999, brand: "Daniel Wellington", size: ["Free"], color: "Brown/Gold", rating: 4.8, reviews: 3421, badge: "hot", image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80" },
  // Sunglasses
  { id: 99, category: "accessories", sub: "sunglasses", name: "Wayfarer Sunglasses - Classic", price: 1299, original: 2499, brand: "Ray-Ban", size: ["Free"], color: "Black", rating: 4.7, reviews: 2341, badge: "hot", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80" },
  { id: 100, category: "accessories", sub: "sunglasses", name: "Cat Eye Sunglasses - Tortoise", price: 899, original: 1799, brand: "Fastrack", size: ["Free"], color: "Tortoise", rating: 4.4, reviews: 892, badge: "sale", image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=400&q=80" },
  { id: 101, category: "accessories", sub: "sunglasses", name: "Aviator Sunglasses - Gold", price: 1099, original: 2199, brand: "Titan", size: ["Free"], color: "Gold", rating: 4.5, reviews: 1123, badge: "new", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80" }
];

// ===== STAR GENERATOR =====
function getStars(rating) {
  let stars = '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars += '★';
  if (half) stars += '½';
  while (stars.replace('½','').length < 5) stars += '☆';
  return stars;
}

// ===== DISPLAY PRODUCTS =====
function displayProducts(category, filteredList = null) {
  const container = document.getElementById('products');
  if (!container) return;

  const products = filteredList
    ? filteredList
    : allProducts.filter(p => p.category === category);

  // Update results count
  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = `${products.length} Products`;

  if (products.length === 0) {
    container.innerHTML = `<div style="padding:60px;text-align:center;color:#888;grid-column:1/-1;">No products found. Try different filters.</div>`;
    return;
  }

  container.innerHTML = products.map(p => {
    const discount = p.original
      ? Math.round(((p.original - p.price) / p.original) * 100)
      : 0;
    const badge = p.badge
      ? `<span class="product-badge badge-${p.badge}">${p.badge === 'sale' ? discount + '% OFF' : p.badge.toUpperCase()}</span>`
      : '';
    const sizes = p.size && p.size.length > 0 && p.size[0] !== ''
      ? `<div class="product-sizes" style="font-size:0.75rem;color:#888;margin-bottom:8px;">${p.size.map(s => `<span style="background:#f0f0f5;padding:2px 6px;border-radius:4px;margin-right:3px;">${s}</span>`).join('')}</div>`
      : '';
    return `
    <div class="product-card" data-id="${p.id}">
      ${badge}
      <button class="wishlist-btn" onclick="toggleWishlist(this, ${p.id})" title="Add to wishlist">♡</button>
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&q=80'">
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${getStars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        ${sizes}
        <div class="product-price-row">
          <span class="price-current">₹${p.price.toLocaleString()}</span>
          ${p.original ? `<span class="price-original">₹${p.original.toLocaleString()}</span>` : ''}
          ${discount ? `<span class="price-discount">${discount}% off</span>` : ''}
        </div>
        <button class="add-cart-btn" onclick="addToCart(${p.id}, this)">
          🛒 Add to Cart
        </button>
      </div>
    </div>`;
  }).join('');
}

// ===== WISHLIST TOGGLE =====
function toggleWishlist(btn, id) {
  if (btn.textContent === '♡') {
    btn.textContent = '♥';
    btn.style.color = '#e63946';
    showToast('Added to Wishlist ♥', 'success');
  } else {
    btn.textContent = '♡';
    btn.style.color = '';
    showToast('Removed from Wishlist', '');
  }
}

// ===== CART =====
function getCart() {
  return JSON.parse(localStorage.getItem('stylehub_cart') || '[]');
}
function saveCart(cart) {
  localStorage.setItem('stylehub_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, btn) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  saveCart(cart);
  btn.textContent = '✓ Added!';
  btn.classList.add('added');
  setTimeout(() => {
    btn.textContent = '🛒 Add to Cart';
    btn.classList.remove('added');
  }, 1500);
  showToast(`${product.name.slice(0,30)}... added to cart!`, 'success');
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((sum, i) => sum + i.qty, 0);
  const badges = document.querySelectorAll('.cart-count');
  badges.forEach(b => b.textContent = total);
}

// ===== CART PAGE =====
function renderCart() {
  const container = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total-amount');
  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="empty-icon">🛒</div>
        <p>Your cart is empty!</p>
        <a href="index.html">← Continue Shopping</a>
      </div>`;
    if (totalEl) totalEl.textContent = '₹0';
    if (subtotalEl) subtotalEl.textContent = '₹0';
    return;
  }

  let subtotal = 0;
  let originalTotal = 0;
  cart.forEach(i => {
    subtotal += i.price * i.qty;
    originalTotal += (i.original || i.price) * i.qty;
  });
  const savings = originalTotal - subtotal;
  const delivery = subtotal > 500 ? 0 : 49;
  const total = subtotal + delivery;

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&q=80'">
      <div class="cart-item-info">
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:8px;">
          <div class="cart-item-price">₹${(item.price * item.qty).toLocaleString()}</div>
          <div style="display:flex;align-items:center;gap:8px;">
            <button onclick="changeQty(${item.id},-1)" style="width:28px;height:28px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:1rem;font-weight:700;">−</button>
            <span style="font-weight:600;min-width:20px;text-align:center;">${item.qty}</span>
            <button onclick="changeQty(${item.id},1)" style="width:28px;height:28px;border:1px solid #ddd;border-radius:6px;background:#fff;cursor:pointer;font-size:1rem;font-weight:700;">+</button>
          </div>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕ Remove</button>
    </div>`).join('');

  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
  if (discountEl) discountEl.textContent = savings > 0 ? `−₹${savings.toLocaleString()}` : '₹0';
  if (totalEl) totalEl.textContent = `₹${total.toLocaleString()}`;

  // Save total for payment page
  localStorage.setItem('stylehub_total', total);
}

function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  let cart = getCart();
  cart = cart.filter(i => i.id !== id);
  saveCart(cart);
  renderCart();
  showToast('Item removed from cart', '');
}

// ===== PAYMENT =====
function paymentSuccess() {
  localStorage.removeItem('stylehub_cart');
  updateCartBadge();
  window.location.href = 'success.html';
}

// ===== TOAST =====
function showToast(message, type) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>${type === 'success' ? '✅' : 'ℹ️'}</span> ${message}`;
  toast.className = `toast ${type}`;
  requestAnimationFrame(() => toast.classList.add('show'));
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== SEARCH =====
function searchProducts(query) {
  if (!query.trim()) return;
  const q = query.toLowerCase();
  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.sub.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    (p.color && p.color.toLowerCase().includes(q))
  );
  return results;
}

// ===== FILTERS =====
function setupFilters(category) {
  const checkboxes = document.querySelectorAll('.filter-group input[type="checkbox"]');
  const sortSelect = document.getElementById('sort-select');
  
  function applyFilters() {
    let filtered = allProducts.filter(p => p.category === category);
    
    // Sub-category filters
    const checkedSubs = [];
    document.querySelectorAll('.filter-sub:checked').forEach(cb => checkedSubs.push(cb.value));
    if (checkedSubs.length > 0) {
      filtered = filtered.filter(p => checkedSubs.includes(p.sub));
    }
    
    // Size filters
    const checkedSizes = [];
    document.querySelectorAll('.filter-size:checked').forEach(cb => checkedSizes.push(cb.value));
    if (checkedSizes.length > 0) {
      filtered = filtered.filter(p => p.size && p.size.some(s => checkedSizes.includes(s)));
    }
    
    // Sort
    if (sortSelect) {
      const sort = sortSelect.value;
      if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
      else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
      else if (sort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
      else if (sort === 'popular') filtered.sort((a, b) => b.reviews - a.reviews);
    }
    
    displayProducts(category, filtered);
  }

  checkboxes.forEach(cb => cb.addEventListener('change', applyFilters));
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
}

// ===== MOBILE FILTERS =====
function toggleMobileFilters() {
  const filters = document.querySelector('.filters');
  const overlay = document.querySelector('.filter-overlay');
  if (filters) filters.classList.toggle('open');
  if (overlay) overlay.classList.toggle('open');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  // Search form
  const searchBtn = document.querySelector('.search-box button');
  const searchInput = document.querySelector('.search-box input');
  if (searchBtn && searchInput) {
    const doSearch = () => {
      const q = searchInput.value.trim();
      if (!q) return;
      const results = searchProducts(q);
      const container = document.getElementById('products');
      if (container) {
        displayProducts('', results);
      } else {
        // Redirect to search page or show toast
        localStorage.setItem('stylehub_search', q);
        window.location.href = `search.html?q=${encodeURIComponent(q)}`;
      }
    };
    searchBtn.addEventListener('click', doSearch);
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  }

  // Mobile filter overlay
  const overlay = document.querySelector('.filter-overlay');
  if (overlay) overlay.addEventListener('click', toggleMobileFilters);
});