module Api
    module V1
        class FriendsController < ApplicationController
            protect_from_forgery with: :null_session

            def show
                friends = Friend.all

                render json: FriendSerializer.new(friends).serialized_json
            end

            def create
                friend = Friend.new(friend_params)
            
                if friend.save
                    render json: FriendSerializer.new(friend).serialized_json
                else
                    render json: { error: friend.errors.messages }, status: 422
                end
            end

            def destroy
                friend = Friend.find(params[:id])
            
                if friend.destroy
                    head :no_content
                else
                    render json: { error: friend.errors.messages }, status: 422
                end
            end


            private

            def friend_params
                params.require(:friend).permit(:username)
            end
        end
    end
end
