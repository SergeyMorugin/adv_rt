class PagesController < ApplicationController
  def home
  	@first_document_id = Document.first.id
  end
end
