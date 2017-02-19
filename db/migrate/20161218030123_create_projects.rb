class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :subTitle
      t.string :tech
      t.string :img
      t.string :body
      t.string :platform
      t.string :link


      t.timestamps
    end
  end
end
