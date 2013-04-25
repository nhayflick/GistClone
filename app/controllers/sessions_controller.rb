class SessionsController < ApplicationController
  def new
  end

  def create
    if log_in(params[:user_name])
      redirect_to gists_url
    else
      redirect_to root_url
    end
  end

  def destroy
    log_out
    #redirect_to root_url
    render json: {}, status: 200
  end
end
