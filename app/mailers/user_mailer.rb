class UserMailer < ApplicationMailer
  default from: 'qb@kittenkaboodleshow.com'

  def welcome_email(user)
    @user = user
    @url = 'http://kittenkaboodleshow.com/kaboodleme'
    mail(to: @user.email, subject: 'Welcome to Kittopia, Kittizen! - KaboodleMe App')
  end
end
