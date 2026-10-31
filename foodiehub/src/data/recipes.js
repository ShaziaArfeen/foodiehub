const u = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const recipes = [
  {
    id: 'r1', name: 'Homemade Pizza', time: 30, level: 'Easy', serves: 4,
    img: u('photo-1565299624946-b28f40a0ae38'), fb: 'r-pizza',
    about: 'A thin, crisp base with a bright tomato sauce and a generous layer of mozzarella.',
    ingredients: ['2 cups plain flour', '1 tsp instant yeast', '3/4 cup warm water', '1/2 cup tomato sauce', '200 g mozzarella', 'Fresh basil and olive oil'],
    steps: ['Mix flour, yeast, salt and water, then knead for 8 minutes and rest for 10.', 'Stretch the dough thin on a floured tray.', 'Spread sauce, add mozzarella and your toppings.', 'Bake at 240 C for 10 to 12 minutes until the edges are golden.', 'Finish with basil and a drizzle of olive oil.'],
  },
  {
    id: 'r2', name: 'Pasta Carbonara', time: 20, level: 'Easy', serves: 2,
    img: u('photo-1612874742237-6526221588e3'), fb: 'r-carbonara',
    about: 'Silky egg and cheese sauce with crisp pancetta. No cream needed.',
    ingredients: ['200 g spaghetti', '100 g pancetta or beef bacon', '2 eggs and 1 yolk', '60 g parmesan', 'Black pepper'],
    steps: ['Boil the pasta in salted water until al dente and save a cup of the water.', 'Fry the pancetta until crisp.', 'Whisk eggs, parmesan and pepper in a bowl.', 'Toss hot pasta with the pancetta off the heat, then stir in the egg mix with splashes of pasta water.', 'Serve straight away with extra parmesan.'],
  },
  {
    id: 'r3', name: 'Chicken Biryani', time: 45, level: 'Medium', serves: 4,
    img: u('photo-1589302168068-964664d93dc0'), fb: 'r-biryani',
    about: 'Layers of spiced chicken and saffron rice, steamed together on low heat.',
    ingredients: ['500 g chicken pieces', '2 cups basmati rice', '1 cup yogurt', '2 onions, fried', 'Biryani masala, mint and coriander', 'Saffron milk'],
    steps: ['Marinate the chicken in yogurt and masala for 20 minutes.', 'Par-boil the rice with whole spices until 70 percent cooked.', 'Cook the chicken until the oil separates.', 'Layer rice over chicken with fried onions, herbs and saffron milk.', 'Seal and steam on low heat for 15 minutes.'],
  },
  {
    id: 'r4', name: 'Vegetable Stir Fry', time: 15, level: 'Easy', serves: 2,
    img: u('photo-1512058564366-18510be2db19'), fb: 'r-stirfry',
    about: 'A fast weeknight bowl with crunchy vegetables and a sticky soy glaze.',
    ingredients: ['2 cups mixed vegetables', '2 tbsp soy sauce', '1 tbsp honey', '2 garlic cloves', '1 tsp ginger', 'Sesame oil'],
    steps: ['Heat oil in a wok until very hot.', 'Fry garlic and ginger for 20 seconds.', 'Add vegetables and toss for 3 to 4 minutes.', 'Pour in soy and honey and cook until glossy.', 'Serve over rice or noodles.'],
  },
]
