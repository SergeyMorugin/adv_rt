# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Document.delete_all

Document.create! ([
	{ 
		name:"Test Document",
	 	doctype:"pdf",
	 	content_text:"this is a content_text",
	 	content_html:"<p>this <strong>is a</strong> content_html</p>"
	 },
	 { 
		name:"Just another Document",
	 	doctype:"docx",
	 	content_text:"this is an OTHER content_text",
	 	content_html:"<p>this is an OTHER <strong>content_html</strong></p>"
	 },
	 { 
		name:"Some Spreadsheet document",
	 	doctype:"xlsx",
	 	content_text:"this is an XLS content_text",
	 	content_html:"<p>this is an <em>XLS</em> content_html</p>"
	 }
	])
