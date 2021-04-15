class ProductController < ApplicationController

  after_action :register_visit, only: [:show]

  def show
    @product = Product.find(params[:id])
    #authorize @product
    set_page_options
  end

  helper_method :recent_products
  attr_accessor :product

  def recent_products
    [] if recently.none?
    Product.where(id: recently)
  end

  def recently
    session[:viewed_product] ||= []
  end

  def register_visit
    session[:viewed_product] ||= []
    session[:viewed_product] = ([@product.id] + session[:viewed_product]).uniq.take(3)
  end



  def set_page_options
    set_meta_tags product.slice(:title, :keywords, :description)
    add_breadcrumb  'Home', :root_path, title: 'Home'
  end
end
