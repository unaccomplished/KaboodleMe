module UserHelper
  def authenticate_user user
    auth_headers = user.create_new_auth_token
    request.headers.merge!(auth_headers)
  end
end

RSpec.configure do |c|
  c.include UserHelper
end
