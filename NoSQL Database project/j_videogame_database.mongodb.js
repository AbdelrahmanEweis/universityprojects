use("Videogame_Database");

db.createCollection("Player");
db.createCollection("Item");
db.createCollection("Weapon");
db.createCollection("Armor");
db.createCollection("Consumable");
db.createCollection("Skill");
db.createCollection("Map_Location");
db.createCollection("Mission");

db.Player.insertMany([
    {
        username: "yaszo",
        inventory: {
            equipped: {
                weapon: "nichirin blade",
                skill: "meteor shot",
                consumable: "health potion",
                head: "The honored one's blindfold",
                torso: "The honored one's jacket",
                arms: null,
                legs: "The honored one's pants",
                feet: "The honored one's boots"
            },
            backpack: [
                "rubiks cube", "fox tail", "baseball cap", "puzzle piece", "silver sword", "bow of the ancients", "stamina potion", "tea"
            ]
        },
        health: 100,
        stamina: 150,
        armor: 115,
        mastery: {
            weapon: 12,
            skill: 9
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "minedevil",
        inventory: {
            equipped: {
                weapon: "playful nunchucks",
                skill: "thunder bolt",
                consumable: "invisibility potion",
                head: "assassin's hood",
                torso: "assassin's robe",
                arms: "assassin's gloves",
                legs: "assassin's leggings",
                feet: "assassin's boots"
            },
            backpack: [
                "metal slinky", "invisible ink pen", "science fair award", "rainbow gemstone", "broken compass"
            ]
        },
        health: 90,
        stamina: 120,
        armor: 87,
        mastery: {
            weapon: 15,
            skill: 12
        },
        savepoint: {
            location: "igloosia",
            date: Date()
        }
    },
    {
        username: "lukavoid",
        inventory: {
            equipped: {
                weapon: "staff of chaos",
                skill: "frostbolt",
                consumable: "tea",
                head: "odin's crown",
                torso: "thor's chainmail",
                arms: "tyr's gauntlets",
                legs: "yggdrasil's leggings",
                feet: "frigg's greaves"
            },
            backpack: [
                "farmer's meal", "honey-glazed ham", "forstberry tart", "apple pie", "steak"
            ]
        },
        health: 110,
        stamina: 140,
        armor: 238,
        mastery: {
            weapon: 25,
            skill: 18
        },
        savepoint: {
            location: "miner's retreat",
            date: Date()
        }
    },
    {
        username: "swagman",
        inventory: {
            equipped: {
                weapon: "sniper rifle",
                skill: "ball of lightning",
                consumable: "speed potion",
                head: "The honored one's blindfold",
                torso: "assassin's robe",
                arms: "tyr's gauntlets",
                legs: null,
                feet: "assassin's boots"
            },
            backpack: [
                "amethyst", "camera", "bottle of wine", "balloon animal", "half eaten apple"
            ]
        },
        health: 95,
        stamina: 160,
        armor: 132,
        mastery: {
            weapon: 18,
            skill: 14
        },
        savepoint: {
            location: "ancient throne room",
            date: Date()
        }
    },
    {
        username: "suzkey",
        inventory: {
            equipped: {
                weapon: "blade of the heavens",
                skill: "ice blast",
                consumable: "adrenaline",
                head: null,
                torso: "assassin's robe",
                arms: null,
                legs: "assassin's leggings",
                feet: null
            },
            backpack: [
                "rubber chicken", "hand mirror", "singing seashell", "rubiks cube", "writer's notebook"
            ]
        },
        health: 120,
        stamina: 130,
        armor: 45,
        mastery: {
            weapon: 30,
            skill: 22
        },
        savepoint: {
            location: "ancient throne room",
            date: Date()
        }
    }
]);

db.Item.insertMany([
    {
        item_name: "tiger's eye",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "fox tail",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "writer's notebook",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "camera",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: ["lens", "iron tube", "button"]
    },

    {
        item_name: "bottle of wine",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "baseball cap",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "rusty spoon",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "broken compass",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "rubber chicken",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "singing seashell",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "hand mirror",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: ["glass shards", "iron"]
    },

    {
        item_name: "puzzle piece",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "invisible ink pen",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "metal slinky",
        quest_item: false,
        used_in_crafting: true,
        craftable: true,
        recipe: ["iron", "slinky mold"]
    },

    {
        item_name: "balloon animal",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: ["balloon"]
    },

    {
        item_name: "half eaten apple",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "science fair award",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "amethyst",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "rainbow gemstone",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: " rubiks cube",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: ["axel", "paint", "lubricant"]
    },
])
db.Weapon.insertMany([
    {
        weapon_name: "nichirin blade",
        damage: 24,
        level: 7
    },

    {
        weapon_name: "wooden bow",
        damage: 5,
        level: 1
    },

    {
        weapon_name: "silver sword",
        damage: 13,
        level: 1
    },

    {
        weapon_name: "samurai's katana",
        damage: 17,
        level: 3
    },

    {
        weapon_name: "playful nunchucks",
        damage: 20,
        level: 5
    },

    {
        weapon_name: "blade of the heavens",
        damage: 40,
        level: 10
    },

    {
        weapon_name: "bow of the ancients",
        damage: 35,
        level: 11
    },

    {
        weapon_name: "staff of chaos",
        damage: 80,
        level: 15
    },

    {
        weapon_name: "plasma rifle",
        damage: 95,
        level: 20
    },

    {
        weapon_name: "sniper rifle",
        damage: 70,
        level: 13
    }
])
db.Armor.insertMany([
    {
        armor_name: "The honored one's blindfold",
        resistance: 40,
        bodypart: "head",
        level: 20
    },

    {
        armor_name: "The honored one's jacket",
        resistance: 35,
        bodypart: "torso",
        level: 22
    },

    {
        armor_name: "The honored one's pants",
        resistance: 25,
        bodypart: "legs",
        level: 24
    },

    {
        armor_name: "The honored one's boots",
        resistance: 15,
        bodypart: "feet",
        level: 25
    },

    {
        armor_name: "assassin's hood",
        resistance: 25,
        bodypart: "head",
        level: 3
    },

    {
        armor_name: "assassin's robe",
        resistance: 30,
        bodypart: "torso",
        level: 1
    },

    {
        armor_name: "assassin's gloves",
        resistance: 10,
        bodypart: "arms",
        level: 2
    },

    {
        armor_name: "assassin's leggings",
        resistance: 15,
        bodypart: "legs",
        level: 1
    },

    {
        armor_name: "assassin's boots",
        resistance: 7,
        bodypart: "feet",
        level: 1
    },

    {
        armor_name: "odin's crown",
        resistance: 50,
        bodypart: "head",
        level: 27
    },

    {
        armor_name: "thor's chainmail",
        resistance: 70,
        bodypart: "torso",
        level: 30
    },

    {
        armor_name: "tyr's gauntlets",
        resistance: 55,
        bodypart: "arms",
        level: 28
    },

    {
        armor_name: "yggdrasil's leggings",
        resistance: 43,
        bodypart: "legs",
        level: 26
    },

    {
        armor_name: "frigg's greaves",
        resistance: 20,
        bodypart: "feet",
        level: 24
    },
])
db.Consumable.insertMany([
    {
        consumable_name: "health potion",
        type: "regeneration",
        level: 1
    },

    {
        consumable_name: "stamina potion",
        type: "regeneration",
        level: 1
    },

    {
        consumable_name: "endurance potion",
        type: "stat up",
        level: 5
    },

    {
        consumable_name: "bread",
        type: "regeneration",
        level: 1
    },

    {
        consumable_name: "water",
        type: "regeneration",
        level: 1
    },

    {
        consumable_name: "tea",
        type: "regeneration",
        level: 3
    },

    {
        consumable_name: "invisibility potion",
        type: "tactical",
        level: 10
    },

    {
        consumable_name: "speed potion",
        type: "stat up",
        level: 7
    },

    {
        consumable_name: "adrenaline",
        type: "stat up",
        level: 7
    },

    {
        consumable_name: "stealth potion",
        type: "tactical",
        level: 10
    },

    {
        consumable_name: "farmer's meal",
        type: "regeneration",
        level: 6
    },

    {
        consumable_name: "honey-glazed ham",
        type: "regeneration",
        level: 15
    },

    {
        consumable_name: "forstberry tart",
        type: "regeneration",
        level: 7
    },

    {
        consumable_name: "apple pie",
        type: "regeneration",
        level: 3
    },

    {
        consumable_name: "steak",
        type: "regeneration",
        level: 20
    },
])
db.Skill.insertMany([
    {
        skill_name: "fireball",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "flaming arrow",
        category: "attack",
        prerequisite_skills: ["fireball"]
    },

    {
        skill_name: "meteor shot",
        category: "attack",
        prerequisite_skills: ["fireball", "hardening lava"]
    },

    {
        skill_name: "hardening lava",
        category: "trap",
        prerequisite_skills: ["fireball"]
    },

    {
        skill_name: "firestorm",
        category: "aoe",
        prerequisite_skills: ["flaming arrow"]
    },

    {
        skill_name: "wall of flames",
        category: "defense",
        prerequisite_skills: ["meteor shot"]
    },

    {
        skill_name: "volcanic eruption",
        category: "ultimate",
        prerequisite_skills: ["wall of flames", "hardening lava"]
    },

    {
        skill_name: "thunder bolt",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "ball of lightning",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "thunder cage",
        category: "trap",
        prerequisite_skills: ["thunderbolt", "ball of lightning"]
    },

    {
        skill_name: "volt dash",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "thunderclap",
        category: "movement",
        prerequisite_skills: ["volt dash"]
    },

    {
        skill_name: "lightning nova",
        category: "ultimate",
        prerequisite_skills: ["thunder bolt", "ball of lightning", "thunderclap"]
    },

    {
        skill_name: "frostbolt",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "glacial shard",
        category: "attack",
        prerequisite_skills: ["frostbolt"]
    },

    {
        skill_name: "ice blast",
        category: "aoe",
        prerequisite_skills: ["frostbite", "glacial shard"]
    },

    {
        skill_name: "frostbite",
        category: "trap",
        prerequisite_skills: ["frostbolt"]
    },

    {
        skill_name: "iceberg",
        category: "defense",
        prerequisite_skills: ["ice blast", "glacial shard"]
    },

    {
        skill_name: "blizzard",
        category: "ultimate",
        prerequisite_skills: ["frostbite", "frostbolt", "iceblast"]
    },

])
db.Map_Location.insertMany([
    {
        location_name: "emerald grove",
        region: "lush forest",
        has_savepoint: false
    },

    {
        location_name: "canopy highlands",
        region: "lush forest",
        has_savepoint: false
    },

    {
        location_name: "elven village",
        region: "lush forest",
        has_savepoint: true
    },

    {
        location_name: "frostbite pass",
        region: "snowy tundra",
        has_savepoint: false
    },

    {
        location_name: "crystal ridge",
        region: "snowy tundra",
        has_savepoint: false
    },

    {
        location_name: "igloosia",
        region: "snowy tundra",
        has_savepoint: true
    },

    {
        location_name: "scorched crater",
        region: "volcanic wastelands",
        has_savepoint: false
    },

    {
        location_name: "obsidian mines",
        region: "volcanic wastelands",
        has_savepoint: false
    },

    {
        location_name: "miner's retreat",
        region: "volcanic wastelands",
        has_savepoint: true
    },

    {
        location_name: "temple of the ancients",
        region: "mystic ruins",
        has_savepoint: false
    },

    {
        location_name: "ethereal halls",
        region: "mystic ruins",
        has_savepoint: false
    },

    {
        location_name: "ancient throne room",
        region: "mystic ruins",
        has_savepoint: true
    },
])
db.Mission.insertMany([
    {
        mission_name: "Awakening",
        prerequisite_mission: null,
        main_mission: true
    },
    {
        mission_name: "The Fractured Sky",
        prerequisite_mission: "Awakening",
        main_mission: true
    },
    {
        mission_name: "Torrential Depths",
        prerequisite_mission: "The Fractured Sky",
        main_mission: true
    },
    {
        mission_name: "Ember Expanse",
        prerequisite_mission: "Torrential Depths",
        main_mission: true
    },
    {
        mission_name: "Earthen Trials",
        prerequisite_mission: "Ember Expanse",
        main_mission: true
    },
    {
        mission_name: "Sylvan Sanctuary",
        prerequisite_mission: "Earthen Trials",
        main_mission: true
    },
    {
        mission_name: "Shattered Heavens",
        prerequisite_mission: "Sylvan Sanctuary",
        main_mission: true
    },
    {
        mission_name: "Divine Alliances",
        prerequisite_mission: "Shattered Heavens",
        main_mission: true
    },
    {
        mission_name: "Celestial Trials",
        prerequisite_mission: "Divine Alliances",
        main_mission: true
    },
    {
        mission_name: "Shadow Infiltration",
        prerequisite_mission: "Celestial Trials",
        main_mission: true
    },
    {
        mission_name: "Dark Minions",
        prerequisite_mission: "Shadow Infiltration",
        main_mission: true
    },
    {
        mission_name: "Betrayal's Echo",
        prerequisite_mission: "Dark Minions",
        main_mission: true
    },
    {
        mission_name: "The Luminous Forge",
        prerequisite_mission: "Betrayal's Echo",
        main_mission: true
    },
    {
        mission_name: "Celestial Convergence",
        prerequisite_mission: "The Luminous Forge",
        main_mission: true
    },
    {
        mission_name: "Ascension's Choice",
        prerequisite_mission: "Celestial Convergence",
        main_mission: true
    },
    {
        mission_name: "The Final Vision",
        prerequisite_mission: "Ascension's Choice",
        main_mission: true
    },
    {
        mission_name: "Twilight's Reckoning",
        prerequisite_mission: "The Final Vision",
        main_mission: true
    },
    {
        mission_name: "Redemption's Price",
        prerequisite_mission: "Twilight's Reckoning",
        main_mission: true
    },
    {
        mission_name: "Harmonious Future",
        prerequisite_mission: "Redemption's Price",
        main_mission: true
    },
    {
        mission_name: "Eternal Guardian",
        prerequisite_mission: "Harmonious Future",
        main_mission: true
    },
    {
        mission_name: "the lost expidition",
        prerequisite_mission: null,
        main_mission: false
    },

    {
        mission_name: "spectral whispers",
        prerequisite_mission: null,
        main_mission: false
    },

    {
        mission_name: "skyborne trials",
        prerequisite_mission: null,
        main_mission: false
    },

    {
        mission_name: "curse of the whispering woods",
        prerequisite_mission: null,
        main_mission: false
    },

    {
        mission_name: "submerged secrets",
        prerequisite_mission: null,
        main_mission: false
    },
])