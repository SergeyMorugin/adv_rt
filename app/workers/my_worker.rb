class MyWorker
  include Sidekiq::Worker
  def perform(message)
    puts message
  end
end