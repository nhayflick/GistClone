module SessionsHelper
  #session[:user_name]
  #current_user
    #look at the cookie, find the name and match the current user
  def current_user
    return nil if session[:user_name].nil?
    @user||= User.find_by_user_name(session[:user_name])
  end

  #log_in
    #sets the name in the cookie
  def log_in(user_name)
    if User.find_by_user_name(user_name)
      session[:user_name] = user_name
      true
    else
      false
    end
  end
  #log_out
  def log_out
    session[:user_name] = nil
  end
  #logged_in?
    #check to see if there is a valid user logged_in

  def logged_in?
    not current_user.nil?
  end
end
