class UsersController < ApplicationController
  respond_to :json
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(params[:user])
    if @user.save
      render json: @user
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      redirect_to :index
    else
      render :show
    end
  end

end
