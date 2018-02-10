class CreateDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :documents do |t|
      t.string :name
      t.string :doctype, limit:4
      t.text :content_text
      t.text :content_html

      t.timestamps
    end
  end
end
