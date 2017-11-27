class CreateSpots < ActiveRecord::Migration[5.1]
  def change
    create_table :spots do |t|
      t.string :owner_id, null: false
      t.string :address, null: false
      t.string :category, null: false
      t.string :title, null: false
      t.string :price, null: false
      t.text :description

      t.timestamps
    end
    add_index :spots, :address, unique: true
  end
end
