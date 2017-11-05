# require 'rails_helper'
#
# RSpec.describe "Token Validations", type: :request do
#   describe 'signed in' do
#     let(:user) { build :user }
#     sign_in(:user)
#
#     it 'should respond with success' do
#       get '/api/v1/auth/validate_token' # yes, nothing changed here
#       expect(response).to have_http_status(:success)
#     end
#   end
#
#   describe 'signed out' do
#     it 'should respond with unauthorized' do
#       get '/api/v1/auth/validate_token'
#       expect(response).to have_http_status(:unauthorized)
#     end
#   end
# end 
