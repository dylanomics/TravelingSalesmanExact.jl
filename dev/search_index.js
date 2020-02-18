var documenterSearchIndex = {"docs":
[{"location":"index.html#TravelingSalesmanExact.jl-1","page":"Home","title":"TravelingSalesmanExact.jl","text":"","category":"section"},{"location":"index.html#","page":"Home","title":"Home","text":"","category":"page"},{"location":"index.html#","page":"Home","title":"Home","text":"Modules = [TravelingSalesmanExact]","category":"page"},{"location":"index.html#TravelingSalesmanExact.get_optimal_tour","page":"Home","title":"TravelingSalesmanExact.get_optimal_tour","text":"get_optimal_tour(\n    cost::AbstractMatrix,\n    optimizer = get_default_optimizer();\n    verbose = false,\n    symmetric = issymmetric(cost),\n)\n\nSolves the travelling salesman problem for a square cost matrix using JuMP by formulating a MILP using the Dantzig-Fulkerson-Johnson formulation and adaptively adding constraints to disallow non-maximal cycles. Returns an optimal tour and the cost of the optimal path.\n\nThe second argument is mandatory if a default optimizer has not been set (via set_default_optimizer). This argument should be a function which creates an optimizer, e.g.\n\n    get_optimal_tour(cities, GLPK.Optimizer)\n\n\n\n\n\n","category":"function"},{"location":"index.html#TravelingSalesmanExact.get_optimal_tour","page":"Home","title":"TravelingSalesmanExact.get_optimal_tour","text":"get_optimal_tour(\n    cities::AbstractVector,\n    optimizer = get_default_optimizer();\n    verbose = false,\n    distance = euclidean_distance,\n    symmetric = true,\n)\n\nSolves the travelling salesman problem for a list of cities using JuMP by formulating a MILP using the Dantzig-Fulkerson-Johnson formulation and adaptively adding constraints to disallow non-maximal cycles. Returns an optimal tour and the cost of the optimal path. Optionally specify a distance metric. \n\nThe second argument is mandatory if a default optimizer has not been set (via set_default_optimizer). This argument should be a function which creates an optimizer, e.g.\n\nget_optimal_tour(cities, GLPK.Optimizer)\n\n\n\n\n\n","category":"function"},{"location":"index.html#TravelingSalesmanExact.plot_cities-Tuple{Any}","page":"Home","title":"TravelingSalesmanExact.plot_cities","text":"plot_cities(cities)\n\nUses UnicodePlots's lineplot to make a plot of the tour of the cities in cities, in order (including going from the last city back to the first).\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.set_default_optimizer!-Tuple{Any}","page":"Home","title":"TravelingSalesmanExact.set_default_optimizer!","text":"set_default_optimizer(O)\n\nSets the default optimizer. For example,\n\nusing GLPK\nset_default_optimizer(GLPK.Optimizer)\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.simple_parse_tsp-Tuple{Any}","page":"Home","title":"TravelingSalesmanExact.simple_parse_tsp","text":"simple_parse_tsp(filename; verbose = true)\n\nTry to parse the \".tsp\" file given by filename. Very simple implementation just to be able to test the optimization; may break on other files. Returns a list of cities for use in get_optimal_tour.\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.ATT-Tuple{Any,Any}","page":"Home","title":"TravelingSalesmanExact.ATT","text":"ATT(city1, city2)\n\nThe ATT distance measure as specified in TSPLIB: https://www.iwr.uni-heidelberg.de/groups/comopt/software/TSPLIB95/tsp95.pdf.\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.euclidean_distance-Tuple{Any,Any}","page":"Home","title":"TravelingSalesmanExact.euclidean_distance","text":"euclidean_distance(city1, city2)\n\nThe usual Euclidean distance measure.\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.find_cycle","page":"Home","title":"TravelingSalesmanExact.find_cycle","text":"find_cycle(perm_matrix, starting_ind)\n\nReturns the cycle in the permutation described by perm_matrix which includes starting_ind.\n\n\n\n\n\n","category":"function"},{"location":"index.html#TravelingSalesmanExact.get_cycles-Tuple{Any}","page":"Home","title":"TravelingSalesmanExact.get_cycles","text":"get_cycles(perm_matrix)\n\nReturns a list of cycles from the permutation described by perm_matrix.\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.get_default_optimizer-Tuple{}","page":"Home","title":"TravelingSalesmanExact.get_default_optimizer","text":"get_default_optimizer()\n\nGets the default optimizer, which is set by set_default_optimizer.\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.plot_tour-Tuple{Any,Any}","page":"Home","title":"TravelingSalesmanExact.plot_tour","text":"show_tour(cities, perm_matrix)\n\nShow a plot of the tour described by perm_matrix of the cities in the vector cities.\n\n\n\n\n\n","category":"method"},{"location":"index.html#TravelingSalesmanExact.remove_cycles!-Tuple{Any,Any}","page":"Home","title":"TravelingSalesmanExact.remove_cycles!","text":"remove_cycles!(model, tour_matrix)\n\nFind the (non-maximal-length) cycles in the current solution tour_matrix and add constraints to the JuMP model to disallow them. Returns the number of cycles found.\n\n\n\n\n\n","category":"method"}]
}