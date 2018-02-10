class Api::DocumentsController < ApplicationController
	# app/controllers/api/quotes_controller.rb
  def show
  	@document = Document.find(params[:id])
  end
end
