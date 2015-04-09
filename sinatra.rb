require 'sinatra'
require 'json'

get '/' do
  # logger.info "Default page requested by #{request.ip}"
  # "Singletrack-Watermarker is running."
  logger.info "Home page requested by #{request.ip}"
  # "Hi there... I don't know how to serve webpages yet, here is some text"
  erb :index
end

# get '/download' do
#   content_type :json
#   {"params" => params}.to_json
#   logger.info "/download requested by #{request.ip}"
#   logger.info "!!! address params: #{params}"
#   Watermarker.new("#{params['pdf']}","#{params['contact']}", "#{params['properties']}.properties")
#
#   send_file "./#{params['pdf'].split('.pdf')[0]}-stamped.pdf", :filename => params['pdf'], :type => 'application/pdf'
# end
