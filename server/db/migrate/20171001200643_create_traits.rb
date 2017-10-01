class CreateTraits < ActiveRecord::Migration
  def change
    create_table :traits do |t|
      t.string :name
      t.string :src

      t.timestamps null: false
    end
  end
end
