class SongSerializer
  include FastJsonapi::ObjectSerializer
  attributes :band, :song, :url, :slug

  has_many :comments
end
