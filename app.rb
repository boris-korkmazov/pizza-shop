require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

def parse_order_line(string)
  array = string.split(',')
  return_array= []
  array.each{|item|
    i = item.split('=')
    return_array.push([i[0].split('_')[1], i[1]])
  }
  return_array
end

set :database, "sqlite3:pizzashop.sqlite"


class Product < ActiveRecord::Base
end

class Order < ActiveRecord::Base
end

get '/' do
  @products = Product.all
	erb :index
end

get '/about' do
  erb :about
end

post '/cart' do
  @orders_line = params[:order]
  @order= parse_order_line params[:order]
  @total_price = 0
  @total_qty = 0
  @order.map! do |item|
    item[0] = Product.find(item[0])
    @total_price += item[0].price*item[1].to_i
    @total_qty += item[1].to_i
    item
  end
  erb :cart
end

post '/order_placed' do
   
  @order = Order.create(params[:order])

  erb :order_placed
end