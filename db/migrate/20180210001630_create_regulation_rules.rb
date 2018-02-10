class CreateRegulationRules < ActiveRecord::Migration[5.1]
  def change
    create_table :regulation_rules do |t|
      t.string :name
      t.string :category, limit:10

      t.timestamps
    end
  end
end
