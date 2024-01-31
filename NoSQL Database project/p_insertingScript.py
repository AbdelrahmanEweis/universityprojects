def addToPlayer(player_data):
    for single_player in range(len(player_data[0])):
        file.write(f'{"{"}\n\tusername: "{player_data[0][single_player]}",\n\tinventory: {"{"}\n\t\tequiped: {"{"}\n\t\t\tweapon: "{player_data[1][single_player]}",\n\t\t\tskill: "{player_data[2][single_player]}",\n\t\t\tconsumable: "{player_data[3][single_player]}",\n\t\t\thead: "{player_data[3][single_player]}",\n\t\t\ttorso: "{player_data[3][single_player]}",\n\t\t\tarms: "{player_data[3][single_player]}",\n\t\t\tlegs: "{player_data[3][single_player]}",\n\t\t\tfeet: "{player_data[3][single_player]}"\n\t\t{"}"},\n\t\tbackpack: [\n\t\t\t{player_data[5][single_player]}\n\t\t]\n\t{"}"},\n\thealth: {player_data[6][single_player]},\n\tstamina: {player_data[7][single_player]},\n\tarmor: {player_data[8][single_player]},\n\tmastery: {"{"}\n\t\tweapon: {player_data[9][single_player]},\n\t\tskill: {player_data[10][single_player]},\n\t\tthrowable: "{player_data[11][single_player]}"\n\t{"}"},\n\tsavepoint: {"{"}\n\t\tlocation: "{player_data[12][single_player]}",\n\t\tdate: Date()\n\t{"}"}\n{"}"},\n')
        
def addToItem(item_data):
    for single_player in range(len(item_data[0])):
        file.write(f'{"{"}\n\titem_name: "{item_data[0][single_player]}",\n\tquest_item: {item_data[1][single_player]},\n\tused_in_crafting: {item_data[2][single_player]},\n\tcraftable: {item_data[3][single_player]},\n\trecipe: {item_data[4][single_player]}\n{"}"},\n')

def addToWeapon(weapon_data):
    for single_player in range(len(weapon_data[0])):
        file.write(f'{"{"}\n\tweapon_name: "{weapon_data[0][single_player]}",\n\tdamage: {weapon_data[1][single_player]},\n\tlevel: {weapon_data[2][single_player]} \n{"}"},\n')

def addToArmor(armor_data):
    for single_player in range(len(armor_data[0])):
        file.write(f'{"{"}\n\tarmor_name: "{armor_data[0][single_player]}",\n\tresistance: {armor_data[1][single_player]},\n\tbodypart: "{armor_data[2][single_player]}",\n\tlevel: {armor_data[3][single_player]}\n{"}"},\n')

def addToConsumable(consumable_data):
    for single_player in range(len(consumable_data[0])):
        file.write(f'{"{"}\n\tconsumable_name: "{consumable_data[0][single_player]}",\n\ttype: "{consumable_data[1][single_player]}",\n\tlevel: {consumable_data[2][single_player]} \n{"}"},\n')

def addToSkill(skill_data):
    for single_player in range(len(skill_data[0])):
        file.write(f'{"{"}\n\tskill_name: "{skill_data[0][single_player]}",\n\tcategory: "{skill_data[1][single_player]}",\n\tprerequisite_skills: {skill_data[2][single_player]}\n{"}"},\n')

def addToMap(map_data):
    for single_player in range(len(map_data[0])):
        file.write(f'{"{"}\n\tlocation_name: "{map_data[0][single_player]}",\n\tregion: "{map_data[1][single_player]}",\n\thas_savepoint: {map_data[2][single_player]}\n{"}"},\n')

def addToMission(mission_data):
    for single_player in range(len(mission_data[0])):
        file.write(f'{"{"}\n\tmission_name: "{mission_data[0][single_player]}",\n\tprerequisite_missions: {mission_data[1][single_player]},\n\tmain_mission: {mission_data[2][single_player]}\n{"}"},\n')


