class CreateRegulations < ActiveRecord::Migration[5.1]
  def change
    create_table :regulations do |t|
      t.string :name
      t.string :category, limit:10

      t.timestamps
    end
  end
end
