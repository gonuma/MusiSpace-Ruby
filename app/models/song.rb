class Song < ApplicationRecord
has_many :comments

before_create :slugify

    def slugify
        self.slug = band.parameterize + "-" + title.parameterize
    end
end
