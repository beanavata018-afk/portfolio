# Class for Adventurers
class Adventurer:

    # Shared attribute
    guild_name = "Ironwood Adventurers Guild"

    # Individual attributes
    def __init__(self, name, role, level, weapon):
        self.name = name
        self.role = role
        self.level = level
        self.weapon = weapon


# Class for Monsters
class Monster:

    # Individual attributes
    def __init__(self, name, type, health, weakness):
        self.name = name
        self.type = type
        self.health = health
        self.weakness = weakness


# Creating 5 Adventurers
adventurer1 = Adventurer("Ethan Cole", "Swordsman", 12, "Longsword")
adventurer2 = Adventurer("Maya Bennett", "Archer", 10, "Hunting Bow")
adventurer3 = Adventurer("Lucas Reid", "Medic", 8, "Healing Kit")
adventurer4 = Adventurer("Clara Hayes", "Scout", 11, "Dagger")
adventurer5 = Adventurer("Daniel Foster", "Shield Bearer", 15, "Steel Shield")


# Creating 2 Monsters
monster1 = Monster("Blackfang", "Wild Wolf", 350, "Fire")
monster2 = Monster("Stoneback", "Cave Troll", 1200, "Lightning")


# Printing Adventurer Information
print("========================================")
print("           ADVENTURER GUILD")
print("========================================")

print("\nName:", adventurer1.name)
print("Role:", adventurer1.role)
print("Level:", adventurer1.level)
print("Weapon:", adventurer1.weapon)
print("Guild:", adventurer1.guild_name)

print("\nName:", adventurer2.name)
print("Role:", adventurer2.role)
print("Level:", adventurer2.level)
print("Weapon:", adventurer2.weapon)
print("Guild:", adventurer2.guild_name)

print("\nName:", adventurer3.name)
print("Role:", adventurer3.role)
print("Level:", adventurer3.level)
print("Weapon:", adventurer3.weapon)
print("Guild:", adventurer3.guild_name)

print("\nName:", adventurer4.name)
print("Role:", adventurer4.role)
print("Level:", adventurer4.level)
print("Weapon:", adventurer4.weapon)
print("Guild:", adventurer4.guild_name)

print("\nName:", adventurer5.name)
print("Role:", adventurer5.role)
print("Level:", adventurer5.level)
print("Weapon:", adventurer5.weapon)
print("Guild:", adventurer5.guild_name)


# Printing Monster Information
print("========================================")
print("               MONSTERS")
print("========================================")

print("\nName:", monster1.name)
print("Type:", monster1.type)
print("Health:", monster1.health)
print("Weakness:", monster1.weakness)

print("\nName:", monster2.name)
print("Type:", monster2.type)
print("Health:", monster2.health)
print("Weakness:", monster2.weakness)