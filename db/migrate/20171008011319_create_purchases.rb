class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|

      t.integer :user_id
      t.integer :elite_item_id

      t.timestamps null: false
    end
  end
end
