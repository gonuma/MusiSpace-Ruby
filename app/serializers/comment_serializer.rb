class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :song_id
end
