class IndexController < ApplicationController

  def home
    @projects = Project.all

    render :homepage
  end

  def connect
  end

  def projects
  end

end
