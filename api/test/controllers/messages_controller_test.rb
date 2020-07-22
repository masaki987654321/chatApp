require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
	test "should create messages" do
		assert_difference('Message.count') do
			post messages_url, params: {text: "testtttt", room_id: "980190962"}
		end
		assert_response :success
	end
end
