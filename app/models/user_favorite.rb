class UserFavorite < ActiveRecord::Base
  attr_accessible :user_id, :gist_id

  validates :user, :gist, presence: true

  belongs_to :user
  belongs_to :gist
end
