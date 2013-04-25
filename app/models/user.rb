class User < ActiveRecord::Base
  attr_accessible :user_name,:favorite_ids

  has_many :gists, inverse_of: :user

  has_many :user_favorites

  has_many :favorites, through: :user_favorites, source: :gist

  validates :user_name, presence: true, uniqueness: true

end
