def mult(x,y)
x*y
end

def div(x,y)
 begin
  return x/y
 rescue
    return x/(y + 0.0000000000001)
 end
end

puts mult(2,3.0)
puts div(2,0)

