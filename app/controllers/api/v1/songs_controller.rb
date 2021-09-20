module Api
    module V1
        class SongsController < ApplicationController
            protect_from_forgery with: :null_session
            def index
                songs = Song.all

                render json: SongSerializer.new(songs, options).serialized_json
            end

            def show
                song = Song.find_by(slug: params[:slug])

                render json: SongSerializer.new(song, options).serialized_json
            end

            def create
                song = Song.new(song_params)

                if song.save
                    render json: SongSerializer.new(song).serialized_json
                else
                    render json: {error: song.errors.messages}, status: 422
                 end
            end

            def update
                song = Song.find_by(slug: params[:slug])

                if song.update(song_params)
                    render json: SongSerializer.new(song, options).serialized_json
                else
                    render json: {error: song.errors.messages}, status: 422
                 end
            end

            def destroy
                song = Song.find_by(slug: params[:slug])

                if song.destroy
                    head :no_content
                else
                    render json: {error: song.errors.messages}, status: 422
                 end
            end


            private

            def song_params
                params.require(:song).permit(:band, :title)
            end

            def options
                @options ||= { include: %i[comments]}
            end
        end
    end
end
