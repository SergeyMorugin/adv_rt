class CreateAuditProfiles < ActiveRecord::Migration[5.1]
  def change
    create_table :audit_profiles do |t|
      t.string :name

      t.timestamps
    end
  end
end
