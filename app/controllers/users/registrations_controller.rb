class Users::RegistrationsController < Devise::RegistrationsController
  # Extend default devise gem behavior so that users signing up with the pro account (plan_id=2) save with a special subscription
  # Otherwise devise signs up user as usual
  def create
    super do |resource|
      if params[:plan]
        resource.plan_id = params[:plan]
        if resource.plan_id == 2
          resource.save_with_subscription
        else
          resource.save
        end
      end
    end
  end
end