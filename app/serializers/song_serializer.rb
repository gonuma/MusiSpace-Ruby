class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :band, :title, :url, :slug, :img_url

  has_many :comments
end
