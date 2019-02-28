class TopController < ApplicationController
  def index

  end
  def print
  # uncomment if you wanna use it with thermal printer
    img_num = params[:result]
    original_path = img_num.to_s + '.png'
    system('mv ' + original_path + ' output.png')
    system('python thermal-printer_test.py')
    system('mv output.png ' + original_path)
    redirect_to action: :index
  end
end
