class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :band
      t.string :song
      t.string :url
      t.string :slug

      t.timestamps
    end
  end
end
