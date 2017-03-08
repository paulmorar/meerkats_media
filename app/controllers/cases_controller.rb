class CasesController < ApplicationController
  def index
    @cases = StaticRecord.read_database_file('cases')['cases']
  end
  
  def show
    @case = StaticRecord.read_database_file('cases')['cases'].detect{ |c| c['id'] == params[:id] }
  end
end
