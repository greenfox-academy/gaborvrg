# - Create a variable named `p1`
#   with the following content: `[1, 2, 3]`
# - Create a variable named `p2`
#   with the following content: `[4, 5]`
# - Print if `p2` has more elements than `p1`

p1 = [1, 2, 3]
p2 = [4, 5, 2, 6]

if len(p2) > len(p1):
	print('p2 list has more elements')