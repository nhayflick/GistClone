class UserFavoritesController < ApplicationController
  respond_to :json

  def index
    @user_favorites = UserFavorite.all
    render json: @user_favorites
  end

  def create
    @user_favorite = UserFavorite.new(params[:user_favorite])
    if @user_favorite.save
      render json: @user_favorite
    else
      render json: @user_favorite.errors, status: 422
    end

  end

  def destroy
    @user_favorite = UserFavorite.where("user_id = ? AND gist_id = ?",
                                    params[:user_id], params[:gist_id])[0]

    if @user_favorite.destroy
      render json: @user_favorite
    else
      render json: @user_favorite.errors, status: 422
    end

  end
end