choice= 0
while choice != -1:
    file= open("t_InsertOutput.txt","w")    
    print('1. Player\n2. Item\n3. Weapon\n4. Armor\n5. Consumable\n6. Skill\n7. Map_location\n8. Mission\n-1. Exit\n')
    choice= int(input('Choose collection to add to: '))
    
    if choice == 1:
        playerData= []

        usernames= input('Enter usernames (comma sepperated): ').split(',')
        equiped_weapon= input('Enter equiped weapon (comma sepperated): ').split(',')
        equiped_skill= input('Enter equiped skills (comma seperated): ').split(',')
        equiped_consumable= input('Enter equiped consumables (comma seperated): ').split(',')
        head= input("Enter equiped head (comma seperated): ").split(",")
        torso= input("Enter equiped torso (comma seperated): ").split(",")
        arms= input("Enter equiped arms (comma seperated): ").split(",")
        legs= input("Enter equiped legs (comma seperated): ").split(",")
        feet= input("Enter equiped feet (comma seperated): ").split(",")
        backpack_items= input('Enter backpacked items (in a list, (dash seperated) [~~, ~~] - [~~]): ').split('-')
        health= input('Enter health (comma seperated): ').split(',')
        stamina= input('Enter stamina (comma seperated): ').split(',')
        armor= input('Enter armor (comma seperated): ').split(',')
        weapon_mastery= input('Enter weapon mastery (comma seperated): ').split(',')
        skill_mastery= input('Enter skill mastery (comma seperated): ').split(',')
        throwable_mastery= input('Enter throwable mastery (comma seperated): ').split(',')
        savepoint_location= input('savepoint location (comma seperated): ').split(',')
        
        playerData.append(usernames)
        playerData.append(equiped_weapon)
        playerData.append(equiped_skill)
        playerData.append(equiped_consumable)
        playerData.append(head)
        playerData.append(torso)
        playerData.append(arms)
        playerData.append(legs)
        playerData.append(feet)
        playerData.append(backpack_items)
        playerData.append(health)
        playerData.append(stamina)
        playerData.append(armor)
        playerData.append(weapon_mastery)
        playerData.append(skill_mastery)
        playerData.append(throwable_mastery)
        playerData.append(savepoint_location)

        if len(usernames) == len(equiped_weapon) == len(equiped_skill) == len(equiped_consumable) == len(head) == len(torso) == len(arms) == len(legs) == len(feet) == len(backpack_items) == len(health) == len(stamina) == len(armor) == len(weapon_mastery) == len(skill_mastery) == len(throwable_mastery) == len(savepoint_location):
            addToPlayer(playerData)
        else:
            print('Documents should be the same size')
            continue

    elif choice == 2:
        playerData= []

        item_name= input('Enter Item Name (comma sepperated): ').split(',')
        quest_item= input('Quest item? (comma sepperated): ').split(',')
        used_in_crafting= input('Used in crafting? (comma seperated): ').split(',')
        craftable= input('Craftable? (comma seperated): ').split(',')
        recipe= input('recipes (- seperated): ').split('-')
        
        playerData.append(item_name)
        playerData.append(quest_item)
        playerData.append(craftable)
        playerData.append(used_in_crafting)
        playerData.append(recipe)

        if len(item_name) == len(quest_item) == len(craftable) == len(used_in_crafting) == len(recipe):
            addToItem(playerData)
        else:
            print('Documents should be the same size')
            continue

    elif choice == 3:
        playerData= []

        weapon_name= input('Enter Weapon Name (comma sepperated): ').split(',')
        damage= input('Damage (comma sepperated): ').split(',')
        level= input('Weapon Level (comma seperated): ').split(',')
        
        playerData.append(weapon_name)
        playerData.append(damage)
        playerData.append(level)

        if len(weapon_name) == len(damage) == len(level):
            addToWeapon(playerData)
        else:
            print('Documents should be the same size')
            continue
    elif choice == 4:
        playerData= []

        armor_name= input('Enter Armor Name (comma sepperated): ').split(',')
        resistance= input('Resistance (comma sepperated): ').split(',')
        bodypart= input('Bodypart(head, torso, legs, arms, feet) (comma seperated): ').split(',')
        level= input('Armor Level (comma seperated): ').split(',')
        
        playerData.append(armor_name)
        playerData.append(resistance)
        playerData.append(bodypart)
        playerData.append(level)

        if len(armor_name) == len(resistance) == len(bodypart) == len(level):
            addToArmor(playerData)
        else:
            print('Documents should be the same size')
            continue
    elif choice == 5:
        playerData= []

        consumable_name= input('Enter Consumable Name (comma sepperated): ').split(',')
        c_type= input('Type (comma sepperated): ').split(',')
        level= input('Consumable Level (comma seperated): ').split(',')
        
        playerData.append(consumable_name)
        playerData.append(c_type)
        playerData.append(level)

        if len(consumable_name) == len(c_type) == len(level):
            addToConsumable(playerData)
        else:
            print('Documents should be the same size')
            continue
    elif choice == 6:
        playerData= []

        skill_name= input('Enter Skill Name (comma sepperated): ').split(',')
        category= input('Category (comma sepperated): ').split(',')
        prerequisite_skills= input('Enter pre-requisite skills (in a list, (dash seperated) [~~, ~~] - [~~]): ').split('-')
        
        playerData.append(skill_name)
        playerData.append(category)
        playerData.append(prerequisite_skills)

        if len(skill_name) == len(category) == len(prerequisite_skills):
            addToSkill(playerData)
        else:
            print('Documents should be the same size')
            continue
    elif choice == 7:
        playerData= []

        location_name= input('Enter Location Name (comma sepperated): ').split(',')
        region= input('Region (comma sepperated): ').split(',')
        has_savepoint= input('Is savepoint? (comma seperated): ').split(',')
        
        playerData.append(location_name)
        playerData.append(region)
        playerData.append(has_savepoint)

        if len(location_name) == len(region) == len(has_savepoint):
            addToMap(playerData)
        else:
            print('Documents should be the same size')
            continue
    elif choice == 8:
        playerData= []

        mission_name= input('Enter Mission Name (comma sepperated): ').split(',')
        prerequisite_mission= input('prerequisite missions (dash seperated [~~] - [~~]): ').split('-')
        main_mission= input('Is main mission? (comma seperated): ').split(',')
        
        playerData.append(mission_name)
        playerData.append(prerequisite_mission)
        playerData.append(main_mission)

        if len(mission_name) == len(prerequisite_mission) == len(main_mission):
            addToMission(playerData)
        else:
            print('Documents should be the same size')
            continue
    else:
        continue