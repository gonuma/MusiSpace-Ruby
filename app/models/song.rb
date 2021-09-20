class Song < ApplicationRecord
has_many :comments

before_create :slugify

    def slugify
        self.slug = band.parameterize + "-" + song.parameterize
    end
end
