class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :band, :title, :url, :slug

  has_many :comments
end
