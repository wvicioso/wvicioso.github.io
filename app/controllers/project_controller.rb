class ProjectController < ApplicationController

  def find
    @project = Project.find_by(title: params[:title])

    render json: { partial: render_to_string("_project_body", layout: false, locals: {project: @project}) }
  end



end
