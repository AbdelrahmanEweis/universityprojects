use("Videogame_Database")

db.Player.insertMany([
    {
        username: "ShadowStrike92",
        inventory: {
            equipped: {
                weapon: "plasma blade",
                skill: "hardening lava",
                consumable: "stellar sorbet",
                head: "necromancer's hood",
                torso: "assassin's robe",
                arms: "knight's gauntlets",
                legs: "knight-commander's greaves",
                feet: "assassin's boots"
            },
            backpack: [
                ['radiant prism', 'baseball cap', 'bottle of wine', 'crystalized aurora', 'moonlit essence', 'solar flare seed', "stormbringer's sigil", 'camera', 'rusty spoon', 'astral serpent scale', "writer's notebook", 'enchanted vellum', 'half eaten apple', 'verdant dreamcatcher', 'mysterious music box', 'crystalized essence', 'lively coral', 'half eaten apple', 'rainbow gemstone', 'rune of resilience', 'sylphic whisper', 'elemental shard', 'lively coral', 'camera', 'rubber chicken']
            ]
        },
        health: 166,
        stamina: 79,
        armor: 113,
        mastery: {
            weapon: 6,
            skill: 9
        },
        savepoint: {
            location: "miner's retreat",
            date: Date()
        }
    },
    {
        username: "MysticGamerX",
        inventory: {
            equipped: {
                weapon: "skyward bow",
                skill: "moonlit blade",
                consumable: "enigmatic brew",
                head: "mystic seer's hood",
                torso: "necromancer's cloak",
                arms: "druid's bracers",
                legs: "berserker's legguards",
                feet: "frigg's greaves"
            },
            backpack: [
                ['enigmatic crest', 'tranquil lotus', 'verdant dreamcatcher']
            ]
        },
        health: 250,
        stamina: 159,
        armor: 132,
        mastery: {
            weapon: 24,
            skill: 25
        },
        savepoint: {
            location: "celestial junction",
            date: Date()
        }
    },
    {
        username: "ChaosChampion77",
        inventory: {
            equipped: {
                weapon: "arcane storm sniper",
                skill: "arctic blast",
                consumable: "soulstone soup",
                head: "monk's hood",
                torso: "elemental sorcerer's robe",
                arms: "elemental sorcerer's gloves",
                legs: "wanderer's pants",
                feet: "beastmaster's boots"
            },
            backpack: [
                ['tranquil lotus', 'galeforce whistle', 'solar flare seed', 'resonating crystal', 'emberstone charm', 'starforged ingot', 'ensnaring vine', 'soothing breeze amulet', 'lunar crest', 'harmony crystal', 'bottle of wine', 'enigmatic crest', 'emberroot sapling', 'pyroclasmic ember', 'celestial ocarina', 'stormwhisper feather', 'ruby heartstone', 'volcanic emberstone', 'ruby heartstone', 'invisible ink pen', 'enigmatic figurine', 'science fair award', 'lunar crest']
            ]
        },
        health: 224,
        stamina: 166,
        armor: 122,
        mastery: {
            weapon: 12,
            skill: 7
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "QuantumQuester",
        inventory: {
            equipped: {
                weapon: "time-bender bow",
                skill: "glacier wall",
                consumable: "enigmatic brew",
                head: "elementalist's crown",
                torso: "duelist's attire",
                arms: "knight-commander's gauntlets",
                legs: "sorcerer's pants",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['stormwhisper feather', 'serene lotus petal', 'frostfallen relic', 'echoing chime', 'ensnaring vine', 'mysterious music box', 'lively coral', 'soothing breeze amulet', 'astral ribbon', 'luminous pebble', 'mystic orb', 'ember veil', 'ember veil', 'ethereal blossom', 'bottle of wine', 'ethereal mirror', 'verdant dreamcatcher', 'enigmatic crest', 'crystalized essence', 'emberroot sapling', 'crimson phoenix plume', 'amethyst', 'obsidian rune stone', 'bottle of wine', 'camera', 'timeless relic', 'puzzle piece', 'lively coral', 'frostfire lantern', 'illusory lantern', 'silver locket', 'rune of resilience']
            ]
        },
        health: 110,
        stamina: 227,
        armor: 116,
        mastery: {
            weapon: 22,
            skill: 14
        },
        savepoint: {
            location: "time-worn sanctuary",
            date: Date()
        }
    },
    {
        username: "NeonNinjaMaster",
        inventory: {
            equipped: {
                weapon: "ice shard thrower",
                skill: "nightfall arrow",
                consumable: "mango sorbet",
                head: "paladin's helm",
                torso: "duelist's attire",
                arms: "monk's gloves",
                legs: "sorcerer's pants",
                feet: "duelist's shoes"
            },
            backpack: [
                ['aetheric beacon', 'labyrinthine key', 'singing seashell', 'stormwhisper feather', 'radiant prism', 'echoing chime', 'zephyr gem', 'enigmatic figurine', 'penumbral pendant']
            ]
        },
        health: 186,
        stamina: 250,
        armor: 125,
        mastery: {
            weapon: 26,
            skill: 26
        },
        savepoint: {
            location: "inferno citadel",
            date: Date()
        }
    },
    {
        username: "PhoenixFury88",
        inventory: {
            equipped: {
                weapon: "inferno bow",
                skill: "ball of lightning",
                consumable: "mystical pastry",
                head: "null",
                torso: "elemental sorcerer's robe",
                arms: "sellsword's gauntlets",
                legs: "paladin's greaves",
                feet: "necromancer's boots"
            },
            backpack: [
                ['obsidian rune stone', 'resonating crystal']
            ]
        },
        health: 186,
        stamina: 68,
        armor: 104,
        mastery: {
            weapon: 5,
            skill: 10
        },
        savepoint: {
            location: "time-worn sanctuary",
            date: Date()
        }
    },
    {
        username: "PixelPirate101",
        inventory: {
            equipped: {
                weapon: "wooden bow",
                skill: "celestial arrow",
                consumable: "sparkling water",
                head: "mage's hat",
                torso: "archer's tunic",
                arms: "ranger's gloves",
                legs: "ancient guardian's greaves",
                feet: "mystic seer's shoes"
            },
            backpack: [
                ['shrouded talisman', 'crystalized aurora', 'mirage cloak', 'cavernous gemstone', 'baseball cap', 'nebula medallion', 'mirage cloak', 'crystalized essence', 'shrouded talisman', 'emberstone charm', 'frostfallen relic', 'cursed doll', "dreamweaver's quill", 'astral serpent scale', 'mystic orb', 'crystalline vessel', 'aetheric beacon', 'stormwhisper feather', 'gilded compass', 'whispering totem', 'mirage cloak', 'science fair award', 'whisperwind elixir', 'rusty spoon', 'ethereal mirror', 'sylphic whisper', 'whispering totem', 'serene lotus petal', 'nebula medallion']
            ]
        },
        health: 95,
        stamina: 101,
        armor: 140,
        mastery: {
            weapon: 3,
            skill: 29
        },
        savepoint: {
            location: "haunted harbor",
            date: Date()
        }
    },
    {
        username: "ThunderVolt55",
        inventory: {
            equipped: {
                weapon: "lava axe",
                skill: "frostbolt",
                consumable: "astral ambrosia",
                head: "mage's hat",
                torso: "inquisitor's vestment",
                arms: "paladin's gauntlets",
                legs: "yggdrasil's leggings",
                feet: "druid's sandals"
            },
            backpack: [
                ['mirage pearl', 'crystalline vessel', 'frostfallen relic', 'mirage cloak', 'ensnaring vine', 'shrouded talisman', 'obsidian rune stone', 'lunar crest', 'radiant prism']
            ]
        },
        health: 78,
        stamina: 133,
        armor: 143,
        mastery: {
            weapon: 27,
            skill: 29
        },
        savepoint: {
            location: "mystic glade",
            date: Date()
        }
    },
    {
        username: "GalacticGlitcher",
        inventory: {
            equipped: {
                weapon: "fire whip",
                skill: "plague burst",
                consumable: "mystic infusion",
                head: "knight's helmet",
                torso: "inquisitor's vestment",
                arms: "ranger's gloves",
                legs: "druid's leggings",
                feet: "ancient guardian's boots"
            },
            backpack: [
                ['mirage pearl', 'cursed mirror', 'gilded compass', 'penumbral pendant', 'silver locket', 'sacred sigil', 'cursed mirror', 'aetheric beacon', 'lunar crest', 'radiant feather', 'broken compass', 'emberstone charm', 'verdant blossom', 'tranquil lotus', 'camera', 'shadow silk scarf', 'harmonic conch shell', 'mirage cloak', 'arcane codex', 'sacred sigil', 'balloon animal', 'ethereal prism', 'baseball cap', 'penumbral pendant', 'frostfire lantern', 'enigmatic scroll', 'zephyr gem', 'frostfallen relic', 'tranquil lotus']
            ]
        },
        health: 197,
        stamina: 89,
        armor: 149,
        mastery: {
            weapon: 27,
            skill: 0
        },
        savepoint: {
            location: "oasis outpost",
            date: Date()
        }
    },
    {
        username: "SereneSpecter",
        inventory: {
            equipped: {
                weapon: "lunar blaster cannon",
                skill: "molten strike",
                consumable: "strength potion",
                head: "necromancer's hood",
                torso: "elemental sorcerer's robe",
                arms: "duelist's gloves",
                legs: "sellsword's legguards",
                feet: "monk's sandals"
            },
            backpack: [
                ['shrouded talisman', "tidecaller's shell", 'silver locket', 'stormwhisper feather', 'serenity stone', 'celestial ocarina', 'ember veil', 'frostbound blossom', 'aetheric beacon', 'aetherial lens', 'harmony crystal', 'starforged ingot']
            ]
        },
        health: 243,
        stamina: 78,
        armor: 134,
        mastery: {
            weapon: 15,
            skill: 21
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "VenomousVortex",
        inventory: {
            equipped: {
                weapon: "bow of the ancients",
                skill: "ball of lightning",
                consumable: "shadow essence",
                head: "elemental sorcerer's hat",
                torso: "mystic seer's robe",
                arms: "monk's gloves",
                legs: "inquisitor's leggings",
                feet: "beastmaster's boots"
            },
            backpack: [
                ['whispering totem', "stormbringer's sigil", 'half eaten apple', 'aetherial lens', 'half eaten apple', 'broken compass', "dreamweaver's quill"]
            ]
        },
        health: 107,
        stamina: 148,
        armor: 148,
        mastery: {
            weapon: 27,
            skill: 28
        },
        savepoint: {
            location: "divine citadel",
            date: Date()
        }
    },
    {
        username: "TitanTamer44",
        inventory: {
            equipped: {
                weapon: "energy blade",
                skill: "shadow trap",
                consumable: "mystic infusion",
                head: "paladin's helm",
                torso: "assassin's robe",
                arms: "berserker's wristguards",
                legs: "sellsword's legguards",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['hand mirror', 'soothing breeze amulet', "songbird's feather", 'moonlit essence', 'amethyst', 'balloon animal', 'astral lantern', 'serenity stone', 'ethereal mirror', 'silver locket', 'amethyst', 'rubber chicken', 'amethyst']
            ]
        },
        health: 197,
        stamina: 204,
        armor: 133,
        mastery: {
            weapon: 7,
            skill: 25
        },
        savepoint: {
            location: "ancient tree grove",
            date: Date()
        }
    },
    {
        username: "FrostbyteFox",
        inventory: {
            equipped: {
                weapon: "flamestrike lance",
                skill: "shadow trap",
                consumable: "celestial nectar",
                head: "archer's hat",
                torso: "ranger's cloak",
                arms: "knight's gauntlets",
                legs: "elementalist's leggings",
                feet: "necromancer's boots"
            },
            backpack: [
                ['labyrinthine key']
            ]
        },
        health: 73,
        stamina: 206,
        armor: 107,
        mastery: {
            weapon: 26,
            skill: 2
        },
        savepoint: {
            location: "amethyst haven",
            date: Date()
        }
    },
    {
        username: "CelestialCrafter",
        inventory: {
            equipped: {
                weapon: "mindflayer's mind staff",
                skill: "solar flare",
                consumable: "serpent scale potion",
                head: "shadow assassin's mask",
                torso: "beastmaster's chestplate",
                arms: "ancient guardian's gauntlets",
                legs: "beastmaster's leggings",
                feet: "duelist's shoes"
            },
            backpack: [
                ['broken compass', 'shrouded talisman', 'moonlit essence', 'enigmatic scroll', 'zephyr gem', 'harmonic conch shell', 'crystalized aurora', 'ephemeral feather', 'baseball cap', 'enchanted vellum', 'emberroot sapling', 'radiant prism', 'broken compass', 'elemental shard', 'timeless hourglass']
            ]
        },
        health: 190,
        stamina: 214,
        armor: 159,
        mastery: {
            weapon: 29,
            skill: 0
        },
        savepoint: {
            location: "haunted thicket",
            date: Date()
        }
    },
    {
        username: "RogueRevenant77",
        inventory: {
            equipped: {
                weapon: "mindflayer's mind staff",
                skill: "toxic leap",
                consumable: "starlight essence",
                head: "inquisitor's hood",
                torso: "elementalist's robe",
                arms: "elementalist's cuffs",
                legs: "elementalist's leggings",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['harmony crystal', 'verdant dreamcatcher', 'zephyr gem', 'broken compass', 'penumbral pendant', 'starlight veil', "dreamer's journal", "writer's notebook", 'luminous pebble', 'mirror of illusion', 'crystalline vessel']
            ]
        },
        health: 180,
        stamina: 59,
        armor: 119,
        mastery: {
            weapon: 7,
            skill: 28
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "AstralAvengerX",
        inventory: {
            equipped: {
                weapon: "plasma edge",
                skill: "acidic explosion",
                consumable: "sunfire elixir",
                head: "berserker's mask",
                torso: "knight-commander's plate",
                arms: "inquisitor's cuffs",
                legs: "elementalist's leggings",
                feet: "berserker's boots"
            },
            backpack: [
                []
            ]
        },
        health: 133,
        stamina: 183,
        armor: 145,
        mastery: {
            weapon: 10,
            skill: 27
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
    {
        username: "CyberSpartan21",
        inventory: {
            equipped: {
                weapon: "ethereal astral wand",
                skill: "volcanic fury",
                consumable: "stealthy shroom soup",
                head: "paladin's helm",
                torso: "berserker's chestguard",
                arms: "elementalist's cuffs",
                legs: "ancient guardian's greaves",
                feet: "knight's boots"
            },
            backpack: [
                ['echoing chime', 'frostfallen relic', 'lunar blossom']
            ]
        },
        health: 126,
        stamina: 147,
        armor: 149,
        mastery: {
            weapon: 4,
            skill: 19
        },
        savepoint: {
            location: "ember summit",
            date: Date()
        }
    },
    {
        username: "InfinityIgniter",
        inventory: {
            equipped: {
                weapon: "quantum blaster",
                skill: "abyssal wave",
                consumable: "luminous nectar",
                head: "odin's crown",
                torso: "ancient guardian's armor",
                arms: "necromancer's gloves",
                legs: "assassin's leggings",
                feet: "mage's shoes"
            },
            backpack: [
                ['mystic orb', 'bottle of wine', 'moonlit essence', 'harmonic conch shell', 'verdant blossom', 'serene lotus petal', 'crystalized essence', "stargazer's lens", 'lava bloom seed', 'radiant prism', 'sacred sigil', 'baseball cap', 'harmonic conch shell', 'volcanic emberstone', 'crimson phoenix plume', 'timeless hourglass', 'luminous pebble', 'thunderstruck relic', 'lunar crest', 'cursed mirror', 'cavernous gemstone', 'bottle of wine', 'stormwhisper feather', 'vortex core', 'moonlit essence', 'enigmatic scroll', "stargazer's lens", 'mystic orb', 'puzzle piece', 'timeless relic', 'enchanted vellum', 'frostfallen relic', 'dreamcatcher amulet', 'pyroclasmic ember', 'crystalized essence', 'shrouded talisman', 'ember veil', 'stormwhisper feather', 'camera', 'labyrinthine key']
            ]
        },
        health: 159,
        stamina: 186,
        armor: 151,
        mastery: {
            weapon: 0,
            skill: 25
        },
        savepoint: {
            location: "boggy haven",
            date: Date()
        }
    },
    {
        username: "ZenithZephyr",
        inventory: {
            equipped: {
                weapon: "silver sword",
                skill: "noxious obliteration",
                consumable: "speed potion",
                head: "mage's hat",
                torso: "thor's chainmail",
                arms: "tyr's gauntlets",
                legs: "rogue's trousers",
                feet: "sellsword's boots"
            },
            backpack: [
                ['cursed doll', 'shadow cloak', 'soothing breeze amulet', 'shadow silk scarf', 'dreamcatcher amulet', 'cavernous gemstone', 'phoenix feather', 'frostblossom seed', "stormbringer's sigil", 'shadow cloak', 'astral ribbon', 'emberroot sapling', "writer's notebook", 'harmony crystal', 'science fair award', 'mysterious music box', 'verdant blossom', 'ethereal blossom', 'shrouded talisman', 'volcanic emberstone', 'pyroclasmic ember', 'enigmatic figurine', 'soothing breeze amulet', 'ember veil']
            ]
        },
        health: 243,
        stamina: 174,
        armor: 187,
        mastery: {
            weapon: 22,
            skill: 13
        },
        savepoint: {
            location: "cursed cathedral",
            date: Date()
        }
    },
    {
        username: "LunarLegend99",
        inventory: {
            equipped: {
                weapon: "abyssal trident",
                skill: "lava burst",
                consumable: "sunfire elixir",
                head: "inquisitor's hood",
                torso: "elemental sorcerer's robe",
                arms: "duelist's gloves",
                legs: "knight-commander's greaves",
                feet: "warrior's boots"
            },
            backpack: [
                ['verdant blossom', 'lunar blossom', 'elemental shard', 'echoing chime', 'starlight veil', 'sylphic whisper']
            ]
        },
        health: 227,
        stamina: 80,
        armor: 144,
        mastery: {
            weapon: 23,
            skill: 4
        },
        savepoint: {
            location: "boggy haven",
            date: Date()
        }
    },
    {
        username: "ShadowBladeX",
        inventory: {
            equipped: {
                weapon: "azure shuriken",
                skill: "volcanic fury",
                consumable: "adrenaline",
                head: "knight's helmet",
                torso: "duelist's attire",
                arms: "monk's gloves",
                legs: "wanderer's pants",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['elemental shard', 'ephemeral feather', 'puzzle piece', 'labyrinthine key', 'shrouded talisman', 'serene lotus petal', 'obsidian rune stone', 'celestial ocarina', 'verdant dreamcatcher', 'singing seashell', 'whisperwind elixir', 'puzzle piece', "stormbringer's sigil", 'elemental shard', 'radiant prism', 'metal slinky', 'science fair award', 'shrouded talisman', 'nebula medallion', "songbird's feather", 'ethereal blossom', 'emberroot sapling', 'lunar crest', 'gilded compass', 'thunderstruck relic', 'celestial lantern', 'lava bloom seed', 'obsidian rune stone', 'zephyr gem', 'whisperwind elixir', 'hand mirror', 'vortex core', 'whispering totem']
            ]
        },
        health: 187,
        stamina: 53,
        armor: 120,
        mastery: {
            weapon: 5,
            skill: 17
        },
        savepoint: {
            location: "subterranean citadel",
            date: Date()
        }
    },
    {
        username: "MysticPhoenix88",
        inventory: {
            equipped: {
                weapon: "stellar blaster",
                skill: "charged dash",
                consumable: "wisdom potion",
                head: "ranger's hood",
                torso: "sellsword's chestguard",
                arms: "duelist's gloves",
                legs: "knight-commander's greaves",
                feet: "druid's sandals"
            },
            backpack: [
                ['shadow cloak', 'astral lantern', 'cursed mirror', 'soothing breeze amulet', 'emberstone charm', "writer's notebook", 'ember veil', 'frostfallen relic', 'sacred sigil', 'nebula medallion', 'ephemeral feather', 'enigmatic figurine', "dreamweaver's quill", 'phoenix feather', "songbird's feather", 'timeless relic', 'zephyr gem', 'balloon animal', 'moonlit essence', 'illusory lantern', 'lava bloom seed', 'fox tail', 'harmonic conch shell', 'shimmering scepter', 'bottle of wine', 'eclipsed crystal', 'harmonic conch shell', 'metal slinky', 'puzzle piece', 'aetheric beacon', 'bottle of wine', 'science fair award', 'amethyst', 'invisible ink pen', 'frostblossom seed']
            ]
        },
        health: 134,
        stamina: 237,
        armor: 131,
        mastery: {
            weapon: 9,
            skill: 1
        },
        savepoint: {
            location: "celestial junction",
            date: Date()
        }
    },
    {
        username: "NovaNinjaMaster",
        inventory: {
            equipped: {
                weapon: "blade of the heavens",
                skill: "molten trap",
                consumable: "bread",
                head: "berserker's mask",
                torso: "berserker's chestguard",
                arms: "mage's gloves",
                legs: "null",
                feet: "elemental sorcerer's shoes"
            },
            backpack: [
                ['radiant feather', 'soothing breeze amulet', 'solar flare seed', 'astral serpent scale', 'galeforce whistle', 'emberstone charm', 'emberstone charm', 'ethereal prism', 'celestial ocarina', 'sacred sigil', 'emberroot sapling', "stormbringer's sigil", 'rainbow gemstone', ' rubiks cube', 'phoenix feather', 'enchanted amulet', 'lunar crest', 'mirror of illusion', 'mystic orb', 'rainbow gemstone', 'enchanted amulet', 'stormwhisper feather', 'radiant feather', 'whisperwind elixir', 'shadow silk scarf', 'obsidian rune stone', 'silver locket', 'timeless hourglass', 'lava bloom seed']
            ]
        },
        health: 182,
        stamina: 222,
        armor: 91,
        mastery: {
            weapon: 7,
            skill: 14
        },
        savepoint: {
            location: "blossom valley",
            date: Date()
        }
    },
    {
        username: "QuantumGamer21",
        inventory: {
            equipped: {
                weapon: "stellar blaster",
                skill: "frost nova",
                consumable: "sunflower tea",
                head: "assassin's hood",
                torso: "ranger's cloak",
                arms: "mystic seer's gloves",
                legs: "sellsword's legguards",
                feet: "knight-commander's boots"
            },
            backpack: [
                ["songbird's feather", "stormbringer's sigil", 'crystalized aurora', 'frostfire lantern', 'phoenix feather', 'enigmatic crest', 'celestial feather', 'crystalized tears', 'crystalline vessel', 'puzzle piece', "writer's notebook"]
            ]
        },
        health: 110,
        stamina: 152,
        armor: 135,
        mastery: {
            weapon: 16,
            skill: 22
        },
        savepoint: {
            location: "aurora summit",
            date: Date()
        }
    },
    {
        username: "NeonSpecter77",
        inventory: {
            equipped: {
                weapon: "frostbite fang",
                skill: "molten trap",
                consumable: "chocolate cake",
                head: "wanderer's hat",
                torso: "The honored one's jacket",
                arms: "duelist's gloves",
                legs: "rogue's trousers",
                feet: "knight-commander's boots"
            },
            backpack: [
                ['soulstone trinket', 'labyrinthine key', 'hand mirror', 'science fair award', 'tranquil lotus', 'cavernous gemstone', 'timeless hourglass', 'soothing breeze amulet', 'cursed mirror', 'cavernous gemstone', ' rubiks cube', 'frostfallen relic', 'arcane codex', 'frostfire lantern', 'resonating crystal', ' rubiks cube', 'arcane codex', "tiger's eye", 'celestial feather', 'enigmatic scroll', 'shadow silk scarf', 'lava bloom seed', 'half eaten apple', 'harmony crystal', 'metal slinky', 'aetheric beacon', 'phoenix feather']
            ]
        },
        health: 169,
        stamina: 97,
        armor: 120,
        mastery: {
            weapon: 24,
            skill: 17
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "DarkKnightRises",
        inventory: {
            equipped: {
                weapon: "chaos cannon",
                skill: "solar flare",
                consumable: "celestial cheesecake",
                head: "mage's hat",
                torso: "assassin's robe",
                arms: "sellsword's gauntlets",
                legs: "ancient guardian's greaves",
                feet: "warrior's boots"
            },
            backpack: [
                ['rubber chicken', 'dreamcatcher amulet', 'puzzle piece', 'frostfallen relic']
            ]
        },
        health: 206,
        stamina: 163,
        armor: 130,
        mastery: {
            weapon: 24,
            skill: 14
        },
        savepoint: {
            location: "ember summit",
            date: Date()
        }
    },
    {
        username: "CrimsonChaosX",
        inventory: {
            equipped: {
                weapon: "ruby scimitar",
                skill: "astral barrier",
                consumable: "mango sorbet",
                head: "null",
                torso: "wanderer's coat",
                arms: "elementalist's cuffs",
                legs: "berserker's legguards",
                feet: "ranger's boots"
            },
            backpack: [
                ['obsidian rune stone', 'baseball cap', 'enigmatic crest', 'ethereal mirror', "songbird's feather", 'serene lotus petal', 'silver locket', 'mirror of illusion', 'lunar crest', 'rainbow gemstone', 'singing seashell', 'celestial feather', 'crystalized essence', 'emberroot sapling', 'vortex core', 'science fair award', 'arcane codex', 'soulstone trinket', 'rainbow gemstone', 'mirage pearl', 'mystic orb', 'tranquil lotus']
            ]
        },
        health: 190,
        stamina: 100,
        armor: 76,
        mastery: {
            weapon: 18,
            skill: 0
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
    {
        username: "AzureAssassin",
        inventory: {
            equipped: {
                weapon: "samurai's katana",
                skill: "meteor shot",
                consumable: "frostbite tea",
                head: "berserker's mask",
                torso: "mystic seer's robe",
                arms: "shadow assassin's gloves",
                legs: "wanderer's pants",
                feet: "druid's sandals"
            },
            backpack: [
                ['solar flare seed', 'mirage pearl', 'cursed doll', 'arcane rune', 'verdant dreamcatcher', 'celestial ocarina', 'rusty spoon', 'ensnaring vine', 'thunderstruck relic', 'astral lantern', 'enchanted amulet', 'timeless hourglass', 'rusty spoon', 'lunar crest', 'whisperwind elixir']
            ]
        },
        health: 74,
        stamina: 53,
        armor: 135,
        mastery: {
            weapon: 28,
            skill: 6
        },
        savepoint: {
            location: "miner's retreat",
            date: Date()
        }
    },
    {
        username: "ElectricEclipse",
        inventory: {
            equipped: {
                weapon: "dark matter scythe",
                skill: "tectonic trap",
                consumable: "sparkling cider",
                head: "sellsword's helm",
                torso: "rogue's leather vest",
                arms: "ancient guardian's gauntlets",
                legs: "null",
                feet: "mage's shoes"
            },
            backpack: [
                ['crystalized tears', 'lively coral', 'crystalized essence', 'lunar lace', 'mysterious music box', 'penumbral pendant', 'rubber chicken', 'verdant blossom', 'invisible ink pen', 'solar flare seed', 'fox tail', 'rusty spoon', 'astral serpent scale', 'vortex core', 'luminous pebble', 'silver locket', 'aetheric beacon', 'timeless hourglass', 'resonating crystal', 'vortex core', "stormbringer's sigil", 'nebula medallion', 'frostfallen relic', 'celestial lantern', 'elemental shard', 'mystic orb', 'labyrinthine key', 'prismatic crystal', 'soulstone trinket', 'ethereal blossom', 'illusory lantern', 'frostfire lantern', 'emberstone charm', 'cursed doll', 'sylphic whisper', 'astral lantern']
            ]
        },
        health: 195,
        stamina: 149,
        armor: 110,
        mastery: {
            weapon: 7,
            skill: 25
        },
        savepoint: {
            location: "ancient throne room",
            date: Date()
        }
    },
    {
        username: "VoidVoyager44",
        inventory: {
            equipped: {
                weapon: "toxic crossbow",
                skill: "cosmic barrage",
                consumable: "cosmic cake",
                head: "inquisitor's hood",
                torso: "warrior's chestplate",
                arms: "mage's gloves",
                legs: "null",
                feet: "knight-commander's boots"
            },
            backpack: [
                ['echoing chime', 'aetherial lens', 'volcanic emberstone', 'cavernous gemstone', 'crimson phoenix plume', ' rubiks cube', 'mysterious music box', 'arcane rune', 'soothing breeze amulet', 'radiant prism', "dreamweaver's quill", 'dreamcatcher amulet', 'crimson phoenix plume', 'astral serpent scale', 'amethyst', 'illusory lantern', 'camera', 'enigmatic crest', 'phoenix feather', 'sacred sigil', 'balloon animal', 'enchanted vellum', 'enigmatic crest', 'rainbow gemstone', 'frostfallen relic', 'whisperwind elixir', 'balloon animal', 'dreamcatcher amulet', 'celestial feather', 'luminous pebble', 'celestial feather', 'enigmatic scroll', 'emberstone charm', 'crystalized tears', 'amethyst', 'astral lantern', 'silver locket', 'harmonic conch shell', 'science fair award', 'crimson phoenix plume', 'silver locket', 'ruby heartstone', 'galeforce whistle', 'volcanic emberstone', 'frostfire lantern', 'mystic orb', 'echoing chime', 'enchanted amulet']
            ]
        },
        health: 213,
        stamina: 149,
        armor: 116,
        mastery: {
            weapon: 11,
            skill: 11
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "NeonNebula77",
        inventory: {
            equipped: {
                weapon: "quasar cannon",
                skill: "acidic explosion",
                consumable: "obsidian brew",
                head: "assassin's hood",
                torso: "archer's tunic",
                arms: "duelist's gloves",
                legs: "archer's pants",
                feet: "paladin's boots"
            },
            backpack: [
                ['dreamcatcher amulet', 'science fair award', 'starforged ingot', 'enchanted vellum', 'emberstone charm', 'crystalline vessel', 'crimson phoenix plume', 'rubber chicken', 'labyrinthine key', "stormbringer's sigil", 'illusory lantern', 'zephyr gem', "dreamer's journal", 'rusty spoon', 'nebula medallion', 'crystalized essence', 'lunar crest', 'enchanted vellum']
            ]
        },
        health: 227,
        stamina: 152,
        armor: 125,
        mastery: {
            weapon: 29,
            skill: 9
        },
        savepoint: {
            location: "feywood forest",
            date: Date()
        }
    },
    {
        username: "MysticMonolith",
        inventory: {
            equipped: {
                weapon: "time-bender bow",
                skill: "tempest tornado",
                consumable: "blizzard brew",
                head: "sellsword's helm",
                torso: "paladin's chestplate",
                arms: "paladin's gauntlets",
                legs: "warrior's legplates",
                feet: "sellsword's boots"
            },
            backpack: [
                ['rune of resilience', 'shadow cloak', 'moonlit essence', 'ensnaring vine', 'sylphic whisper', 'luminous pebble', 'serenity stone', 'mirage cloak', 'crimson phoenix plume', 'whisperwind elixir', 'silver locket', 'crimson phoenix plume', 'phoenix feather', 'labyrinthine key', 'lunar blossom', 'metal slinky', "tidecaller's shell", 'gilded compass', 'astral serpent scale', 'astral serpent scale', 'vortex core']
            ]
        },
        health: 165,
        stamina: 212,
        armor: 149,
        mastery: {
            weapon: 16,
            skill: 0
        },
        savepoint: {
            location: "oasis outpost",
            date: Date()
        }
    },
    {
        username: "CyberSphinx21",
        inventory: {
            equipped: {
                weapon: "voidfire rapier",
                skill: "glacier wall",
                consumable: "dragonfruit elixir",
                head: "sellsword's helm",
                torso: "shadow assassin's cloak",
                arms: "knight-commander's gauntlets",
                legs: "duelist's trousers",
                feet: "inquisitor's boots"
            },
            backpack: [
                ['radiant prism', 'rainbow gemstone', 'enchanted amulet', "tiger's eye", 'mystic orb', 'rusty spoon', 'arcane rune', 'crystalized tears', 'volcanic emberstone', 'crystalline vessel', 'half eaten apple', 'silver locket', 'whisperwind elixir', 'ethereal prism', 'crystalized aurora', "dreamer's journal", 'echoing chime', 'emberstone charm', ' rubiks cube']
            ]
        },
        health: 114,
        stamina: 146,
        armor: 148,
        mastery: {
            weapon: 17,
            skill: 6
        },
        savepoint: {
            location: "inferno citadel",
            date: Date()
        }
    },
    {
        username: "IronPheonix88",
        inventory: {
            equipped: {
                weapon: "mystic scepter",
                skill: "stormy trap",
                consumable: "teleportation potion",
                head: "rogue's mask",
                torso: "mage's robe",
                arms: "beastmaster's gauntlets",
                legs: "sellsword's legguards",
                feet: "paladin's boots"
            },
            backpack: [
                ['timeless hourglass', 'mirage pearl', 'balloon animal', 'volcanic emberstone', 'singing seashell']
            ]
        },
        health: 115,
        stamina: 241,
        armor: 123,
        mastery: {
            weapon: 6,
            skill: 2
        },
        savepoint: {
            location: "divine citadel",
            date: Date()
        }
    },
    {
        username: "CosmicConqueror",
        inventory: {
            equipped: {
                weapon: "playful nunchucks",
                skill: "tempest surge",
                consumable: "blizzard brew",
                head: "elemental sorcerer's hat",
                torso: "sorcerer's robe",
                arms: "beastmaster's gauntlets",
                legs: "duelist's trousers",
                feet: "assassin's boots"
            },
            backpack: [
                ['phoenix feather', 'ember veil', 'ethereal mirror', 'gilded compass', 'harmonic conch shell', 'enigmatic figurine', "stormbringer's sigil", 'lunar blossom', 'nebula medallion', 'sacred sigil', 'cursed mirror']
            ]
        },
        health: 204,
        stamina: 112,
        armor: 114,
        mastery: {
            weapon: 5,
            skill: 15
        },
        savepoint: {
            location: "boggy haven",
            date: Date()
        }
    },
    {
        username: "AlphaOmegaGamer",
        inventory: {
            equipped: {
                weapon: "shadow dagger",
                skill: "hardening lava",
                consumable: "cosmic cake",
                head: "divine paladin's helm",
                torso: "alchemist's robe",
                arms: "berserker's wristguards",
                legs: "beastmaster's leggings",
                feet: "mystic seer's shoes"
            },
            backpack: [
                ['celestial lantern', 'cursed mirror', 'ethereal blossom', 'cavernous gemstone', ' rubiks cube', 'ember veil', 'lunar crest', 'nebula medallion', 'galeforce whistle', 'harmonic conch shell', 'echoing chime', 'enigmatic crest', 'timeless relic', 'lively coral', "stargazer's lens", 'phoenix feather']
            ]
        },
        health: 85,
        stamina: 245,
        armor: 159,
        mastery: {
            weapon: 3,
            skill: 15
        },
        savepoint: {
            location: "oasis of echoes",
            date: Date()
        }
    },
    {
        username: "TechnoTitan44",
        inventory: {
            equipped: {
                weapon: "nova rifle",
                skill: "acidic explosion",
                consumable: "ether infusion",
                head: "rogue's mask",
                torso: "alchemist's robe",
                arms: "necromancer's gloves",
                legs: "divine paladin's greaves",
                feet: "frigg's greaves"
            },
            backpack: [
                ['enigmatic figurine', 'enigmatic crest', 'phoenix feather', 'labyrinthine key', 'rainbow gemstone', 'singing seashell', 'rubber chicken', 'eclipsed crystal', 'aetheric beacon', 'ruby heartstone', 'verdant dreamcatcher', 'frostbound blossom', 'mirror of illusion', 'ethereal blossom', 'crystalized essence', 'mystic orb', 'mirage cloak', 'shadow silk scarf', 'pyroclasmic ember', 'celestial lantern', 'rubber chicken', 'verdant blossom', 'echoing chime', 'gilded compass', 'aetheric beacon', 'aetherial lens', 'echoing chime', 'crystalized aurora', 'crystalline vessel', 'galeforce whistle']
            ]
        },
        health: 50,
        stamina: 244,
        armor: 145,
        mastery: {
            weapon: 24,
            skill: 0
        },
        savepoint: {
            location: "feywood forest",
            date: Date()
        }
    },
    {
        username: "SeraphicStorm",
        inventory: {
            equipped: {
                weapon: "silver sword",
                skill: "polar vortex",
                consumable: "fire resistance potion",
                head: "paladin's helm",
                torso: "duelist's attire",
                arms: "sellsword's gauntlets",
                legs: "necromancer's pants",
                feet: "necromancer's boots"
            },
            backpack: [
                ['phoenix feather', 'lunar blossom', 'elemental shard', 'zephyr gem', 'soothing breeze amulet', 'arcane rune', 'gilded compass', 'starforged ingot', 'ethereal mirror', 'dreamcatcher amulet', 'silver locket', 'broken compass', 'broken compass', 'half eaten apple', 'whisperwind elixir', 'ensnaring vine', 'verdant blossom', 'emberroot sapling', 'baseball cap', 'celestial lantern', 'enigmatic scroll', 'bottle of wine', 'arcane codex', 'camera', 'crystalized tears', 'tranquil lotus', 'ember veil', 'lunar blossom', 'rusty spoon', 'singing seashell', 'astral serpent scale', 'starforged ingot', 'science fair award', 'crystalline vessel', ' rubiks cube']
            ]
        },
        health: 179,
        stamina: 180,
        armor: 132,
        mastery: {
            weapon: 11,
            skill: 19
        },
        savepoint: {
            location: "divine citadel",
            date: Date()
        }
    },
    {
        username: "ChaosChronicle",
        inventory: {
            equipped: {
                weapon: "sniper rifle",
                skill: "shadow burst",
                consumable: "serpent scale potion",
                head: "necromancer's hood",
                torso: "paladin's chestplate",
                arms: "berserker's wristguards",
                legs: "assassin's leggings",
                feet: "null"
            },
            backpack: [
                ['harmony crystal', 'mirror of illusion', 'vortex core', "tiger's eye", 'shadow cloak', 'starforged ingot', 'harmony crystal', "writer's notebook", 'frostblossom seed', 'fox tail', "tidecaller's shell", 'starforged ingot', 'ensnaring vine']
            ]
        },
        health: 149,
        stamina: 105,
        armor: 107,
        mastery: {
            weapon: 16,
            skill: 13
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "BinaryBlitz77",
        inventory: {
            equipped: {
                weapon: "chaos cannon",
                skill: "rock barrage",
                consumable: "quicksilver elixir",
                head: "berserker's mask",
                torso: "warrior's chestplate",
                arms: "assassin's gloves",
                legs: "necromancer's pants",
                feet: "elemental sorcerer's shoes"
            },
            backpack: [
                ['mirage pearl', "stormbringer's sigil", 'timeless relic', 'cavernous gemstone', 'lunar crest', 'serene lotus petal', 'phoenix feather', 'science fair award', "stargazer's lens", 'crystalline vessel', 'ethereal blossom', 'enigmatic crest', 'enigmatic scroll', 'ensnaring vine', 'labyrinthine key', 'invisible ink pen', 'verdant blossom', 'broken compass', 'astral ribbon', 'puzzle piece', 'phoenix feather', 'ember veil', 'harmonic conch shell', 'science fair award', 'phoenix feather', 'resonating crystal', 'baseball cap', 'baseball cap', 'soulstone trinket', 'starforged ingot', 'celestial lantern', 'mysterious music box', 'cavernous gemstone', 'volcanic emberstone', 'verdant blossom', "songbird's feather", "stormbringer's sigil", "dreamweaver's quill", "songbird's feather", 'nebula medallion', 'verdant dreamcatcher', "dreamer's journal", 'celestial lantern', 'timeless relic']
            ]
        },
        health: 62,
        stamina: 65,
        armor: 122,
        mastery: {
            weapon: 15,
            skill: 12
        },
        savepoint: {
            location: "stormwatch tower",
            date: Date()
        }
    },
    {
        username: "FrostFuryX",
        inventory: {
            equipped: {
                weapon: "shadowmeld blade",
                skill: "cataclysmic upheaval",
                consumable: "crystalized tea",
                head: "druid's crown",
                torso: "assassin's robe",
                arms: "divine paladin's gauntlets",
                legs: "mystic seer's pants",
                feet: "druid's sandals"
            },
            backpack: [
                []
            ]
        },
        health: 60,
        stamina: 208,
        armor: 137,
        mastery: {
            weapon: 4,
            skill: 21
        },
        savepoint: {
            location: "oasis outpost",
            date: Date()
        }
    },
    {
        username: "ZenGamer21",
        inventory: {
            equipped: {
                weapon: "energy blade",
                skill: "cosmic barrage",
                consumable: "radiant elixir",
                head: "divine paladin's helm",
                torso: "rogue's leather vest",
                arms: "tyr's gauntlets",
                legs: "paladin's greaves",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['zephyr gem', 'frostfallen relic', 'invisible ink pen', 'camera', 'nebula medallion', 'penumbral pendant', 'serene lotus petal', "dreamer's journal", 'frostbound blossom', 'half eaten apple', 'gilded compass']
            ]
        },
        health: 69,
        stamina: 155,
        armor: 185,
        mastery: {
            weapon: 4,
            skill: 29
        },
        savepoint: {
            location: "cursed cathedral",
            date: Date()
        }
    },
    {
        username: "NovaNexus88",
        inventory: {
            equipped: {
                weapon: "quasar cannon",
                skill: "plague storm",
                consumable: "ether infusion",
                head: "elementalist's crown",
                torso: "inquisitor's vestment",
                arms: "mystic seer's gloves",
                legs: "shadow assassin's pants",
                feet: "mystic seer's shoes"
            },
            backpack: [
                ['mysterious music box', 'crimson phoenix plume', 'starlight veil', 'shadow silk scarf', 'enchanted amulet', 'enchanted vellum', 'emberstone charm', 'astral serpent scale', 'crystalized tears', 'moonlit essence', 'whisperwind elixir', 'ephemeral feather', 'enchanted vellum', 'lunar lace', ' rubiks cube', 'crystalized aurora', 'crystalized essence', 'balloon animal', 'serenity stone', 'illusory lantern', 'enchanted amulet']
            ]
        },
        health: 153,
        stamina: 178,
        armor: 153,
        mastery: {
            weapon: 11,
            skill: 26
        },
        savepoint: {
            location: "divine citadel",
            date: Date()
        }
    },
    {
        username: "ShadowSerpent77",
        inventory: {
            equipped: {
                weapon: "starfall wand",
                skill: "astral barrier",
                consumable: "speed potion",
                head: "warrior's helm",
                torso: "shadow assassin's cloak",
                arms: "inquisitor's cuffs",
                legs: "rogue's trousers",
                feet: "druid's sandals"
            },
            backpack: [
                ['volcanic emberstone', 'astral ribbon', 'whisperwind elixir', 'cursed mirror', 'whisperwind elixir', 'ephemeral feather', 'harmonic conch shell', 'gilded compass', 'solar flare seed', 'crimson phoenix plume', 'eclipsed crystal', 'arcane codex', 'metal slinky', 'rainbow gemstone', 'labyrinthine key', 'whisperwind elixir', 'rubber chicken', 'ruby heartstone', 'solar flare seed', 'hand mirror', 'rune of resilience', 'arcane codex', 'illusory lantern', 'astral ribbon', 'arcane rune', 'mystic orb', 'whispering totem', 'sacred sigil', 'radiant prism', 'crystalline vessel', 'mirage pearl', "tiger's eye", 'penumbral pendant', "songbird's feather", 'crystalized tears', 'obsidian rune stone', 'crystalized essence', 'serenity stone', 'mirror of illusion', 'verdant dreamcatcher']
            ]
        },
        health: 129,
        stamina: 145,
        armor: 136,
        mastery: {
            weapon: 10,
            skill: 23
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "NeonNomadX",
        inventory: {
            equipped: {
                weapon: "luminous saber",
                skill: "nightfall arrow",
                consumable: "bison steak",
                head: "mage's hat",
                torso: "archer's tunic",
                arms: "warrior's bracers",
                legs: "null",
                feet: "The honored one's boots"
            },
            backpack: [
                ['enchanted vellum', "tiger's eye", "writer's notebook"]
            ]
        },
        health: 66,
        stamina: 101,
        armor: 93,
        mastery: {
            weapon: 18,
            skill: 0
        },
        savepoint: {
            location: "miner's retreat",
            date: Date()
        }
    },
    {
        username: "SpectralSpartan",
        inventory: {
            equipped: {
                weapon: "quasar cannon",
                skill: "molten trap",
                consumable: "frostbite tea",
                head: "assassin's hood",
                torso: "sorcerer's robe",
                arms: "divine paladin's gauntlets",
                legs: "yggdrasil's leggings",
                feet: "knight's boots"
            },
            backpack: [
                ['arcane codex', 'verdant blossom', 'half eaten apple', "dreamer's journal", 'rusty spoon', 'elemental shard', 'lava bloom seed', 'shrouded talisman', 'crimson phoenix plume', 'galeforce whistle', 'astral ribbon', 'hand mirror', 'shimmering scepter', 'invisible ink pen', 'frostfallen relic', 'lively coral', 'radiant prism', 'cursed doll', 'mirror of illusion', 'resonating crystal', 'resonating crystal', 'harmony crystal', "dreamer's journal", 'illusory lantern', 'frostfallen relic', 'shadow cloak', 'rusty spoon', 'lunar blossom', 'ephemeral feather', 'crystalized essence', 'ephemeral feather', "dreamweaver's quill", 'arcane codex', 'ethereal prism', 'vortex core', "stormbringer's sigil"]
            ]
        },
        health: 248,
        stamina: 147,
        armor: 140,
        mastery: {
            weapon: 28,
            skill: 30
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "QuantumQuasar44",
        inventory: {
            equipped: {
                weapon: "shadowmeld blade",
                skill: "solar eruption",
                consumable: "enigmatic brew",
                head: "berserker's mask",
                torso: "sellsword's chestguard",
                arms: "druid's bracers",
                legs: "yggdrasil's leggings",
                feet: "warrior's boots"
            },
            backpack: [
                ['rusty spoon', 'metal slinky', 'arcane codex', 'crystalized aurora', 'timeless hourglass', 'ethereal mirror', 'bottle of wine', 'enchanted vellum', 'shadow silk scarf', 'timeless relic', "stargazer's lens", 'galeforce whistle', 'radiant prism', 'eclipsed crystal', 'lunar crest', 'penumbral pendant', 'harmonic conch shell', 'obsidian rune stone', 'crystalized tears', 'emberroot sapling', 'ethereal prism', 'crystalline vessel', 'arcane rune', 'bottle of wine', 'vortex core', "stormbringer's sigil", ' rubiks cube', 'radiant prism', 'celestial lantern', 'science fair award', 'starlight veil', 'crystalline vessel']
            ]
        },
        health: 246,
        stamina: 66,
        armor: 148,
        mastery: {
            weapon: 16,
            skill: 2
        },
        savepoint: {
            location: "feywood forest",
            date: Date()
        }
    },
    {
        username: "MysticMarauder",
        inventory: {
            equipped: {
                weapon: "astral sword",
                skill: "slime tsunami",
                consumable: "apple pie",
                head: "knight-commander's helmet",
                torso: "druid's robe",
                arms: "inquisitor's cuffs",
                legs: "inquisitor's leggings",
                feet: "knight-commander's boots"
            },
            backpack: [
                ['mirage cloak', 'soothing breeze amulet', 'lunar blossom', 'rune of resilience']
            ]
        },
        health: 184,
        stamina: 162,
        armor: 156,
        mastery: {
            weapon: 1,
            skill: 9
        },
        savepoint: {
            location: "divine citadel",
            date: Date()
        }
    },
    {
        username: "CyberCatalystX",
        inventory: {
            equipped: {
                weapon: "blizzard staff",
                skill: "frostbite",
                consumable: "golden truffle risotto",
                head: "shadow assassin's mask",
                torso: "alchemist's robe",
                arms: "berserker's wristguards",
                legs: "duelist's trousers",
                feet: "archer's boots"
            },
            backpack: [
                ['prismatic crystal', 'rusty spoon', 'cursed doll']
            ]
        },
        health: 215,
        stamina: 164,
        armor: 138,
        mastery: {
            weapon: 12,
            skill: 18
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "AstralApex77",
        inventory: {
            equipped: {
                weapon: "nichirin blade",
                skill: "charged dash",
                consumable: "whispers in the wind potion",
                head: "wanderer's hat",
                torso: "thor's chainmail",
                arms: "necromancer's gloves",
                legs: "ranger's pants",
                feet: "frigg's greaves"
            },
            backpack: [
                ['bottle of wine', 'starlight veil', 'puzzle piece', 'arcane codex', 'astral serpent scale', "dreamweaver's quill", 'astral lantern', 'celestial ocarina']
            ]
        },
        health: 156,
        stamina: 189,
        armor: 147,
        mastery: {
            weapon: 4,
            skill: 8
        },
        savepoint: {
            location: "ancient tree grove",
            date: Date()
        }
    },
    {
        username: "NovaNebulaX",
        inventory: {
            equipped: {
                weapon: "spirit bow",
                skill: "lunar beam",
                consumable: "mystic muffin",
                head: "sorcerer's hat",
                torso: "ranger's cloak",
                arms: "ranger's gloves",
                legs: "berserker's legguards",
                feet: "druid's sandals"
            },
            backpack: [
                ['enchanted vellum', 'metal slinky', 'ethereal blossom', "dreamer's journal", 'enchanted vellum', 'celestial feather', 'hand mirror', 'shimmering scepter']
            ]
        },
        health: 76,
        stamina: 80,
        armor: 101,
        mastery: {
            weapon: 9,
            skill: 19
        },
        savepoint: {
            location: "miner's retreat",
            date: Date()
        }
    },
    {
        username: "EchoEnigma21",
        inventory: {
            equipped: {
                weapon: "void rift spear thrower",
                skill: "scorching whirlwind",
                consumable: "iron brew",
                head: "shadow assassin's mask",
                torso: "divine paladin's chestplate",
                arms: "necromancer's gloves",
                legs: "rogue's trousers",
                feet: "The honored one's boots"
            },
            backpack: [
                ['cursed mirror', 'solar flare seed', 'ethereal mirror', 'starlight veil', 'eclipsed crystal', 'frostbound blossom', 'frostfire lantern', 'mystic orb', 'invisible ink pen', 'silver locket', 'whisperwind elixir', 'harmonic conch shell', 'shimmering scepter']
            ]
        },
        health: 152,
        stamina: 64,
        armor: 150,
        mastery: {
            weapon: 13,
            skill: 26
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "ShadowSeeker88",
        inventory: {
            equipped: {
                weapon: "voltaic bow",
                skill: "shadow veil",
                consumable: "forstberry tart",
                head: "assassin's hood",
                torso: "knight-commander's plate",
                arms: "sellsword's gauntlets",
                legs: "The honored one's pants",
                feet: "druid's sandals"
            },
            backpack: [
                ["songbird's feather", 'ethereal prism', 'timeless hourglass', 'radiant feather', 'arcane rune', 'metal slinky', 'enigmatic figurine', 'obsidian rune stone', 'rubber chicken', 'crystalline vessel', 'frostblossom seed', 'shadow silk scarf', 'emberstone charm', 'harmonic conch shell', 'camera', 'crystalized aurora', 'mirror of illusion', 'galeforce whistle', 'cursed doll', 'aetherial lens', 'penumbral pendant', 'verdant dreamcatcher', 'enchanted amulet', 'astral ribbon', 'baseball cap', 'cursed mirror', 'thunderstruck relic', 'rubber chicken', 'enigmatic scroll', 'enigmatic scroll', 'amethyst', 'starforged ingot', 'serene lotus petal', 'baseball cap', 'tranquil lotus', 'shadow silk scarf', 'lively coral', 'mysterious music box', 'celestial lantern', 'prismatic crystal', 'thunderstruck relic', 'lunar blossom', "dreamweaver's quill", 'sacred sigil']
            ]
        },
        health: 167,
        stamina: 239,
        armor: 139,
        mastery: {
            weapon: 7,
            skill: 19
        },
        savepoint: {
            location: "mystic glade",
            date: Date()
        }
    },
    {
        username: "QuantumQuintessence",
        inventory: {
            equipped: {
                weapon: "serpent's staff",
                skill: "celestial beam",
                consumable: "tea",
                head: "mage's hat",
                torso: "sellsword's chestguard",
                arms: "elemental sorcerer's gloves",
                legs: "sellsword's legguards",
                feet: "necromancer's boots"
            },
            backpack: [
                ['frostblossom seed', 'aetherial lens', 'enigmatic figurine', 'mysterious music box', 'crystalized aurora', 'thunderstruck relic', 'ruby heartstone', 'singing seashell']
            ]
        },
        health: 119,
        stamina: 71,
        armor: 128,
        mastery: {
            weapon: 24,
            skill: 8
        },
        savepoint: {
            location: "abyssal palace",
            date: Date()
        }
    },
    {
        username: "NeonNightfall77",
        inventory: {
            equipped: {
                weapon: "phoenix bow",
                skill: "charged dash",
                consumable: "sweet pastry",
                head: "wanderer's hat",
                torso: "elemental sorcerer's robe",
                arms: "necromancer's gloves",
                legs: "inquisitor's leggings",
                feet: "druid's sandals"
            },
            backpack: [
                ['timeless relic', 'rubber chicken', 'verdant blossom', "writer's notebook", 'mirage cloak', 'enchanted vellum', 'crimson phoenix plume', 'serenity stone', "stargazer's lens", 'shadow cloak', "dreamer's journal", 'eclipsed crystal', 'cursed mirror', 'illusory lantern', 'mirage cloak', 'harmony crystal', "tidecaller's shell", 'celestial lantern', 'pyroclasmic ember', 'cavernous gemstone', 'crimson phoenix plume', 'echoing chime', "stargazer's lens", 'sacred sigil', 'serenity stone', 'soulstone trinket', 'dreamcatcher amulet', 'ethereal blossom', 'frostfallen relic', 'dreamcatcher amulet', 'serenity stone', 'mirage cloak', 'ethereal prism', 'gilded compass']
            ]
        },
        health: 236,
        stamina: 54,
        armor: 121,
        mastery: {
            weapon: 4,
            skill: 8
        },
        savepoint: {
            location: "oasis of echoes",
            date: Date()
        }
    },
    {
        username: "MysticMystiqueX",
        inventory: {
            equipped: {
                weapon: "ethereal slicer",
                skill: "supernova",
                consumable: "strength potion",
                head: "wanderer's hat",
                torso: "elementalist's robe",
                arms: "necromancer's gloves",
                legs: "assassin's leggings",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['zephyr gem', 'radiant feather', 'mysterious music box', 'mirage pearl', 'crystalized essence', 'rune of resilience', 'shrouded talisman', "tidecaller's shell", 'lunar lace', 'whisperwind elixir', 'metal slinky', 'vortex core', 'penumbral pendant']
            ]
        },
        health: 130,
        stamina: 212,
        armor: 101,
        mastery: {
            weapon: 11,
            skill: 23
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
    {
        username: "PhoenixPlasma21",
        inventory: {
            equipped: {
                weapon: "arcane storm sniper",
                skill: "cosmic barrage",
                consumable: "stealth potion",
                head: "druid's crown",
                torso: "knight's plate armor",
                arms: "mage's gloves",
                legs: "assassin's leggings",
                feet: "sellsword's boots"
            },
            backpack: [
                ['frostfallen relic', 'dreamcatcher amulet', 'rusty spoon', 'half eaten apple', 'eclipsed crystal', 'sylphic whisper', 'metal slinky', 'silver locket', 'nebula medallion', "songbird's feather", "tidecaller's shell", 'radiant prism', 'ethereal mirror', 'cursed doll', 'crystalized tears', 'radiant prism', 'timeless relic', 'celestial ocarina']
            ]
        },
        health: 208,
        stamina: 249,
        armor: 113,
        mastery: {
            weapon: 9,
            skill: 5
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "NebulaNinja88",
        inventory: {
            equipped: {
                weapon: "plasma rifle",
                skill: "firestorm",
                consumable: "berry explosion elixir",
                head: "assassin's hood",
                torso: "knight-commander's plate",
                arms: "necromancer's gloves",
                legs: "duelist's trousers",
                feet: "divine paladin's boots"
            },
            backpack: [
                ['lively coral', 'radiant feather', 'radiant feather', 'balloon animal', 'rusty spoon', 'cursed doll', 'verdant dreamcatcher', 'sacred sigil', 'ethereal blossom', 'emberstone charm', 'arcane codex']
            ]
        },
        health: 208,
        stamina: 108,
        armor: 149,
        mastery: {
            weapon: 21,
            skill: 15
        },
        savepoint: {
            location: "amethyst haven",
            date: Date()
        }
    },
    {
        username: "RogueRadiance77",
        inventory: {
            equipped: {
                weapon: "silver sword",
                skill: "electrified arrow",
                consumable: "iron brew",
                head: "beastmaster's helm",
                torso: "elemental sorcerer's robe",
                arms: "necromancer's gloves",
                legs: "monk's pants",
                feet: "The honored one's boots"
            },
            backpack: [
                ['emberstone charm', 'enchanted amulet', 'whispering totem', 'eclipsed crystal', 'crystalized essence', 'mirage pearl', 'ethereal mirror', 'celestial ocarina', 'mirage pearl', 'dreamcatcher amulet', 'baseball cap', 'science fair award', 'vortex core', 'astral ribbon', 'crystalized aurora', 'aetheric beacon', 'mirage cloak']
            ]
        },
        health: 181,
        stamina: 132,
        armor: 130,
        mastery: {
            weapon: 4,
            skill: 23
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
    {
        username: "QuantumQuakeX",
        inventory: {
            equipped: {
                weapon: "voidcleaver's scythe",
                skill: "wall of flames",
                consumable: "water",
                head: "knight-commander's helmet",
                torso: "elemental sorcerer's robe",
                arms: "warrior's bracers",
                legs: "ranger's pants",
                feet: "ranger's boots"
            },
            backpack: [
                ['celestial ocarina']
            ]
        },
        health: 202,
        stamina: 56,
        armor: 133,
        mastery: {
            weapon: 8,
            skill: 4
        },
        savepoint: {
            location: "oasis outpost",
            date: Date()
        }
    },
    {
        username: "NovaNexus21",
        inventory: {
            equipped: {
                weapon: "arcane storm sniper",
                skill: "tectonic trap",
                consumable: "luminous nectar",
                head: "mage's hat",
                torso: "warrior's chestplate",
                arms: "necromancer's gloves",
                legs: "assassin's leggings",
                feet: "divine paladin's boots"
            },
            backpack: [
                ['radiant feather', 'sacred sigil', 'soulstone trinket', "tiger's eye", 'cursed doll', 'radiant prism', 'crystalized tears', 'timeless relic', 'sacred sigil', 'eclipsed crystal', 'bottle of wine', 'crystalline vessel', 'verdant blossom', 'resonating crystal', "stargazer's lens", 'baseball cap', 'bottle of wine', 'enchanted amulet', 'radiant prism', 'arcane rune', 'frostfallen relic', 'shadow cloak']
            ]
        },
        health: 71,
        stamina: 61,
        armor: 125,
        mastery: {
            weapon: 11,
            skill: 30
        },
        savepoint: {
            location: "oasis of mirages",
            date: Date()
        }
    },
    {
        username: "NeonNemesis88",
        inventory: {
            equipped: {
                weapon: "starlight wand",
                skill: "eclipse burst",
                consumable: "invisibility cloak",
                head: "sellsword's helm",
                torso: "beastmaster's chestplate",
                arms: "tyr's gauntlets",
                legs: "mage's leggings",
                feet: "divine paladin's boots"
            },
            backpack: [
                ['crystalized aurora', 'dreamcatcher amulet', 'emberstone charm', 'enchanted amulet', 'whisperwind elixir', 'starforged ingot', 'rainbow gemstone', 'singing seashell', 'shimmering scepter', 'whisperwind elixir', 'broken compass', 'gilded compass', 'frostbound blossom', 'celestial ocarina', 'arcane rune', 'aetherial lens', 'timeless relic', 'radiant prism', 'enchanted amulet', 'elemental shard', 'puzzle piece', 'frostblossom seed', 'lively coral', 'galeforce whistle', 'singing seashell', "writer's notebook", 'timeless hourglass', ' rubiks cube', 'frostfallen relic', 'astral serpent scale', 'emberstone charm', 'emberroot sapling', 'baseball cap', 'lunar blossom', "dreamweaver's quill", 'arcane codex']
            ]
        },
        health: 141,
        stamina: 139,
        armor: 173,
        mastery: {
            weapon: 27,
            skill: 22
        },
        savepoint: {
            location: "oasis of echoes",
            date: Date()
        }
    },
    {
        username: "MysticMatrix77",
        inventory: {
            equipped: {
                weapon: "demon's trident",
                skill: "arctic blast",
                consumable: "endurance potion",
                head: "paladin's helm",
                torso: "archer's tunic",
                arms: "mage's gloves",
                legs: "druid's leggings",
                feet: "shadow assassin's boots"
            },
            backpack: [
                [' rubiks cube', 'timeless hourglass', 'penumbral pendant', 'arcane rune', 'sylphic whisper', 'celestial feather', 'invisible ink pen', 'rubber chicken', 'cavernous gemstone']
            ]
        },
        health: 104,
        stamina: 237,
        armor: 130,
        mastery: {
            weapon: 1,
            skill: 9
        },
        savepoint: {
            location: "ember summit",
            date: Date()
        }
    },
    {
        username: "CyberCenturionX",
        inventory: {
            equipped: {
                weapon: "ethereal rapier",
                skill: "eclipse burst",
                consumable: "holy water",
                head: "alchemist's hood",
                torso: "archer's tunic",
                arms: "ranger's gloves",
                legs: "rogue's trousers",
                feet: "null"
            },
            backpack: [
                ['silver locket', 'frostblossom seed', 'shadow cloak', 'puzzle piece', 'lively coral', 'ensnaring vine', 'lunar lace', 'elemental shard', "dreamer's journal", 'balloon animal', 'penumbral pendant', 'lava bloom seed', 'enigmatic scroll', 'arcane codex', "stargazer's lens", 'lunar crest', 'frostbound blossom', 'cursed doll', 'pyroclasmic ember', 'whispering totem', 'ethereal mirror', 'labyrinthine key', 'harmony crystal', 'silver locket', 'ethereal prism', 'shrouded talisman', 'crystalized tears', 'zephyr gem', 'stormwhisper feather', "stargazer's lens", 'frostbound blossom', "writer's notebook", 'aetheric beacon', 'verdant blossom', 'cursed mirror', 'ensnaring vine', 'verdant blossom', 'astral lantern', 'obsidian rune stone', 'labyrinthine key', 'frostfire lantern', "dreamweaver's quill", 'rune of resilience', 'sacred sigil']
            ]
        },
        health: 93,
        stamina: 149,
        armor: 102,
        mastery: {
            weapon: 30,
            skill: 12
        },
        savepoint: {
            location: "aurora summit",
            date: Date()
        }
    },
    {
        username: "SeraphicSaber21",
        inventory: {
            equipped: {
                weapon: "voltaic bow",
                skill: "shockwave arrow",
                consumable: "iron brew",
                head: "warrior's helm",
                torso: "mystic seer's robe",
                arms: "duelist's gloves",
                legs: "elementalist's leggings",
                feet: "sorcerer's shoes"
            },
            backpack: [
                ['ethereal mirror', 'phoenix feather', 'lunar lace', "stormbringer's sigil", 'frostbound blossom', "writer's notebook", 'enigmatic crest', 'crystalized aurora', 'ember veil', 'mirage cloak', 'tranquil lotus', 'rubber chicken', 'penumbral pendant', 'cursed mirror', 'frostbound blossom', 'arcane rune', 'aetheric beacon', "songbird's feather", 'balloon animal', 'moonlit essence', "dreamer's journal", 'silver locket', 'frostblossom seed', 'enchanted amulet', 'solar flare seed', 'invisible ink pen', "writer's notebook", 'verdant blossom', 'cavernous gemstone', 'lunar crest', 'baseball cap', 'bottle of wine', 'shadow silk scarf', 'frostbound blossom', "stormbringer's sigil", 'mystic orb', 'rainbow gemstone']
            ]
        },
        health: 71,
        stamina: 111,
        armor: 129,
        mastery: {
            weapon: 13,
            skill: 26
        },
        savepoint: {
            location: "blossom valley",
            date: Date()
        }
    },
    {
        username: "NovaNebula88",
        inventory: {
            equipped: {
                weapon: "cinderblade",
                skill: "venomous burst",
                consumable: "stealth potion",
                head: "druid's crown",
                torso: "rogue's leather vest",
                arms: "null",
                legs: "mystic seer's pants",
                feet: "knight-commander's boots"
            },
            backpack: [
                ['enigmatic crest', 'sylphic whisper', 'shadow cloak', 'fox tail', 'zephyr gem', ' rubiks cube', 'half eaten apple', 'arcane codex', 'nebula medallion', 'eclipsed crystal', 'penumbral pendant', 'luminous pebble', 'elemental shard', 'emberstone charm', 'pyroclasmic ember', 'lively coral', 'emberroot sapling', 'baseball cap', 'ethereal blossom', 'thunderstruck relic', 'fox tail']
            ]
        },
        health: 53,
        stamina: 158,
        armor: 123,
        mastery: {
            weapon: 26,
            skill: 13
        },
        savepoint: {
            location: "volted citadel",
            date: Date()
        }
    },
    {
        username: "ShadowShogun77",
        inventory: {
            equipped: {
                weapon: "obsidian scythe",
                skill: "hardening lava",
                consumable: "adrenaline",
                head: "wanderer's hat",
                torso: "elementalist's robe",
                arms: "berserker's wristguards",
                legs: "knight's greaves",
                feet: "druid's sandals"
            },
            backpack: [
                ['lunar blossom', 'radiant prism', 'shimmering scepter', 'nebula medallion', 'timeless hourglass', 'cursed doll', 'puzzle piece', 'celestial feather', 'science fair award', 'science fair award', 'radiant feather', 'baseball cap', 'baseball cap', 'invisible ink pen', 'aetheric beacon', 'astral lantern', 'mysterious music box', 'aetheric beacon', "songbird's feather", 'arcane rune', 'crystalline vessel', 'ensnaring vine', 'ephemeral feather', 'soulstone trinket', 'shadow silk scarf', 'science fair award', 'luminous pebble', 'singing seashell', 'moonlit essence', 'phoenix feather', 'thunderstruck relic', 'astral ribbon', 'cursed mirror', 'camera', 'baseball cap', 'lava bloom seed', "dreamer's journal", 'ensnaring vine', 'sylphic whisper', 'obsidian rune stone', 'rusty spoon', 'timeless hourglass', 'shadow cloak', 'enigmatic scroll', 'arcane codex', 'starlight veil', 'tranquil lotus']
            ]
        },
        health: 101,
        stamina: 189,
        armor: 106,
        mastery: {
            weapon: 16,
            skill: 14
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "MysticMajestyX",
        inventory: {
            equipped: {
                weapon: "molten whip",
                skill: "toxic shock",
                consumable: "cinnamon roll",
                head: "beastmaster's helm",
                torso: "divine paladin's chestplate",
                arms: "berserker's wristguards",
                legs: "inquisitor's leggings",
                feet: "sorcerer's shoes"
            },
            backpack: [
                ['prismatic crystal', 'ethereal prism', 'solar flare seed', 'soulstone trinket', 'puzzle piece', 'frostbound blossom', 'gilded compass', 'volcanic emberstone', 'prismatic crystal', 'balloon animal', 'sylphic whisper', 'emberroot sapling', 'mirage cloak', 'lunar blossom', 'rusty spoon', 'resonating crystal', 'vortex core', "stormbringer's sigil", "dreamer's journal", 'moonlit essence', 'radiant feather', 'labyrinthine key', "dreamer's journal", 'obsidian rune stone', 'soulstone trinket']
            ]
        },
        health: 188,
        stamina: 178,
        armor: 144,
        mastery: {
            weapon: 13,
            skill: 1
        },
        savepoint: {
            location: "amethyst haven",
            date: Date()
        }
    },
    {
        username: "QuantumQuiver21",
        inventory: {
            equipped: {
                weapon: "divine crossbow",
                skill: "wind whirl",
                consumable: "ghost pepper potion",
                head: "ancient guardian's helm",
                torso: "monk's robe",
                arms: "monk's gloves",
                legs: "elementalist's leggings",
                feet: "elemental sorcerer's shoes"
            },
            backpack: [
                [' rubiks cube', 'celestial feather', "stormbringer's sigil", 'enigmatic figurine', 'aetheric beacon', 'dreamcatcher amulet', 'penumbral pendant', 'rune of resilience', 'verdant blossom', 'zephyr gem', 'starforged ingot', 'obsidian rune stone', 'cavernous gemstone', 'starlight veil', 'frostfire lantern', 'eclipsed crystal', 'hand mirror', 'astral serpent scale', 'bottle of wine', 'lunar crest', 'nebula medallion', 'frostfire lantern', 'balloon animal', 'aetherial lens', 'cavernous gemstone', 'shadow silk scarf', 'pyroclasmic ember', 'ephemeral feather', "dreamer's journal", 'frostfallen relic', 'harmonic conch shell', 'astral ribbon', 'elemental shard']
            ]
        },
        health: 56,
        stamina: 153,
        armor: 140,
        mastery: {
            weapon: 15,
            skill: 0
        },
        savepoint: {
            location: "glacial sanctuary",
            date: Date()
        }
    },
    {
        username: "NeonNova88",
        inventory: {
            equipped: {
                weapon: "bow of the ancients",
                skill: "celestial arrow",
                consumable: "health potion",
                head: "ranger's hood",
                torso: "monk's robe",
                arms: "wanderer's gloves",
                legs: "paladin's greaves",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['frostblossom seed', 'harmony crystal', 'volcanic emberstone', 'frostfallen relic', 'elemental shard', 'astral ribbon', 'dreamcatcher amulet', 'astral ribbon', 'emberstone charm', 'sacred sigil', 'verdant dreamcatcher', 'aetherial lens', 'half eaten apple', "stormbringer's sigil", 'elemental shard', 'nebula medallion', 'crystalline vessel', 'lava bloom seed', 'prismatic crystal', "stormbringer's sigil", 'elemental shard', 'ephemeral feather', 'mirage pearl', 'astral ribbon', 'lively coral', 'enigmatic scroll', 'emberstone charm', 'rusty spoon', 'tranquil lotus', 'solar flare seed', 'sylphic whisper', 'obsidian rune stone', 'puzzle piece', 'arcane rune', 'ruby heartstone', 'aetheric beacon']
            ]
        },
        health: 74,
        stamina: 108,
        armor: 113,
        mastery: {
            weapon: 13,
            skill: 10
        },
        savepoint: {
            location: "mystic glade",
            date: Date()
        }
    },
    {
        username: "CosmicChampion77",
        inventory: {
            equipped: {
                weapon: "frostbite fang",
                skill: "cyclone step",
                consumable: "timeless elixir",
                head: "druid's crown",
                torso: "inquisitor's vestment",
                arms: "wanderer's gloves",
                legs: "divine paladin's greaves",
                feet: "duelist's shoes"
            },
            backpack: [
                ['radiant feather', 'pyroclasmic ember', 'eclipsed crystal']
            ]
        },
        health: 101,
        stamina: 112,
        armor: 146,
        mastery: {
            weapon: 26,
            skill: 20
        },
        savepoint: {
            location: "volted citadel",
            date: Date()
        }
    },
    {
        username: "CyberCrusaderX",
        inventory: {
            equipped: {
                weapon: "celestial time bow",
                skill: "cosmic explosion",
                consumable: "honey-glazed ham",
                head: "alchemist's hood",
                torso: "sorcerer's robe",
                arms: "mystic seer's gloves",
                legs: "The honored one's pants",
                feet: "archer's boots"
            },
            backpack: [
                ['luminous pebble', 'enigmatic scroll', 'sacred sigil', "stormbringer's sigil", 'amethyst', 'enigmatic figurine', 'echoing chime', 'lunar blossom', 'galeforce whistle', 'harmonic conch shell', 'tranquil lotus', 'crimson phoenix plume', 'invisible ink pen', 'starlight veil', 'thunderstruck relic', 'illusory lantern', 'eclipsed crystal', 'lively coral', 'obsidian rune stone', 'ethereal blossom', 'mirror of illusion', "writer's notebook"]
            ]
        },
        health: 203,
        stamina: 80,
        armor: 128,
        mastery: {
            weapon: 25,
            skill: 22
        },
        savepoint: {
            location: "ancient tree grove",
            date: Date()
        }
    },
    {
        username: "NovaNebula21",
        inventory: {
            equipped: {
                weapon: "iron warhammer",
                skill: "mountain rush",
                consumable: "eternal soup",
                head: "paladin's helm",
                torso: "knight-commander's plate",
                arms: "warrior's bracers",
                legs: "sellsword's legguards",
                feet: "The honored one's boots"
            },
            backpack: [
                ["tiger's eye", 'crystalline vessel', 'singing seashell', 'frostfallen relic', 'celestial feather', 'mirage pearl', 'ensnaring vine', 'half eaten apple', "dreamweaver's quill", 'frostblossom seed', 'lively coral', 'galeforce whistle', 'mystic orb', 'radiant feather', 'radiant feather', 'galeforce whistle', 'ruby heartstone', 'crimson phoenix plume', 'obsidian rune stone', 'frostbound blossom', 'echoing chime', 'ephemeral feather', 'lunar crest', "songbird's feather", 'crystalized aurora', 'moonlit essence', 'science fair award', 'elemental shard', 'celestial lantern', 'mystic orb', "dreamweaver's quill", 'pyroclasmic ember', 'radiant feather', 'radiant prism']
            ]
        },
        health: 64,
        stamina: 138,
        armor: 162,
        mastery: {
            weapon: 9,
            skill: 26
        },
        savepoint: {
            location: "amethyst atoll",
            date: Date()
        }
    },
    {
        username: "ShadowStrike88",
        inventory: {
            equipped: {
                weapon: "void rift spear thrower",
                skill: "noxious obliteration",
                consumable: "bread",
                head: "ranger's hood",
                torso: "shadow assassin's cloak",
                arms: "alchemist's gloves",
                legs: "paladin's greaves",
                feet: "monk's sandals"
            },
            backpack: [
                ['invisible ink pen', 'ethereal prism', 'lunar lace', 'emberroot sapling', 'aetherial lens', "tiger's eye", 'camera', 'invisible ink pen', 'solar flare seed', 'timeless relic', 'celestial feather', 'harmony crystal', 'echoing chime', 'soothing breeze amulet', 'elemental shard', 'cursed doll', 'ensnaring vine', 'frostfire lantern', 'galeforce whistle', "songbird's feather", 'ember veil', "dreamer's journal", 'timeless hourglass', 'serene lotus petal', 'dreamcatcher amulet']
            ]
        },
        health: 244,
        stamina: 107,
        armor: 137,
        mastery: {
            weapon: 17,
            skill: 14
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
    {
        username: "QuantumQuasar77",
        inventory: {
            equipped: {
                weapon: "stormcaller whip",
                skill: "wind dash",
                consumable: "fury infusion",
                head: "beastmaster's helm",
                torso: "thor's chainmail",
                arms: "knight-commander's gauntlets",
                legs: "warrior's legplates",
                feet: "null"
            },
            backpack: [
                ['whispering totem', 'nebula medallion', 'thunderstruck relic', 'galeforce whistle', 'puzzle piece', 'zephyr gem', 'lively coral', 'pyroclasmic ember', 'shadow cloak', 'crystalline vessel', 'eclipsed crystal', 'labyrinthine key', 'resonating crystal', 'emberroot sapling', 'mirror of illusion', "dreamer's journal", 'balloon animal', 'shimmering scepter', "writer's notebook", 'shadow silk scarf', 'enchanted vellum', 'ruby heartstone', "tidecaller's shell", 'thunderstruck relic', 'thunderstruck relic', 'puzzle piece', 'echoing chime', 'whisperwind elixir', 'radiant feather', 'ephemeral feather', 'rune of resilience', "tiger's eye", 'shrouded talisman', 'ensnaring vine', 'science fair award', 'elemental shard', 'celestial ocarina', 'celestial lantern', 'rainbow gemstone', 'enchanted vellum', 'fox tail', "dreamweaver's quill", 'crystalized essence', 'solar flare seed', 'camera']
            ]
        },
        health: 74,
        stamina: 57,
        armor: 152,
        mastery: {
            weapon: 27,
            skill: 8
        },
        savepoint: {
            location: "frozen fortress",
            date: Date()
        }
    },
    {
        username: "MysticMysticX",
        inventory: {
            equipped: {
                weapon: "chaos orb wand",
                skill: "electro trap",
                consumable: "mystical pastry",
                head: "duelist's hat",
                torso: "duelist's attire",
                arms: "sellsword's gauntlets",
                legs: "elemental sorcerer's pants",
                feet: "wanderer's boots"
            },
            backpack: [
                ['sylphic whisper', 'dreamcatcher amulet', 'vortex core', 'hand mirror', 'mirage pearl', 'moonlit essence', 'cursed mirror', 'metal slinky', 'shadow cloak', 'nebula medallion', 'timeless hourglass', 'arcane codex', 'crystalized aurora', 'soulstone trinket', 'whisperwind elixir', 'half eaten apple', 'emberstone charm', ' rubiks cube', 'prismatic crystal', 'frostfallen relic', 'shadow silk scarf', 'crystalized tears', 'moonlit essence', 'science fair award', 'invisible ink pen', 'verdant dreamcatcher', 'lunar lace', 'rusty spoon', 'shrouded talisman', 'frostblossom seed', 'emberroot sapling', 'cursed mirror', 'silver locket', 'mystic orb', 'moonlit essence', "dreamweaver's quill", 'radiant prism', 'starlight veil', 'invisible ink pen', 'elemental shard', "dreamweaver's quill", 'harmony crystal', 'whisperwind elixir', 'ember veil', 'enigmatic scroll', 'crimson phoenix plume']
            ]
        },
        health: 216,
        stamina: 159,
        armor: 122,
        mastery: {
            weapon: 28,
            skill: 21
        },
        savepoint: {
            location: "haunted thicket",
            date: Date()
        }
    },
    {
        username: "NeonNebula21",
        inventory: {
            equipped: {
                weapon: "galactic wand",
                skill: "rock barrage",
                consumable: "agility potion",
                head: "null",
                torso: "druid's robe",
                arms: "monk's gloves",
                legs: "druid's leggings",
                feet: "mystic seer's shoes"
            },
            backpack: [
                ['prismatic crystal', "stormbringer's sigil", 'illusory lantern', 'mirage cloak', 'lunar crest', 'baseball cap', 'silver locket', 'aetherial lens', ' rubiks cube', 'harmonic conch shell', 'radiant prism', 'radiant feather', 'lunar lace', 'moonlit essence', 'half eaten apple', "tidecaller's shell", 'echoing chime', 'shadow cloak', 'stormwhisper feather', "dreamer's journal", 'echoing chime', 'rune of resilience', 'enchanted amulet', 'astral serpent scale', 'frostblossom seed', 'ember veil', 'ethereal prism', 'pyroclasmic ember', 'rusty spoon', "dreamweaver's quill", 'harmony crystal']
            ]
        },
        health: 192,
        stamina: 244,
        armor: 103,
        mastery: {
            weapon: 8,
            skill: 10
        },
        savepoint: {
            location: "oasis of mirages",
            date: Date()
        }
    },
    {
        username: "CyberCatalyst88",
        inventory: {
            equipped: {
                weapon: "astral scepter",
                skill: "hardening lava",
                consumable: "celestial tea",
                head: "mystic seer's hood",
                torso: "assassin's robe",
                arms: "knight's gauntlets",
                legs: "assassin's leggings",
                feet: "null"
            },
            backpack: [
                ['mirror of illusion', 'labyrinthine key', 'prismatic crystal', 'astral serpent scale', 'enigmatic figurine', 'shrouded talisman', 'pyroclasmic ember', 'singing seashell', 'amethyst', 'sylphic whisper', 'starforged ingot', 'radiant prism', 'serenity stone', 'crystalline vessel', 'gilded compass', 'luminous pebble', 'ember veil', 'nebula medallion', 'sylphic whisper', 'rubber chicken', 'prismatic crystal', 'serene lotus petal', 'shadow cloak']
            ]
        },
        health: 210,
        stamina: 151,
        armor: 100,
        mastery: {
            weapon: 16,
            skill: 28
        },
        savepoint: {
            location: "blossom valley",
            date: Date()
        }
    },
    {
        username: "NovaNinja77",
        inventory: {
            equipped: {
                weapon: "heaven's bane saber",
                skill: "volcanic eruption",
                consumable: "water",
                head: "divine paladin's helm",
                torso: "sellsword's chestguard",
                arms: "elementalist's cuffs",
                legs: "alchemist's leggings",
                feet: "null"
            },
            backpack: [
                ['shrouded talisman', 'celestial ocarina', 'verdant dreamcatcher', 'frostfire lantern']
            ]
        },
        health: 219,
        stamina: 232,
        armor: 138,
        mastery: {
            weapon: 28,
            skill: 22
        },
        savepoint: {
            location: "haunted thicket",
            date: Date()
        }
    },
    {
        username: "ShadowSphinxX",
        inventory: {
            equipped: {
                weapon: "blizzard staff",
                skill: "glacial shard",
                consumable: "berry explosion elixir",
                head: "necromancer's hood",
                torso: "ancient guardian's armor",
                arms: "knight's gauntlets",
                legs: "shadow assassin's pants",
                feet: "sorcerer's shoes"
            },
            backpack: [
                ['stormwhisper feather', 'starlight veil', 'frostblossom seed']
            ]
        },
        health: 131,
        stamina: 175,
        armor: 144,
        mastery: {
            weapon: 17,
            skill: 6
        },
        savepoint: {
            location: "mystic glade",
            date: Date()
        }
    },
    {
        username: "QuantumQuintessence21",
        inventory: {
            equipped: {
                weapon: "astral scepter",
                skill: "inferno arrow",
                consumable: "stealthy shroom soup",
                head: "necromancer's hood",
                torso: "archer's tunic",
                arms: "inquisitor's cuffs",
                legs: "ranger's pants",
                feet: "beastmaster's boots"
            },
            backpack: [
                ['volcanic emberstone', "songbird's feather", "dreamweaver's quill", 'aetherial lens', 'zephyr gem', 'singing seashell', 'penumbral pendant', 'crystalized tears', 'ruby heartstone', 'crimson phoenix plume', 'obsidian rune stone', 'lunar crest', 'moonlit essence', 'mirage pearl', 'solar flare seed', 'serenity stone', 'frostfallen relic', 'echoing chime', 'whispering totem', 'frostblossom seed', 'mirage pearl', 'zephyr gem', 'illusory lantern', 'mirage cloak', 'lively coral', 'silver locket', 'rainbow gemstone', 'hand mirror', "dreamweaver's quill", 'sacred sigil', 'ember veil', 'ember veil', 'starlight veil', 'aetherial lens', 'camera', 'arcane rune', 'frostblossom seed', 'labyrinthine key']
            ]
        },
        health: 85,
        stamina: 55,
        armor: 121,
        mastery: {
            weapon: 7,
            skill: 0
        },
        savepoint: {
            location: "inferno citadel",
            date: Date()
        }
    },
    {
        username: "MysticMonolith88",
        inventory: {
            equipped: {
                weapon: "fire whip",
                skill: "thunderstrike",
                consumable: "cheese platter",
                head: "mage's hat",
                torso: "knight's plate armor",
                arms: "null",
                legs: "rogue's trousers",
                feet: "duelist's shoes"
            },
            backpack: [
                ['amethyst', 'tranquil lotus', 'metal slinky', 'phoenix feather', 'soothing breeze amulet', 'verdant blossom', 'lunar lace', 'crimson phoenix plume', 'bottle of wine', 'crystalized essence', 'shrouded talisman']
            ]
        },
        health: 136,
        stamina: 237,
        armor: 96,
        mastery: {
            weapon: 5,
            skill: 14
        },
        savepoint: {
            location: "boggy haven",
            date: Date()
        }
    },
    {
        username: "NeonNexus77",
        inventory: {
            equipped: {
                weapon: "solar blaster",
                skill: "astral shield",
                consumable: "radiant elixir",
                head: "knight's helmet",
                torso: "assassin's robe",
                arms: "knight's gauntlets",
                legs: "ranger's pants",
                feet: "rogue's ankle boots"
            },
            backpack: [
                ["writer's notebook", 'half eaten apple', 'frostfire lantern', 'illusory lantern', 'timeless relic', 'enigmatic scroll', "stormbringer's sigil", 'solar flare seed', 'mysterious music box', 'vortex core', 'crystalized tears', 'illusory lantern', 'lunar blossom', 'lava bloom seed', 'obsidian rune stone', 'bottle of wine', 'enchanted amulet', 'crystalized tears', 'radiant feather', 'ephemeral feather', 'celestial lantern', 'bottle of wine']
            ]
        },
        health: 108,
        stamina: 167,
        armor: 105,
        mastery: {
            weapon: 25,
            skill: 21
        },
        savepoint: {
            location: "boggy haven",
            date: Date()
        }
    },
    {
        username: "CyberConquerorX",
        inventory: {
            equipped: {
                weapon: "galactic wand",
                skill: "shadow trap",
                consumable: "cinnamon roll",
                head: "beastmaster's helm",
                torso: "duelist's attire",
                arms: "knight-commander's gauntlets",
                legs: "knight's greaves",
                feet: "shadow assassin's boots"
            },
            backpack: [
                ['rubber chicken', 'elemental shard', 'sylphic whisper', 'whispering totem', 'astral ribbon', 'prismatic crystal', 'aetheric beacon', 'rubber chicken', 'mirror of illusion', 'crimson phoenix plume', "songbird's feather", 'whisperwind elixir', 'harmonic conch shell', 'stormwhisper feather', 'cursed mirror', "songbird's feather", 'cursed mirror', 'verdant dreamcatcher', 'thunderstruck relic', 'enchanted vellum', 'elemental shard', 'illusory lantern', 'amethyst', 'whispering totem', 'crystalized aurora', 'aetherial lens', 'lava bloom seed', 'astral lantern', 'whisperwind elixir', 'science fair award', 'labyrinthine key', 'vortex core', "stormbringer's sigil", 'frostbound blossom', 'vortex core', 'ephemeral feather', 'arcane rune']
            ]
        },
        health: 144,
        stamina: 202,
        armor: 133,
        mastery: {
            weapon: 13,
            skill: 28
        },
        savepoint: {
            location: "mystic glade",
            date: Date()
        }
    },
    {
        username: "NovaNebulaX21",
        inventory: {
            equipped: {
                weapon: "volt lance",
                skill: "celestial beam",
                consumable: "luminous nectar",
                head: "alchemist's hood",
                torso: "wanderer's coat",
                arms: "knight's gauntlets",
                legs: "knight's greaves",
                feet: "frigg's greaves"
            },
            backpack: [
                ['mirror of illusion', 'zephyr gem', 'arcane rune', 'celestial ocarina', 'ensnaring vine', 'soulstone trinket', 'rune of resilience', 'metal slinky', 'ethereal prism', 'serene lotus petal', 'ensnaring vine', 'hand mirror', 'frostfallen relic', "songbird's feather", 'lunar blossom', 'zephyr gem', 'camera', 'celestial ocarina', 'obsidian rune stone', 'rubber chicken', 'labyrinthine key', 'serene lotus petal', 'mirror of illusion', 'arcane rune', 'ethereal blossom', 'ruby heartstone', 'silver locket', 'frostfire lantern', 'lava bloom seed', 'aetherial lens', 'starlight veil', 'balloon animal', 'ephemeral feather', 'crystalline vessel', "tiger's eye", 'timeless relic', 'ensnaring vine', 'cursed doll', 'obsidian rune stone', "stargazer's lens", 'science fair award', 'sylphic whisper']
            ]
        },
        health: 82,
        stamina: 156,
        armor: 117,
        mastery: {
            weapon: 5,
            skill: 14
        },
        savepoint: {
            location: "celestial junction",
            date: Date()
        }
    },
    {
        username: "ShadowSerpent88",
        inventory: {
            equipped: {
                weapon: "thunder staff",
                skill: "corrosion field",
                consumable: "ironskin elixir",
                head: "knight-commander's helmet",
                torso: "archer's tunic",
                arms: "archer's gloves",
                legs: "knight-commander's greaves",
                feet: "assassin's boots"
            },
            backpack: [
                ['sacred sigil', 'science fair award', 'broken compass', 'illusory lantern', 'cursed doll', 'silver locket', 'invisible ink pen', 'broken compass', 'mirage pearl', 'astral ribbon', 'eclipsed crystal', 'ruby heartstone', 'rusty spoon', "tiger's eye", 'frostbound blossom', 'cursed doll', 'broken compass', 'sacred sigil', 'crystalized aurora', 'volcanic emberstone', 'cursed mirror', 'mystic orb', 'penumbral pendant', 'balloon animal', 'hand mirror', 'emberroot sapling', 'lunar lace', "dreamer's journal", 'labyrinthine key', 'serenity stone', 'luminous pebble', 'ethereal mirror', 'eclipsed crystal', 'ensnaring vine']
            ]
        },
        health: 63,
        stamina: 205,
        armor: 143,
        mastery: {
            weapon: 5,
            skill: 11
        },
        savepoint: {
            location: "aurora summit",
            date: Date()
        }
    },
    {
        username: "MysticMatrix77",
        inventory: {
            equipped: {
                weapon: "serpent's gaze staff",
                skill: "darkness infusion",
                consumable: "stamina potion",
                head: "inquisitor's hood",
                torso: "berserker's chestguard",
                arms: "rogue's fingerless gloves",
                legs: "rogue's trousers",
                feet: "beastmaster's boots"
            },
            backpack: [
                ["stargazer's lens"]
            ]
        },
        health: 88,
        stamina: 140,
        armor: 127,
        mastery: {
            weapon: 16,
            skill: 20
        },
        savepoint: {
            location: "time-worn sanctuary",
            date: Date()
        }
    },
    {
        username: "NeonNomadX21",
        inventory: {
            equipped: {
                weapon: "demon's trident",
                skill: "eclipsed doom",
                consumable: "agility potion",
                head: "mage's hat",
                torso: "mage's robe",
                arms: "divine paladin's gauntlets",
                legs: "elementalist's leggings",
                feet: "mage's shoes"
            },
            backpack: [
                ['bottle of wine', 'whisperwind elixir', 'enigmatic crest', 'soulstone trinket', 'ensnaring vine', 'ephemeral feather', 'sacred sigil', 'radiant prism', 'emberroot sapling']
            ]
        },
        health: 210,
        stamina: 245,
        armor: 101,
        mastery: {
            weapon: 16,
            skill: 3
        },
        savepoint: {
            location: "volted citadel",
            date: Date()
        }
    },
    {
        username: "CyberCatalyst88",
        inventory: {
            equipped: {
                weapon: "mindflayer's scepter",
                skill: "astral shield",
                consumable: "celestial cheesecake",
                head: "archer's hat",
                torso: "sellsword's chestguard",
                arms: "assassin's gloves",
                legs: "necromancer's pants",
                feet: "wanderer's boots"
            },
            backpack: [
                ['emberstone charm', 'zephyr gem', 'tranquil lotus', 'vortex core', 'harmony crystal']
            ]
        },
        health: 105,
        stamina: 70,
        armor: 119,
        mastery: {
            weapon: 20,
            skill: 7
        },
        savepoint: {
            location: "desolate plaza",
            date: Date()
        }
    },
    {
        username: "NovaNexus77",
        inventory: {
            equipped: {
                weapon: "vortex gauntlets",
                skill: "typhoon step",
                consumable: "echoing elixir",
                head: "sellsword's helm",
                torso: "warrior's chestplate",
                arms: "druid's bracers",
                legs: "mystic seer's pants",
                feet: "inquisitor's boots"
            },
            backpack: [
                ['volcanic emberstone', 'volcanic emberstone', 'soulstone trinket', 'celestial lantern', 'celestial lantern', 'frostfallen relic', 'lunar crest', "stargazer's lens", 'frostbound blossom', 'silver locket', 'prismatic crystal', 'arcane rune', 'prismatic crystal', 'resonating crystal', "dreamweaver's quill", 'half eaten apple', 'frostblossom seed', 'rubber chicken', 'shadow cloak', 'enigmatic crest', 'gilded compass', 'enigmatic figurine', 'zephyr gem', 'gilded compass', 'mirage pearl', 'enchanted amulet', 'mysterious music box', 'lunar blossom', "tiger's eye", 'ethereal mirror', "stargazer's lens", 'resonating crystal', 'invisible ink pen', 'aetherial lens', 'enigmatic figurine']
            ]
        },
        health: 140,
        stamina: 59,
        armor: 150,
        mastery: {
            weapon: 15,
            skill: 23
        },
        savepoint: {
            location: "elven village",
            date: Date()
        }
    },
    {
        username: "ShadowSphinxX21",
        inventory: {
            equipped: {
                weapon: "lava axe",
                skill: "solar flare",
                consumable: "timeless elixir",
                head: "sorcerer's hat",
                torso: "berserker's chestguard",
                arms: "divine paladin's gauntlets",
                legs: "alchemist's leggings",
                feet: "frigg's greaves"
            },
            backpack: [
                ['gilded compass', 'baseball cap', 'celestial lantern', 'timeless hourglass']
            ]
        },
        health: 64,
        stamina: 195,
        armor: 143,
        mastery: {
            weapon: 8,
            skill: 21
        },
        savepoint: {
            location: "subterranean citadel",
            date: Date()
        }
    },
    {
        username: "QuantumQuintessence88",
        inventory: {
            equipped: {
                weapon: "arcane bow",
                skill: "astral barrier",
                consumable: "earthroot soup",
                head: "alchemist's hood",
                torso: "null",
                arms: "warrior's bracers",
                legs: "archer's pants",
                feet: "wanderer's boots"
            },
            backpack: [
                ['mystic orb', 'frostbound blossom', 'shimmering scepter', 'emberroot sapling', 'ethereal blossom', 'shrouded talisman', 'radiant prism', 'mirror of illusion', 'ethereal prism', 'metal slinky', 'shadow silk scarf', "dreamweaver's quill", 'vortex core', 'illusory lantern', 'aetherial lens', 'cursed doll', 'hand mirror', 'science fair award', 'invisible ink pen', 'amethyst', 'cavernous gemstone', 'lunar crest', ' rubiks cube', 'rubber chicken', 'obsidian rune stone', "dreamer's journal", 'solar flare seed', 'obsidian rune stone', 'pyroclasmic ember', 'aetheric beacon', 'enchanted amulet', 'crystalized essence', 'astral serpent scale', 'phoenix feather', 'pyroclasmic ember', 'aetherial lens', 'celestial ocarina']
            ]
        },
        health: 156,
        stamina: 133,
        armor: 91,
        mastery: {
            weapon: 7,
            skill: 18
        },
        savepoint: {
            location: "feywood forest",
            date: Date()
        }
    },
    {
        username: "MysticMonolith77",
        inventory: {
            equipped: {
                weapon: "lightning spear",
                skill: "umbral shield",
                consumable: "elixir of vitality",
                head: "The honored one's blindfold",
                torso: "warrior's chestplate",
                arms: "berserker's wristguards",
                legs: "knight-commander's greaves",
                feet: "elementalist's sandals"
            },
            backpack: [
                ['amethyst', 'nebula medallion', 'cavernous gemstone', 'shimmering scepter', 'starlight veil', 'starlight veil', 'shadow cloak', 'thunderstruck relic', 'luminous pebble', 'amethyst', 'frostfallen relic', 'moonlit essence', 'mirror of illusion', 'obsidian rune stone', 'celestial feather', 'timeless relic', 'sacred sigil']
            ]
        },
        health: 72,
        stamina: 78,
        armor: 151,
        mastery: {
            weapon: 17,
            skill: 18
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
    {
        username: "NeonNexusX21",
        inventory: {
            equipped: {
                weapon: "nova rifle",
                skill: "stormy trap",
                consumable: "blueberry muffin",
                head: "mage's hat",
                torso: "ranger's cloak",
                arms: "alchemist's gloves",
                legs: "beastmaster's leggings",
                feet: "frigg's greaves"
            },
            backpack: [
                ['crystalline vessel', 'emberstone charm', 'moonlit essence', 'timeless hourglass', 'amethyst', 'luminous pebble', "tiger's eye", "stormbringer's sigil", ' rubiks cube', 'baseball cap', 'dreamcatcher amulet', 'harmony crystal', 'mirage cloak', 'astral serpent scale', 'arcane rune', 'astral lantern', 'volcanic emberstone', 'lunar blossom', "stormbringer's sigil", 'shadow silk scarf', 'cursed doll', 'mirror of illusion', "dreamweaver's quill", 'cavernous gemstone', 'rubber chicken', 'shadow cloak', 'timeless hourglass', 'phoenix feather', 'labyrinthine key', 'celestial lantern', 'cavernous gemstone', 'lively coral', 'cavernous gemstone', 'radiant prism', 'crystalized aurora', 'lava bloom seed', 'crystalized aurora']
            ]
        },
        health: 100,
        stamina: 231,
        armor: 114,
        mastery: {
            weapon: 15,
            skill: 28
        },
        savepoint: {
            location: "celestial junction",
            date: Date()
        }
    },
    {
        username: "CyberConqueror88",
        inventory: {
            equipped: {
                weapon: "energy blade",
                skill: "earthen trap",
                consumable: "bread",
                head: "elemental sorcerer's hat",
                torso: "ancient guardian's armor",
                arms: "necromancer's gloves",
                legs: "druid's leggings",
                feet: "necromancer's boots"
            },
            backpack: [
                ['galeforce whistle', 'whisperwind elixir', 'bottle of wine', 'volcanic emberstone']
            ]
        },
        health: 143,
        stamina: 184,
        armor: 153,
        mastery: {
            weapon: 16,
            skill: 16
        },
        savepoint: {
            location: "tempest summit",
            date: Date()
        }
    },
    {
        username: "NovaNebula77",
        inventory: {
            equipped: {
                weapon: "silver sword",
                skill: "shadow veil",
                consumable: "speed potion",
                head: "sellsword's helm",
                torso: "beastmaster's chestplate",
                arms: "monk's gloves",
                legs: "sellsword's legguards",
                feet: "duelist's shoes"
            },
            backpack: [
                ['mysterious music box', 'arcane rune', 'amethyst', 'nebula medallion', 'verdant blossom', 'thunderstruck relic', 'ethereal mirror', 'enchanted vellum', 'thunderstruck relic', 'cavernous gemstone', 'ensnaring vine', "tiger's eye", 'rune of resilience', 'verdant blossom', 'gilded compass', "dreamer's journal", 'luminous pebble', 'serene lotus petal', 'labyrinthine key', 'puzzle piece', 'ensnaring vine', "tidecaller's shell", 'phoenix feather', 'enigmatic scroll']
            ]
        },
        health: 112,
        stamina: 233,
        armor: 142,
        mastery: {
            weapon: 26,
            skill: 2
        },
        savepoint: {
            location: "stormwatch tower",
            date: Date()
        }
    },
    {
        username: "ShadowSerpentX21",
        inventory: {
            equipped: {
                weapon: "shadowmeld blade",
                skill: "slime tsunami",
                consumable: "honeyed nectar",
                head: "sellsword's helm",
                torso: "warrior's chestplate",
                arms: "null",
                legs: "warrior's legplates",
                feet: "archer's boots"
            },
            backpack: [
                ['crystalized tears', 'camera', 'moonlit essence', 'moonlit essence', 'lively coral', 'thunderstruck relic', 'radiant prism', 'harmony crystal', 'harmony crystal', 'illusory lantern', 'penumbral pendant', 'galeforce whistle', 'hand mirror', 'rune of resilience', 'echoing chime', 'soothing breeze amulet', 'whisperwind elixir', 'starforged ingot', 'resonating crystal', 'nebula medallion', 'enchanted vellum', 'singing seashell', "songbird's feather", 'astral ribbon', 'harmonic conch shell', 'cavernous gemstone', 'dreamcatcher amulet', 'vortex core', 'obsidian rune stone', 'metal slinky', 'metal slinky', 'shadow silk scarf', 'ephemeral feather', 'pyroclasmic ember']
            ]
        },
        health: 70,
        stamina: 145,
        armor: 120,
        mastery: {
            weapon: 12,
            skill: 29
        },
        savepoint: {
            location: "frozen fortress",
            date: Date()
        }
    },
    {
        username: "MysticMatrix88",
        inventory: {
            equipped: {
                weapon: "glacier staff",
                skill: "volt dash",
                consumable: "fury infusion",
                head: "rogue's mask",
                torso: "sellsword's chestguard",
                arms: "warrior's bracers",
                legs: "wanderer's pants",
                feet: "necromancer's boots"
            },
            backpack: [
                ["dreamweaver's quill", 'tranquil lotus', 'half eaten apple', ' rubiks cube', "writer's notebook", 'shimmering scepter', 'amethyst', 'crystalized essence', 'obsidian rune stone', 'luminous pebble', 'galeforce whistle', 'shadow cloak', 'whisperwind elixir', 'mysterious music box', 'science fair award', 'crystalized aurora', "dreamer's journal", 'pyroclasmic ember', 'zephyr gem', 'sylphic whisper', 'serene lotus petal', 'dreamcatcher amulet', 'shadow cloak', 'rubber chicken', 'ember veil', 'rusty spoon', 'frostfallen relic', 'cursed doll', 'timeless relic', 'illusory lantern', "dreamweaver's quill", 'invisible ink pen', 'cursed doll', 'astral lantern', "dreamer's journal", 'rubber chicken', "songbird's feather", 'arcane codex', 'broken compass', 'rune of resilience', 'celestial ocarina', 'penumbral pendant', 'frostbound blossom', 'obsidian rune stone', 'timeless relic', 'timeless relic', 'enigmatic figurine', "stargazer's lens"]
            ]
        },
        health: 191,
        stamina: 179,
        armor: 127,
        mastery: {
            weapon: 29,
            skill: 22
        },
        savepoint: {
            location: "lunar sanctuary",
            date: Date()
        }
    },
    {
        username: "NeonNomad77",
        inventory: {
            equipped: {
                weapon: "mindbender's staff",
                skill: "cataclysmic upheaval",
                consumable: "crimson elixir",
                head: "inquisitor's hood",
                torso: "shadow assassin's cloak",
                arms: "druid's bracers",
                legs: "beastmaster's leggings",
                feet: "The honored one's boots"
            },
            backpack: [
                ['harmonic conch shell', 'rainbow gemstone', 'verdant blossom', 'arcane codex', 'labyrinthine key', 'luminous pebble', 'phoenix feather', 'verdant dreamcatcher', 'aetherial lens', 'luminous pebble', 'mirror of illusion', "tidecaller's shell", 'lunar lace', 'invisible ink pen', 'mirror of illusion', 'frostfallen relic', 'shadow silk scarf', 'thunderstruck relic', 'aetherial lens', 'vortex core', 'resonating crystal', 'frostbound blossom', 'radiant prism', 'moonlit essence', 'crystalized tears', 'crystalized tears', 'arcane codex', 'vortex core', 'enchanted amulet', 'volcanic emberstone', "stormbringer's sigil", 'sylphic whisper', "stargazer's lens", 'enigmatic figurine', 'half eaten apple', 'aetheric beacon', 'lively coral', 'science fair award']
            ]
        },
        health: 243,
        stamina: 90,
        armor: 140,
        mastery: {
            weapon: 22,
            skill: 2
        },
        savepoint: {
            location: "tempest summit",
            date: Date()
        }
    },
    {
        username: "CyberCatalystX21",
        inventory: {
            equipped: {
                weapon: "blizzard staff",
                skill: "acid rain",
                consumable: "arcane apple pie",
                head: "odin's crown",
                torso: "null",
                arms: "shadow assassin's gloves",
                legs: "assassin's leggings",
                feet: "ranger's boots"
            },
            backpack: [
                ['enchanted vellum', 'radiant feather', 'astral ribbon', 'phoenix feather', "songbird's feather", 'pyroclasmic ember', 'enchanted amulet', 'rainbow gemstone', 'starforged ingot', 'shimmering scepter', 'illusory lantern', 'crystalized aurora', 'bottle of wine', 'amethyst', "stormbringer's sigil", 'shadow silk scarf', "tiger's eye", 'crimson phoenix plume', 'frostblossom seed', 'luminous pebble', 'shadow cloak', 'nebula medallion', 'sylphic whisper', 'broken compass', 'gilded compass', 'echoing chime']
            ]
        },
        health: 193,
        stamina: 66,
        armor: 95,
        mastery: {
            weapon: 22,
            skill: 3
        },
        savepoint: {
            location: "stardust grove",
            date: Date()
        }
    },
{
	username: "QuantumQuesterX",
	inventory: {
		equipped: {
			weapon: "magma lash",
			skill: "fireball",
			consumable: "radiant elixir",
			head: "divine paladin's helm",
			torso: "druid's robe",
			arms: "shadow assassin's gloves",
			legs: "ancient guardian's greaves",
			feet: "inquisitor's boots"
		},
		backpack: [
			["stormbringer's sigil", 'whispering totem', 'mirror of illusion', "stormbringer's sigil", 'serenity stone', 'crimson phoenix plume', 'enigmatic figurine', 'frostblossom seed', 'hand mirror', 'enchanted amulet', 'shadow cloak', 'enchanted amulet', 'shadow silk scarf', 'nebula medallion', 'celestial lantern', 'shrouded talisman', 'aetheric beacon', 'enigmatic figurine', 'celestial lantern', 'soulstone trinket', 'starlight veil', 'rusty spoon', 'cursed doll', 'astral ribbon', 'resonating crystal', 'labyrinthine key', 'puzzle piece', "tiger's eye", 'silver locket', 'ember veil', 'elemental shard', 'rune of resilience', 'harmonic conch shell', 'eclipsed crystal', 'enigmatic crest', 'tranquil lotus', 'starforged ingot', 'crystalline vessel', 'lively coral', 'bottle of wine', 'cursed mirror', 'moonlit essence', 'starforged ingot', 'solar flare seed', 'penumbral pendant', 'lava bloom seed', 'arcane codex', "tiger's eye"]
		]
	},
	health: 79,
	stamina: 101,
	armor: 171,
	mastery: {
		weapon: 10,
		skill: 17
	},
	savepoint: {
		location: "divine citadel",
		date: Date()
	}
},
{
	username: "NeonNebulaX88",
	inventory: {
		equipped: {
			weapon: "phantasmal dagger",
			skill: "frost nova",
			consumable: "sparkling cider",
			head: "warrior's helm",
			torso: "The honored one's jacket",
			arms: "ranger's gloves",
			legs: "duelist's trousers",
			feet: "ancient guardian's boots"
		},
		backpack: [
			[]
		]
	},
	health: 228,
	stamina: 169,
	armor: 141,
	mastery: {
		weapon: 21,
		skill: 28
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "MysticMatrixX77",
	inventory: {
		equipped: {
			weapon: "celestial sword",
			skill: "corrosive cloud",
			consumable: "dragon's blood elixir",
			head: "sellsword's helm",
			torso: "divine paladin's chestplate",
			arms: "ranger's gloves",
			legs: "druid's leggings",
			feet: "elemental sorcerer's shoes"
		},
		backpack: [
			['ethereal prism', 'zephyr gem', 'half eaten apple', 'shrouded talisman', 'frostfire lantern', 'mirage cloak', 'verdant blossom', 'ember veil', 'phoenix feather', 'metal slinky', 'camera', 'radiant prism', 'silver locket', 'pyroclasmic ember', 'moonlit essence', 'lunar crest', 'rainbow gemstone', 'radiant feather', 'lunar blossom', 'frostblossom seed']
		]
	},
	health: 62,
	stamina: 132,
	armor: 145,
	mastery: {
		weapon: 24,
		skill: 29
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "ShadowSphinx77",
	inventory: {
		equipped: {
			weapon: "venomous crossbow",
			skill: "flame shield",
			consumable: "thunderberry pie",
			head: "knight-commander's helmet",
			torso: "wanderer's coat",
			arms: "assassin's gloves",
			legs: "yggdrasil's leggings",
			feet: "sorcerer's shoes"
		},
		backpack: [
			['aetheric beacon', 'astral ribbon', 'fox tail', 'soulstone trinket', 'frostbound blossom', 'puzzle piece', 'moonlit essence', 'soothing breeze amulet', 'broken compass', 'arcane codex', 'astral ribbon', 'rainbow gemstone', 'prismatic crystal', 'crystalized tears', 'emberstone charm', 'dreamcatcher amulet']
		]
	},
	health: 133,
	stamina: 206,
	armor: 136,
	mastery: {
		weapon: 30,
		skill: 7
	},
	savepoint: {
		location: "frozen fortress",
		date: Date()
	}
},
{
	username: "CyberCrafterX",
	inventory: {
		equipped: {
			weapon: "plasma edge",
			skill: "glacial shard",
			consumable: "crimson elixir",
			head: "duelist's hat",
			torso: "divine paladin's chestplate",
			arms: "tyr's gauntlets",
			legs: "assassin's leggings",
			feet: "divine paladin's boots"
		},
		backpack: [
			['serene lotus petal', 'puzzle piece', 'crystalline vessel', 'mirage pearl', 'astral serpent scale', 'luminous pebble', 'radiant prism', 'enigmatic crest', 'serene lotus petal', 'lunar blossom', "stargazer's lens", 'aetherial lens', 'shadow silk scarf', 'emberroot sapling', 'ensnaring vine', 'lava bloom seed', 'celestial feather', 'rusty spoon', 'soulstone trinket', 'arcane codex', 'frostfallen relic', 'timeless relic', 'mystic orb']
		]
	},
	health: 79,
	stamina: 237,
	armor: 188,
	mastery: {
		weapon: 26,
		skill: 8
	},
	savepoint: {
		location: "frozen fortress",
		date: Date()
	}
},
{
	username: "NovaNebulaMaster",
	inventory: {
		equipped: {
			weapon: "shadowmeld blade",
			skill: "scorching whirlwind",
			consumable: "void essence",
			head: "archer's hat",
			torso: "druid's robe",
			arms: "tyr's gauntlets",
			legs: "paladin's greaves",
			feet: "necromancer's boots"
		},
		backpack: [
			['emberstone charm', 'lunar lace', 'lively coral', 'rune of resilience', 'astral lantern', 'solar flare seed', 'radiant prism', 'rune of resilience', 'moonlit essence', 'starforged ingot', 'luminous pebble', 'arcane rune', 'solar flare seed', 'solar flare seed', "songbird's feather", 'cursed mirror', 'sacred sigil', 'enchanted vellum', 'ethereal blossom', 'verdant blossom', 'crystalline vessel', 'singing seashell', "tidecaller's shell", 'astral lantern', 'timeless hourglass', 'lunar crest', 'obsidian rune stone', 'metal slinky', "stormbringer's sigil", 'astral serpent scale', ' rubiks cube', 'ethereal prism', 'enigmatic crest', 'crystalized essence', 'resonating crystal', 'frostfallen relic', 'whispering totem', 'mystic orb', 'puzzle piece', 'resonating crystal', 'bottle of wine', 'emberroot sapling', 'enigmatic crest', 'half eaten apple', 'celestial lantern', 'celestial ocarina', "stargazer's lens", 'enigmatic scroll']
		]
	},
	health: 127,
	stamina: 109,
	armor: 165,
	mastery: {
		weapon: 30,
		skill: 7
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "NeonNinjaX21",
	inventory: {
		equipped: {
			weapon: "time-bender's scythe",
			skill: "noxious wave",
			consumable: "quicksilver elixir",
			head: "alchemist's hood",
			torso: "divine paladin's chestplate",
			arms: "paladin's gauntlets",
			legs: "knight's greaves",
			feet: "knight's boots"
		},
		backpack: [
			['shimmering scepter', 'enigmatic scroll', "stargazer's lens", 'obsidian rune stone', 'ephemeral feather', 'aetherial lens', 'vortex core', 'ruby heartstone', 'enigmatic scroll', 'nebula medallion', 'lava bloom seed', 'ember veil', "tidecaller's shell", 'lunar blossom', 'crystalized essence', 'aetheric beacon', 'singing seashell', 'celestial feather', 'science fair award', 'stormwhisper feather', 'hand mirror']
		]
	},
	health: 239,
	stamina: 135,
	armor: 142,
	mastery: {
		weapon: 4,
		skill: 27
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "MysticMonarch77",
	inventory: {
		equipped: {
			weapon: "thorned whip",
			skill: "storm nova",
			consumable: "venomous brew",
			head: "rogue's mask",
			torso: "inquisitor's vestment",
			arms: "knight-commander's gauntlets",
			legs: "warrior's legplates",
			feet: "divine paladin's boots"
		},
		backpack: [
			['half eaten apple', 'shimmering scepter', 'singing seashell', 'volcanic emberstone', 'crystalized aurora', 'penumbral pendant', 'aetheric beacon', 'serene lotus petal', 'frostfallen relic', 'volcanic emberstone', 'solar flare seed', "stargazer's lens", 'sylphic whisper', 'harmonic conch shell', 'illusory lantern', 'ember veil', "tidecaller's shell", 'harmony crystal', 'thunderstruck relic', 'eclipsed crystal', 'half eaten apple', 'harmonic conch shell', 'mirage pearl', 'harmony crystal', 'harmony crystal', 'galeforce whistle', 'moonlit essence', 'gilded compass', 'cavernous gemstone', 'astral ribbon', 'galeforce whistle', 'cursed mirror', 'amethyst', 'arcane rune', 'astral lantern', 'metal slinky', 'solar flare seed']
		]
	},
	health: 61,
	stamina: 216,
	armor: 156,
	mastery: {
		weapon: 3,
		skill: 16
	},
	savepoint: {
		location: "oasis of echoes",
		date: Date()
	}
},
{
	username: "QuantumQuasarX",
	inventory: {
		equipped: {
			weapon: "lava axe",
			skill: "plague burst",
			consumable: "ironskin elixir",
			head: "shadow assassin's mask",
			torso: "mystic seer's robe",
			arms: "sellsword's gauntlets",
			legs: "mage's leggings",
			feet: "knight's boots"
		},
		backpack: [
			['lunar lace', 'science fair award', 'astral ribbon', 'half eaten apple', 'ember veil', 'frostblossom seed', 'metal slinky', 'galeforce whistle', 'pyroclasmic ember', 'tranquil lotus', 'illusory lantern', 'shadow silk scarf', 'shadow cloak', 'resonating crystal', 'crimson phoenix plume', 'singing seashell', 'ruby heartstone', 'bottle of wine', 'rubber chicken', 'mirage pearl', 'illusory lantern', 'radiant prism', 'ethereal prism', 'shadow cloak', 'starlight veil', 'lava bloom seed', 'aetheric beacon', 'lively coral', 'echoing chime', 'sacred sigil', 'radiant prism', 'frostblossom seed', 'astral lantern', 'thunderstruck relic', 'pyroclasmic ember', 'sylphic whisper', 'invisible ink pen', 'hand mirror', 'half eaten apple', 'lunar crest', 'moonlit essence', 'arcane codex', 'emberstone charm', 'echoing chime', 'ember veil', 'ensnaring vine', 'radiant feather', 'galeforce whistle', 'silver locket']
		]
	},
	health: 193,
	stamina: 209,
	armor: 134,
	mastery: {
		weapon: 0,
		skill: 6
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "NebulaNemesis88",
	inventory: {
		equipped: {
			weapon: "lunar blaster cannon",
			skill: "hardening lava",
			consumable: "dexterity potion",
			head: "The honored one's blindfold",
			torso: "sellsword's chestguard",
			arms: "knight-commander's gauntlets",
			legs: "elementalist's leggings",
			feet: "The honored one's boots"
		},
		backpack: [
			['pyroclasmic ember', 'ethereal blossom', 'aetheric beacon', 'frostblossom seed', 'nebula medallion', 'rainbow gemstone', 'enigmatic crest', 'gilded compass', 'celestial lantern', 'arcane codex', 'ruby heartstone', 'astral ribbon', 'science fair award', "dreamer's journal", 'silver locket', 'echoing chime', 'frostbound blossom', 'lunar blossom', 'fox tail', 'labyrinthine key', 'emberroot sapling', 'nebula medallion', 'crystalline vessel', 'timeless relic', 'broken compass', "tiger's eye", 'shimmering scepter', 'solar flare seed', 'thunderstruck relic', 'ember veil', 'lava bloom seed']
		]
	},
	health: 172,
	stamina: 200,
	armor: 144,
	mastery: {
		weapon: 30,
		skill: 9
	},
	savepoint: {
		location: "lunar sanctuary",
		date: Date()
	}
},
{
	username: "CyberShadowX21",
	inventory: {
		equipped: {
			weapon: "lunar blaster cannon",
			skill: "solar flare",
			consumable: "soulstone soup",
			head: "alchemist's hood",
			torso: "archer's tunic",
			arms: "archer's gloves",
			legs: "assassin's leggings",
			feet: "warrior's boots"
		},
		backpack: [
			['enigmatic figurine', 'solar flare seed', 'hand mirror', 'frostbound blossom', 'pyroclasmic ember', 'cursed doll', 'gilded compass', 'astral serpent scale', 'harmony crystal', 'solar flare seed', 'pyroclasmic ember', 'cursed mirror', 'serene lotus petal', 'emberroot sapling', 'lunar blossom', 'ruby heartstone', 'soulstone trinket', 'shimmering scepter', 'enigmatic scroll', 'crystalized tears', 'serene lotus petal', 'enigmatic figurine', 'rainbow gemstone', 'ensnaring vine', 'timeless hourglass', 'echoing chime', 'silver locket', 'elemental shard', 'moonlit essence', 'sylphic whisper', 'shadow cloak', 'serenity stone', 'stormwhisper feather', 'rubber chicken', 'crimson phoenix plume', 'mirror of illusion', 'verdant blossom', 'ethereal mirror', 'enchanted vellum', 'amethyst']
		]
	},
	health: 97,
	stamina: 206,
	armor: 118,
	mastery: {
		weapon: 17,
		skill: 6
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "NovaNexusX77",
	inventory: {
		equipped: {
			weapon: "samurai's katana",
			skill: "fireball",
			consumable: "cosmic cake",
			head: "shadow assassin's mask",
			torso: "necromancer's cloak",
			arms: "rogue's fingerless gloves",
			legs: "mage's leggings",
			feet: "necromancer's boots"
		},
		backpack: [
			['sylphic whisper', 'singing seashell', 'rusty spoon', 'gilded compass', 'shadow cloak', 'gilded compass', 'luminous pebble', 'amethyst', "stormbringer's sigil", 'vortex core', "tidecaller's shell", 'crystalized aurora', 'emberroot sapling']
		]
	},
	health: 237,
	stamina: 238,
	armor: 114,
	mastery: {
		weapon: 29,
		skill: 7
	},
	savepoint: {
		location: "tempest summit",
		date: Date()
	}
},
{
	username: "NeonNovaX88",
	inventory: {
		equipped: {
			weapon: "vortex gauntlets",
			skill: "tectonic trap",
			consumable: "steak",
			head: "rogue's mask",
			torso: "alchemist's robe",
			arms: "rogue's fingerless gloves",
			legs: "beastmaster's leggings",
			feet: "elemental sorcerer's shoes"
		},
		backpack: [
			['astral lantern', 'obsidian rune stone', 'aetheric beacon', "tidecaller's shell", 'prismatic crystal', 'lunar blossom', 'aetherial lens', 'rubber chicken', 'harmony crystal', 'mirage pearl', ' rubiks cube', 'camera', 'enigmatic scroll', 'ethereal prism', 'shadow cloak', 'ruby heartstone']
		]
	},
	health: 72,
	stamina: 157,
	armor: 125,
	mastery: {
		weapon: 16,
		skill: 24
	},
	savepoint: {
		location: "boggy haven",
		date: Date()
	}
},
{
	username: "MysticMystic77",
	inventory: {
		equipped: {
			weapon: "stellar blaster",
			skill: "poison dart",
			consumable: "bison steak",
			head: "warrior's helm",
			torso: "ancient guardian's armor",
			arms: "shadow assassin's gloves",
			legs: "mage's leggings",
			feet: "The honored one's boots"
		},
		backpack: [
			['lunar crest', 'bottle of wine', 'soothing breeze amulet', 'celestial feather', "stormbringer's sigil", 'mirror of illusion', 'astral lantern', 'elemental shard', 'astral lantern', "tidecaller's shell", 'rainbow gemstone', 'illusory lantern', 'solar flare seed', 'rune of resilience', 'vortex core', 'tranquil lotus']
		]
	},
	health: 57,
	stamina: 194,
	armor: 147,
	mastery: {
		weapon: 6,
		skill: 9
	},
	savepoint: {
		location: "haunted harbor",
		date: Date()
	}
},
{
	username: "QuantumQuintessenceX",
	inventory: {
		equipped: {
			weapon: "frostbite fang",
			skill: "tempest tornado",
			consumable: "tea",
			head: "null",
			torso: "rogue's leather vest",
			arms: "wanderer's gloves",
			legs: "The honored one's pants",
			feet: "assassin's boots"
		},
		backpack: [
			['radiant feather', 'fox tail', 'timeless hourglass', "tiger's eye", 'frostblossom seed']
		]
	},
	health: 77,
	stamina: 229,
	armor: 81,
	mastery: {
		weapon: 28,
		skill: 8
	},
	savepoint: {
		location: "elven village",
		date: Date()
	}
},
{
	username: "CyberCatalyst77",
	inventory: {
		equipped: {
			weapon: "ethereal slicer",
			skill: "eclipse burst",
			consumable: "invisibility potion",
			head: "sellsword's helm",
			torso: "knight's plate armor",
			arms: "null",
			legs: "archer's pants",
			feet: "beastmaster's boots"
		},
		backpack: [
			['serenity stone', 'starforged ingot', 'camera', 'shadow silk scarf', "dreamer's journal", 'mirage pearl', ' rubiks cube', 'arcane rune', 'broken compass', 'mysterious music box', 'lava bloom seed', 'crystalized aurora', 'celestial feather', 'shadow cloak', 'amethyst', 'frostfire lantern', 'camera', 'rusty spoon', 'aetherial lens', 'science fair award', 'soulstone trinket', 'metal slinky', 'invisible ink pen', 'broken compass', 'camera', 'serenity stone', 'bottle of wine', 'enchanted amulet', 'mysterious music box', "writer's notebook", 'harmonic conch shell', 'mysterious music box', 'serene lotus petal', 'frostfire lantern', 'amethyst', 'thunderstruck relic', "dreamweaver's quill", 'zephyr gem', "writer's notebook", 'lively coral', "dreamweaver's quill", 'starlight veil', 'lunar blossom', 'crimson phoenix plume', 'fox tail', 'shadow silk scarf', 'camera', 'echoing chime', 'puzzle piece']
		]
	},
	health: 132,
	stamina: 148,
	armor: 117,
	mastery: {
		weapon: 20,
		skill: 10
	},
	savepoint: {
		location: "time-worn sanctuary",
		date: Date()
	}
},
{
	username: "NovaNomadX21",
	inventory: {
		equipped: {
			weapon: "ruby scimitar",
			skill: "celestial beam",
			consumable: "amber ale",
			head: "elemental sorcerer's hat",
			torso: "knight-commander's plate",
			arms: "mystic seer's gloves",
			legs: "necromancer's pants",
			feet: "divine paladin's boots"
		},
		backpack: [
			["tidecaller's shell", 'starforged ingot', 'cursed mirror', 'rainbow gemstone', 'rune of resilience', 'mysterious music box', 'resonating crystal', 'serene lotus petal', "stargazer's lens", 'ephemeral feather', 'arcane rune', 'volcanic emberstone', 'shadow cloak', "tidecaller's shell", 'ethereal prism', 'mirror of illusion', 'amethyst', 'eclipsed crystal', 'echoing chime', 'ephemeral feather', 'elemental shard', 'penumbral pendant', 'ethereal mirror', 'enigmatic crest', 'pyroclasmic ember', 'tranquil lotus', 'volcanic emberstone', 'enchanted vellum', 'thunderstruck relic', 'aetherial lens', "tiger's eye", 'nebula medallion', 'celestial ocarina', 'starforged ingot']
		]
	},
	health: 105,
	stamina: 168,
	armor: 167,
	mastery: {
		weapon: 17,
		skill: 3
	},
	savepoint: {
		location: "stormwatch tower",
		date: Date()
	}
},
{
	username: "ShadowSaberX88",
	inventory: {
		equipped: {
			weapon: "stormcaller whip",
			skill: "glacial shard",
			consumable: "astral ambrosia",
			head: "mystic seer's hood",
			torso: "sorcerer's robe",
			arms: "knight-commander's gauntlets",
			legs: "elementalist's leggings",
			feet: "rogue's ankle boots"
		},
		backpack: [
			['arcane rune', 'enigmatic crest', 'emberstone charm', 'ethereal mirror', 'gilded compass', 'fox tail', 'frostblossom seed', 'singing seashell', 'shadow cloak', 'phoenix feather', 'mirror of illusion', ' rubiks cube', 'galeforce whistle', 'soothing breeze amulet', 'sylphic whisper', 'whisperwind elixir', 'vortex core', 'lunar crest', 'frostfire lantern', 'crystalized essence', ' rubiks cube', 'enigmatic scroll', 'luminous pebble', 'aetheric beacon', 'stormwhisper feather', 'timeless relic', 'lunar blossom', 'pyroclasmic ember', 'camera', 'silver locket', 'radiant prism']
		]
	},
	health: 83,
	stamina: 170,
	armor: 127,
	mastery: {
		weapon: 27,
		skill: 14
	},
	savepoint: {
		location: "stardust grove",
		date: Date()
	}
},
{
	username: "MysticMatrixMaster",
	inventory: {
		equipped: {
			weapon: "fire whip",
			skill: "charged dash",
			consumable: "venomous brew",
			head: "druid's crown",
			torso: "sellsword's chestguard",
			arms: "inquisitor's cuffs",
			legs: "ancient guardian's greaves",
			feet: "duelist's shoes"
		},
		backpack: [
			["stormbringer's sigil", 'serenity stone', 'stormwhisper feather', 'sylphic whisper', 'invisible ink pen', 'balloon animal', 'science fair award', 'puzzle piece', 'cursed mirror', 'arcane codex', 'arcane codex', "tiger's eye", 'crystalized tears', "dreamweaver's quill", "stormbringer's sigil", 'phoenix feather', 'ember veil', 'invisible ink pen', 'astral serpent scale', 'pyroclasmic ember', 'enigmatic figurine', 'serenity stone']
		]
	},
	health: 215,
	stamina: 182,
	armor: 155,
	mastery: {
		weapon: 13,
		skill: 9
	},
	savepoint: {
		location: "mystic glade",
		date: Date()
	}
},
{
	username: "QuantumQuakeX21",
	inventory: {
		equipped: {
			weapon: "polar spear thrower",
			skill: "electrified arrow",
			consumable: "angel's grace potion",
			head: "assassin's hood",
			torso: "thor's chainmail",
			arms: "assassin's gloves",
			legs: "elemental sorcerer's pants",
			feet: "ranger's boots"
		},
		backpack: [
			['whisperwind elixir', 'harmonic conch shell', 'timeless hourglass', 'penumbral pendant', 'enigmatic crest', 'mystic orb', 'silver locket', 'enigmatic scroll', 'elemental shard', 'verdant blossom', 'solar flare seed', 'aetherial lens', 'dreamcatcher amulet', 'frostblossom seed', 'stormwhisper feather', 'lunar blossom', "dreamweaver's quill", 'broken compass', 'ethereal prism', 'solar flare seed', 'frostblossom seed', 'frostfallen relic', 'rusty spoon', 'crimson phoenix plume', 'arcane rune', 'gilded compass', 'verdant dreamcatcher', 'serenity stone', 'enchanted vellum', 'baseball cap', 'penumbral pendant', 'rusty spoon', 'lava bloom seed', 'nebula medallion', 'lunar lace', 'crystalline vessel', 'shrouded talisman', 'eclipsed crystal', 'puzzle piece', 'sylphic whisper', 'radiant feather', 'timeless relic', 'astral ribbon', 'crystalized tears', 'enigmatic crest', 'phoenix feather', "tidecaller's shell"]
		]
	},
	health: 68,
	stamina: 197,
	armor: 140,
	mastery: {
		weapon: 10,
		skill: 9
	},
	savepoint: {
		location: "celestial junction",
		date: Date()
	}
},
{
	username: "NovaNebulaX88",
	inventory: {
		equipped: {
			weapon: "serpent's gaze staff",
			skill: "toxic shock",
			consumable: "sweet pastry",
			head: "The honored one's blindfold",
			torso: "monk's robe",
			arms: "elementalist's cuffs",
			legs: "shadow assassin's pants",
			feet: "mage's shoes"
		},
		backpack: [
			['radiant feather', "stormbringer's sigil", 'crystalline vessel', 'fox tail', 'rubber chicken', 'ruby heartstone', 'thunderstruck relic', 'crystalized aurora', 'ethereal prism', 'aetheric beacon', 'sylphic whisper', 'penumbral pendant', 'frostblossom seed', 'nebula medallion', 'ensnaring vine', "tidecaller's shell", 'fox tail', 'whisperwind elixir', 'lively coral', 'thunderstruck relic', 'crimson phoenix plume', 'crystalline vessel', "writer's notebook", 'sylphic whisper', 'tranquil lotus', 'gilded compass', "dreamer's journal", 'cursed doll', 'celestial ocarina', 'emberroot sapling', 'pyroclasmic ember', 'dreamcatcher amulet', 'enigmatic figurine', "writer's notebook", 'crystalized aurora', "dreamer's journal", 'mirror of illusion', 'bottle of wine', 'crystalized tears', 'shrouded talisman', 'ruby heartstone', 'half eaten apple', 'fox tail', 'thunderstruck relic', 'camera', 'enigmatic figurine', 'volcanic emberstone']
		]
	},
	health: 144,
	stamina: 248,
	armor: 122,
	mastery: {
		weapon: 18,
		skill: 22
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "NeonNebulaMaster",
	inventory: {
		equipped: {
			weapon: "obsidian scythe",
			skill: "toxic cloud",
			consumable: "energy drink",
			head: "rogue's mask",
			torso: "null",
			arms: "sorcerer's gloves",
			legs: "divine paladin's greaves",
			feet: "beastmaster's boots"
		},
		backpack: [
			['serenity stone', "songbird's feather", 'starlight veil', 'lunar crest', 'harmonic conch shell', 'ethereal prism', 'lively coral', 'frostbound blossom', 'serenity stone', 'dreamcatcher amulet', 'soothing breeze amulet', 'mirage cloak', 'puzzle piece', 'mirror of illusion', 'radiant feather', 'aetheric beacon', 'frostblossom seed', 'emberroot sapling']
		]
	},
	health: 206,
	stamina: 149,
	armor: 97,
	mastery: {
		weapon: 23,
		skill: 20
	},
	savepoint: {
		location: "feywood forest",
		date: Date()
	}
},
{
	username: "CyberSphinxX21",
	inventory: {
		equipped: {
			weapon: "quasar cannon",
			skill: "arctic blast",
			consumable: "ancient elixir",
			head: "wanderer's hat",
			torso: "duelist's attire",
			arms: "divine paladin's gauntlets",
			legs: "duelist's trousers",
			feet: "beastmaster's boots"
		},
		backpack: [
			['invisible ink pen', 'cavernous gemstone', 'ethereal mirror', 'enigmatic crest', 'serenity stone', 'shadow cloak', 'ethereal mirror', 'celestial feather', 'starlight veil', 'baseball cap', 'emberroot sapling', 'phoenix feather', 'moonlit essence', 'enigmatic scroll', "songbird's feather", 'cursed mirror', 'echoing chime', 'radiant prism', 'astral ribbon', 'ensnaring vine']
		]
	},
	health: 152,
	stamina: 203,
	armor: 131,
	mastery: {
		weapon: 12,
		skill: 30
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "MysticMonolithX77",
	inventory: {
		equipped: {
			weapon: "chaos orb wand",
			skill: "volcanic eruption",
			consumable: "soulstone soup",
			head: "mage's hat",
			torso: "berserker's chestguard",
			arms: "duelist's gloves",
			legs: "mage's leggings",
			feet: "ranger's boots"
		},
		backpack: [
			['crystalized essence', 'ethereal blossom', 'ember veil', 'tranquil lotus', 'whispering totem', 'mysterious music box', 'frostfire lantern', 'resonating crystal', 'emberroot sapling', 'rune of resilience', 'shimmering scepter', 'puzzle piece', 'starforged ingot', 'whisperwind elixir', "stargazer's lens", 'echoing chime']
		]
	},
	health: 231,
	stamina: 244,
	armor: 96,
	mastery: {
		weapon: 23,
		skill: 18
	},
	savepoint: {
		location: "volted citadel",
		date: Date()
	}
},
{
	username: "QuantumQuestX88",
	inventory: {
		equipped: {
			weapon: "starfall wand",
			skill: "plague storm",
			consumable: "eternal soup",
			head: "warrior's helm",
			torso: "The honored one's jacket",
			arms: "paladin's gauntlets",
			legs: "ancient guardian's greaves",
			feet: "rogue's ankle boots"
		},
		backpack: [
			['zephyr gem', 'puzzle piece', "dreamer's journal", 'echoing chime', 'hand mirror', 'mirage pearl', 'frostfire lantern', 'whisperwind elixir', 'arcane rune', 'ensnaring vine', 'pyroclasmic ember', 'phoenix feather', "stargazer's lens", 'obsidian rune stone', 'elemental shard', 'ruby heartstone', 'aetheric beacon', 'vortex core', 'mystic orb', 'ember veil', 'gilded compass', 'cavernous gemstone', 'tranquil lotus', 'astral serpent scale', 'ethereal mirror', 'harmony crystal', 'starforged ingot', 'mirror of illusion', "writer's notebook", 'shadow silk scarf']
		]
	},
	health: 134,
	stamina: 159,
	armor: 145,
	mastery: {
		weapon: 8,
		skill: 7
	},
	savepoint: {
		location: "subterranean citadel",
		date: Date()
	}
},
{
	username: "NebulaNexus77",
	inventory: {
		equipped: {
			weapon: "spectral dagger",
			skill: "poison dart",
			consumable: "wisdom elixir",
			head: "berserker's mask",
			torso: "knight's plate armor",
			arms: "warrior's bracers",
			legs: "wanderer's pants",
			feet: "mystic seer's shoes"
		},
		backpack: [
			['camera', 'baseball cap', ' rubiks cube', 'invisible ink pen', 'elemental shard', 'stormwhisper feather', ' rubiks cube', 'stormwhisper feather', 'obsidian rune stone', 'obsidian rune stone', 'broken compass', 'astral ribbon', 'harmony crystal', 'sylphic whisper', 'silver locket', 'starlight veil', 'ruby heartstone', 'starforged ingot', 'celestial lantern', 'obsidian rune stone', 'crystalized essence', 'aetheric beacon', 'shimmering scepter', 'eclipsed crystal', 'enchanted amulet', 'rainbow gemstone', 'shimmering scepter', 'gilded compass', 'verdant dreamcatcher', 'astral ribbon', 'timeless hourglass']
		]
	},
	health: 82,
	stamina: 243,
	armor: 136,
	mastery: {
		weapon: 27,
		skill: 1
	},
	savepoint: {
		location: "volted citadel",
		date: Date()
	}
},
{
	username: "ShadowStrikeX21",
	inventory: {
		equipped: {
			weapon: "toxic crossbow",
			skill: "venom dash",
			consumable: "venomous brew",
			head: "monk's hood",
			torso: "druid's robe",
			arms: "wanderer's gloves",
			legs: "necromancer's pants",
			feet: "duelist's shoes"
		},
		backpack: [
			['gilded compass', 'obsidian rune stone', 'sylphic whisper', 'broken compass', 'shrouded talisman', 'rusty spoon', 'cursed doll', 'balloon animal', 'obsidian rune stone', 'hand mirror', 'enigmatic crest', 'cursed doll', 'hand mirror', 'vortex core', 'crystalline vessel', 'camera', 'ethereal blossom', 'rainbow gemstone', 'enigmatic figurine', 'arcane codex', 'mystic orb', 'emberstone charm', 'radiant prism', 'serenity stone', 'starlight veil', 'solar flare seed', 'nebula medallion', "writer's notebook"]
		]
	},
	health: 114,
	stamina: 80,
	armor: 114,
	mastery: {
		weapon: 17,
		skill: 19
	},
	savepoint: {
		location: "oasis of echoes",
		date: Date()
	}
},
{
	username: "CyberChampion88",
	inventory: {
		equipped: {
			weapon: "abyssal cleaver scythe",
			skill: "noxious apocalypse",
			consumable: "dragon's breath potion",
			head: "null",
			torso: "wanderer's coat",
			arms: "druid's bracers",
			legs: "The honored one's pants",
			feet: "duelist's shoes"
		},
		backpack: [
			['singing seashell', 'eclipsed crystal', 'obsidian rune stone', 'frostfire lantern', 'nebula medallion', 'broken compass', 'lively coral', 'enigmatic figurine', 'cavernous gemstone', 'dreamcatcher amulet', 'rune of resilience', 'crystalized essence', 'arcane rune', 'moonlit essence', 'starlight veil', 'rubber chicken', 'labyrinthine key', 'lively coral', 'sacred sigil', 'ember veil', 'hand mirror', 'singing seashell', 'invisible ink pen', 'rune of resilience', 'dreamcatcher amulet', 'ethereal blossom', "dreamer's journal", 'science fair award', 'hand mirror', 'labyrinthine key', 'galeforce whistle', 'gilded compass', 'galeforce whistle']
		]
	},
	health: 61,
	stamina: 76,
	armor: 87,
	mastery: {
		weapon: 7,
		skill: 0
	},
	savepoint: {
		location: "igloosia",
		date: Date()
	}
},
{
	username: "NovaNinjaX77",
	inventory: {
		equipped: {
			weapon: "heaven's bane saber",
			skill: "supernova",
			consumable: "dragon's blood elixir",
			head: "archer's hat",
			torso: "inquisitor's vestment",
			arms: "berserker's wristguards",
			legs: "druid's leggings",
			feet: "sorcerer's shoes"
		},
		backpack: [
			["stargazer's lens", 'mirage pearl', 'astral ribbon', 'vortex core', 'half eaten apple', 'enchanted vellum', 'emberstone charm', 'radiant feather', 'lively coral', 'harmony crystal', 'astral lantern', 'harmony crystal']
		]
	},
	health: 116,
	stamina: 101,
	armor: 126,
	mastery: {
		weapon: 10,
		skill: 8
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "NeonNexusX21",
	inventory: {
		equipped: {
			weapon: "celestial sword",
			skill: "thunderclap",
			consumable: "ether infusion",
			head: "inquisitor's hood",
			torso: "The honored one's jacket",
			arms: "assassin's gloves",
			legs: "wanderer's pants",
			feet: "archer's boots"
		},
		backpack: [
			['luminous pebble', 'enigmatic figurine', 'vortex core', 'starlight veil', 'starlight veil', 'phoenix feather', 'ethereal blossom', 'cursed doll', 'harmonic conch shell', 'astral ribbon', 'rainbow gemstone', 'shadow silk scarf', 'radiant feather', 'phoenix feather', 'baseball cap', 'broken compass', 'eclipsed crystal', 'verdant dreamcatcher', 'dreamcatcher amulet', 'ephemeral feather', 'shrouded talisman', 'lunar crest', 'cursed mirror', 'science fair award', 'solar flare seed', 'celestial feather', 'fox tail', 'rainbow gemstone', 'rubber chicken', 'shadow silk scarf', 'hand mirror', 'enchanted vellum', 'rubber chicken', 'timeless hourglass', 'mirage pearl', 'soothing breeze amulet', 'moonlit essence', 'crystalline vessel', 'metal slinky', 'whispering totem']
		]
	},
	health: 239,
	stamina: 72,
	armor: 120,
	mastery: {
		weapon: 21,
		skill: 22
	},
	savepoint: {
		location: "haunted harbor",
		date: Date()
	}
},
{
	username: "MysticMarauderX88",
	inventory: {
		equipped: {
			weapon: "ice shard thrower",
			skill: "storm nova",
			consumable: "stamina potion",
			head: "alchemist's hood",
			torso: "elemental sorcerer's robe",
			arms: "null",
			legs: "berserker's legguards",
			feet: "elemental sorcerer's shoes"
		},
		backpack: [
			['invisible ink pen', 'shadow silk scarf', 'gilded compass', "dreamer's journal"]
		]
	},
	health: 211,
	stamina: 149,
	armor: 109,
	mastery: {
		weapon: 16,
		skill: 6
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "QuantumQuasarMaster",
	inventory: {
		equipped: {
			weapon: "shadowstrike dagger",
			skill: "thunderclap",
			consumable: "wisdom elixir",
			head: "null",
			torso: "wanderer's coat",
			arms: "tyr's gauntlets",
			legs: "archer's pants",
			feet: "inquisitor's boots"
		},
		backpack: [
			['enigmatic crest', 'obsidian rune stone', 'lava bloom seed', 'ephemeral feather', 'whispering totem', 'astral serpent scale', 'starforged ingot', 'rubber chicken', 'radiant prism', 'emberroot sapling', 'mysterious music box', 'astral ribbon', "dreamer's journal", 'science fair award', 'soulstone trinket', 'serene lotus petal', 'mirage pearl', 'ethereal mirror', 'shadow silk scarf', 'amethyst', 'crystalized aurora', 'obsidian rune stone', 'illusory lantern', 'crystalized essence', 'cursed doll', 'fox tail', 'phoenix feather', "dreamer's journal", 'enchanted vellum', 'harmony crystal', 'astral serpent scale', 'lava bloom seed', 'sacred sigil', 'shrouded talisman', 'ember veil', 'singing seashell', 'bottle of wine', 'ephemeral feather', 'cursed mirror', 'ethereal mirror', 'shimmering scepter', 'vortex core']
		]
	},
	health: 158,
	stamina: 168,
	armor: 131,
	mastery: {
		weapon: 8,
		skill: 27
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "CyberSpecterX77",
	inventory: {
		equipped: {
			weapon: "arcane bow",
			skill: "volcanic fury",
			consumable: "amber ale",
			head: "null",
			torso: "paladin's chestplate",
			arms: "mystic seer's gloves",
			legs: "elemental sorcerer's pants",
			feet: "archer's boots"
		},
		backpack: [
			['emberstone charm', 'ethereal blossom', 'singing seashell', 'shrouded talisman', 'penumbral pendant', 'shrouded talisman', 'eclipsed crystal', 'moonlit essence', "tiger's eye", 'pyroclasmic ember', 'serenity stone', 'ruby heartstone', 'illusory lantern', 'ephemeral feather', 'prismatic crystal', 'tranquil lotus', 'puzzle piece', 'zephyr gem', 'balloon animal', "stargazer's lens", 'vortex core', 'puzzle piece', 'ethereal prism', 'whisperwind elixir', 'shrouded talisman', 'lunar blossom', 'fox tail', 'rune of resilience', 'solar flare seed', 'shrouded talisman', 'lunar crest', "songbird's feather", "songbird's feather", 'rubber chicken', 'elemental shard', 'mysterious music box', 'half eaten apple', 'lunar blossom', 'mystic orb', 'serenity stone']
		]
	},
	health: 68,
	stamina: 181,
	armor: 116,
	mastery: {
		weapon: 24,
		skill: 19
	},
	savepoint: {
		location: "crystal spire",
		date: Date()
	}
},
{
	username: "NovaNebulaX21",
	inventory: {
		equipped: {
			weapon: "solar blaster",
			skill: "poisonous whirl",
			consumable: "berry explosion elixir",
			head: "duelist's hat",
			torso: "ranger's cloak",
			arms: "elementalist's cuffs",
			legs: "druid's leggings",
			feet: "berserker's boots"
		},
		backpack: [
			['ephemeral feather', "tiger's eye", "stargazer's lens", 'bottle of wine', 'serene lotus petal', 'radiant feather', "songbird's feather", 'astral lantern', "dreamweaver's quill", 'shadow cloak', 'baseball cap', 'ember veil', 'crystalized aurora', 'sacred sigil', 'moonlit essence']
		]
	},
	health: 74,
	stamina: 82,
	armor: 112,
	mastery: {
		weapon: 19,
		skill: 2
	},
	savepoint: {
		location: "amethyst atoll",
		date: Date()
	}
},
{
	username: "NeonNomadX88",
	inventory: {
		equipped: {
			weapon: "flamestrike lance",
			skill: "earthslide",
			consumable: "mystic infusion",
			head: "monk's hood",
			torso: "warrior's chestplate",
			arms: "rogue's fingerless gloves",
			legs: "ranger's pants",
			feet: "assassin's boots"
		},
		backpack: [
			['volcanic emberstone', 'verdant dreamcatcher', 'crimson phoenix plume', 'bottle of wine', 'shrouded talisman', ' rubiks cube', 'astral ribbon', 'fox tail', 'arcane rune', 'serenity stone', 'crimson phoenix plume', 'cursed mirror', 'shrouded talisman', 'mirror of illusion', 'vortex core', 'astral lantern', 'eclipsed crystal', 'dreamcatcher amulet', 'radiant feather', 'cursed mirror', 'lunar crest', 'timeless hourglass', 'mirage pearl', 'rusty spoon']
		]
	},
	health: 181,
	stamina: 51,
	armor: 110,
	mastery: {
		weapon: 9,
		skill: 10
	},
	savepoint: {
		location: "elven village",
		date: Date()
	}
},
{
	username: "MysticMatrixX21",
	inventory: {
		equipped: {
			weapon: "arcane storm sniper",
			skill: "lunar beam",
			consumable: "lunar nectar",
			head: "monk's hood",
			torso: "divine paladin's chestplate",
			arms: "shadow assassin's gloves",
			legs: "mage's leggings",
			feet: "wanderer's boots"
		},
		backpack: [
			["tidecaller's shell", 'starforged ingot', "stormbringer's sigil", 'harmonic conch shell', 'lava bloom seed', 'singing seashell', "dreamweaver's quill", 'half eaten apple', 'arcane codex', 'penumbral pendant', 'zephyr gem', "tidecaller's shell", 'vortex core', 'puzzle piece', 'soulstone trinket', 'rusty spoon', 'lava bloom seed', "stargazer's lens", "tidecaller's shell", 'frostbound blossom', 'cursed doll', 'lively coral', 'verdant blossom', 'sacred sigil', 'ethereal prism', 'crystalized tears', 'soothing breeze amulet', 'enchanted vellum', 'echoing chime', 'ruby heartstone', 'enchanted vellum', 'frostblossom seed', 'stormwhisper feather', 'lunar crest', "dreamweaver's quill", 'soulstone trinket', 'rainbow gemstone', 'emberstone charm', 'moonlit essence', 'ethereal mirror', 'cavernous gemstone', 'ethereal mirror', 'mirage pearl', 'stormwhisper feather', 'lunar crest', 'radiant prism', 'mirror of illusion', 'mystic orb', 'celestial feather']
		]
	},
	health: 119,
	stamina: 172,
	armor: 131,
	mastery: {
		weapon: 17,
		skill: 20
	},
	savepoint: {
		location: "desolate plaza",
		date: Date()
	}
},
{
	username: "ShadowSphinxMaster",
	inventory: {
		equipped: {
			weapon: "oceanic trident",
			skill: "thunderstrike arrow",
			consumable: "stealthy shroom soup",
			head: "alchemist's hood",
			torso: "alchemist's robe",
			arms: "wanderer's gloves",
			legs: "The honored one's pants",
			feet: "archer's boots"
		},
		backpack: [
			['ephemeral feather', 'shadow cloak', 'eclipsed crystal', 'whispering totem', 'frostbound blossom', 'verdant dreamcatcher', 'amethyst', 'mirage cloak', 'arcane rune', 'bottle of wine', "tiger's eye", 'celestial lantern', 'whispering totem', 'mystic orb', 'emberstone charm', 'frostblossom seed', 'enigmatic figurine', "dreamweaver's quill", 'frostfallen relic', 'nebula medallion', 'whisperwind elixir', 'starforged ingot', 'starlight veil', 'crystalized aurora']
		]
	},
	health: 236,
	stamina: 101,
	armor: 129,
	mastery: {
		weapon: 0,
		skill: 20
	},
	savepoint: {
		location: "desolate plaza",
		date: Date()
	}
},
{
	username: "QuantumQuintessenceX77",
	inventory: {
		equipped: {
			weapon: "necrotic serpent staff",
			skill: "poison dart",
			consumable: "ether infusion",
			head: "shadow assassin's mask",
			torso: "alchemist's robe",
			arms: "warrior's bracers",
			legs: "monk's pants",
			feet: "shadow assassin's boots"
		},
		backpack: [
			['balloon animal', 'crystalized tears', 'labyrinthine key', 'invisible ink pen', 'nebula medallion', 'elemental shard']
		]
	},
	health: 194,
	stamina: 154,
	armor: 150,
	mastery: {
		weapon: 13,
		skill: 2
	},
	savepoint: {
		location: "tempest summit",
		date: Date()
	}
},
{
	username: "CyberCatalystX21",
	inventory: {
		equipped: {
			weapon: "arcane storm sniper",
			skill: "lunar beam",
			consumable: "fire resistance potion",
			head: "sellsword's helm",
			torso: "assassin's robe",
			arms: "druid's bracers",
			legs: "duelist's trousers",
			feet: "divine paladin's boots"
		},
		backpack: [
			['lively coral', 'frostblossom seed', 'penumbral pendant', 'mystic orb', 'silver locket', 'crystalized tears', 'mysterious music box', 'crystalized tears', 'mysterious music box', 'phoenix feather', 'hand mirror', 'volcanic emberstone', 'obsidian rune stone', 'rainbow gemstone', 'tranquil lotus', 'lunar blossom', 'mirror of illusion', 'harmonic conch shell', 'puzzle piece', 'elemental shard', ' rubiks cube', 'sacred sigil', 'metal slinky', 'phoenix feather', 'whispering totem', 'enchanted vellum', 'lunar lace', 'obsidian rune stone', 'elemental shard', 'fox tail', 'nebula medallion']
		]
	},
	health: 206,
	stamina: 86,
	armor: 134,
	mastery: {
		weapon: 13,
		skill: 5
	},
	savepoint: {
		location: "desolate plaza",
		date: Date()
	}
},
{
	username: "NovaNebulaX88",
	inventory: {
		equipped: {
			weapon: "necrotic serpent staff",
			skill: "icy needle",
			consumable: "ironskin elixir",
			head: "The honored one's blindfold",
			torso: "alchemist's robe",
			arms: "mystic seer's gloves",
			legs: "ancient guardian's greaves",
			feet: "warrior's boots"
		},
		backpack: [
			['soothing breeze amulet', 'rune of resilience', 'radiant prism', 'obsidian rune stone', 'mysterious music box', 'arcane codex', 'lively coral', "stargazer's lens", 'invisible ink pen', "stargazer's lens", "writer's notebook", 'verdant blossom', 'mirror of illusion', 'rubber chicken', 'starforged ingot']
		]
	},
	health: 169,
	stamina: 119,
	armor: 167,
	mastery: {
		weapon: 10,
		skill: 8
	},
	savepoint: {
		location: "inferno citadel",
		date: Date()
	}
},
{
	username: "NeonNebulaMaster",
	inventory: {
		equipped: {
			weapon: "thorned whip",
			skill: "wind dash",
			consumable: "thunderstorm brew",
			head: "The honored one's blindfold",
			torso: "alchemist's robe",
			arms: "warrior's bracers",
			legs: "assassin's leggings",
			feet: "beastmaster's boots"
		},
		backpack: [
			["dreamer's journal", 'rune of resilience', 'penumbral pendant', 'tranquil lotus']
		]
	},
	health: 144,
	stamina: 107,
	armor: 134,
	mastery: {
		weapon: 12,
		skill: 21
	},
	savepoint: {
		location: "tempest summit",
		date: Date()
	}
},
{
	username: "MysticMonarchX77",
	inventory: {
		equipped: {
			weapon: "mindflayer's scepter",
			skill: "shadow strike",
			consumable: "mind elixir",
			head: "inquisitor's hood",
			torso: "warrior's chestplate",
			arms: "sellsword's gauntlets",
			legs: "sorcerer's pants",
			feet: "paladin's boots"
		},
		backpack: [
			['ruby heartstone', 'broken compass', 'whispering totem', 'mirror of illusion', 'broken compass', 'whispering totem', 'celestial feather', 'singing seashell', "stargazer's lens", 'amethyst', 'frostbound blossom', 'astral ribbon', 'broken compass', 'timeless hourglass', 'enchanted amulet', 'balloon animal', 'enchanted amulet']
		]
	},
	health: 98,
	stamina: 146,
	armor: 138,
	mastery: {
		weapon: 13,
		skill: 6
	},
	savepoint: {
		location: "feywood forest",
		date: Date()
	}
},
{
	username: "QuantumQuasarX88",
	inventory: {
		equipped: {
			weapon: "shadowstrike dagger",
			skill: "umbral fortress",
			consumable: "sweet pastry",
			head: "necromancer's hood",
			torso: "druid's robe",
			arms: "knight's gauntlets",
			legs: "null",
			feet: "mage's shoes"
		},
		backpack: [
			['prismatic crystal', 'thunderstruck relic', 'ensnaring vine', 'soulstone trinket', 'fox tail', 'baseball cap', 'broken compass', 'soothing breeze amulet', 'science fair award', 'whisperwind elixir', 'luminous pebble', 'gilded compass', 'lava bloom seed', 'crystalized essence', 'lava bloom seed', 'baseball cap', 'elemental shard', 'half eaten apple', 'lunar lace', 'echoing chime', 'rainbow gemstone', 'metal slinky', 'astral ribbon', 'vortex core', 'whisperwind elixir', 'lively coral']
		]
	},
	health: 209,
	stamina: 126,
	armor: 83,
	mastery: {
		weapon: 22,
		skill: 12
	},
	savepoint: {
		location: "igloosia",
		date: Date()
	}
},
{
	username: "NebulaNemesis77",
	inventory: {
		equipped: {
			weapon: "shadowstrike dagger",
			skill: "shadow strike",
			consumable: "shadowstrike tea",
			head: "sorcerer's hat",
			torso: "sorcerer's robe",
			arms: "duelist's gloves",
			legs: "druid's leggings",
			feet: "shadow assassin's boots"
		},
		backpack: [
			['mirage pearl', 'frostfallen relic', 'lava bloom seed', 'labyrinthine key', 'harmony crystal', 'frostfallen relic', 'metal slinky', 'astral serpent scale', 'luminous pebble', 'whisperwind elixir', 'enigmatic scroll', 'mirror of illusion', 'harmony crystal', 'radiant prism', 'mirage pearl']
		]
	},
	health: 218,
	stamina: 153,
	armor: 115,
	mastery: {
		weapon: 13,
		skill: 6
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "CyberShadowX21",
	inventory: {
		equipped: {
			weapon: "galactic wand",
			skill: "electrified arrow",
			consumable: "grilled fish",
			head: "paladin's helm",
			torso: "rogue's leather vest",
			arms: "null",
			legs: "mage's leggings",
			feet: "berserker's boots"
		},
		backpack: [
			['timeless relic', 'vortex core', 'frostfire lantern', 'emberroot sapling', 'resonating crystal', 'sylphic whisper', 'aetherial lens', 'rainbow gemstone', 'verdant dreamcatcher', 'cursed mirror', 'moonlit essence', 'rainbow gemstone', 'crystalized aurora', 'rubber chicken', 'invisible ink pen', 'thunderstruck relic', 'enchanted amulet', 'rusty spoon', 'singing seashell', 'mysterious music box', 'tranquil lotus', 'hand mirror']
		]
	},
	health: 93,
	stamina: 138,
	armor: 105,
	mastery: {
		weapon: 3,
		skill: 16
	},
	savepoint: {
		location: "haunted harbor",
		date: Date()
	}
},
{
	username: "NovaNexusX88",
	inventory: {
		equipped: {
			weapon: "ethereal rapier",
			skill: "acid rain",
			consumable: "energy drink",
			head: "necromancer's hood",
			torso: "assassin's robe",
			arms: "ancient guardian's gauntlets",
			legs: "inquisitor's leggings",
			feet: "assassin's boots"
		},
		backpack: [
			['cavernous gemstone', 'lunar lace', 'zephyr gem', 'galeforce whistle', 'shimmering scepter', 'enigmatic crest', 'invisible ink pen', 'mysterious music box', 'ethereal blossom', 'zephyr gem', 'arcane codex', "writer's notebook"]
		]
	},
	health: 207,
	stamina: 161,
	armor: 126,
	mastery: {
		weapon: 3,
		skill: 20
	},
	savepoint: {
		location: "elven village",
		date: Date()
	}
},
{
	username: "NeonNovaX77",
	inventory: {
		equipped: {
			weapon: "ethereal slicer",
			skill: "moonlit blade",
			consumable: "grilled fish",
			head: "assassin's hood",
			torso: "knight-commander's plate",
			arms: "inquisitor's cuffs",
			legs: "elemental sorcerer's pants",
			feet: "null"
		},
		backpack: [
			['crystalized tears', 'sylphic whisper', 'soulstone trinket', "songbird's feather", 'timeless relic', 'pyroclasmic ember', 'volcanic emberstone', 'mirage cloak', 'mirror of illusion', "stargazer's lens", 'ethereal prism', 'penumbral pendant', 'frostbound blossom', 'whispering totem', 'singing seashell', 'frostbound blossom', "dreamweaver's quill", 'amethyst', 'crystalized tears', 'moonlit essence', 'ruby heartstone', 'nebula medallion', 'hand mirror', 'aetherial lens', 'rune of resilience', 'crystalized tears', ' rubiks cube', 'stormwhisper feather', 'radiant prism', 'ethereal prism', 'elemental shard', 'silver locket', 'eclipsed crystal', 'starforged ingot', 'elemental shard', 'labyrinthine key', 'frostbound blossom', 'camera']
		]
	},
	health: 52,
	stamina: 76,
	armor: 127,
	mastery: {
		weapon: 21,
		skill: 4
	},
	savepoint: {
		location: "oasis of echoes",
		date: Date()
	}
},
{
	username: "MysticMysticX21",
	inventory: {
		equipped: {
			weapon: "samurai's katana",
			skill: "wind dash",
			consumable: "amber ale",
			head: "wanderer's hat",
			torso: "archer's tunic",
			arms: "wanderer's gloves",
			legs: "shadow assassin's pants",
			feet: "ranger's boots"
		},
		backpack: [
			['astral lantern', 'thunderstruck relic', "songbird's feather", 'crystalized tears', "writer's notebook", 'cursed mirror', 'frostblossom seed', 'illusory lantern', 'frostblossom seed', 'harmony crystal', 'crystalized tears', 'starforged ingot', 'crimson phoenix plume', 'mirage cloak', 'enigmatic crest', 'lunar crest', 'frostblossom seed', 'aetherial lens', 'rainbow gemstone']
		]
	},
	health: 60,
	stamina: 95,
	armor: 116,
	mastery: {
		weapon: 29,
		skill: 29
	},
	savepoint: {
		location: "divine citadel",
		date: Date()
	}
},
{
	username: "QuantumQuintessenceX88",
	inventory: {
		equipped: {
			weapon: "crimson shuriken",
			skill: "nightfall arrow",
			consumable: "blueberry muffin",
			head: "duelist's hat",
			torso: "berserker's chestguard",
			arms: "assassin's gloves",
			legs: "druid's leggings",
			feet: "knight's boots"
		},
		backpack: [
			['crimson phoenix plume', "tidecaller's shell", 'illusory lantern', 'emberstone charm', 'rune of resilience', 'invisible ink pen', 'echoing chime', 'cavernous gemstone', 'lively coral', 'frostblossom seed', 'rubber chicken', 'solar flare seed', 'arcane codex', 'zephyr gem', 'verdant dreamcatcher', 'arcane codex', 'volcanic emberstone', 'lava bloom seed', 'lively coral', 'stormwhisper feather', 'ephemeral feather', 'shadow silk scarf', 'lunar crest', 'enchanted vellum', 'starforged ingot', 'rusty spoon', 'frostfire lantern', 'astral ribbon', 'frostbound blossom']
		]
	},
	health: 239,
	stamina: 142,
	armor: 112,
	mastery: {
		weapon: 9,
		skill: 12
	},
	savepoint: {
		location: "elven village",
		date: Date()
	}
},
{
	username: "CyberCatalyst77",
	inventory: {
		equipped: {
			weapon: "volcano bow",
			skill: "cyclone step",
			consumable: "shadow essence",
			head: "sorcerer's hat",
			torso: "druid's robe",
			arms: "monk's gloves",
			legs: "mage's leggings",
			feet: "warrior's boots"
		},
		backpack: [
			['volcanic emberstone', 'camera', 'celestial feather', "stormbringer's sigil", 'puzzle piece', 'volcanic emberstone', 'frostfallen relic', 'rune of resilience', 'sacred sigil', 'prismatic crystal', 'ruby heartstone', 'mystic orb', 'verdant blossom', "tidecaller's shell", 'hand mirror', 'camera', 'invisible ink pen', 'verdant dreamcatcher', 'emberstone charm', 'mirror of illusion', 'astral ribbon', 'hand mirror', "dreamer's journal", 'shadow silk scarf', 'arcane rune', 'astral serpent scale', 'luminous pebble', 'ember veil', 'cavernous gemstone', 'whispering totem', 'echoing chime', 'galeforce whistle', 'gilded compass', 'ethereal blossom', 'whisperwind elixir', 'enchanted vellum', 'astral lantern', 'rubber chicken', 'enigmatic figurine', 'frostblossom seed', 'echoing chime']
		]
	},
	health: 82,
	stamina: 238,
	armor: 106,
	mastery: {
		weapon: 8,
		skill: 7
	},
	savepoint: {
		location: "stormwatch tower",
		date: Date()
	}
},
{
	username: "NovaNomadX21",
	inventory: {
		equipped: {
			weapon: "graviton cannon",
			skill: "wall of flames",
			consumable: "mana potion",
			head: "wanderer's hat",
			torso: "sorcerer's robe",
			arms: "assassin's gloves",
			legs: "paladin's greaves",
			feet: "mage's shoes"
		},
		backpack: [
			['stormwhisper feather', 'timeless hourglass', 'luminous pebble', 'luminous pebble', 'resonating crystal', 'amethyst', 'elemental shard', 'balloon animal', 'verdant blossom', 'frostbound blossom', 'celestial feather', 'shadow cloak', 'mirage cloak', 'lunar lace', 'arcane codex', 'metal slinky', 'thunderstruck relic', 'pyroclasmic ember', 'science fair award', 'ethereal mirror', 'silver locket', 'stormwhisper feather', 'stormwhisper feather', 'rusty spoon', 'sacred sigil', 'radiant prism', 'phoenix feather', 'ethereal prism']
		]
	},
	health: 146,
	stamina: 142,
	armor: 100,
	mastery: {
		weapon: 7,
		skill: 7
	},
	savepoint: {
		location: "amethyst atoll",
		date: Date()
	}
},
{
	username: "ShadowSaberX88",
	inventory: {
		equipped: {
			weapon: "nova rifle",
			skill: "moonlit blade",
			consumable: "heavenly honey",
			head: "inquisitor's hood",
			torso: "beastmaster's chestplate",
			arms: "ancient guardian's gauntlets",
			legs: "assassin's leggings",
			feet: "null"
		},
		backpack: [
			['harmony crystal', 'puzzle piece', 'cursed doll', 'enchanted vellum', 'resonating crystal', 'puzzle piece', 'serene lotus petal', 'crystalized tears', 'arcane rune', 'singing seashell', 'starlight veil', 'labyrinthine key', 'stormwhisper feather', 'camera', 'arcane codex', "dreamer's journal", 'bottle of wine', 'nebula medallion', 'serene lotus petal', 'aetherial lens', 'enigmatic scroll', 'illusory lantern', 'galeforce whistle', 'galeforce whistle', 'baseball cap', 'starforged ingot', 'mysterious music box']
		]
	},
	health: 199,
	stamina: 158,
	armor: 130,
	mastery: {
		weapon: 6,
		skill: 12
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "MysticMatrixMaster",
	inventory: {
		equipped: {
			weapon: "blade of the heavens",
			skill: "galactic storm",
			consumable: "starlight essence",
			head: "monk's hood",
			torso: "thor's chainmail",
			arms: "divine paladin's gauntlets",
			legs: "necromancer's pants",
			feet: "frigg's greaves"
		},
		backpack: [
			['celestial lantern', 'ensnaring vine', 'harmonic conch shell', 'dreamcatcher amulet', 'celestial lantern', 'crystalline vessel', 'balloon animal', 'starforged ingot', 'half eaten apple', 'half eaten apple', 'cursed doll', 'gilded compass', 'cavernous gemstone']
		]
	},
	health: 225,
	stamina: 247,
	armor: 168,
	mastery: {
		weapon: 1,
		skill: 1
	},
	savepoint: {
		location: "crystal spire",
		date: Date()
	}
},
{
	username: "QuantumQuakeX21",
	inventory: {
		equipped: {
			weapon: "astral sword",
			skill: "thunderclap",
			consumable: "radiant elixir",
			head: "knight-commander's helmet",
			torso: "thor's chainmail",
			arms: "divine paladin's gauntlets",
			legs: "berserker's legguards",
			feet: "ranger's boots"
		},
		backpack: [
			['sacred sigil', 'half eaten apple', 'harmonic conch shell', 'starforged ingot', 'celestial lantern', 'pyroclasmic ember', 'serene lotus petal', 'ensnaring vine', 'echoing chime', "stargazer's lens", 'celestial ocarina', 'broken compass', 'illusory lantern', 'astral ribbon', 'lunar lace', "writer's notebook", 'broken compass', 'frostblossom seed', 'harmonic conch shell', 'volcanic emberstone', 'serene lotus petal', 'lava bloom seed', 'bottle of wine', 'lively coral', 'enigmatic crest', 'elemental shard', 'celestial ocarina', 'camera', 'timeless hourglass', 'astral ribbon', 'sacred sigil', 'enigmatic scroll', "tiger's eye", 'ethereal mirror', 'puzzle piece', 'tranquil lotus', 'cavernous gemstone', 'puzzle piece', 'starforged ingot', 'rainbow gemstone', 'ethereal prism', 'soulstone trinket', 'astral serpent scale']
		]
	},
	health: 144,
	stamina: 153,
	armor: 177,
	mastery: {
		weapon: 12,
		skill: 25
	},
	savepoint: {
		location: "divine citadel",
		date: Date()
	}
},
{
	username: "NovaNebulaX88",
	inventory: {
		equipped: {
			weapon: "venomous crossbow",
			skill: "thunder cage",
			consumable: "wisdom potion",
			head: "shadow assassin's mask",
			torso: "inquisitor's vestment",
			arms: "null",
			legs: "knight's greaves",
			feet: "warrior's boots"
		},
		backpack: [
			['lunar crest', 'crystalized tears', 'lively coral', 'ethereal prism', 'enigmatic crest', 'dreamcatcher amulet', 'rune of resilience']
		]
	},
	health: 97,
	stamina: 109,
	armor: 123,
	mastery: {
		weapon: 0,
		skill: 18
	},
	savepoint: {
		location: "stardust grove",
		date: Date()
	}
},
{
	username: "NeonNebulaMaster",
	inventory: {
		equipped: {
			weapon: "time-bender's scythe",
			skill: "venomous strike",
			consumable: "voidfire potion",
			head: "The honored one's blindfold",
			torso: "ranger's cloak",
			arms: "shadow assassin's gloves",
			legs: "null",
			feet: "assassin's boots"
		},
		backpack: [
			['volcanic emberstone', 'sacred sigil', "songbird's feather", 'soothing breeze amulet', 'rune of resilience', 'pyroclasmic ember', 'crystalized aurora', 'cursed doll', 'aetheric beacon', 'ethereal prism', 'stormwhisper feather', 'nebula medallion', 'aetherial lens', 'starlight veil', 'ethereal blossom', 'prismatic crystal', 'cursed mirror', 'puzzle piece', 'mirage pearl', 'enigmatic crest', 'enigmatic crest', 'lunar blossom', 'starlight veil']
		]
	},
	health: 242,
	stamina: 152,
	armor: 95,
	mastery: {
		weapon: 1,
		skill: 19
	},
	savepoint: {
		location: "cursed cathedral",
		date: Date()
	}
},
{
	username: "CyberSphinxX21",
	inventory: {
		equipped: {
			weapon: "energy blade",
			skill: "inferno arrow",
			consumable: "crystalized tea",
			head: "warrior's helm",
			torso: "rogue's leather vest",
			arms: "null",
			legs: "berserker's legguards",
			feet: "assassin's boots"
		},
		backpack: [
			['crystalline vessel', 'metal slinky', 'phoenix feather', 'rusty spoon', "dreamweaver's quill", 'lunar blossom', 'ephemeral feather', 'fox tail', 'frostfallen relic', 'penumbral pendant', 'labyrinthine key', 'singing seashell', 'dreamcatcher amulet', 'aetherial lens', 'vortex core', 'sacred sigil', 'penumbral pendant', 'verdant dreamcatcher', 'whispering totem', 'rune of resilience', 'frostfallen relic', "stormbringer's sigil", 'volcanic emberstone', 'shrouded talisman', 'enigmatic figurine', "tidecaller's shell", 'verdant blossom', 'volcanic emberstone', 'science fair award', 'shadow cloak', 'penumbral pendant', 'crystalized aurora']
		]
	},
	health: 196,
	stamina: 169,
	armor: 99,
	mastery: {
		weapon: 13,
		skill: 19
	},
	savepoint: {
		location: "haunted harbor",
		date: Date()
	}
},
{
	username: "MysticMonolithX77",
	inventory: {
		equipped: {
			weapon: "phoenix bow",
			skill: "eclipsed doom",
			consumable: "dreamer's tea",
			head: "assassin's hood",
			torso: "druid's robe",
			arms: "elementalist's cuffs",
			legs: "paladin's greaves",
			feet: "wanderer's boots"
		},
		backpack: [
			['luminous pebble', 'enchanted vellum', 'lava bloom seed', 'camera', 'aetheric beacon', 'lunar crest', 'rune of resilience', 'baseball cap', 'astral serpent scale', 'fox tail', 'starforged ingot', 'celestial feather', 'mirage cloak', 'rusty spoon', 'enigmatic crest', 'frostbound blossom', 'radiant feather', 'celestial ocarina', 'mirror of illusion', 'lunar crest', 'nebula medallion', 'prismatic crystal', 'cursed mirror', 'ensnaring vine', 'broken compass', 'shimmering scepter', 'aetherial lens', 'baseball cap', 'crystalline vessel', 'eclipsed crystal', 'broken compass', 'frostblossom seed', 'ember veil', "dreamweaver's quill", 'hand mirror', 'silver locket', 'frostfire lantern', 'mirage cloak', 'emberstone charm', 'verdant blossom', 'enigmatic crest', 'shimmering scepter']
		]
	},
	health: 176,
	stamina: 57,
	armor: 118,
	mastery: {
		weapon: 8,
		skill: 29
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "QuantumQuestX88",
	inventory: {
		equipped: {
			weapon: "frostbite gauntlets",
			skill: "thunderclap",
			consumable: "sweet pastry",
			head: "divine paladin's helm",
			torso: "null",
			arms: "mystic seer's gloves",
			legs: "rogue's trousers",
			feet: "alchemist's shoes"
		},
		backpack: [
			['elemental shard', 'radiant prism', 'obsidian rune stone', 'crystalline vessel', 'emberroot sapling', 'harmony crystal', 'enigmatic figurine', 'enchanted amulet', 'amethyst', 'cursed mirror', 'mirror of illusion', "stormbringer's sigil", 'crimson phoenix plume', 'cursed mirror', 'resonating crystal', 'singing seashell', 'phoenix feather', 'invisible ink pen', 'prismatic crystal', 'starforged ingot', 'aetheric beacon', 'crystalline vessel', ' rubiks cube', 'enigmatic figurine', 'harmonic conch shell', 'soulstone trinket', 'frostblossom seed', 'echoing chime', 'verdant dreamcatcher']
		]
	},
	health: 177,
	stamina: 56,
	armor: 113,
	mastery: {
		weapon: 16,
		skill: 13
	},
	savepoint: {
		location: "ancient tree grove",
		date: Date()
	}
},
{
	username: "NebulaNexus77",
	inventory: {
		equipped: {
			weapon: "oceanic trident",
			skill: "toxic vortex",
			consumable: "soulstone soup",
			head: "paladin's helm",
			torso: "The honored one's jacket",
			arms: "warrior's bracers",
			legs: "archer's pants",
			feet: "divine paladin's boots"
		},
		backpack: [
			['mirage cloak', 'puzzle piece', 'mysterious music box', 'fox tail', 'serenity stone', 'ethereal mirror', 'starlight veil', 'pyroclasmic ember', 'timeless hourglass', 'celestial ocarina', 'enigmatic crest', 'radiant feather', 'shadow cloak', 'lava bloom seed', 'timeless hourglass', 'mirage pearl', 'zephyr gem', 'arcane rune', 'serenity stone', 'echoing chime', 'enigmatic figurine', 'ethereal prism', 'enigmatic scroll', 'sylphic whisper', 'obsidian rune stone', 'balloon animal', 'stormwhisper feather', 'enigmatic figurine', 'celestial feather', 'starlight veil', 'resonating crystal', 'ensnaring vine', 'verdant dreamcatcher', 'nebula medallion', 'aetheric beacon', 'pyroclasmic ember']
		]
	},
	health: 92,
	stamina: 81,
	armor: 151,
	mastery: {
		weapon: 16,
		skill: 17
	},
	savepoint: {
		location: "stormwatch tower",
		date: Date()
	}
},
{
	username: "ShadowStrikeX21",
	inventory: {
		equipped: {
			weapon: "crimson shuriken",
			skill: "molten strike",
			consumable: "iron brew",
			head: "druid's crown",
			torso: "assassin's robe",
			arms: "necromancer's gloves",
			legs: "druid's leggings",
			feet: "null"
		},
		backpack: [
			['zephyr gem', 'zephyr gem', 'astral serpent scale', 'puzzle piece', 'verdant blossom', 'mirage cloak', 'shadow cloak', 'labyrinthine key', 'frostfire lantern', 'ethereal blossom', 'crimson phoenix plume', 'mirror of illusion', 'gilded compass', 'lava bloom seed', 'shrouded talisman', 'timeless hourglass', 'starlight veil', 'harmonic conch shell', 'pyroclasmic ember', 'soothing breeze amulet', 'frostfire lantern', "writer's notebook", 'illusory lantern', 'baseball cap', 'crystalized aurora', 'arcane codex', 'mirage pearl', 'pyroclasmic ember', 'emberroot sapling', 'ephemeral feather', 'mirror of illusion', 'illusory lantern', "dreamweaver's quill", ' rubiks cube', 'labyrinthine key', "writer's notebook", 'dreamcatcher amulet']
		]
	},
	health: 102,
	stamina: 112,
	armor: 97,
	mastery: {
		weapon: 17,
		skill: 5
	},
	savepoint: {
		location: "igloosia",
		date: Date()
	}
},
{
	username: "CyberChampion88",
	inventory: {
		equipped: {
			weapon: "stellar bow",
			skill: "frostbolt",
			consumable: "thunderberry pie",
			head: "mystic seer's hood",
			torso: "thor's chainmail",
			arms: "tyr's gauntlets",
			legs: "mage's leggings",
			feet: "wanderer's boots"
		},
		backpack: [
			['fox tail', 'crystalized essence', 'cursed doll', 'shimmering scepter', 'invisible ink pen', 'crystalline vessel', 'frostbound blossom', 'frostfallen relic', "tidecaller's shell", 'ephemeral feather', "writer's notebook", 'whispering totem', 'crimson phoenix plume', 'lunar lace', 'balloon animal', 'enchanted amulet', 'sylphic whisper', 'harmony crystal', 'emberroot sapling']
		]
	},
	health: 51,
	stamina: 151,
	armor: 190,
	mastery: {
		weapon: 17,
		skill: 23
	},
	savepoint: {
		location: "tempest summit",
		date: Date()
	}
},
{
	username: "NovaNinjaX77",
	inventory: {
		equipped: {
			weapon: "lightning spear",
			skill: "shockwave arrow",
			consumable: "celestial cheesecake",
			head: "monk's hood",
			torso: "berserker's chestguard",
			arms: "warrior's bracers",
			legs: "elemental sorcerer's pants",
			feet: "duelist's shoes"
		},
		backpack: [
			['ruby heartstone', 'emberroot sapling', 'thunderstruck relic', 'aetheric beacon', 'frostblossom seed', 'celestial feather', 'ensnaring vine', 'elemental shard', 'thunderstruck relic']
		]
	},
	health: 183,
	stamina: 172,
	armor: 125,
	mastery: {
		weapon: 20,
		skill: 16
	},
	savepoint: {
		location: "stormwatch tower",
		date: Date()
	}
},
{
	username: "NeonNexusX21",
	inventory: {
		equipped: {
			weapon: "phoenix bow",
			skill: "umbral fortress",
			consumable: "obsidian brew",
			head: "assassin's hood",
			torso: "necromancer's cloak",
			arms: "rogue's fingerless gloves",
			legs: "sorcerer's pants",
			feet: "mage's shoes"
		},
		backpack: [
			['crystalized essence', 'verdant dreamcatcher', 'lava bloom seed', 'harmony crystal', 'mirage pearl', 'frostfallen relic', 'thunderstruck relic', 'hand mirror', 'mystic orb', 'luminous pebble', "songbird's feather", 'shadow cloak', 'camera', 'starlight veil', "tiger's eye", 'sacred sigil', 'celestial feather', 'whisperwind elixir', 'lunar blossom', 'arcane codex', 'eclipsed crystal', 'hand mirror', 'whisperwind elixir', 'cavernous gemstone', 'whispering totem', "dreamweaver's quill", "stargazer's lens", 'lunar crest', 'science fair award', 'mirror of illusion', 'serene lotus petal', 'dreamcatcher amulet', 'echoing chime', 'galeforce whistle', 'hand mirror', 'ethereal prism', 'luminous pebble']
		]
	},
	health: 147,
	stamina: 153,
	armor: 94,
	mastery: {
		weapon: 4,
		skill: 2
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "MysticMarauderX88",
	inventory: {
		equipped: {
			weapon: "polar spear thrower",
			skill: "acid rain",
			consumable: "mystic infusion",
			head: "druid's crown",
			torso: "rogue's leather vest",
			arms: "knight's gauntlets",
			legs: "beastmaster's leggings",
			feet: "mystic seer's shoes"
		},
		backpack: [
			['shadow cloak', 'cursed doll', 'metal slinky', 'galeforce whistle', 'lunar lace', 'shadow silk scarf', 'ruby heartstone', "writer's notebook", 'celestial feather', 'broken compass', 'mysterious music box', 'volcanic emberstone', ' rubiks cube', 'astral ribbon', 'prismatic crystal', 'rubber chicken', 'frostblossom seed', 'aetheric beacon', 'aetheric beacon']
		]
	},
	health: 101,
	stamina: 233,
	armor: 129,
	mastery: {
		weapon: 4,
		skill: 4
	},
	savepoint: {
		location: "haunted thicket",
		date: Date()
	}
},
{
	username: "QuantumQuasarMaster",
	inventory: {
		equipped: {
			weapon: "voidcleaver's scythe",
			skill: "celestial arrow",
			consumable: "mango sorbet",
			head: "knight-commander's helmet",
			torso: "The honored one's jacket",
			arms: "sorcerer's gloves",
			legs: "alchemist's leggings",
			feet: "warrior's boots"
		},
		backpack: [
			['harmonic conch shell', 'enigmatic crest', 'lunar lace', "dreamweaver's quill", 'rusty spoon', 'shimmering scepter', 'resonating crystal', "tidecaller's shell", 'serenity stone', 'enigmatic figurine', 'thunderstruck relic', ' rubiks cube', 'crystalized essence', "dreamer's journal", 'thunderstruck relic', 'mirror of illusion', 'ember veil', "stargazer's lens", 'ethereal mirror', 'pyroclasmic ember', 'serenity stone', 'verdant dreamcatcher', 'serenity stone', 'harmony crystal', 'vortex core', 'metal slinky', 'lunar blossom', 'whisperwind elixir', 'astral ribbon', 'volcanic emberstone', 'illusory lantern', 'pyroclasmic ember', 'bottle of wine', 'elemental shard', 'crystalized essence', 'amethyst', "stormbringer's sigil", 'camera', 'lunar blossom', 'sacred sigil', 'stormwhisper feather', 'starlight veil', 'labyrinthine key']
		]
	},
	health: 80,
	stamina: 223,
	armor: 137,
	mastery: {
		weapon: 1,
		skill: 3
	},
	savepoint: {
		location: "mystic glade",
		date: Date()
	}
},
{
	username: "CyberSpecterX77",
	inventory: {
		equipped: {
			weapon: "cinderblade",
			skill: "tectonic trap",
			consumable: "bison steak",
			head: "elemental sorcerer's hat",
			torso: "inquisitor's vestment",
			arms: "ranger's gloves",
			legs: "necromancer's pants",
			feet: "knight's boots"
		},
		backpack: [
			['enigmatic crest', 'starlight veil', 'enigmatic crest', 'broken compass', ' rubiks cube', 'lava bloom seed', 'astral ribbon', 'emberstone charm', 'frostfire lantern', 'phoenix feather', 'ethereal mirror', 'singing seashell', 'frostfire lantern', "dreamer's journal", 'enigmatic figurine', 'crystalized aurora', 'emberstone charm', 'verdant blossom', 'thunderstruck relic', 'luminous pebble', 'radiant feather', 'shadow cloak', "stargazer's lens", 'tranquil lotus', 'volcanic emberstone']
		]
	},
	health: 147,
	stamina: 125,
	armor: 129,
	mastery: {
		weapon: 21,
		skill: 4
	},
	savepoint: {
		location: "lunar sanctuary",
		date: Date()
	}
},
{
	username: "NovaNebulaX21",
	inventory: {
		equipped: {
			weapon: "azure shuriken",
			skill: "wind whirl",
			consumable: "whispers in the wind potion",
			head: "assassin's hood",
			torso: "inquisitor's vestment",
			arms: "assassin's gloves",
			legs: "knight's greaves",
			feet: "druid's sandals"
		},
		backpack: [
			['starlight veil', 'half eaten apple', 'crystalline vessel', 'enchanted vellum', 'rubber chicken', 'shadow cloak', 'lunar crest', 'nebula medallion', 'arcane rune', 'mysterious music box', 'starlight veil', 'lunar lace', 'lively coral', 'fox tail', 'moonlit essence', 'lunar blossom', 'soulstone trinket', 'pyroclasmic ember', 'crystalline vessel', 'science fair award', 'celestial lantern', 'lunar lace', 'arcane codex', 'mirage cloak', 'celestial ocarina', 'pyroclasmic ember', 'frostbound blossom', 'sylphic whisper', 'ethereal mirror']
		]
	},
	health: 234,
	stamina: 105,
	armor: 117,
	mastery: {
		weapon: 26,
		skill: 19
	},
	savepoint: {
		location: "aurora summit",
		date: Date()
	}
},
{
	username: "NeonNomadX88",
	inventory: {
		equipped: {
			weapon: "celestial sword",
			skill: "stone wave",
			consumable: "frostbite potion",
			head: "knight-commander's helmet",
			torso: "inquisitor's vestment",
			arms: "assassin's gloves",
			legs: "archer's pants",
			feet: "ancient guardian's boots"
		},
		backpack: [
			['mirage cloak', "dreamer's journal", 'vortex core', 'mirror of illusion', 'crystalized aurora', 'hand mirror', 'harmonic conch shell', 'stormwhisper feather', 'ensnaring vine', 'serenity stone', 'resonating crystal', 'dreamcatcher amulet', 'frostfire lantern', 'enchanted vellum', 'zephyr gem', 'crystalline vessel', 'illusory lantern', 'mirage cloak', 'rune of resilience', 'enchanted amulet', 'lively coral', 'lively coral', 'volcanic emberstone', 'eclipsed crystal', 'celestial ocarina', 'astral lantern', 'radiant prism', "songbird's feather", 'ruby heartstone', 'radiant feather', 'galeforce whistle', 'crimson phoenix plume', 'shadow silk scarf', 'cursed doll', 'metal slinky', 'whisperwind elixir', 'starlight veil', 'enchanted amulet', "dreamer's journal", 'lunar blossom', "tiger's eye", 'dreamcatcher amulet', 'singing seashell', 'shadow silk scarf', 'cursed doll', 'vortex core', 'arcane codex', 'metal slinky', 'enigmatic scroll']
		]
	},
	health: 138,
	stamina: 204,
	armor: 164,
	mastery: {
		weapon: 29,
		skill: 20
	},
	savepoint: {
		location: "aurora summit",
		date: Date()
	}
},
{
	username: "MysticMatrixX21",
	inventory: {
		equipped: {
			weapon: "polar spear thrower",
			skill: "frozen trap",
			consumable: "hallowed honey",
			head: "knight-commander's helmet",
			torso: "mage's robe",
			arms: "beastmaster's gauntlets",
			legs: "wanderer's pants",
			feet: "null"
		},
		backpack: [
			['penumbral pendant', 'dreamcatcher amulet', 'luminous pebble', 'ruby heartstone', "stormbringer's sigil", 'metal slinky', 'ensnaring vine', 'ember veil', 'rainbow gemstone', 'sylphic whisper', 'astral ribbon', 'crystalized essence', 'starlight veil', 'ethereal prism', 'serenity stone', 'ephemeral feather', 'enigmatic crest', 'half eaten apple']
		]
	},
	health: 249,
	stamina: 186,
	armor: 109,
	mastery: {
		weapon: 5,
		skill: 19
	},
	savepoint: {
		location: "haunted thicket",
		date: Date()
	}
},
{
	username: "ShadowSphinxMaster",
	inventory: {
		equipped: {
			weapon: "plasma blade",
			skill: "ice blast",
			consumable: "timeless elixir",
			head: "null",
			torso: "wanderer's coat",
			arms: "divine paladin's gauntlets",
			legs: "druid's leggings",
			feet: "inquisitor's boots"
		},
		backpack: [
			['sylphic whisper', 'ethereal blossom', 'starforged ingot', 'luminous pebble', 'emberroot sapling', 'vortex core', 'silver locket', 'half eaten apple', 'balloon animal', 'aetheric beacon', 'mysterious music box', 'frostfire lantern', 'starlight veil', 'harmony crystal', 'ember veil', 'mirage pearl', 'stormwhisper feather', 'cavernous gemstone', 'verdant blossom', 'crystalized tears', 'vortex core', 'phoenix feather', 'serenity stone', 'ensnaring vine', 'celestial lantern', 'labyrinthine key', 'sylphic whisper', 'sacred sigil', 'lunar crest', 'radiant feather', 'arcane rune', 'ethereal mirror', 'timeless relic', 'celestial lantern', "dreamer's journal", ' rubiks cube', 'obsidian rune stone', 'sacred sigil', 'eclipsed crystal', 'moonlit essence', 'cursed doll', 'solar flare seed', 'luminous pebble', 'rubber chicken', 'verdant dreamcatcher', 'harmony crystal', 'starforged ingot', "stormbringer's sigil"]
		]
	},
	health: 71,
	stamina: 62,
	armor: 104,
	mastery: {
		weapon: 19,
		skill: 17
	},
	savepoint: {
		location: "tempest summit",
		date: Date()
	}
},
{
	username: "QuantumQuintessenceX77",
	inventory: {
		equipped: {
			weapon: "mindflayer's mind staff",
			skill: "static shock",
			consumable: "enigmatic brew",
			head: "sellsword's helm",
			torso: "duelist's attire",
			arms: "necromancer's gloves",
			legs: "archer's pants",
			feet: "inquisitor's boots"
		},
		backpack: [
			['hand mirror', 'shrouded talisman', 'frostblossom seed', 'enigmatic scroll', "tiger's eye", 'mysterious music box', 'verdant blossom', 'radiant prism', 'enigmatic crest', 'harmonic conch shell', 'cavernous gemstone', 'enchanted amulet']
		]
	},
	health: 143,
	stamina: 180,
	armor: 131,
	mastery: {
		weapon: 23,
		skill: 14
	},
	savepoint: {
		location: "mystic glade",
		date: Date()
	}
},
{
	username: "CyberCatalystX21",
	inventory: {
		equipped: {
			weapon: "lunar shuriken",
			skill: "inferno arrow",
			consumable: "spicy curry",
			head: "ranger's hood",
			torso: "assassin's robe",
			arms: "null",
			legs: "berserker's legguards",
			feet: "wanderer's boots"
		},
		backpack: [
			['shadow silk scarf', 'enchanted amulet', "tiger's eye", 'penumbral pendant', 'aetherial lens', 'metal slinky', 'solar flare seed', 'rune of resilience', 'timeless hourglass', 'soulstone trinket', 'enigmatic crest', 'rune of resilience', 'illusory lantern', 'lunar lace', 'frostfallen relic', 'thunderstruck relic', 'obsidian rune stone', 'harmonic conch shell', 'arcane rune', 'crystalized aurora', 'frostfire lantern', 'mirage cloak', ' rubiks cube', 'solar flare seed', 'galeforce whistle', 'elemental shard', 'frostfire lantern', 'mirror of illusion', 'crystalized tears', 'rusty spoon', 'stormwhisper feather', 'timeless relic', 'hand mirror', 'vortex core', 'mirror of illusion', 'volcanic emberstone']
		]
	},
	health: 109,
	stamina: 148,
	armor: 87,
	mastery: {
		weapon: 14,
		skill: 10
	},
	savepoint: {
		location: "abyssal palace",
		date: Date()
	}
},
{
	username: "NovaNebulaX88",
	inventory: {
		equipped: {
			weapon: "frostblade",
			skill: "corrosive arrow",
			consumable: "holy water",
			head: "inquisitor's hood",
			torso: "knight's plate armor",
			arms: "alchemist's gloves",
			legs: "beastmaster's leggings",
			feet: "elementalist's sandals"
		},
		backpack: [
			['phoenix feather', 'celestial ocarina', 'fox tail', 'celestial ocarina', 'phoenix feather', 'mirage cloak', 'crystalized essence', 'aetheric beacon', 'crystalized aurora', "stormbringer's sigil", 'puzzle piece', 'rainbow gemstone', 'celestial ocarina', 'moonlit essence', 'luminous pebble', 'whisperwind elixir', 'obsidian rune stone', 'timeless relic', 'cursed doll', 'phoenix feather', 'nebula medallion', 'singing seashell', 'solar flare seed', 'metal slinky', 'ephemeral feather', 'penumbral pendant', 'prismatic crystal', 'mirror of illusion', 'serenity stone', 'enchanted amulet', 'crystalized essence', 'echoing chime', 'mirror of illusion', 'verdant dreamcatcher', 'crystalized aurora', 'lunar crest', 'luminous pebble', "songbird's feather", 'rubber chicken', 'illusory lantern', 'solar flare seed', 'obsidian rune stone']
		]
	},
	health: 59,
	stamina: 223,
	armor: 139,
	mastery: {
		weapon: 25,
		skill: 4
	},
	savepoint: {
		location: "boggy haven",
		date: Date()
	}
},
{
	username: "NeonNebulaMaster",
	inventory: {
		equipped: {
			weapon: "silver sword",
			skill: "poisonous whirl",
			consumable: "endurance potion",
			head: "knight's helmet",
			torso: "duelist's attire",
			arms: "ancient guardian's gauntlets",
			legs: "inquisitor's leggings",
			feet: "frigg's greaves"
		},
		backpack: [
			['shadow cloak', 'crystalized essence', 'ethereal blossom', 'shimmering scepter', "dreamer's journal", 'shadow silk scarf', 'crystalized aurora', 'lunar lace', 'shadow silk scarf', 'ember veil', 'enigmatic figurine', ' rubiks cube', 'hand mirror', 'shimmering scepter', "tiger's eye", 'half eaten apple', 'rusty spoon', 'frostbound blossom', 'ethereal blossom', 'astral serpent scale', 'arcane codex', 'frostfallen relic', 'volcanic emberstone', 'crystalized aurora', 'ember veil', 'ethereal mirror', 'crystalized essence', 'cursed doll', 'silver locket', "tiger's eye", "stormbringer's sigil", 'aetherial lens', 'crimson phoenix plume', ' rubiks cube', 'serene lotus petal', 'fox tail', 'baseball cap', 'ember veil', 'shrouded talisman', 'ruby heartstone', 'dreamcatcher amulet', 'labyrinthine key', 'frostfallen relic', 'obsidian rune stone', 'resonating crystal', 'crystalized aurora', 'elemental shard', 'verdant dreamcatcher']
		]
	},
	health: 234,
	stamina: 112,
	armor: 149,
	mastery: {
		weapon: 14,
		skill: 3
	},
	savepoint: {
		location: "ember summit",
		date: Date()
	}
},
{
	username: "MysticMonarchX77",
	inventory: {
		equipped: {
			weapon: "thorned whip",
			skill: "poisonous whirl",
			consumable: "mystic muffin",
			head: "The honored one's blindfold",
			torso: "alchemist's robe",
			arms: "wanderer's gloves",
			legs: "warrior's legplates",
			feet: "archer's boots"
		},
		backpack: [
			['astral ribbon', 'arcane codex', 'penumbral pendant', 'vortex core', 'phoenix feather']
		]
	},
	health: 85,
	stamina: 93,
	armor: 137,
	mastery: {
		weapon: 24,
		skill: 30
	},
	savepoint: {
		location: "celestial junction",
		date: Date()
	}
},
{
	username: "QuantumQuasarX88",
	inventory: {
		equipped: {
			weapon: "nebula wand",
			skill: "plague storm",
			consumable: "ironskin elixir",
			head: "shadow assassin's mask",
			torso: "archer's tunic",
			arms: "divine paladin's gauntlets",
			legs: "beastmaster's leggings",
			feet: "wanderer's boots"
		},
		backpack: [
			['starforged ingot', 'volcanic emberstone', 'soulstone trinket', 'astral lantern', 'crystalized tears', 'enigmatic scroll', 'frostfallen relic', 'volcanic emberstone', "tidecaller's shell", 'puzzle piece', 'soothing breeze amulet', 'obsidian rune stone', 'crystalline vessel', 'camera', 'celestial feather', 'sylphic whisper', 'singing seashell', 'starlight veil', 'lava bloom seed', 'rune of resilience', 'astral serpent scale', 'emberstone charm', 'puzzle piece', 'half eaten apple', 'frostblossom seed', 'rubber chicken', 'mirror of illusion', 'bottle of wine', 'starlight veil', 'obsidian rune stone', 'shadow silk scarf', 'tranquil lotus', 'moonlit essence', 'rainbow gemstone', "dreamer's journal", 'half eaten apple', 'volcanic emberstone', 'moonlit essence', 'cursed mirror', 'science fair award', 'phoenix feather', 'luminous pebble', 'ethereal prism', 'crimson phoenix plume', 'frostbound blossom', 'echoing chime', "tidecaller's shell", 'crimson phoenix plume']
		]
	},
	health: 51,
	stamina: 58,
	armor: 147,
	mastery: {
		weapon: 13,
		skill: 30
	},
	savepoint: {
		location: "celestial junction",
		date: Date()
	}
},
{
	username: "NebulaNemesis77",
	inventory: {
		equipped: {
			weapon: "spirit bow",
			skill: "hardening lava",
			consumable: "energy drink",
			head: "duelist's hat",
			torso: "necromancer's cloak",
			arms: "sorcerer's gloves",
			legs: "duelist's trousers",
			feet: "ancient guardian's boots"
		},
		backpack: [
			['eclipsed crystal', 'ephemeral feather', 'ethereal mirror', 'bottle of wine', 'baseball cap', 'eclipsed crystal', 'crystalized essence', 'cursed doll', 'emberroot sapling', 'vortex core', "dreamweaver's quill", 'moonlit essence', 'verdant blossom']
		]
	},
	health: 215,
	stamina: 140,
	armor: 133,
	mastery: {
		weapon: 15,
		skill: 1
	},
	savepoint: {
		location: "divine citadel",
		date: Date()
	}
},
{
	username: "CyberShadowX21",
	inventory: {
		equipped: {
			weapon: "starfall wand",
			skill: "shadow veil",
			consumable: "voidfire potion",
			head: "ranger's hood",
			torso: "elemental sorcerer's robe",
			arms: "paladin's gauntlets",
			legs: "duelist's trousers",
			feet: "assassin's boots"
		},
		backpack: [
			['sylphic whisper', 'eclipsed crystal', 'rune of resilience', 'nebula medallion', 'stormwhisper feather', 'astral serpent scale', 'mirror of illusion', 'harmony crystal', 'celestial feather', 'ephemeral feather']
		]
	},
	health: 242,
	stamina: 61,
	armor: 111,
	mastery: {
		weapon: 27,
		skill: 7
	},
	savepoint: {
		location: "ancient tree grove",
		date: Date()
	}
},
{
	username: "NovaNexusX88",
	inventory: {
		equipped: {
			weapon: "time-bender's scythe",
			skill: "venomous storm",
			consumable: "moonlight dew",
			head: "knight-commander's helmet",
			torso: "monk's robe",
			arms: "sorcerer's gloves",
			legs: "druid's leggings",
			feet: "paladin's boots"
		},
		backpack: [
			['crimson phoenix plume', 'aetherial lens', 'harmonic conch shell', 'sacred sigil', 'lunar crest', 'enigmatic crest', 'harmony crystal', 'ensnaring vine', 'prismatic crystal', 'aetherial lens', 'timeless hourglass', ' rubiks cube', 'echoing chime', 'emberroot sapling', "dreamweaver's quill", "songbird's feather", 'starforged ingot', 'mysterious music box', 'lunar crest']
		]
	},
	health: 92,
	stamina: 228,
	armor: 133,
	mastery: {
		weapon: 7,
		skill: 27
	},
	savepoint: {
		location: "feywood forest",
		date: Date()
	}
},
{
	username: "NeonNovaX77",
	inventory: {
		equipped: {
			weapon: "thorned whip",
			skill: "electro trap",
			consumable: "echoing elixir",
			head: "elementalist's crown",
			torso: "elemental sorcerer's robe",
			arms: "knight-commander's gauntlets",
			legs: "mage's leggings",
			feet: "alchemist's shoes"
		},
		backpack: [
			['mysterious music box', 'invisible ink pen', "songbird's feather", 'mirage pearl', 'frostfire lantern', 'mysterious music box', 'half eaten apple', 'silver locket', 'singing seashell', 'rune of resilience', 'enigmatic figurine', 'ethereal prism', 'invisible ink pen', 'celestial lantern', 'mirror of illusion', 'lunar crest', 'radiant feather', 'rusty spoon', 'penumbral pendant', 'astral serpent scale', 'aetherial lens', 'frostfallen relic', 'shadow silk scarf', 'soulstone trinket', "dreamweaver's quill", 'invisible ink pen', 'pyroclasmic ember', 'lively coral', 'rune of resilience', 'ephemeral feather', 'baseball cap', 'enigmatic scroll', 'hand mirror', 'resonating crystal', 'amethyst', 'shadow silk scarf', 'lively coral', 'resonating crystal', 'invisible ink pen', "writer's notebook"]
		]
	},
	health: 163,
	stamina: 232,
	armor: 120,
	mastery: {
		weapon: 30,
		skill: 1
	},
	savepoint: {
		location: "aurora summit",
		date: Date()
	}
},
{
	username: "MysticMysticX21",
	inventory: {
		equipped: {
			weapon: "time-bender's scythe",
			skill: "shockwave arrow",
			consumable: "mango sorbet",
			head: "druid's crown",
			torso: "necromancer's cloak",
			arms: "tyr's gauntlets",
			legs: "berserker's legguards",
			feet: "necromancer's boots"
		},
		backpack: [
			[]
		]
	},
	health: 224,
	stamina: 206,
	armor: 153,
	mastery: {
		weapon: 12,
		skill: 19
	},
	savepoint: {
		location: "subterranean citadel",
		date: Date()
	}
},
{
	username: "QuantumQuintessenceX88",
	inventory: {
		equipped: {
			weapon: "ethereal rapier",
			skill: "astral barrier",
			consumable: "shadowsilk tea",
			head: "necromancer's hood",
			torso: "sellsword's chestguard",
			arms: "ancient guardian's gauntlets",
			legs: "sellsword's legguards",
			feet: "The honored one's boots"
		},
		backpack: [
			['lunar crest', 'aetherial lens', 'volcanic emberstone', 'fox tail', 'illusory lantern', 'pyroclasmic ember', 'half eaten apple', 'frostblossom seed', 'fox tail', 'soothing breeze amulet', 'sacred sigil', 'broken compass', 'celestial lantern', 'mysterious music box', ' rubiks cube', 'shimmering scepter', 'prismatic crystal', 'pyroclasmic ember', 'penumbral pendant', 'prismatic crystal', 'phoenix feather', 'emberstone charm', "dreamweaver's quill", 'singing seashell', 'labyrinthine key', 'soothing breeze amulet', 'obsidian rune stone', 'eclipsed crystal', 'lunar blossom', 'arcane rune', 'eclipsed crystal', 'crimson phoenix plume', 'illusory lantern', 'frostbound blossom', ' rubiks cube', 'silver locket', 'soothing breeze amulet', 'frostblossom seed', 'rainbow gemstone', 'invisible ink pen', 'cursed doll', 'ephemeral feather', 'rune of resilience', 'volcanic emberstone', 'gilded compass']
		]
	},
	health: 113,
	stamina: 90,
	armor: 152,
	mastery: {
		weapon: 29,
		skill: 13
	},
	savepoint: {
		location: "stardust grove",
		date: Date()
	}
},
{
	username: "CyberCatalyst77",
	inventory: {
		equipped: {
			weapon: "skyward bow",
			skill: "tempest surge",
			consumable: "sunflower tea",
			head: "knight-commander's helmet",
			torso: "The honored one's jacket",
			arms: "mystic seer's gloves",
			legs: "yggdrasil's leggings",
			feet: "paladin's boots"
		},
		backpack: [
			["stargazer's lens", 'amethyst', 'science fair award', 'verdant dreamcatcher', 'frostfire lantern', 'obsidian rune stone', "stormbringer's sigil", 'radiant feather', "songbird's feather", 'mirage cloak', 'tranquil lotus', 'fox tail', 'prismatic crystal', 'verdant dreamcatcher', 'balloon animal', 'mysterious music box', 'timeless hourglass', 'bottle of wine', 'baseball cap', 'aetherial lens', 'serenity stone', 'labyrinthine key', 'resonating crystal', 'shadow silk scarf', 'enchanted vellum', 'thunderstruck relic', 'rune of resilience', 'ethereal prism', 'phoenix feather', 'hand mirror', 'pyroclasmic ember', "tidecaller's shell", 'harmonic conch shell', 'crystalized aurora', 'gilded compass', 'galeforce whistle', 'serene lotus petal', 'ruby heartstone']
		]
	},
	health: 110,
	stamina: 62,
	armor: 168,
	mastery: {
		weapon: 15,
		skill: 16
	},
	savepoint: {
		location: "desolate plaza",
		date: Date()
	}
},
{
	username: "NovaNomadX21",
	inventory: {
		equipped: {
			weapon: "shockwave hammer",
			skill: "noxious apocalypse",
			consumable: "eternal soup",
			head: "necromancer's hood",
			torso: "rogue's leather vest",
			arms: "alchemist's gloves",
			legs: "elemental sorcerer's pants",
			feet: "assassin's boots"
		},
		backpack: [
			['eclipsed crystal', 'penumbral pendant', 'gilded compass', 'enchanted vellum', "tidecaller's shell", 'rusty spoon', "stormbringer's sigil", 'phoenix feather', 'broken compass', 'mirror of illusion', 'luminous pebble', 'galeforce whistle', 'mirage pearl', 'science fair award', 'aetheric beacon', 'ephemeral feather', 'hand mirror', 'crystalline vessel', "stargazer's lens", 'crystalized essence', 'emberroot sapling', "writer's notebook", 'lunar lace', 'nebula medallion', 'serene lotus petal', 'hand mirror', 'tranquil lotus', 'thunderstruck relic', 'zephyr gem', 'crystalized essence', 'sacred sigil', 'solar flare seed', ' rubiks cube', 'enchanted vellum']
		]
	},
	health: 68,
	stamina: 204,
	armor: 113,
	mastery: {
		weapon: 14,
		skill: 17
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "ShadowSaberX88",
	inventory: {
		equipped: {
			weapon: "staff of chaos",
			skill: "noxious apocalypse",
			consumable: "adrenaline",
			head: "duelist's hat",
			torso: "The honored one's jacket",
			arms: "shadow assassin's gloves",
			legs: "inquisitor's leggings",
			feet: "rogue's ankle boots"
		},
		backpack: [
			['vortex core', 'aetheric beacon', 'soulstone trinket', ' rubiks cube', "songbird's feather", 'fox tail', "tiger's eye", 'harmonic conch shell', 'shrouded talisman', 'rubber chicken', 'tranquil lotus', 'singing seashell', 'mirage pearl', 'crystalline vessel', 'radiant feather', 'radiant feather', 'science fair award', "tiger's eye", 'tranquil lotus', 'emberstone charm', 'labyrinthine key', 'sylphic whisper', 'shimmering scepter', "dreamer's journal", 'ruby heartstone']
		]
	},
	health: 143,
	stamina: 222,
	armor: 123,
	mastery: {
		weapon: 16,
		skill: 10
	},
	savepoint: {
		location: "frozen fortress",
		date: Date()
	}
},
{
	username: "MysticMatrixMaster",
	inventory: {
		equipped: {
			weapon: "poisoned crossbow",
			skill: "tectonic trap",
			consumable: "adrenaline",
			head: "mage's hat",
			torso: "inquisitor's vestment",
			arms: "mystic seer's gloves",
			legs: "warrior's legplates",
			feet: "inquisitor's boots"
		},
		backpack: [
			['rune of resilience', 'mirage pearl', 'cavernous gemstone', 'lunar blossom', 'radiant prism', 'sacred sigil', 'crystalized essence', 'lively coral', 'mysterious music box', 'sacred sigil', 'aetheric beacon', 'mystic orb', 'timeless relic', 'celestial feather', 'galeforce whistle', 'thunderstruck relic', 'lunar crest', 'dreamcatcher amulet', 'timeless hourglass', 'celestial lantern', 'solar flare seed', 'eclipsed crystal', 'cavernous gemstone', 'shimmering scepter', "tiger's eye", 'shadow cloak']
		]
	},
	health: 144,
	stamina: 146,
	armor: 138,
	mastery: {
		weapon: 3,
		skill: 12
	},
	savepoint: {
		location: "celestial junction",
		date: Date()
	}
},
{
	username: "QuantumQuakeX21",
	inventory: {
		equipped: {
			weapon: "abyssal cleaver scythe",
			skill: "shadow veil",
			consumable: "serpent scale potion",
			head: "duelist's hat",
			torso: "elementalist's robe",
			arms: "assassin's gloves",
			legs: "berserker's legguards",
			feet: "warrior's boots"
		},
		backpack: [
			['labyrinthine key', 'galeforce whistle', 'soulstone trinket', 'gilded compass', 'shadow silk scarf', 'frostfallen relic', 'crystalized essence', 'tranquil lotus', 'verdant blossom', 'solar flare seed', 'rusty spoon', 'frostfallen relic', 'baseball cap', 'soulstone trinket', 'rubber chicken', 'echoing chime', 'soothing breeze amulet', 'zephyr gem', 'rainbow gemstone', 'crystalized essence', "dreamweaver's quill", 'astral lantern', 'silver locket', 'verdant dreamcatcher', 'dreamcatcher amulet', 'baseball cap', 'verdant blossom', 'penumbral pendant', 'ensnaring vine', 'astral serpent scale', "tiger's eye", "stormbringer's sigil", ' rubiks cube', 'crystalized aurora']
		]
	},
	health: 223,
	stamina: 54,
	armor: 107,
	mastery: {
		weapon: 16,
		skill: 15
	},
	savepoint: {
		location: "subterranean citadel",
		date: Date()
	}
},
{
	username: "NovaNebulaX88",
	inventory: {
		equipped: {
			weapon: "voltaic bow",
			skill: "earthslide",
			consumable: "voidwalker potion",
			head: "necromancer's hood",
			torso: "sellsword's chestguard",
			arms: "warrior's bracers",
			legs: "yggdrasil's leggings",
			feet: "druid's sandals"
		},
		backpack: [
			['lunar lace', 'celestial feather', 'obsidian rune stone', 'mirror of illusion', "tidecaller's shell", 'vortex core', 'serene lotus petal', "writer's notebook", 'sylphic whisper', 'zephyr gem', 'cursed mirror', 'obsidian rune stone', 'astral ribbon', 'ethereal blossom', 'half eaten apple', 'timeless relic', 'mirage cloak', 'ethereal prism', 'frostfire lantern', 'moonlit essence', 'celestial feather', 'celestial ocarina', 'tranquil lotus', 'frostblossom seed', 'baseball cap', 'emberstone charm', 'enigmatic scroll', 'rainbow gemstone', 'ruby heartstone', 'ethereal mirror', 'starlight veil', 'hand mirror', 'sacred sigil', 'lunar lace', 'bottle of wine', 'radiant prism', "tiger's eye", 'rune of resilience', 'starlight veil', 'invisible ink pen', 'soothing breeze amulet', 'mysterious music box', 'mystic orb', 'serene lotus petal']
		]
	},
	health: 232,
	stamina: 59,
	armor: 147,
	mastery: {
		weapon: 25,
		skill: 19
	},
	savepoint: {
		location: "ancient tree grove",
		date: Date()
	}
},
{
	username: "NeonNebulaMaster",
	inventory: {
		equipped: {
			weapon: "heavenly saber",
			skill: "corrosive arrow",
			consumable: "sparkling cider",
			head: "knight's helmet",
			torso: "sorcerer's robe",
			arms: "sorcerer's gloves",
			legs: "wanderer's pants",
			feet: "monk's sandals"
		},
		backpack: [
			["dreamer's journal", 'fox tail', 'frostbound blossom', 'phoenix feather', 'penumbral pendant', 'crystalized aurora', "songbird's feather", 'bottle of wine', 'whispering totem', 'radiant feather', 'ember veil', 'enchanted amulet', 'lunar lace', 'cursed mirror', 'celestial ocarina', 'moonlit essence']
		]
	},
	health: 54,
	stamina: 229,
	armor: 113,
	mastery: {
		weapon: 9,
		skill: 19
	},
	savepoint: {
		location: "miner's retreat",
		date: Date()
	}
},
{
	username: "CyberSphinxX21",
	inventory: {
		equipped: {
			weapon: "abyssal cleaver scythe",
			skill: "toxic leap",
			consumable: "ruby red potion",
			head: "The honored one's blindfold",
			torso: "duelist's attire",
			arms: "duelist's gloves",
			legs: "beastmaster's leggings",
			feet: "monk's sandals"
		},
		backpack: [
			['rainbow gemstone', 'harmonic conch shell', 'crystalized essence', 'broken compass', 'balloon animal', 'thunderstruck relic', 'enchanted vellum', 'verdant dreamcatcher', 'rainbow gemstone', 'volcanic emberstone', 'illusory lantern', 'solar flare seed', "stargazer's lens", 'cursed doll', 'frostfire lantern', 'obsidian rune stone', 'emberroot sapling', "writer's notebook", 'elemental shard', 'silver locket', 'ensnaring vine', 'verdant dreamcatcher', 'pyroclasmic ember', 'illusory lantern', 'shimmering scepter', 'emberstone charm', 'frostbound blossom', 'ruby heartstone', 'aetheric beacon', 'elemental shard', 'ruby heartstone', 'ensnaring vine', 'celestial ocarina', 'timeless hourglass', 'ethereal blossom', 'singing seashell', 'puzzle piece', 'echoing chime', 'starforged ingot', 'crystalized aurora', 'gilded compass', 'crimson phoenix plume', 'shimmering scepter', "dreamer's journal", 'shimmering scepter', 'invisible ink pen', "stormbringer's sigil", 'lunar blossom']
		]
	},
	health: 53,
	stamina: 83,
	armor: 138,
	mastery: {
		weapon: 25,
		skill: 10
	},
	savepoint: {
		location: "aurora summit",
		date: Date()
	}
},
{
	username: "MysticMonolithX77",
	inventory: {
		equipped: {
			weapon: "obsidian scythe",
			skill: "electrified arrow",
			consumable: "ironskin elixir",
			head: "knight-commander's helmet",
			torso: "null",
			arms: "sorcerer's gloves",
			legs: "druid's leggings",
			feet: "shadow assassin's boots"
		},
		backpack: [
			['puzzle piece', 'illusory lantern', 'radiant feather', 'silver locket', 'radiant prism', "stargazer's lens", 'astral ribbon', 'fox tail', 'harmony crystal', 'rune of resilience', 'cursed doll', 'serene lotus petal', 'dreamcatcher amulet', 'rune of resilience', 'lunar blossom', 'astral ribbon', 'science fair award', 'invisible ink pen', 'crystalized tears', 'rusty spoon', "stargazer's lens", 'emberstone charm', 'broken compass', 'zephyr gem']
		]
	},
	health: 189,
	stamina: 52,
	armor: 101,
	mastery: {
		weapon: 12,
		skill: 19
	},
	savepoint: {
		location: "oasis outpost",
		date: Date()
	}
},
{
	username: "QuantumQuestX88",
	inventory: {
		equipped: {
			weapon: "crimson shuriken",
			skill: "venomous burst",
			consumable: "speed potion",
			head: "inquisitor's hood",
			torso: "ranger's cloak",
			arms: "wanderer's gloves",
			legs: "elementalist's leggings",
			feet: "elemental sorcerer's shoes"
		},
		backpack: [
			['elemental shard', 'timeless relic', 'soulstone trinket', 'sylphic whisper', 'harmonic conch shell', 'resonating crystal']
		]
	},
	health: 162,
	stamina: 229,
	armor: 115,
	mastery: {
		weapon: 8,
		skill: 16
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "NebulaNexus77",
	inventory: {
		equipped: {
			weapon: "thorned whip",
			skill: "solar flare",
			consumable: "earthroot soup",
			head: "archer's hat",
			torso: "wanderer's coat",
			arms: "ranger's gloves",
			legs: "yggdrasil's leggings",
			feet: "rogue's ankle boots"
		},
		backpack: [
			['radiant prism', 'astral serpent scale', 'prismatic crystal', 'tranquil lotus', 'ethereal mirror', 'crystalized tears', 'half eaten apple', 'enchanted amulet', 'mirror of illusion', 'starlight veil', 'crystalized tears', 'lunar lace', 'mystic orb', 'serenity stone', 'emberstone charm', 'starlight veil', 'bottle of wine', 'camera', 'rainbow gemstone', 'shimmering scepter', 'mirage cloak', 'balloon animal', 'broken compass', 'starlight veil', 'soothing breeze amulet', 'tranquil lotus', 'resonating crystal', 'crystalized tears', 'metal slinky', 'radiant feather', 'luminous pebble', 'metal slinky', 'rusty spoon', 'emberstone charm', 'arcane codex', 'singing seashell', 'enigmatic crest']
		]
	},
	health: 78,
	stamina: 83,
	armor: 127,
	mastery: {
		weapon: 3,
		skill: 10
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "ShadowStrikeX21",
	inventory: {
		equipped: {
			weapon: "mindflayer's mind staff",
			skill: "starfall",
			consumable: "thunderstorm brew",
			head: "berserker's mask",
			torso: "necromancer's cloak",
			arms: "sorcerer's gloves",
			legs: "druid's leggings",
			feet: "monk's sandals"
		},
		backpack: [
			['mirage cloak', 'celestial feather', 'shadow silk scarf', "stormbringer's sigil", 'soothing breeze amulet', 'vortex core', 'enigmatic crest', 'echoing chime', 'science fair award', 'rainbow gemstone', 'harmony crystal', 'frostfire lantern', 'dreamcatcher amulet']
		]
	},
	health: 113,
	stamina: 187,
	armor: 120,
	mastery: {
		weapon: 20,
		skill: 17
	},
	savepoint: {
		location: "inferno citadel",
		date: Date()
	}
},
{
	username: "CyberChampion88",
	inventory: {
		equipped: {
			weapon: "phantom blade",
			skill: "frost nova",
			consumable: "sunfire elixir",
			head: "sellsword's helm",
			torso: "inquisitor's vestment",
			arms: "knight-commander's gauntlets",
			legs: "mystic seer's pants",
			feet: "knight-commander's boots"
		},
		backpack: [
			['celestial lantern', ' rubiks cube', 'dreamcatcher amulet', 'serenity stone', 'volcanic emberstone', 'enigmatic crest', 'vortex core', 'lunar blossom', 'astral lantern', 'sylphic whisper', 'timeless hourglass', "stormbringer's sigil", 'stormwhisper feather', 'verdant blossom', 'soulstone trinket', 'starforged ingot', 'amethyst', 'invisible ink pen', 'cursed doll', 'mystic orb', 'ethereal mirror', 'hand mirror', 'ember veil', 'celestial feather', 'metal slinky', 'soothing breeze amulet', 'frostbound blossom', 'frostfallen relic', 'singing seashell', 'enchanted amulet', 'rune of resilience', 'harmonic conch shell', 'lunar crest', 'ethereal blossom', 'moonlit essence', 'whisperwind elixir', 'aetheric beacon', 'celestial ocarina', 'prismatic crystal', 'shrouded talisman', 'moonlit essence', 'enchanted amulet', 'frostbound blossom', 'rainbow gemstone', 'timeless hourglass', 'soulstone trinket', 'gilded compass']
		]
	},
	health: 245,
	stamina: 165,
	armor: 167,
	mastery: {
		weapon: 2,
		skill: 14
	},
	savepoint: {
		location: "volted citadel",
		date: Date()
	}
},
{
	username: "NovaNinjaX77",
	inventory: {
		equipped: {
			weapon: "galactic wand",
			skill: "galactic storm",
			consumable: "sparkling water",
			head: "inquisitor's hood",
			torso: "knight's plate armor",
			arms: "archer's gloves",
			legs: "duelist's trousers",
			feet: "ranger's boots"
		},
		backpack: [
			['frostfallen relic', "stargazer's lens", 'harmony crystal', 'shadow cloak', 'tranquil lotus', 'harmony crystal', 'arcane rune', 'frostbound blossom', 'fox tail', 'shrouded talisman', 'aetheric beacon', 'baseball cap', 'ethereal blossom', 'celestial ocarina', 'lively coral', 'enigmatic figurine', 'celestial ocarina', 'lunar lace', 'whispering totem', 'silver locket', 'crystalized aurora', 'silver locket', "tiger's eye", 'phoenix feather', 'nebula medallion', 'ethereal blossom', 'timeless hourglass', 'mirror of illusion', 'phoenix feather', 'sacred sigil', 'puzzle piece', 'puzzle piece', 'lively coral', 'prismatic crystal', 'shrouded talisman', 'celestial ocarina', "dreamweaver's quill", "stormbringer's sigil", 'solar flare seed', 'cavernous gemstone']
		]
	},
	health: 132,
	stamina: 132,
	armor: 130,
	mastery: {
		weapon: 17,
		skill: 6
	},
	savepoint: {
		location: "aurora summit",
		date: Date()
	}
},
{
	username: "NeonNexusX21",
	inventory: {
		equipped: {
			weapon: "dark matter scythe",
			skill: "arctic blast",
			consumable: "energy drink",
			head: "duelist's hat",
			torso: "necromancer's cloak",
			arms: "alchemist's gloves",
			legs: "sellsword's legguards",
			feet: "divine paladin's boots"
		},
		backpack: [
			['ensnaring vine', 'aetheric beacon', 'rainbow gemstone', 'ember veil', 'mirage pearl', 'cursed mirror', 'frostblossom seed', 'arcane codex', 'arcane codex', 'lava bloom seed', 'crystalized aurora', 'penumbral pendant', 'enchanted amulet', 'half eaten apple', 'arcane rune', 'starlight veil', 'astral serpent scale', 'cursed doll', 'ruby heartstone', "songbird's feather", 'frostfallen relic', 'nebula medallion', 'phoenix feather', 'aetherial lens', 'obsidian rune stone', 'serenity stone', 'enigmatic figurine', 'serene lotus petal', 'shrouded talisman', 'whispering totem', 'mirage pearl', 'crystalline vessel', 'astral lantern', "stargazer's lens", 'prismatic crystal', 'starlight veil', 'nebula medallion', 'celestial feather', "stormbringer's sigil", 'crystalized tears', 'broken compass']
		]
	},
	health: 167,
	stamina: 62,
	armor: 144,
	mastery: {
		weapon: 15,
		skill: 21
	},
	savepoint: {
		location: "oasis of mirages",
		date: Date()
	}
},
{
	username: "MysticMarauderX88",
	inventory: {
		equipped: {
			weapon: "mindflayer's mind staff",
			skill: "static shock",
			consumable: "berry explosion elixir",
			head: "null",
			torso: "shadow assassin's cloak",
			arms: "inquisitor's cuffs",
			legs: "The honored one's pants",
			feet: "rogue's ankle boots"
		},
		backpack: [
			[' rubiks cube', 'soothing breeze amulet', "tidecaller's shell", 'whisperwind elixir', 'science fair award', 'zephyr gem', 'aetheric beacon', 'whisperwind elixir', 'enigmatic figurine', 'sacred sigil', 'lively coral', "stargazer's lens", 'lava bloom seed', 'celestial feather', 'lively coral', "tidecaller's shell", 'crystalized essence', 'gilded compass', 'labyrinthine key', "tiger's eye", 'serene lotus petal', 'celestial ocarina', 'mysterious music box', 'baseball cap', 'soulstone trinket', 'silver locket', 'labyrinthine key', 'luminous pebble', "stormbringer's sigil", 'whispering totem', 'timeless relic', 'celestial ocarina', 'hand mirror', 'soothing breeze amulet', 'moonlit essence', 'baseball cap', 'soulstone trinket', 'rusty spoon']
		]
	},
	health: 195,
	stamina: 209,
	armor: 104,
	mastery: {
		weapon: 22,
		skill: 17
	},
	savepoint: {
		location: "oasis outpost",
		date: Date()
	}
},
{
	username: "QuantumQuasarMaster",
	inventory: {
		equipped: {
			weapon: "chaos orb wand",
			skill: "lightning nova",
			consumable: "elixir of vitality",
			head: "inquisitor's hood",
			torso: "The honored one's jacket",
			arms: "elemental sorcerer's gloves",
			legs: "mystic seer's pants",
			feet: "mystic seer's shoes"
		},
		backpack: [
			['starforged ingot', 'penumbral pendant', 'astral serpent scale', 'frostblossom seed', 'crystalline vessel', 'ethereal prism', 'frostfallen relic', 'serene lotus petal', 'galeforce whistle', 'arcane rune', "tiger's eye", 'puzzle piece', 'ember veil', 'silver locket', 'puzzle piece', "stargazer's lens", 'lunar blossom', 'amethyst']
		]
	},
	health: 61,
	stamina: 145,
	armor: 151,
	mastery: {
		weapon: 24,
		skill: 25
	},
	savepoint: {
		location: "tempest summit",
		date: Date()
	}
}
])

db.Item.insertMany([
    {
        item_name: "mystic orb",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['soothing breeze amulet', 'lunar crest']
    },

    {
        item_name: "enchanted amulet",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['crystallized essence', "stargazer's lens", 'vortex core', 'crystallized tears']
    },

    {
        item_name: "shadow cloak",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "celestial feather",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "crystalized essence",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ["stormbringer's sigil", 'gilded compass', 'crystallized tears']
    },

    {
        item_name: "arcane rune",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['celestial ocarina', 'dreamcatcher amulet', "stargazer's lens", 'gilded compass']
    },

    {
        item_name: "elemental shard",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['celestial ocarina', 'stormwhisper feather']
    },

    {
        item_name: "ethereal mirror",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "astral lantern",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "luminous pebble",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ["stormbringer's sigil", 'arcane codex', 'echoing chime', 'gilded compass']
    },

    {
        item_name: "dreamweaver's quill",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['echoing chime', 'galeforce whistle', "stargazer's lens"]
    },

    {
        item_name: "timeless hourglass",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['crimson phoenix plume', 'crystallized tears', 'obsidian rune stone']
    },

    {
        item_name: "starlight veil",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "whispering totem",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['dreamcatcher amulet', 'soothing breeze amulet']
    },

    {
        item_name: "emberstone charm",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "lunar crest",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['arcane codex', 'lunar blossom', 'enigmatic figurine', 'vortex core']
    },

    {
        item_name: "frostbound blossom",
        quest_item: false,
        used_in_crafting: true,
        craftable: true,
        recipe: ['thunderstruck relic', 'enigmatic scroll']
    },

    {
        item_name: "gilded compass",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "soulstone trinket",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['obsidian rune stone', 'astral serpent scale', 'astral serpent scale', 'crystallized essence']
    },

    {
        item_name: "thunderstruck relic",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "aetheric beacon",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "eclipsed crystal",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "phoenix feather",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "zephyr gem",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['enigmatic scroll', 'crystallized tears', 'lunar crest']
    },

    {
        item_name: "cursed doll",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['soothing breeze amulet', "stormbringer's sigil"]
    },

    {
        item_name: "shrouded talisman",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "nebula medallion",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "enigmatic scroll",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "radiant prism",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['crystallized essence', 'sacred sigil', 'obsidian rune stone', "stormbringer's sigil"]
    },

    {
        item_name: "ensnaring vine",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "mirage pearl",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "songbird's feather",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['arcane codex', 'stormwhisper feather', 'gilded compass', 'enigmatic scroll']
    },

    {
        item_name: "mirror of illusion",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['galeforce whistle', 'thunderstruck relic', 'vortex core', "dreamweaver's quill"]
    },

    {
        item_name: "verdant blossom",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['gilded compass', 'arcane codex', 'lunar crest']
    },

    {
        item_name: "rune of resilience",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ["stormbringer's sigil", "dreamer's journal", 'sacred sigil']
    },

    {
        item_name: "harmony crystal",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "whisperwind elixir",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "silver locket",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "serenity stone",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['sacred sigil', "stargazer's lens", "stargazer's lens", 'stormwhisper feather']
    },

    {
        item_name: "penumbral pendant",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "dreamcatcher amulet",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['stormwhisper feather', 'crystallized tears']
    },

    {
        item_name: "ruby heartstone",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['astral serpent scale', 'arcane codex', "stargazer's lens", 'vortex core']
    },

    {
        item_name: "lava bloom seed",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "crystalline vessel",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['astral serpent scale', 'sacred sigil', 'soothing breeze amulet', 'dreamcatcher amulet']
    },

    {
        item_name: "galeforce whistle",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "shimmering scepter",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "frostfire lantern",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "arcane codex",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: null
    },

    {
        item_name: "ephemeral feather",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: ['obsidian rune stone', "dreamweaver's quill"]
    },

    {
        item_name: "tidecaller's shell",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "pyroclasmic ember",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "stormbringer's sigil",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "illusory lantern",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: ['galeforce whistle', 'celestial ocarina', "stormbringer's sigil", 'galeforce whistle']
    },

    {
        item_name: "crystalized tears",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "enigmatic crest",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "sacred sigil",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "soothing breeze amulet",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['sylphic whisper', 'crystallized tears']
    },

    {
        item_name: "lively coral",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['enchanted amulet', "stargazer's lens", 'crystallized essence']
    },

    {
        item_name: "ethereal blossom",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: ['arcane codex', 'soothing breeze amulet']
    },

    {
        item_name: "solar flare seed",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "resonating crystal",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: null
    },

    {
        item_name: "cursed mirror",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: ["dreamweaver's quill", 'thunderstruck relic', 'echoing chime']
    },

    {
        item_name: "stargazer's lens",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "volcanic emberstone",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "frostfallen relic",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: ['celestial ocarina', 'stormwhisper feather', 'celestial ocarina', 'soothing breeze amulet']
    },

    {
        item_name: "tranquil lotus",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "vortex core",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: ["dreamer's journal", 'vortex core']
    },

    {
        item_name: "celestial ocarina",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: null
    },

    {
        item_name: "shadow silk scarf",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['lunar blossom', 'dreamcatcher amulet']
    },

    {
        item_name: "stormwhisper feather",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['stormwhisper feather', 'celestial ocarina', 'lunar blossom', "stargazer's lens"]
    },

    {
        item_name: "ember veil",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: ["stargazer's lens", 'enchanted amulet']
    },

    {
        item_name: "astral serpent scale",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "lunar lace",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "crimson phoenix plume",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "sylphic whisper",
        quest_item: true,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "crystalized aurora",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "verdant dreamcatcher",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "prismatic crystal",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['stormwhisper feather', 'soothing breeze amulet', 'whispering totem', 'dreamcatcher amulet']
    },

    {
        item_name: "labyrinthine key",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ["dreamer's journal", 'lunar crest', 'celestial ocarina']
    },

    {
        item_name: "starforged ingot",
        quest_item: false,
        used_in_crafting: true,
        craftable: true,
        recipe: ['sacred sigil', 'vortex core']
    },

    {
        item_name: "harmonic conch shell",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "enchanted vellum",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['echoing chime', 'enchanted amulet', 'astral serpent scale', 'enchanted amulet']
    },

    {
        item_name: "mysterious music box",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['thunderstruck relic', "stormbringer's sigil"]
    },

    {
        item_name: "dreamer's journal",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['echoing chime', 'enchanted amulet', 'gilded compass', 'sacred sigil']
    },

    {
        item_name: "emberroot sapling",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['sylphic whisper', 'astral serpent scale']
    },

    {
        item_name: "moonlit essence",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "cavernous gemstone",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "celestial lantern",
        quest_item: false,
        used_in_crafting: false,
        craftable: true,
        recipe: null
    },

    {
        item_name: "mirage cloak",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "frostblossom seed",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['enchanted amulet', 'gilded compass', "stargazer's lens", "stargazer's lens"]
    },

    {
        item_name: "echoing chime",
        quest_item: true,
        used_in_crafting: true,
        craftable: true,
        recipe: ['arcane codex', 'thunderstruck relic', 'dreamcatcher amulet', "stormbringer's sigil"]
    },

    {
        item_name: "aetherial lens",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['gilded compass', 'arcane codex', 'crystallized tears']
    },

    {
        item_name: "radiant feather",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "obsidian rune stone",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['celestial ocarina', 'gilded compass']
    },

    {
        item_name: "serene lotus petal",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['enigmatic crest', 'radiant prism', 'whispering totem', 'vortex core']
    },

    {
        item_name: "astral ribbon",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['radiant prism', 'crystallized tears', "stargazer's lens"]
    },

    {
        item_name: "ethereal prism",
        quest_item: false,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },

    {
        item_name: "lunar blossom",
        quest_item: true,
        used_in_crafting: true,
        craftable: false,
        recipe: ['sylphic whisper', 'crystallized essence', 'sacred sigil']
    },

    {
        item_name: "enigmatic figurine",
        quest_item: false,
        used_in_crafting: true,
        craftable: false,
        recipe: ['gilded compass', 'enchanted amulet']
    },

    {
        item_name: "timeless relic",
        quest_item: true,
        used_in_crafting: false,
        craftable: false,
        recipe: null
    },
]);

db.Armor.insertMany([
    {
        armor_name: "knight's helmet",
        resistance: 30,
        bodypart: "head",
        level: 4
    },

    {
        armor_name: "knight's plate armor",
        resistance: 40,
        bodypart: "torso",
        level: 3
    },

    {
        armor_name: "knight's gauntlets",
        resistance: 15,
        bodypart: "arms",
        level: 4
    },

    {
        armor_name: "knight's greaves",
        resistance: 20,
        bodypart: "legs",
        level: 3
    },

    {
        armor_name: "knight's boots",
        resistance: 12,
        bodypart: "feet",
        level: 3
    },

    {
        armor_name: "mage's hat",
        resistance: 20,
        bodypart: "head",
        level: 2
    },

    {
        armor_name: "mage's robe",
        resistance: 25,
        bodypart: "torso",
        level: 1
    },

    {
        armor_name: "mage's gloves",
        resistance: 8,
        bodypart: "arms",
        level: 2
    },

    {
        armor_name: "mage's leggings",
        resistance: 12,
        bodypart: "legs",
        level: 1
    },

    {
        armor_name: "mage's shoes",
        resistance: 6,
        bodypart: "feet",
        level: 1
    },

    {
        armor_name: "ranger's hood",
        resistance: 22,
        bodypart: "head",
        level: 3
    },

    {
        armor_name: "ranger's cloak",
        resistance: 28,
        bodypart: "torso",
        level: 2
    },

    {
        armor_name: "ranger's gloves",
        resistance: 12,
        bodypart: "arms",
        level: 3
    },

    {
        armor_name: "ranger's pants",
        resistance: 18,
        bodypart: "legs",
        level: 2
    },

    {
        armor_name: "ranger's boots",
        resistance: 10,
        bodypart: "feet",
        level: 2
    },    
    {
        armor_name: "warrior's helm",
        resistance: 35,
        bodypart: "head",
        level: 5
    },
    {
        armor_name: "warrior's chestplate",
        resistance: 45,
        bodypart: "torso",
        level: 4
    },
    {
        armor_name: "warrior's bracers",
        resistance: 20,
        bodypart: "arms",
        level: 5
    },
    {
        armor_name: "warrior's legplates",
        resistance: 25,
        bodypart: "legs",
        level: 4
    },
    {
        armor_name: "warrior's boots",
        resistance: 15,
        bodypart: "feet",
        level: 4
    },
    {
        armor_name: "sorcerer's hat",
        resistance: 25,
        bodypart: "head",
        level: 3
    },
    {
        armor_name: "sorcerer's robe",
        resistance: 30,
        bodypart: "torso",
        level: 2
    },
    {
        armor_name: "sorcerer's gloves",
        resistance: 12,
        bodypart: "arms",
        level: 3
    },
    {
        armor_name: "sorcerer's pants",
        resistance: 15,
        bodypart: "legs",
        level: 2
    },
    {
        armor_name: "sorcerer's shoes",
        resistance: 8,
        bodypart: "feet",
        level: 2
    },
    {
        armor_name: "paladin's helm",
        resistance: 40,
        bodypart: "head",
        level: 5
    },
    {
        armor_name: "paladin's chestplate",
        resistance: 50,
        bodypart: "torso",
        level: 4
    },
    {
        armor_name: "paladin's gauntlets",
        resistance: 18,
        bodypart: "arms",
        level: 5
    },
    {
        armor_name: "paladin's greaves",
        resistance: 30,
        bodypart: "legs",
        level: 4
    },
    {
        armor_name: "paladin's boots",
        resistance: 20,
        bodypart: "feet",
        level: 4
    },
    {
        armor_name: "rogue's mask",
        resistance: 28,
        bodypart: "head",
        level: 4
    },
    {
        armor_name: "rogue's leather vest",
        resistance: 35,
        bodypart: "torso",
        level: 3
    },
    {
        armor_name: "rogue's fingerless gloves",
        resistance: 14,
        bodypart: "arms",
        level: 4
    },
    {
        armor_name: "rogue's trousers",
        resistance: 20,
        bodypart: "legs",
        level: 3
    },
    {
        armor_name: "rogue's ankle boots",
        resistance: 12,
        bodypart: "feet",
        level: 3
    },
{
    armor_name: "berserker's mask",
    resistance: 30,
    bodypart: "head",
    level: 4
},
{
    armor_name: "berserker's chestguard",
    resistance: 38,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "berserker's wristguards",
    resistance: 16,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "berserker's legguards",
    resistance: 22,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "berserker's boots",
    resistance: 18,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "elementalist's crown",
    resistance: 25,
    bodypart: "head",
    level: 4
},
{
    armor_name: "elementalist's robe",
    resistance: 32,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "elementalist's cuffs",
    resistance: 14,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "elementalist's leggings",
    resistance: 20,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "elementalist's sandals",
    resistance: 15,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "duelist's hat",
    resistance: 28,
    bodypart: "head",
    level: 4
},
{
    armor_name: "duelist's attire",
    resistance: 36,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "duelist's gloves",
    resistance: 16,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "duelist's trousers",
    resistance: 24,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "duelist's shoes",
    resistance: 16,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "necromancer's hood",
    resistance: 26,
    bodypart: "head",
    level: 4
},
{
    armor_name: "necromancer's cloak",
    resistance: 34,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "necromancer's gloves",
    resistance: 15,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "necromancer's pants",
    resistance: 22,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "necromancer's boots",
    resistance: 14,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "beastmaster's helm",
    resistance: 32,
    bodypart: "head",
    level: 4
},
{
    armor_name: "beastmaster's chestplate",
    resistance: 42,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "beastmaster's gauntlets",
    resistance: 18,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "beastmaster's leggings",
    resistance: 26,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "beastmaster's boots",
    resistance: 17,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "wanderer's hat",
    resistance: 24,
    bodypart: "head",
    level: 4
},
{
    armor_name: "wanderer's coat",
    resistance: 30,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "wanderer's gloves",
    resistance: 14,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "wanderer's pants",
    resistance: 21,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "wanderer's boots",
    resistance: 13,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "inquisitor's hood",
    resistance: 38,
    bodypart: "head",
    level: 5
},
{
    armor_name: "inquisitor's vestment",
    resistance: 48,
    bodypart: "torso",
    level: 4
},
{
    armor_name: "inquisitor's cuffs",
    resistance: 22,
    bodypart: "arms",
    level: 5
},
{
    armor_name: "inquisitor's leggings",
    resistance: 28,
    bodypart: "legs",
    level: 4
},
{
    armor_name: "inquisitor's boots",
    resistance: 20,
    bodypart: "feet",
    level: 4
},
{
    armor_name: "archer's hat",
    resistance: 30,
    bodypart: "head",
    level: 4
},
{
    armor_name: "archer's tunic",
    resistance: 38,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "archer's gloves",
    resistance: 18,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "archer's pants",
    resistance: 26,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "archer's boots",
    resistance: 16,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "alchemist's hood",
    resistance: 32,
    bodypart: "head",
    level: 4
},
{
    armor_name: "alchemist's robe",
    resistance: 42,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "alchemist's gloves",
    resistance: 20,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "alchemist's leggings",
    resistance: 30,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "alchemist's shoes",
    resistance: 18,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "druid's crown",
    resistance: 28,
    bodypart: "head",
    level: 4
},
{
    armor_name: "druid's robe",
    resistance: 36,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "druid's bracers",
    resistance: 16,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "druid's leggings",
    resistance: 24,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "druid's sandals",
    resistance: 14,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "sellsword's helm",
    resistance: 34,
    bodypart: "head",
    level: 4
},
{
    armor_name: "sellsword's chestguard",
    resistance: 44,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "sellsword's gauntlets",
    resistance: 20,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "sellsword's legguards",
    resistance: 32,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "sellsword's boots",
    resistance: 22,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "monk's hood",
    resistance: 26,
    bodypart: "head",
    level: 4
},
{
    armor_name: "monk's robe",
    resistance: 32,
    bodypart: "torso",
    level: 3
},
{
    armor_name: "monk's gloves",
    resistance: 18,
    bodypart: "arms",
    level: 4
},
{
    armor_name: "monk's pants",
    resistance: 28,
    bodypart: "legs",
    level: 3
},
{
    armor_name: "monk's sandals",
    resistance: 20,
    bodypart: "feet",
    level: 3
},
{
    armor_name: "knight-commander's helmet",
    resistance: 45,
    bodypart: "head",
    level: 6
},
{
    armor_name: "knight-commander's plate",
    resistance: 55,
    bodypart: "torso",
    level: 5
},
{
    armor_name: "knight-commander's gauntlets",
    resistance: 25,
    bodypart: "arms",
    level: 6
},
{
    armor_name: "knight-commander's greaves",
    resistance: 35,
    bodypart: "legs",
    level: 5
},
{
    armor_name: "knight-commander's boots",
    resistance: 25,
    bodypart: "feet",
    level: 5
},
{
    armor_name: "elemental sorcerer's hat",
    resistance: 35,
    bodypart: "head",
    level: 5
},
{
    armor_name: "elemental sorcerer's robe",
    resistance: 40,
    bodypart: "torso",
    level: 4
},
{
    armor_name: "elemental sorcerer's gloves",
    resistance: 18,
    bodypart: "arms",
    level: 5
},
{
    armor_name: "elemental sorcerer's pants",
    resistance: 25,
    bodypart: "legs",
    level: 4
},
{
    armor_name: "elemental sorcerer's shoes",
    resistance: 15,
    bodypart: "feet",
    level: 4
},
{
    armor_name: "divine paladin's helm",
    resistance: 50,
    bodypart: "head",
    level: 6
},
{
    armor_name: "divine paladin's chestplate",
    resistance: 60,
    bodypart: "torso",
    level: 5
},
{
    armor_name: "divine paladin's gauntlets",
    resistance: 30,
    bodypart: "arms",
    level: 6
},
{
    armor_name: "divine paladin's greaves",
    resistance: 40,
    bodypart: "legs",
    level: 5
},
{
    armor_name: "divine paladin's boots",
    resistance: 30,
    bodypart: "feet",
    level: 5
},
{
    armor_name: "shadow assassin's mask",
    resistance: 40,
    bodypart: "head",
    level: 5
},
{
    armor_name: "shadow assassin's cloak",
    resistance: 45,
    bodypart: "torso",
    level: 4
},
{
    armor_name: "shadow assassin's gloves",
    resistance: 20,
    bodypart: "arms",
    level: 5
},
{
    armor_name: "shadow assassin's pants",
    resistance: 30,
    bodypart: "legs",
    level: 4
},
{
    armor_name: "shadow assassin's boots",
    resistance: 20,
    bodypart: "feet",
    level: 4
},
{
    armor_name: "mystic seer's hood",
    resistance: 40,
    bodypart: "head",
    level: 5
},
{
    armor_name: "mystic seer's robe",
    resistance: 50,
    bodypart: "torso",
    level: 4
},
{
    armor_name: "mystic seer's gloves",
    resistance: 25,
    bodypart: "arms",
    level: 5
},
{
    armor_name: "mystic seer's pants",
    resistance: 35,
    bodypart: "legs",
    level: 4
},
{
    armor_name: "mystic seer's shoes",
    resistance: 25,
    bodypart: "feet",
    level: 4
},
{
    armor_name: "ancient guardian's helm",
    resistance: 55,
    bodypart: "head",
    level: 6
},
{
    armor_name: "ancient guardian's armor",
    resistance: 65,
    bodypart: "torso",
    level: 5
},
{
    armor_name: "ancient guardian's gauntlets",
    resistance: 35,
    bodypart: "arms",
    level: 6
},
{
    armor_name: "ancient guardian's greaves",
    resistance: 45,
    bodypart: "legs",
    level: 5
},
{
    armor_name: "ancient guardian's boots",
    resistance: 35,
    bodypart: "feet",
    level: 5
}
    
]);

db.Consumable.insertMany([
        {
            consumable_name: "elixir of vitality",
            type: "regeneration",
            level: 8
        },
        {
            consumable_name: "mana potion",
            type: "regeneration",
            level: 5
        },
        {
            consumable_name: "strength potion",
            type: "stat up",
            level: 12
        },
        {
            consumable_name: "energy bar",
            type: "regeneration",
            level: 4
        },
        {
            consumable_name: "fruit smoothie",
            type: "regeneration",
            level: 6
        },
        {
            consumable_name: "fire resistance potion",
            type: "resistance",
            level: 10
        },
        {
            consumable_name: "wisdom elixir",
            type: "stat up",
            level: 9
        },
        {
            consumable_name: "chocolate cake",
            type: "regeneration",
            level: 18
        },
        {
            consumable_name: "revitalizing tea",
            type: "regeneration",
            level: 5
        },
        {
            consumable_name: "invisibility cloak",
            type: "tactical",
            level: 12
        },
        {
            consumable_name: "agility potion",
            type: "stat up",
            level: 15
        },
        {
            consumable_name: "mind-boosting potion",
            type: "stat up",
            level: 8
        },
        {
            consumable_name: "grilled fish",
            type: "regeneration",
            level: 14
        },
        {
            consumable_name: "thunderberry pie",
            type: "regeneration",
            level: 9
        },
        {
            consumable_name: "mango sorbet",
            type: "regeneration",
            level: 7
        },
        {
            consumable_name: "teleportation potion",
            type: "tactical",
            level: 20
        },
        {
            consumable_name: "ironskin elixir",
            type: "resistance",
            level: 12
        },
        {
            consumable_name: "luck potion",
            type: "stat up",
            level: 10
        },
        {
            consumable_name: "spicy curry",
            type: "regeneration",
            level: 16
        },
        {
            consumable_name: "moonlight dew",
            type: "regeneration",
            level: 13
        },
        {
            consumable_name: "stealthy shroom soup",
            type: "tactical",
            level: 15
        },
        {
            consumable_name: "honeyed nectar",
            type: "regeneration",
            level: 11
        },
        {
            consumable_name: "dragon's breath potion",
            type: "resistance",
            level: 25
        },
        {
            consumable_name: "sparkling cider",
            type: "regeneration",
            level: 6
        },
        {
            consumable_name: "bison steak",
            type: "regeneration",
            level: 22
        },
        {
            consumable_name: "ether infusion",
            type: "regeneration",
            level: 18
        },
        {
            consumable_name: "berry explosion elixir",
            type: "regeneration",
            level: 14
        },
        {
            consumable_name: "phoenix feather potion",
            type: "resurrection",
            level: 30
        },
        {
            consumable_name: "golden truffle risotto",
            type: "regeneration",
            level: 28
        },
{
    consumable_name: "sparkling water",
    type: "regeneration",
    level: 2
},
{
    consumable_name: "wisdom potion",
    type: "stat up",
    level: 6
},
{
    consumable_name: "energy drink",
    type: "regeneration",
    level: 3
},
{
    consumable_name: "iron brew",
    type: "resistance",
    level: 8
},
{
    consumable_name: "sweet pastry",
    type: "regeneration",
    level: 5
},
{
    consumable_name: "fireball elixir",
    type: "tactical",
    level: 15
},
{
    consumable_name: "cinnamon roll",
    type: "regeneration",
    level: 10
},
{
    consumable_name: "shadow essence",
    type: "tactical",
    level: 18
},
{
    consumable_name: "dreamer's tea",
    type: "regeneration",
    level: 7
},
{
    consumable_name: "earthroot soup",
    type: "regeneration",
    level: 12
},
{
    consumable_name: "mind elixir",
    type: "stat up",
    level: 11
},
{
    consumable_name: "holy water",
    type: "regeneration",
    level: 4
},
{
    consumable_name: "venomous brew",
    type: "resistance",
    level: 14
},
{
    consumable_name: "frostbite potion",
    type: "resistance",
    level: 20
},
{
    consumable_name: "blueberry muffin",
    type: "regeneration",
    level: 9
},
{
    consumable_name: "celestial nectar",
    type: "regeneration",
    level: 25
},
{
    consumable_name: "dexterity potion",
    type: "stat up",
    level: 13
},
{
    consumable_name: "cheese platter",
    type: "regeneration",
    level: 16
},
{
    consumable_name: "nightshade elixir",
    type: "tactical",
    level: 22
},
{
    consumable_name: "melon sorbet",
    type: "regeneration",
    level: 8
},
{
    consumable_name: "angel's grace potion",
    type: "resurrection",
    level: 30
},
{
    consumable_name: "thunderstorm brew",
    type: "resistance",
    level: 28
},
{
    consumable_name: "sunflower tea",
    type: "regeneration",
    level: 6
},
{
    consumable_name: "venus flytrap salad",
    type: "regeneration",
    level: 17
},
{
    consumable_name: "mystic infusion",
    type: "regeneration",
    level: 19
},
{
    consumable_name: "ghost pepper potion",
    type: "resistance",
    level: 23
},
{
    consumable_name: "golden honeycomb",
    type: "regeneration",
    level: 21
},
{
    consumable_name: "dragonfruit elixir",
    type: "regeneration",
    level: 24
},
{
    consumable_name: "shadowmeld tea",
    type: "tactical",
    level: 26
},
{
    consumable_name: "moonlight potion",
    type: "regeneration",
    level: 11
},
{
    consumable_name: "quicksilver elixir",
    type: "stat up",
    level: 14
},
{
    consumable_name: "lunar nectar",
    type: "regeneration",
    level: 9
},
{
    consumable_name: "amber ale",
    type: "regeneration",
    level: 7
},
{
    consumable_name: "soulstone soup",
    type: "resurrection",
    level: 35
},
{
    consumable_name: "volcano chili",
    type: "regeneration",
    level: 18
},
{
    consumable_name: "starlight essence",
    type: "tactical",
    level: 28
},
{
    consumable_name: "mystic muffin",
    type: "regeneration",
    level: 16
},
{
    consumable_name: "echoing elixir",
    type: "stat up",
    level: 22
},
{
    consumable_name: "serpent scale potion",
    type: "resistance",
    level: 30
},
{
    consumable_name: "essence of time",
    type: "regeneration",
    level: 25
},
{
    consumable_name: "blizzard brew",
    type: "resistance",
    level: 26
},
{
    consumable_name: "sunfire elixir",
    type: "regeneration",
    level: 23
},
{
    consumable_name: "celestial tea",
    type: "regeneration",
    level: 20
},
{
    consumable_name: "void essence",
    type: "tactical",
    level: 33
},
{
    consumable_name: "ruby red potion",
    type: "regeneration",
    level: 13
},
{
    consumable_name: "eternal soup",
    type: "regeneration",
    level: 40
},
{
    consumable_name: "twilight infusion",
    type: "tactical",
    level: 31
},
{
    consumable_name: "stellar sorbet",
    type: "regeneration",
    level: 17
},
{
    consumable_name: "frostbite tea",
    type: "regeneration",
    level: 29
},
{
    consumable_name: "crimson elixir",
    type: "stat up",
    level: 19
},
{
    consumable_name: "enigmatic brew",
    type: "tactical",
    level: 37
},
{
    consumable_name: "oracle's gaze potion",
    type: "regeneration",
    level: 27
},
{
    consumable_name: "dragon's blood elixir",
    type: "resistance",
    level: 45
},
{
    consumable_name: "mystical pastry",
    type: "regeneration",
    level: 21
},
{
    consumable_name: "banshee's wail soup",
    type: "tactical",
    level: 32
},
{
    consumable_name: "heavenly honey",
    type: "regeneration",
    level: 24
},
{
    consumable_name: "ancient elixir",
    type: "stat up",
    level: 38
},
{
    consumable_name: "voidfire potion",
    type: "resistance",
    level: 42
},
{
    consumable_name: "arcane apple pie",
    type: "regeneration",
    level: 34
},
{
    consumable_name: "shadowsilk tea",
    type: "tactical",
    level: 36
},
{
    consumable_name: "luminous nectar",
    type: "regeneration",
    level: 15
},
{
    consumable_name: "fury infusion",
    type: "stat up",
    level: 43
},
{
    consumable_name: "phantom pepper elixir",
    type: "resistance",
    level: 39
},
{
    consumable_name: "crystalized tea",
    type: "regeneration",
    level: 14
},
{
    consumable_name: "whispers in the wind potion",
    type: "tactical",
    level: 41
},
{
    consumable_name: "astral ambrosia",
    type: "regeneration",
    level: 44
},
{
    consumable_name: "radiant elixir",
    type: "stat up",
    level: 50
},
{
    consumable_name: "obsidian brew",
    type: "resistance",
    level: 48
},
{
    consumable_name: "ethereal soup",
    type: "regeneration",
    level: 46
},
{
    consumable_name: "cosmic cake",
    type: "regeneration",
    level: 49
},
{
    consumable_name: "hallowed honey",
    type: "regeneration",
    level: 47
},
{
    consumable_name: "shadowstrike tea",
    type: "tactical",
    level: 55
},
{
    consumable_name: "timeless elixir",
    type: "regeneration",
    level: 52
},
{
    consumable_name: "voidwalker potion",
    type: "resistance",
    level: 60
},
{
    consumable_name: "celestial cheesecake",
    type: "regeneration",
    level: 58
}
]);
db.Map_Location.insertMany([
    {
        location_name: "whispering meadows",
        region: "tranquil plains",
        has_savepoint: false
    },
    {
        location_name: "serenity lake",
        region: "tranquil plains",
        has_savepoint: false
    },
    {
        location_name: "blossom valley",
        region: "tranquil plains",
        has_savepoint: true
    },
    {
        location_name: "sunset dunes",
        region: "desert oasis",
        has_savepoint: false
    },
    {
        location_name: "mirage canyon",
        region: "desert oasis",
        has_savepoint: false
    },
    {
        location_name: "oasis outpost",
        region: "desert oasis",
        has_savepoint: true
    },
    {
        location_name: "whisperwind isle",
        region: "enchanted archipelago",
        has_savepoint: false
    },
    {
        location_name: "mystic lagoon",
        region: "enchanted archipelago",
        has_savepoint: false
    },
    {
        location_name: "feywood forest",
        region: "enchanted archipelago",
        has_savepoint: true
    },
    {
        location_name: "crimson peak",
        region: "fiery mountains",
        has_savepoint: false
    },
    {
        location_name: "molten caverns",
        region: "fiery mountains",
        has_savepoint: false
    },
    {
        location_name: "ember summit",
        region: "fiery mountains",
        has_savepoint: true
    },
    {
        location_name: "shadow alley",
        region: "darkened city",
        has_savepoint: false
    },
    {
        location_name: "haunted mansion",
        region: "darkened city",
        has_savepoint: false
    },
    {
        location_name: "cursed cathedral",
        region: "darkened city",
        has_savepoint: true
    },
    {
        location_name: "frozen fjords",
        region: "icy expanse",
        has_savepoint: false
    },
    {
        location_name: "polar caves",
        region: "icy expanse",
        has_savepoint: false
    },
    {
        location_name: "glacial sanctuary",
        region: "icy expanse",
        has_savepoint: true
    },
    {
        location_name: "whirlwind plains",
        region: "windy prairies",
        has_savepoint: false
    },
    {
        location_name: "gustswept mesa",
        region: "windy prairies",
        has_savepoint: false
    },
    {
        location_name: "tempest summit",
        region: "windy prairies",
        has_savepoint: true
    },
    {
        location_name: "sapphire city",
        region: "azure metropolis",
        has_savepoint: false
    },
    {
        location_name: "cobalt district",
        region: "azure metropolis",
        has_savepoint: false
    },
    {
        location_name: "crystal spire",
        region: "azure metropolis",
        has_savepoint: true
    },
    {
        location_name: "astral gardens",
        region: "celestial realm",
        has_savepoint: false
    },
    {
        location_name: "ethereal observatory",
        region: "celestial realm",
        has_savepoint: false
    },
    {
        location_name: "divine citadel",
        region: "celestial realm",
        has_savepoint: true
    },
    {
        location_name: "thundering steppes",
        region: "stormy plateaus",
        has_savepoint: false
    },
    {
        location_name: "lightning gorge",
        region: "stormy plateaus",
        has_savepoint: false
    },
    {
        location_name: "stormwatch tower",
        region: "stormy plateaus",
        has_savepoint: true
    },
{
    location_name: "misty marshlands",
    region: "swampy terrain",
    has_savepoint: false
},
{
    location_name: "quicksand quagmire",
    region: "swampy terrain",
    has_savepoint: false
},
{
    location_name: "boggy haven",
    region: "swampy terrain",
    has_savepoint: true
},
{
    location_name: "crimson canopy",
    region: "bloodwood forest",
    has_savepoint: false
},
{
    location_name: "vampire's lair",
    region: "bloodwood forest",
    has_savepoint: false
},
{
    location_name: "haunted thicket",
    region: "bloodwood forest",
    has_savepoint: true
},
{
    location_name: "echoing chasm",
    region: "cavernous depths",
    has_savepoint: false
},
{
    location_name: "abyssal abyss",
    region: "cavernous depths",
    has_savepoint: false
},
{
    location_name: "subterranean citadel",
    region: "cavernous depths",
    has_savepoint: true
},
{
    location_name: "emerald isles",
    region: "mystical archipelago",
    has_savepoint: false
},
{
    location_name: "sapphire shores",
    region: "mystical archipelago",
    has_savepoint: false
},
{
    location_name: "amethyst atoll",
    region: "mystical archipelago",
    has_savepoint: true
},
{
    location_name: "runic plateau",
    region: "ancient highlands",
    has_savepoint: false
},
{
    location_name: "forgotten spires",
    region: "ancient highlands",
    has_savepoint: false
},
{
    location_name: "time-worn sanctuary",
    region: "ancient highlands",
    has_savepoint: true
},
{
    location_name: "nebula narrows",
    region: "astral rift",
    has_savepoint: false
},
{
    location_name: "cosmic crossroads",
    region: "astral rift",
    has_savepoint: false
},
{
    location_name: "celestial junction",
    region: "astral rift",
    has_savepoint: true
},
{
    location_name: "shattered spire",
    region: "ruined citadel",
    has_savepoint: false
},
{
    location_name: "crumbling coliseum",
    region: "ruined citadel",
    has_savepoint: false
},
{
    location_name: "desolate plaza",
    region: "ruined citadel",
    has_savepoint: true
},
{
    location_name: "silver strand",
    region: "moonlit beach",
    has_savepoint: false
},
{
    location_name: "pearlescent cove",
    region: "moonlit beach",
    has_savepoint: false
},
{
    location_name: "lunar sanctuary",
    region: "moonlit beach",
    has_savepoint: true
},
{
    location_name: "thistlewood glade",
    region: "enchanted forest",
    has_savepoint: false
},
{
    location_name: "moonshadow dell",
    region: "enchanted forest",
    has_savepoint: false
},
{
    location_name: "stardust grove",
    region: "enchanted forest",
    has_savepoint: true
},
{
    location_name: "frostfire fjord",
    region: "frozen bay",
    has_savepoint: false
},
{
    location_name: "penguin's retreat",
    region: "frozen bay",
    has_savepoint: false
},
{
    location_name: "aurora summit",
    region: "frozen bay",
    has_savepoint: true
},
{
    location_name: "azure abyss",
    region: "deep sea",
    has_savepoint: false
},
{
    location_name: "coral kingdom",
    region: "deep sea",
    has_savepoint: false
},
{
    location_name: "abyssal palace",
    region: "deep sea",
    has_savepoint: true
},
{
    location_name: "blazing badlands",
    region: "scorching desert",
    has_savepoint: false
},
{
    location_name: "sandstorm sanctuary",
    region: "scorching desert",
    has_savepoint: false
},
{
    location_name: "oasis of mirages",
    region: "scorching desert",
    has_savepoint: true
},
{
    location_name: "jade jungle",
    region: "lush wilderness",
    has_savepoint: false
},
{
    location_name: "bamboo canopy",
    region: "lush wilderness",
    has_savepoint: false
},
{
    location_name: "ancient tree grove",
    region: "lush wilderness",
    has_savepoint: true
},
{
    location_name: "crimson canyon",
    region: "fiery gorge",
    has_savepoint: false
},
{
    location_name: "lava labyrinth",
    region: "fiery gorge",
    has_savepoint: false
},
{
    location_name: "inferno citadel",
    region: "fiery gorge",
    has_savepoint: true
},
{
    location_name: "whispering dunes",
    region: "silent desert",
    has_savepoint: false
},
{
    location_name: "duststorm outpost",
    region: "silent desert",
    has_savepoint: false
},
{
    location_name: "oasis of echoes",
    region: "silent desert",
    has_savepoint: true
},
{
    location_name: "obsidian coast",
    region: "darkened shores",
    has_savepoint: false
},
{
    location_name: "ghostly shipwreck",
    region: "darkened shores",
    has_savepoint: false
},
{
    location_name: "haunted harbor",
    region: "darkened shores",
    has_savepoint: true
},
{
    location_name: "ethereal grove",
    region: "whispering woods",
    has_savepoint: false
},
{
    location_name: "spiritwood sanctuary",
    region: "whispering woods",
    has_savepoint: false
},
{
    location_name: "mystic glade",
    region: "whispering woods",
    has_savepoint: true
},
{
    location_name: "frostbitten fjord",
    region: "icy bay",
    has_savepoint: false
},
{
    location_name: "icicle caverns",
    region: "icy bay",
    has_savepoint: false
},
{
    location_name: "frozen fortress",
    region: "icy bay",
    has_savepoint: true
},
{
    location_name: "thunderpeak summit",
    region: "electric peaks",
    has_savepoint: false
},
{
    location_name: "shockwave canyon",
    region: "electric peaks",
    has_savepoint: false
},
{
    location_name: "volted citadel",
    region: "electric peaks",
    has_savepoint: true
},
{
    location_name: "violet vale",
    region: "enchanted meadow",
    has_savepoint: false
},
{
    location_name: "lavender labyrinth",
    region: "enchanted meadow",
    has_savepoint: false
},
{
    location_name: "amethyst haven",
    region: "enchanted meadow",
    has_savepoint: true
}
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
        mission_name: "Forgotten Relic",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Mystic Messenger",
        prerequisite_mission: "Ephemeral Enigma",
        main_mission: false
    },
    {
        mission_name: "Lost Memories",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Whispers of the Past",
        prerequisite_mission: "Crimson Comet",
        main_mission: false
    },
    {
        mission_name: "Veil of Shadows",
        prerequisite_mission: "Shattered Horizons",
        main_mission: false
    },
    {
        mission_name: "Fading Constellations",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Echoes of Betrayal",
        prerequisite_mission: "Ephemeral Enigma",
        main_mission: false
    },
    {
        mission_name: "Spectral Guardians",
        prerequisite_mission: "Celestial Serenity",
        main_mission: false
    },
    {
        mission_name: "Enigmatic Engravings",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Cursed Scepter",
        prerequisite_mission: "Forsaken Temple",
        main_mission: false
    },
    {
        mission_name: "Echoing Whispers",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Stolen Celestial Map",
        prerequisite_mission: "Abyssal Anomaly",
        main_mission: false
    },
    {
        mission_name: "Lunar Luminescence",
        prerequisite_mission: "Eclipsed Memories",
        main_mission: false
    },
    {
        mission_name: "Astral Anomalies",
        prerequisite_mission: "Celestial Convergence",
        main_mission: false
    },
    {
        mission_name: "Forsaken Temple",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Phantom Echo",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Shattered Constellation",
        prerequisite_mission: "Abyssal Ascendance",
        main_mission: false
    },
    {
        mission_name: "Ephemeral Elixir",
        prerequisite_mission: "Celestial Convergence",
        main_mission: false
    },
    {
        mission_name: "Crescent Moon Reflection",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Arcane Artifacts",
        prerequisite_mission: "Twilight's Reckoning",
        main_mission: false
    },
    {
        mission_name: "Labyrinth of Shadows",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Fading Starlight",
        prerequisite_mission: "Lunar Luminescence",
        main_mission: false
    },
    {
        mission_name: "Eclipsed Memories",
        prerequisite_mission: "Shattered Heavens",
        main_mission: false
    },
    {
        mission_name: "Stardust Alchemy",
        prerequisite_mission: "The Luminous Forge",
        main_mission: false
    },
    {
        mission_name: "Celestial Puzzle",
        prerequisite_mission: "Celestial Convergence",
        main_mission: false
    },
    {
        mission_name: "Lunar Guardians",
        prerequisite_mission: "Shadow Infiltration",
        main_mission: false
    },
    {
        mission_name: "Abyssal Anomaly",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Cursed Cosmos",
        prerequisite_mission: "Celestial Serenity",
        main_mission: false
    },
    {
        mission_name: "Ephemeral Essence",
        prerequisite_mission: "Redemption's Price",
        main_mission: false
    },
    {
        mission_name: "Celestial Fauna",
        prerequisite_mission: "Lunar Labyrinth",
        main_mission: false
    },
    {
        mission_name: "Spectral Symphony",
        prerequisite_mission: "Abyssal Anomaly",
        main_mission: false
    },
    {
        mission_name: "Starlight Sanctuary",
        prerequisite_mission: "Redemption's Price",
        main_mission: false
    },
    {
        mission_name: "Ghostly Gaze",
        prerequisite_mission: "Shattered Horizons",
        main_mission: false
    },
    {
        mission_name: "Astral Ascendance",
        prerequisite_mission: "Celestial Convergence",
        main_mission: false
    },
    {
        mission_name: "Eclipsed Echoes",
        prerequisite_mission: "Eternal Guardian",
        main_mission: false
    },
    {
        mission_name: "Celestial Sands",
        prerequisite_mission: "Shattered Heavens",
        main_mission: false
    },
    {
        mission_name: "Whispers of Twilight",
        prerequisite_mission: "Dark Minions",
        main_mission: false
    },
    {
        mission_name: "Stellar Secrets",
        prerequisite_mission: "Celestial Puzzle",
        main_mission: false
    },
    {
        mission_name: "Shattered Horizons",
        prerequisite_mission: "Celestial Convergence",
        main_mission: false
    },
    {
        mission_name: "Crimson Comet",
        prerequisite_mission: "Ephemeral Enigma",
        main_mission: false
    },
    {
        mission_name: "Lunar Labyrinth",
        prerequisite_mission: null,
        main_mission: false
    },
    {
        mission_name: "Ephemeral Enigma",
        prerequisite_mission: "Shattered Horizons",
        main_mission: false
    },
    {
        mission_name: "Starlit Serenade",
        prerequisite_mission: "Redemption's Price",
        main_mission: false
    },
    {
        mission_name: "Abyssal Ascendance",
        prerequisite_mission: "The Final Vision",
        main_mission: false
    },
{
    mission_name: "Cursed Comet",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Ethereal Echo",
    prerequisite_mission: "Stellar Secrets",
    main_mission: false
},
{
    mission_name: "Lunar Legacy",
    prerequisite_mission: "Lunar Labyrinth",
    main_mission: false
},
{
    mission_name: "Spectral Sanctuary",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Abyssal Archives",
    prerequisite_mission: "Eclipsed Memories",
    main_mission: false
},
{
    mission_name: "Celestial Catalyst",
    prerequisite_mission: "Abyssal Anomaly",
    main_mission: false
},
{
    mission_name: "Twilight Tempest",
    prerequisite_mission: "Shattered Heavens",
    main_mission: false
},
{
    mission_name: "Harmonic Hues",
    prerequisite_mission: "Celestial Puzzle",
    main_mission: false
},
{
    mission_name: "Ephemeral Embrace",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Astral Aegis",
    prerequisite_mission: "Eclipsed Echoes",
    main_mission: false
},
{
    mission_name: "Celestial Canvas",
    prerequisite_mission: "Stellar Secrets",
    main_mission: false
},
{
    mission_name: "Lunar Luminary",
    prerequisite_mission: "Abyssal Ascendance",
    main_mission: false
},
{
    mission_name: "Crimson Cascade",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Eternal Eclipse",
    prerequisite_mission: "Ephemeral Enigma",
    main_mission: false
},
{
    mission_name: "Stellar Synthesis",
    prerequisite_mission: "Abyssal Anomaly",
    main_mission: false
},
{
    mission_name: "Spectral Synapse",
    prerequisite_mission: "Shattered Horizons",
    main_mission: false
},
{
    mission_name: "Astral Alchemy",
    prerequisite_mission: "Celestial Convergence",
    main_mission: false
},
{
    mission_name: "Eclipsed Equinox",
    prerequisite_mission: "Lunar Labyrinth",
    main_mission: false
},
{
    mission_name: "Celestial Coven",
    prerequisite_mission: "Twilight's Reckoning",
    main_mission: false
},
{
    mission_name: "Lunar Legacy",
    prerequisite_mission: "Ephemeral Essence",
    main_mission: false
},
{
    mission_name: "Abyssal Archive",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Cursed Cascade",
    prerequisite_mission: "Celestial Serenity",
    main_mission: false
},
{
    mission_name: "Ephemeral Exodus",
    prerequisite_mission: "Redemption's Price",
    main_mission: false
},
{
    mission_name: "Celestial Cipher",
    prerequisite_mission: "Lunar Labyrinth",
    main_mission: false
},
{
    mission_name: "Spectral Symphony",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Lunar Lullaby",
    prerequisite_mission: "Shattered Horizons",
    main_mission: false
},
{
    mission_name: "Eclipsed Enchantment",
    prerequisite_mission: "Celestial Convergence",
    main_mission: false
},
{
    mission_name: "Starlight Sonata",
    prerequisite_mission: "Redemption's Price",
    main_mission: false
},
{
    mission_name: "Abyssal Allegiance",
    prerequisite_mission: "The Final Vision",
    main_mission: false
},
{
    mission_name: "Crimson Crescendo",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Eclipsed Echo",
    prerequisite_mission: "Stellar Secrets",
    main_mission: false
},
{
    mission_name: "Lunar Legacy",
    prerequisite_mission: "Lunar Labyrinth",
    main_mission: false
},
{
    mission_name: "Spectral Sanctuary",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Abyssal Archives",
    prerequisite_mission: "Eclipsed Memories",
    main_mission: false
},
{
    mission_name: "Celestial Catalyst",
    prerequisite_mission: "Abyssal Anomaly",
    main_mission: false
},
{
    mission_name: "Twilight Tempest",
    prerequisite_mission: "Shattered Heavens",
    main_mission: false
},
{
    mission_name: "Harmonic Hues",
    prerequisite_mission: "Celestial Puzzle",
    main_mission: false
},
{
    mission_name: "Ephemeral Embrace",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Astral Aegis",
    prerequisite_mission: "Eclipsed Echoes",
    main_mission: false
},
{
    mission_name: "Celestial Canvas",
    prerequisite_mission: "Stellar Secrets",
    main_mission: false
},
{
    mission_name: "Lunar Luminary",
    prerequisite_mission: "Abyssal Ascendance",
    main_mission: false
},
{
    mission_name: "Crimson Cascade",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Eternal Eclipse",
    prerequisite_mission: "Ephemeral Enigma",
    main_mission: false
},
{
    mission_name: "Stellar Synthesis",
    prerequisite_mission: "Abyssal Anomaly",
    main_mission: false
},
{
    mission_name: "Spectral Synapse",
    prerequisite_mission: "Shattered Horizons",
    main_mission: false
},
{
    mission_name: "Astral Alchemy",
    prerequisite_mission: "Celestial Convergence",
    main_mission: false
},
{
    mission_name: "Eclipsed Equinox",
    prerequisite_mission: "Lunar Labyrinth",
    main_mission: false
},
{
    mission_name: "Celestial Coven",
    prerequisite_mission: "Twilight's Reckoning",
    main_mission: false
},
{
    mission_name: "Lunar Legacy",
    prerequisite_mission: "Ephemeral Essence",
    main_mission: false
},
{
    mission_name: "Abyssal Archive",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Cursed Cascade",
    prerequisite_mission: "Celestial Serenity",
    main_mission: false
},
{
    mission_name: "Ephemeral Exodus",
    prerequisite_mission: "Redemption's Price",
    main_mission: false
},
{
    mission_name: "Celestial Cipher",
    prerequisite_mission: "Lunar Labyrinth",
    main_mission: false
},
{
    mission_name: "Spectral Symphony",
    prerequisite_mission: null,
    main_mission: false
},
{
    mission_name: "Lunar Lullaby",
    prerequisite_mission: "Shattered Horizons",
    main_mission: false
},
{
    mission_name: "Eclipsed Enchantment",
    prerequisite_mission: "Celestial Convergence",
    main_mission: false
},
{
    mission_name: "Starlight Sonata",
    prerequisite_mission: "Redemption's Price",
    main_mission: false
},
{
    mission_name: "Abyssal Allegiance",
    prerequisite_mission: "The Final Vision",
    main_mission: false
}

]);
db.Weapon.insertMany([
    {
        weapon_name: "frostblade",
        damage: 28,
        level: 8
    },

    {
        weapon_name: "iron warhammer",
        damage: 15,
        level: 4
    },

    {
        weapon_name: "shadow dagger",
        damage: 18,
        level: 6
    },

    {
        weapon_name: "fire whip",
        damage: 22,
        level: 9
    },

    {
        weapon_name: "thunder staff",
        damage: 32,
        level: 12
    },

    {
        weapon_name: "poisoned crossbow",
        damage: 25,
        level: 7
    },

    {
        weapon_name: "mystic scepter",
        damage: 45,
        level: 14
    },

    {
        weapon_name: "demon's trident",
        damage: 50,
        level: 16
    },

    {
        weapon_name: "lunar shuriken",
        damage: 30,
        level: 10
    },

    {
        weapon_name: "vortex gauntlets",
        damage: 60,
        level: 18
    },

    {
        weapon_name: "acidic whip",
        damage: 27,
        level: 8
    },

    {
        weapon_name: "ruby scimitar",
        damage: 33,
        level: 11
    },

    {
        weapon_name: "starlight wand",
        damage: 55,
        level: 17
    },

    {
        weapon_name: "void dagger",
        damage: 40,
        level: 13
    },

    {
        weapon_name: "lava axe",
        damage: 38,
        level: 12
    },

    {
        weapon_name: "ethereal rapier",
        damage: 48,
        level: 15
    },

    {
        weapon_name: "phoenix bow",
        damage: 42,
        level: 14
    },

    {
        weapon_name: "mindflayer's staff",
        damage: 75,
        level: 19
    },

    {
        weapon_name: "plasma blade",
        damage: 90,
        level: 22
    },

    {
        weapon_name: "arcane bow",
        damage: 65,
        level: 16
    },

    {
        weapon_name: "viper's fang",
        damage: 23,
        level: 9
    },

    {
        weapon_name: "graviton cannon",
        damage: 100,
        level: 25
    },

    {
        weapon_name: "serpent's staff",
        damage: 70,
        level: 17
    },

    {
        weapon_name: "ice shard thrower",
        damage: 55,
        level: 15
    },

    {
        weapon_name: "celestial sword",
        damage: 60,
        level: 16
    },

    {
        weapon_name: "chrono bow",
        damage: 80,
        level: 20
    },

    {
        weapon_name: "dark matter scythe",
        damage: 120,
        level: 30
    },

    {
        weapon_name: "solar blaster",
        damage: 110,
        level: 28
    },

    {
        weapon_name: "nebula wand",
        damage: 95,
        level: 24
    },

    {
        weapon_name: "nova rifle",
        damage: 85,
        level: 22
    },
    {
        weapon_name: "shadowstrike dagger",
        damage: 25,
        level: 9
    },

    {
        weapon_name: "thorned whip",
        damage: 20,
        level: 5
    },

    {
        weapon_name: "ember axe",
        damage: 35,
        level: 11
    },

    {
        weapon_name: "lightning spear",
        damage: 30,
        level: 10
    },

    {
        weapon_name: "blizzard staff",
        damage: 42,
        level: 13
    },

    {
        weapon_name: "venomous crossbow",
        damage: 28,
        level: 8
    },

    {
        weapon_name: "astral sword",
        damage: 47,
        level: 15
    },

    {
        weapon_name: "oceanic trident",
        damage: 52,
        level: 17
    },

    {
        weapon_name: "crimson shuriken",
        damage: 32,
        level: 12
    },

    {
        weapon_name: "skyward bow",
        damage: 65,
        level: 18
    },

    {
        weapon_name: "phantom blade",
        damage: 30,
        level: 10
    },

    {
        weapon_name: "obsidian scythe",
        damage: 37,
        level: 14
    },

    {
        weapon_name: "starfall wand",
        damage: 58,
        level: 19
    },

    {
        weapon_name: "void cannon",
        damage: 45,
        level: 16
    },

    {
        weapon_name: "molten whip",
        damage: 40,
        level: 13
    },

    {
        weapon_name: "ethereal rapier",
        damage: 50,
        level: 16
    },

    {
        weapon_name: "inferno bow",
        damage: 44,
        level: 15
    },

    {
        weapon_name: "mindbender's staff",
        damage: 78,
        level: 20
    },

    {
        weapon_name: "energy blade",
        damage: 92,
        level: 24
    },

    {
        weapon_name: "spirit bow",
        damage: 67,
        level: 18
    },

    {
        weapon_name: "frostbite fang",
        damage: 26,
        level: 9
    },

    {
        weapon_name: "quantum blaster",
        damage: 105,
        level: 26
    },

    {
        weapon_name: "serpent's gaze staff",
        damage: 75,
        level: 19
    },

    {
        weapon_name: "glacial spear thrower",
        damage: 60,
        level: 17
    },

    {
        weapon_name: "heavenly saber",
        damage: 63,
        level: 18
    },

    {
        weapon_name: "time-bender bow",
        damage: 85,
        level: 21
    },

    {
        weapon_name: "voidcleaver scythe",
        damage: 130,
        level: 31
    },

    {
        weapon_name: "stellar blaster",
        damage: 115,
        level: 29
    },

    {
        weapon_name: "galactic wand",
        damage: 100,
        level: 25
    },

    {
        weapon_name: "darkstar rifle",
        damage: 95,
        level: 23
    },
    {
        weapon_name: "phantasmal dagger",
        damage: 28,
        level: 11
    },

    {
        weapon_name: "stormcaller whip",
        damage: 23,
        level: 7
    },

    {
        weapon_name: "cinderblade",
        damage: 38,
        level: 14
    },

    {
        weapon_name: "volt lance",
        damage: 33,
        level: 13
    },

    {
        weapon_name: "glacier staff",
        damage: 47,
        level: 16
    },

    {
        weapon_name: "toxic crossbow",
        damage: 30,
        level: 10
    },

    {
        weapon_name: "luminous saber",
        damage: 52,
        level: 18
    },

    {
        weapon_name: "abyssal trident",
        damage: 57,
        level: 20
    },

    {
        weapon_name: "azure shuriken",
        damage: 37,
        level: 12
    },

    {
        weapon_name: "celestial bow",
        damage: 70,
        level: 22
    },

    {
        weapon_name: "shadowmeld blade",
        damage: 35,
        level: 12
    },

    {
        weapon_name: "voidreaper scythe",
        damage: 42,
        level: 15
    },

    {
        weapon_name: "cosmic wand",
        damage: 63,
        level: 19
    },

    {
        weapon_name: "chaos cannon",
        damage: 50,
        level: 17
    },

    {
        weapon_name: "magma lash",
        damage: 45,
        level: 14
    },

    {
        weapon_name: "ethereal rapier",
        damage: 55,
        level: 16
    },

    {
        weapon_name: "volcano bow",
        damage: 49,
        level: 15
    },

    {
        weapon_name: "mindflayer's scepter",
        damage: 82,
        level: 21
    },

    {
        weapon_name: "plasma edge",
        damage: 97,
        level: 26
    },

    {
        weapon_name: "arcane sniper",
        damage: 72,
        level: 20
    },

    {
        weapon_name: "frostbite fang",
        damage: 30,
        level: 11
    },

    {
        weapon_name: "singularity blaster",
        damage: 110,
        level: 28
    },

    {
        weapon_name: "serpent's wrath staff",
        damage: 80,
        level: 22
    },

    {
        weapon_name: "polar spear thrower",
        damage: 65,
        level: 19
    },

    {
        weapon_name: "heaven's bane saber",
        damage: 68,
        level: 20
    },

    {
        weapon_name: "temporal bow",
        damage: 90,
        level: 23
    },

    {
        weapon_name: "abyssal cleaver scythe",
        damage: 140,
        level: 32
    },

    {
        weapon_name: "supernova blaster",
        damage: 125,
        level: 30
    },

    {
        weapon_name: "astral scepter",
        damage: 110,
        level: 26
    },

    {
        weapon_name: "voidwalker rifle",
        damage: 105,
        level: 24
    },
{
    weapon_name: "soul reaper's scythe",
    damage: 150,
    level: 35
},

{
    weapon_name: "shockwave hammer",
    damage: 80,
    level: 25
},

{
    weapon_name: "infernal gauntlets",
    damage: 55,
    level: 17
},

{
    weapon_name: "holy avenger sword",
    damage: 85,
    level: 23
},

{
    weapon_name: "void walker's staff",
    damage: 100,
    level: 27
},

{
    weapon_name: "venomous fang thrower",
    damage: 40,
    level: 14
},

{
    weapon_name: "stellar bow",
    damage: 75,
    level: 21
},

{
    weapon_name: "flamestrike lance",
    damage: 110,
    level: 29
},

{
    weapon_name: "spectral dagger",
    damage: 65,
    level: 20
},

{
    weapon_name: "divine crossbow",
    damage: 120,
    level: 30
},

{
    weapon_name: "ethereal slicer",
    damage: 50,
    level: 16
},

{
    weapon_name: "chaos orb wand",
    damage: 95,
    level: 25
},

{
    weapon_name: "shadowstorm shuriken",
    damage: 60,
    level: 18
},

{
    weapon_name: "lunar blaster cannon",
    damage: 130,
    level: 31
},

{
    weapon_name: "time-bender's scythe",
    damage: 160,
    level: 36
},

{
    weapon_name: "voidfire rapier",
    damage: 75,
    level: 21
},

{
    weapon_name: "voltaic bow",
    damage: 140,
    level: 32
},

{
    weapon_name: "mindflayer's mind staff",
    damage: 120,
    level: 30
},

{
    weapon_name: "plasma storm blade",
    damage: 180,
    level: 40
},

{
    weapon_name: "arcane storm sniper",
    damage: 105,
    level: 24
},

{
    weapon_name: "frostbite gauntlets",
    damage: 60,
    level: 19
},

{
    weapon_name: "quasar cannon",
    damage: 200,
    level: 45
},

{
    weapon_name: "necrotic serpent staff",
    damage: 90,
    level: 22
},

{
    weapon_name: "void rift spear thrower",
    damage: 75,
    level: 21
},

{
    weapon_name: "heaven's wrath saber",
    damage: 90,
    level: 22
},

{
    weapon_name: "celestial time bow",
    damage: 120,
    level: 30
},

{
    weapon_name: "voidcleaver's scythe",
    damage: 220,
    level: 50
},

{
    weapon_name: "novaflare blaster",
    damage: 180,
    level: 40
},

{
    weapon_name: "ethereal astral wand",
    damage: 150,
    level: 35
},

{
    weapon_name: "dark matter annihilator",
    damage: 130,
    level: 31
}

])
db.Skill.insertMany([
    {
        skill_name: "lava burst",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "inferno arrow",
        category: "attack",
        prerequisite_skills: ["lava burst"]
    },

    {
        skill_name: "molten strike",
        category: "attack",
        prerequisite_skills: ["lava burst", "hardening lava"]
    },

    {
        skill_name: "molten trap",
        category: "trap",
        prerequisite_skills: ["lava burst"]
    },

    {
        skill_name: "scorching whirlwind",
        category: "aoe",
        prerequisite_skills: ["inferno arrow"]
    },

    {
        skill_name: "flame shield",
        category: "defense",
        prerequisite_skills: ["molten strike"]
    },

    {
        skill_name: "volcanic fury",
        category: "ultimate",
        prerequisite_skills: ["flame shield", "hardening lava"]
    },

    {
        skill_name: "static shock",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "electrified arrow",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "electro trap",
        category: "trap",
        prerequisite_skills: ["static shock", "electrified arrow"]
    },

    {
        skill_name: "charged dash",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "thunder surge",
        category: "movement",
        prerequisite_skills: ["charged dash"]
    },

    {
        skill_name: "storm nova",
        category: "ultimate",
        prerequisite_skills: ["static shock", "electrified arrow", "thunder surge"]
    },

    {
        skill_name: "frost nova",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "icy needle",
        category: "attack",
        prerequisite_skills: ["frost nova"]
    },

    {
        skill_name: "arctic blast",
        category: "aoe",
        prerequisite_skills: ["frostbite", "icy needle"]
    },

    {
        skill_name: "frozen trap",
        category: "trap",
        prerequisite_skills: ["frost nova"]
    },

    {
        skill_name: "glacier wall",
        category: "defense",
        prerequisite_skills: ["arctic blast", "icy needle"]
    },

    {
        skill_name: "polar vortex",
        category: "ultimate",
        prerequisite_skills: ["frozen trap", "frost nova", "arctic blast"]
    },
    {
        skill_name: "solar flare",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "lunar arrow",
        category: "attack",
        prerequisite_skills: ["solar flare"]
    },

    {
        skill_name: "celestial beam",
        category: "attack",
        prerequisite_skills: ["solar flare", "lunar arrow"]
    },

    {
        skill_name: "starfall",
        category: "trap",
        prerequisite_skills: ["solar flare"]
    },

    {
        skill_name: "cosmic explosion",
        category: "aoe",
        prerequisite_skills: ["lunar arrow"]
    },

    {
        skill_name: "astral shield",
        category: "defense",
        prerequisite_skills: ["celestial beam"]
    },

    {
        skill_name: "supernova",
        category: "ultimate",
        prerequisite_skills: ["astral shield", "starfall"]
    },

    {
        skill_name: "poison dart",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "toxic cloud",
        category: "attack",
        prerequisite_skills: ["poison dart"]
    },

    {
        skill_name: "venomous trap",
        category: "trap",
        prerequisite_skills: ["poison dart", "toxic cloud"]
    },

    {
        skill_name: "venom dash",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "noxious wave",
        category: "movement",
        prerequisite_skills: ["venom dash"]
    },

    {
        skill_name: "plague storm",
        category: "ultimate",
        prerequisite_skills: ["poison dart", "toxic cloud", "venom dash"]
    },

    {
        skill_name: "earthquake",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "rock barrage",
        category: "attack",
        prerequisite_skills: ["earthquake"]
    },

    {
        skill_name: "stone spike",
        category: "aoe",
        prerequisite_skills: ["earthquake", "rock barrage"]
    },

    {
        skill_name: "earthen trap",
        category: "trap",
        prerequisite_skills: ["earthquake"]
    },

    {
        skill_name: "mountain fortress",
        category: "defense",
        prerequisite_skills: ["stone spike", "rock barrage"]
    },

    {
        skill_name: "tectonic upheaval",
        category: "ultimate",
        prerequisite_skills: ["earthen trap", "stone spike", "rock barrage"]
    },
    {
        skill_name: "shadow strike",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "nightfall arrow",
        category: "attack",
        prerequisite_skills: ["shadow strike"]
    },

    {
        skill_name: "moonlit blade",
        category: "attack",
        prerequisite_skills: ["shadow strike", "nightfall arrow"]
    },

    {
        skill_name: "shadow trap",
        category: "trap",
        prerequisite_skills: ["shadow strike"]
    },

    {
        skill_name: "abyssal wave",
        category: "aoe",
        prerequisite_skills: ["nightfall arrow"]
    },

    {
        skill_name: "umbral shield",
        category: "defense",
        prerequisite_skills: ["moonlit blade"]
    },

    {
        skill_name: "eclipse burst",
        category: "ultimate",
        prerequisite_skills: ["umbral shield", "abyssal wave"]
    },

    {
        skill_name: "sonic blast",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "shockwave arrow",
        category: "attack",
        prerequisite_skills: ["sonic blast"]
    },

    {
        skill_name: "thunderstrike",
        category: "trap",
        prerequisite_skills: ["sonic blast", "shockwave arrow"]
    },

    {
        skill_name: "wind dash",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "cyclone step",
        category: "movement",
        prerequisite_skills: ["wind dash"]
    },

    {
        skill_name: "tempest surge",
        category: "ultimate",
        prerequisite_skills: ["sonic blast", "shockwave arrow", "cyclone step"]
    },

    {
        skill_name: "acidic spit",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "corrosive arrow",
        category: "attack",
        prerequisite_skills: ["acidic spit"]
    },

    {
        skill_name: "venomous burst",
        category: "aoe",
        prerequisite_skills: ["acidic spit", "corrosive arrow"]
    },

    {
        skill_name: "toxic shock",
        category: "trap",
        prerequisite_skills: ["acidic spit"]
    },

    {
        skill_name: "slimy fortress",
        category: "defense",
        prerequisite_skills: ["venomous burst", "corrosive arrow"]
    },

    {
        skill_name: "noxious apocalypse",
        category: "ultimate",
        prerequisite_skills: ["toxic shock", "venomous burst", "corrosive arrow"]
    },
    {
        skill_name: "solar eruption",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "lunar beam",
        category: "attack",
        prerequisite_skills: ["solar eruption"]
    },

    {
        skill_name: "celestial arrow",
        category: "attack",
        prerequisite_skills: ["solar eruption", "lunar beam"]
    },

    {
        skill_name: "starlight trap",
        category: "trap",
        prerequisite_skills: ["solar eruption"]
    },

    {
        skill_name: "cosmic barrage",
        category: "aoe",
        prerequisite_skills: ["lunar beam"]
    },

    {
        skill_name: "astral barrier",
        category: "defense",
        prerequisite_skills: ["celestial arrow"]
    },

    {
        skill_name: "galactic storm",
        category: "ultimate",
        prerequisite_skills: ["astral barrier", "starlight trap"]
    },

    {
        skill_name: "venomous strike",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "acid rain",
        category: "attack",
        prerequisite_skills: ["venomous strike"]
    },

    {
        skill_name: "corrosion field",
        category: "trap",
        prerequisite_skills: ["venomous strike", "acid rain"]
    },

    {
        skill_name: "toxic leap",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "poisonous whirl",
        category: "movement",
        prerequisite_skills: ["toxic leap"]
    },

    {
        skill_name: "plague burst",
        category: "ultimate",
        prerequisite_skills: ["venomous strike", "acid rain", "poisonous whirl"]
    },

    {
        skill_name: "quake shock",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "stone wave",
        category: "attack",
        prerequisite_skills: ["quake shock"]
    },

    {
        skill_name: "tectonic trap",
        category: "trap",
        prerequisite_skills: ["quake shock", "stone wave"]
    },

    {
        skill_name: "earthslide",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "mountain rush",
        category: "movement",
        prerequisite_skills: ["earthslide"]
    },

    {
        skill_name: "cataclysmic upheaval",
        category: "ultimate",
        prerequisite_skills: ["tectonic trap", "stone wave", "earthslide"]
    },

    {
        skill_name: "shadow burst",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "nightshade arrow",
        category: "attack",
        prerequisite_skills: ["shadow burst"]
    },

    {
        skill_name: "moonshadow strike",
        category: "attack",
        prerequisite_skills: ["shadow burst", "nightshade arrow"]
    },

    {
        skill_name: "shadow veil",
        category: "trap",
        prerequisite_skills: ["shadow burst"]
    },

    {
        skill_name: "darkness infusion",
        category: "aoe",
        prerequisite_skills: ["nightshade arrow"]
    },

    {
        skill_name: "umbral fortress",
        category: "defense",
        prerequisite_skills: ["moonshadow strike"]
    },

    {
        skill_name: "eclipsed doom",
        category: "ultimate",
        prerequisite_skills: ["umbral fortress", "shadow veil"]
    },

    {
        skill_name: "sonic boom",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "thunderstrike arrow",
        category: "attack",
        prerequisite_skills: ["sonic boom"]
    },

    {
        skill_name: "stormy trap",
        category: "trap",
        prerequisite_skills: ["sonic boom", "thunderstrike arrow"]
    },

    {
        skill_name: "wind whirl",
        category: "movement",
        prerequisite_skills: null
    },

    {
        skill_name: "typhoon step",
        category: "movement",
        prerequisite_skills: ["wind whirl"]
    },

    {
        skill_name: "tempest tornado",
        category: "ultimate",
        prerequisite_skills: ["sonic boom", "thunderstrike arrow", "typhoon step"]
    },

    {
        skill_name: "acidic explosion",
        category: "attack",
        prerequisite_skills: null
    },

    {
        skill_name: "corrosive cloud",
        category: "attack",
        prerequisite_skills: ["acidic explosion"]
    },

    {
        skill_name: "venomous storm",
        category: "aoe",
        prerequisite_skills: ["acidic explosion", "corrosive cloud"]
    },

    {
        skill_name: "toxic vortex",
        category: "trap",
        prerequisite_skills: ["acidic explosion"]
    },

    {
        skill_name: "slime tsunami",
        category: "defense",
        prerequisite_skills: ["venomous storm", "corrosive cloud"]
    },

    {
        skill_name: "noxious obliteration",
        category: "ultimate",
        prerequisite_skills: ["toxic vortex", "venomous storm", "corrosive cloud"]
    }
]);
