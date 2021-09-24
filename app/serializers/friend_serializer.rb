class FriendSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :id, :friend_username
end
