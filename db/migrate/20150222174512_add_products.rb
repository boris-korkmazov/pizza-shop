class AddProducts < ActiveRecord::Migration
  def change
    Product.create!(
      title: "Margarita",
      description: "This is Margarit's pizza",
      price: 120,
      size: 30,
      is_spicy: false,
      is_veg: false,
      is_best_offer: true,
      path_to_image: "/images/margarita.jpeg"
      )
    Product.create!(
      title: "Assorti",
      description: "This is Assorti pizza",
      price: 420,
      size: 30,
      is_spicy: true,
      is_veg: false,
      is_best_offer: false,
      path_to_image: "/images/assorti.jpg"
      )
    Product.create!(
      title: "Vegetarian",
      description: "Amazing Vegetarian pizza",
      price: 320,
      size: 30,
      is_spicy: true,
      is_veg: true,
      is_best_offer: false,
      path_to_image: "/images/veg.jpeg"
      )
  end
end
