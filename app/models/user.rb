class User < ApplicationRecord

  has_secure_password
  has_many :workouts
  has_many :exercises
  has_many :stats

  validates :email, :password, :username, presence: true, on: :create
  validates :password, confirmation: true
  validates :email, uniqueness: true

end
