require 'rails_helper'

RSpec.describe "Marketings", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/marketing/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /forge" do
    it "returns http success" do
      get "/marketing/forge"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /about" do
    it "returns http success" do
      get "/marketing/about"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /contact" do
    it "returns http success" do
      get "/marketing/contact"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /careers" do
    it "returns http success" do
      get "/marketing/careers"
      expect(response).to have_http_status(:success)
    end
  end

end
