class CreateEliteItems < ActiveRecord::Migration
  def change
    create_table :elite_items do |t|
      t.string :name
      t.decimal :price
      t.string :src

      t.timestamps null: false
    end
  end
end
