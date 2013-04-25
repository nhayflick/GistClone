class GistsController < ApplicationController
  respond_to :json
  respond_to :html, only: [:index]

  def index
    if logged_in?
      @current_user = current_user
      @gists = current_user.gists
      respond_to do |format|
        format.html { render :index}
        format.json { render json: @gists }
      end
    else
      redirect_to new_session_url
    end
  end

  def create
    @gist = Gist.new(params[:gist])
    if @gist.save
      render json: @gist
    else
      render json: @gist.errors, status: 422
    end
  end

  def show
    @gist = Gist.find(params[:id])
    render json: @gist
  end

  def destroy
    @gist = Gist.find(params[:id])
    if @gist.destroy
      redirect_to :index
    else
      render :show
    end
  end
end
