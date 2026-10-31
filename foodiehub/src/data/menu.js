const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const menu = [
  { id: 'm1', name: 'Classic Burger', desc: 'Juicy and delicious', price: 8.99, cat: 'Burgers', featured: true, img: u('photo-1568901346375-23c9450c58cd'), fb: 'burger' },
  { id: 'm2', name: 'Margherita Pizza', desc: 'Cheesy perfection', price: 12.99, cat: 'Pizza', featured: true, img: u('photo-1513104890138-7c749659a591'), fb: 'pizza' },
  { id: 'm3', name: 'Creamy Pasta', desc: 'Rich and tasty', price: 11.99, cat: 'Pasta', featured: true, img: u('photo-1621996346565-e3dbc646d9a9'), fb: 'pasta' },
  { id: 'm4', name: 'French Fries', desc: 'Crispy and golden', price: 4.99, cat: 'Sides', featured: true, img: u('photo-1573080496219-bb080dd4f877'), fb: 'fries' },
  { id: 'm5', name: 'Cold Coffee', desc: 'Chilled perfection', price: 5.99, cat: 'Drinks', featured: true, img: u('photo-1461023058943-07fcbe16d735'), fb: 'coffee' },
  { id: 'm6', name: 'Double Cheese Burger', desc: 'Two patties, melted cheddar', price: 10.99, cat: 'Burgers', img: u('photo-1550547660-d9450f859349'), fb: 'burger' },
  { id: 'm7', name: 'Pepperoni Pizza', desc: 'Spicy slices, stretchy cheese', price: 13.99, cat: 'Pizza', img: u('photo-1628840042765-356cda07504e'), fb: 'pizza' },
  { id: 'm8', name: 'Chicken Biryani', desc: 'Fragrant rice, slow cooked', price: 9.99, cat: 'Rice', img: u('photo-1563379091339-03b21ab4a4f8'), fb: 'r-biryani' },
  { id: 'm9', name: 'Chocolate Shake', desc: 'Thick, cold and creamy', price: 6.49, cat: 'Drinks', img: u('photo-1572490122747-3968b75cc699'), fb: 'coffee' },
  { id: 'm10', name: 'Garden Stir Fry', desc: 'Crunchy vegetables, soy glaze', price: 8.49, cat: 'Rice', img: u('photo-1512058564366-18510be2db19'), fb: 'r-stirfry' },
]

export const categories = ['All', ...Array.from(new Set(menu.map((m) => m.cat)))]
