require 'active_model'
require 'active_model/conversion'
require 'active_model/naming'

class StaticRecord

  def initialize(params)
    super(params)
    valid?
  end

  def self.read_database_file(name)
    ActiveSupport::JSON.decode(File.read(File.join(Rails.root, 'db', "#{name}.json"))) rescue Rails.logger.error("Error in #{name}.json") && []
  end

end
