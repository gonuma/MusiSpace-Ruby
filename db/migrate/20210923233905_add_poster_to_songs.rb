class AddPosterToSongs < ActiveRecord::Migration[6.1]
  def change
    add_column :songs, :poster, :string
  end
end
