import math

def factorial(n):
    """Calculates the factorial of n."""
    return 1 if n == 0 else n * factorial(n - 1)

def combination(n, k):
    """Calculates the number of combinations (n choose k)."""
    return factorial(n) // (factorial(k) * factorial(n - k))

def calculate_probability(total_items, mines, cleared):
    """Calculates the probability of clearing a given number of tiles without hitting a mine."""
    safe_tiles = total_items - mines
    return combination(safe_tiles, cleared) * combination(mines, total_items - cleared) / combination(total_items, total_items)

def calculate_multiplier(total_items, mines, cleared, house_edge=0.03):
    """Calculates the multiplier based on the probability of success and a house edge."""
    probability_of_success = calculate_probability(total_items, mines, cleared)
    fair_multiplier = 1 / probability_of_success
    return fair_multiplier * (1 - house_edge)

def simulate_game(total_items=25, mines=1, cleared=4, simulations=1000):
    player_balance = 0
    house_balance = 0
    multiplier = calculate_multiplier(total_items, mines, cleared)
    
    for _ in range(simulations):
        grid = ['gem'] * (total_items - mines) + ['mine'] * mines
        random.shuffle(grid)
        
        cleared_count = 0
        for item in grid:
            if item == 'mine':
                house_balance += 1
                break
            else:
                cleared_count += 1
                if cleared_count == cleared:
                    player_balance += multiplier
                    break
    
    return player_balance, house_balance, multiplier

# Simulate the game with specified parameters
total_items = 25
mines = 1
cleared = 4
simulations = 1000
player_balance, house_balance, multiplier = simulate_game(total_items, mines, cleared, simulations)

player_balance, house_balance, multiplier
