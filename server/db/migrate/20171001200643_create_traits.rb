class CreateTraits < ActiveRecord::Migration
  def change
    create_table :traits do |t|
      t.string :name
      t.string :trait_type

      t.timestamps null: false
    end
  end
end
