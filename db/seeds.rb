# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create!(
  id: 92118,
  username: "Kevin Silberblatt",
  email: "Kevin Silberblatt",
  password: "adminpassword"
)

Spot.create!(
  owner_id: 92118,
  address: '67 Montego Ct, Coronado, CA 92118',
  image_url: 'https://ssl.cdn-redfin.com/photo/48/mbpaddedwide/287/genMid.170025287_19_0.jpg',
  category: 'Condominium',
  title: 'Captivating Coastal Condo',
  price: '200',
  description: "This Captivating Coastal Condo is a glorious getaway geared towards freehearted families looking for a safe space for the kids to roam in a gated community while the parents have a romantic getaway at Loews Resort."
)
