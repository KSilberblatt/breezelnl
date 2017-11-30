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

user1 = User.create!(
  username: "Kevin Silberblatt",
  email: "Kevin Silberblatt",
  password: "adminpassword"
)
User.create!(
  username: "Demo",
  email: "Demo",
  password: "password"
)

spot1 = Spot.create!(
  owner_id: user1.id,
  address: '67 Montego Ct, Coronado, CA 92118',
  image_url: 'https://blog.rent.com/wp-content/uploads/2014/12/Renting-a-Condo-vs-Apartment.jpg',
  category: 'Condominium',
  title: 'Captivating Coastal Condo',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot2 = Spot.create!(
  owner_id: user1.id,
  address: '2 Montego Ct, Coronado, CA 92118',
  image_url: 'https://static.pexels.com/photos/106399/pexels-photo-106399.jpeg',
  category: 'Condominium',
  title: '2',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot3 = Spot.create!(
  owner_id: user1.id,
  address: '3 Montego Ct, Coronado, CA 92118',
  image_url: 'http://i.huffpost.com/gen/1425498/original.jpg',
  category: 'Condominium',
  title: '3',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot4 = Spot.create!(
  owner_id: user1.id,
  address: '4 Montego Ct, Coronado, CA 92118',
  image_url: 'http://rockymountaintinyhouses.com/wp-content/uploads/2013/04/DSC_2160.jpg',
  category: 'Condominium',
  title: '4',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot5 = Spot.create!(
  owner_id: user1.id,
  address: '5 Montego Ct, Coronado, CA 92118',
  image_url: 'https://static.dezeen.com/uploads/2017/11/surfboard-house-bfdo_dezeen_2364_sq2.jpg',
  category: 'Condominium',
  title: '5',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot6 = Spot.create!(
  owner_id: user1.id,
  address: '6 Montego Ct, Coronado, CA 92118',
  image_url: 'https://hips.hearstapps.com/edc.h-cdn.co/assets/16/33/1471371651-cliff-house-tb-001-night-from-water-2.jpg',
  category: 'Condominium',
  title: '6',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot7 = Spot.create!(
  owner_id: user1.id,
  address: '7 Montego Ct, Coronado, CA 92118',
  image_url: 'https://qzprod.files.wordpress.com/2015/06/floating-seahorse.jpg?quality=80&strip=all&w=4000',
  category: 'Condominium',
  title: '7',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot8 = Spot.create!(
  owner_id: user1.id,
  address: '8 Montego Ct, Coronado, CA 92118',
  image_url: 'https://i2.wp.com/unusualplaces.org/wp-content/uploads/2012/03/pianohouse3.jpg',
  category: 'Condominium',
  title: '8',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot9 = Spot.create!(
  owner_id: user1.id,
  address: '9 Montego Ct, Coronado, CA 92118',
  image_url: 'http://7p3nq48zas72j674m34vzol1-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/Upstate-new-york-houses-for-sale-02.jpg',
  category: 'Condominium',
  title: '9',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

spot10 = Spot.create!(
  owner_id: user1.id,
  address: '10 Montego Ct, Coronado, CA 92118',
  image_url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Tambulian_KotaBelud_Sabah_Traditional-houses-01.jpg',
  category: 'Condominium',
  title: '10',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)

Review.create!(
  user_id: user1.id,
  spot_id: spot1.id,
  rating: 5,
  description: "My stay was super nice and super chill"
)
Review.create!(
  user_id: user1.id,
  spot_id: spot1.id,
  rating: 4,
  description: "My stay was really nice and really chill"
)
Review.create!(
  user_id: user1.id,
  spot_id: spot1.id,
  rating: 3,
  description: "My stay was nice and chill"
)
Review.create!(
  user_id: user1.id,
  spot_id: spot2.id,
  rating: 3,
  description: "My stay was nice and chill here too"
)
Booking.create!(
  user_id: user1.id,
  spot_id: spot1.id,
  :start_date => DateTime.strptime("01/14/2018 8:00", "%m/%d/%Y %H:%M"),
  :end_date => DateTime.strptime("01/14/2018 9:00", "%m/%d/%Y %H:%M")
)
Booking.create!(
  user_id: user1.id,
  spot_id: spot1.id,
  :start_date => DateTime.strptime("01/20/2018 8:00", "%m/%d/%Y %H:%M"),
  :end_date => DateTime.strptime("01/21/2018 9:00", "%m/%d/%Y %H:%M")
)
Booking.create!(
  user_id: user1.id,
  spot_id: spot2.id,
  :start_date => DateTime.strptime("01/14/2018 8:00", "%m/%d/%Y %H:%M"),
  :end_date => DateTime.strptime("01/14/2018 9:00", "%m/%d/%Y %H:%M")
)
