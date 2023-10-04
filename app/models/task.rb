class Task < ApplicationRecord
  validates :category, :description, :time, presence: true
  before_create :check_record

  private

  def check_record
    if Task.exists?(category: category, hidden: false)
      errors.add(:base, "A record with the same category already exists.")
      throw(:abort)
    end
  end
end
