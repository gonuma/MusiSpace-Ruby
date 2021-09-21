class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :band
      t.string :title
      t.string :url
      t.string :img_url
      t.string :slug

      t.timestamps
    end
  end
end
