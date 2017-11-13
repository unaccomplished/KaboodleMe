class PasswordresetMailer < ApplicationMailer
  default from: 'qb@kittenkaboodleshow.com'

  def passwordreset_email(user)
    @user = user
    @url = 'http://kittenkaboodleshow.com/kaboodleme'
    mail(to: @user.email,
         subject: 'KaboodleMe Reset Password Instructions',
         template_path: 'devise/mailer',
         template_name: 'reset_password_instructions')
  end
end
