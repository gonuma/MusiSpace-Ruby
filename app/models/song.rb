class Song < ApplicationRecord
has_many :comments, dependent: :delete_all

before_create :slugify

    def slugify
        self.slug = band.parameterize + "-" + title.parameterize + "-" + poster.parameterize
    end
end
