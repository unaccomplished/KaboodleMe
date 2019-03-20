class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.text :name
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
