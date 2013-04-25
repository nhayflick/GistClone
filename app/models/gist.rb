class Gist < ActiveRecord::Base
   attr_accessible :title, :user_id, :follower_ids

   belongs_to :user, inverse_of: :gists

   has_many :user_favorites
   has_many :followers, through: :user_favorites, source: :user

   validates :title, :user, presence: true
end
