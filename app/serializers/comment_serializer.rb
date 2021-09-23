class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :song_id, :commenter, :id
end
