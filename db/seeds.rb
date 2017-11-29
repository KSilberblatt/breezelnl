# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Spot.destroy_all
Review.destroy_all
Booking.destroy_all

User.create!(
  id: 92118,
  username: "Kevin Silberblatt",
  email: "Kevin Silberblatt",
  password: "adminpassword"
)
User.create!(
  username: "Demo",
  email: "Demo",
  password: "password"
)

Spot.create!(
  id: 1,
  owner_id: 92118,
  address: '67 Montego Ct, Coronado, CA 92118',
  image_url: 'https://blog.rent.com/wp-content/uploads/2014/12/Renting-a-Condo-vs-Apartment.jpg',
  category: 'Condominium',
  title: 'Captivating Coastal Condo',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 2,
  owner_id: 92118,
  address: '2 Montego Ct, Coronado, CA 92118',
  image_url: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  category: 'Condominium',
  title: '2',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 3,
  owner_id: 92118,
  address: '3 Montego Ct, Coronado, CA 92118',
  image_url: 'http://i.huffpost.com/gen/1425498/original.jpg',
  category: 'Condominium',
  title: '3',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 4,
  owner_id: 92118,
  address: '4 Montego Ct, Coronado, CA 92118',
  image_url: 'http://rockymountaintinyhouses.com/wp-content/uploads/2013/04/DSC_2160.jpg',
  category: 'Condominium',
  title: '4',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 5,
  owner_id: 92118,
  address: '5 Montego Ct, Coronado, CA 92118',
  image_url: 'https://static.dezeen.com/uploads/2017/11/surfboard-house-bfdo_dezeen_2364_sq2.jpg',
  category: 'Condominium',
  title: '5',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 6,
  owner_id: 92118,
  address: '6 Montego Ct, Coronado, CA 92118',
  image_url: 'https://hips.hearstapps.com/edc.h-cdn.co/assets/16/33/1471371651-cliff-house-tb-001-night-from-water-2.jpg',
  category: 'Condominium',
  title: '6',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 7,
  owner_id: 92118,
  address: '7 Montego Ct, Coronado, CA 92118',
  image_url: 'https://qzprod.files.wordpress.com/2015/06/floating-seahorse.jpg?quality=80&strip=all&w=4000',
  category: 'Condominium',
  title: '7',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 8,
  owner_id: 92118,
  address: '8 Montego Ct, Coronado, CA 92118',
  image_url: 'https://i2.wp.com/unusualplaces.org/wp-content/uploads/2012/03/pianohouse3.jpg',
  category: 'Condominium',
  title: '8',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 9,
  owner_id: 92118,
  address: '9 Montego Ct, Coronado, CA 92118',
  image_url: 'http://7p3nq48zas72j674m34vzol1-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/Upstate-new-york-houses-for-sale-02.jpg',
  category: 'Condominium',
  title: '9',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Spot.create!(
  id: 10,
  owner_id: 92118,
  address: '10 Montego Ct, Coronado, CA 92118',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Tambulian_KotaBelud_Sabah_Traditional-houses-01.jpg',
  category: 'Condominium',
  title: '10',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Review.create!(
  id: 101,
  user_id: 92118,
  spot_id: 1,
  rating: 5,
  description: "My stay was super nice and super chill"
)
Review.create!(
  id: 102,
  user_id: 92118,
  spot_id: 1,
  rating: 4,
  description: "My stay was really nice and really chill"
)
Review.create!(
  id: 103,
  user_id: 92118,
  spot_id: 1,
  rating: 3,
  description: "My stay was nice and chill"
)
Review.create!(
  id: 203,
  user_id: 92118,
  spot_id: 2,
  rating: 3,
  description: "My stay was nice and chill here too"
)
Booking.create!(
  id: 11,
  user_id: 92118,
  spot_id: 1,
  :start_date => DateTime.strptime("01/14/2018 8:00", "%m/%d/%Y %H:%M"),
  :end_date => DateTime.strptime("01/14/2018 9:00", "%m/%d/%Y %H:%M")
)
Booking.create!(
  id: 12,
  user_id: 92118,
  spot_id: 1,
  :start_date => DateTime.strptime("01/20/2018 8:00", "%m/%d/%Y %H:%M"),
  :end_date => DateTime.strptime("01/21/2018 9:00", "%m/%d/%Y %H:%M")
)
Booking.create!(
  id: 21,
  user_id: 92118,
  spot_id: 2,
  :start_date => DateTime.strptime("01/14/2018 8:00", "%m/%d/%Y %H:%M"),
  :end_date => DateTime.strptime("01/14/2018 9:00", "%m/%d/%Y %H:%M")
)
