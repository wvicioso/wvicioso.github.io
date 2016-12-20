class IndexController < ApplicationController

  def home
    @projects = Project.all

    render :home
  end

  def connect
  end

  def projects
  end

end
