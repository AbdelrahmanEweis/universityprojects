use("Videogame_Database");

// 1. Retrieve all players' usernames and location
db.Player.find(
    {},
    {
        _id: false,
        username: true,
        "savepoint.location": true
    }).limit(10000).toArray(function (err, results) { });

//2. Retrieve all players with health less than 100
db.Player.find({
    health: { $lt: 100 }
},
    {
        _id: false,
        username: true,
        health: true
    }).limit(10000).toArray(function (err, results) { });

//3. Retrieve all players with armor greater than 150 in descending order
db.Player.find(
    {
        armor: { $lte: 130 }
    },
    {
        _id: false,
        username: true,
        armor: true
    }
).sort({
    armor: -1
}).limit(10000).toArray(function (err, results) { });

//4. Retrieve players with inventory items containing rubiks cube.
db.Player.find(
    {
        "inventory.backpack": "rubiks cube"
    },
    {
        _id: false,
        username: true,
        "inventory.backpack": true
    }
).limit(10000).toArray(function (err, results) { });

//5. Retrieve all items used in crafting
db.Item.find(
    {
        used_in_crafting: true
    },
    {
        _id: false,
        item_name: true,
        used_in_crafting: true
    }
).limit(10000).toArray(function (err, results) { });

//6. Retrieve all craftable items and their recipes
db.Item.find(
    {
        craftable: true
    },
    {
        _id: false,
        item_name: true,
        recipe: true
    }
).limit(10000).toArray(function (err, results) { });

//7. Retrieve all noncraftable items used in quests
db.Item.find(
    {
        quest_item: true,
        craftable: false
    },
    {
        _id: false,
        item_name: true,
        quest_item: true,
        craftable: true
    }
).limit(10000).toArray(function (err, results) { });



//8. Retrieve all players with the assassin's robe equiped
db.Player.find(
    {
        "inventory.equipped.torso": "assassin's robe"
    },
    {
        _id: false,
        username: true,
        "inventory.equipped": true
    }
).limit(10000).toArray(function (err, results) { });

//9. Retrieve all skill categories and the number of skills in each one 
db.Skill.aggregate(
    {
        $group: {
            _id: "$category",
            "Amount of Skills": {
                $sum: 1
            }
        },
    },
    {
        $project: {
            _id: 0,
            category: "$_id",
            "Amount of Skills": 1
        }
    },
    { $limit: 100000 }
).toArray(function (err, results) { });

//10. Retrieve the amount of areas in each region
db.Map_Location.aggregate([
    {
        $group: {
            _id: "$region",
            Areas: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            Region: "$_id",
            Areas: 1
        }
    },
    {
        $limit: 10000
    }
]).toArray(function (err, results) { });

//11. Retrieve all ultimate level skills and push their prerequsites in an array
db.Skill.aggregate(
    {
        $match: { category: "ultimate" }
    },
    {
        $group: { _id: "$skill_name", "prerequisite skills": { $push: "$prerequisite_skills" } }
    },
    {
        $project: {
            _id: 0,
            Skill: "$_id",
            "prerequisite skills": 1
        }
    },
    { $limit: 10000 }

).toArray(function (err, results) { });

//12. Retrieve all locations with a savepoint in the same region
db.Map_Location.aggregate([
    {
        $match: { has_savepoint: true }
    },
    {
        $group: { _id: "$region", "Locations": { $push: "$location_name" } }
    },
    {
        $project: {
            _id: 0,
            Region: "$_id",
            Locations: 1
        }
    },
    { $limit: 10000 }

]).toArray(function (err, results) { });

// 13. Update all players in the amethyst atoll to have their savepoint set at elven village
db.Player.updateMany(
    {
        "savepoint.location": "miner's retreat"
    },
    {
        $set: { "savepoint.location": "elven village" }
    }
);

// 14. Make sure all non-craftable items dont have a recipe
db.Item.updateMany(
    { "craftable": false },
    { $set: { "recipe": null } }
);
db.Item.updateMany(
    { "craftable": true, "recipe": null },
    { $set: { "craftable": false } }
);

// 15. Retrieves the number of loadouts each player has
db.Player.aggregate([
    {
        $group: {
            _id: "$username",
            Loadouts: {
                $sum: 1
            }
        }
    },
    {
        $project: {
            _id: 0,
            username: "$_id",
            Loadouts: 1
        }
    },
    { $limit: 100000 }
]).toArray(function (err, results) { });

// 16. Retrieve the number of players in each area of the map
db.Player.aggregate([
    {
        $group: {
            _id: "$savepoint.location",
            PlayerCount: { $sum: 1 }
        }
    },
    {
        $project: {
            _id: 0,
            Area: "$_id",
            PlayerCount: 1
        }
    },
    {
        $limit: 10000
    }
]).toArray(function (err, results) { });

// 17. Retrieve all mages (skill mastery >= 10) with high level armor
db.Player.find(
    {
        "mastery.skill": { $gte: 10 },
        armor: { $gte: 170 }
    },
    {
        _id: false,
        username: true,
        armor: true,
        "mastery.skill": true
    }
).limit(10000).toArray(function (err, results) { });

// 18. Retrieve how many items there are in each consumable type
db.Consumable.aggregate([
    { $group: { _id: "$type", "Amount of consumables": { $sum: 1 } } },
    {
        $project: {
            _id: 0,
            Type: "$_id",
            "Amount of consumables": 1
        }
    }
]);

// 19. Update all tactical consumabels level by 1
db.Consumable.updateMany(
    { type: "tactical" },
    {
        $inc: {
            level: 1
        }
    }
);

// 20. Update all Region names to be in one main Region (we had too many regions so we decided to condense them down into 6 regions)
db.Map_Location.updateMany(
    { region: { $in: ["cavernous depths", "fiery mountains", "fiery gorge", "volcanic wastelands", "bloodwood forest"] } },
    { $set: { "region": "volcanic wastelands" } }
);
db.Map_Location.updateMany(
    { region: { $in: ["frozen bay", "icy bay", "icy expanse", "snowy tundra", "electric peaks"] } },
    { $set: { "region": "icy bay" } }
);
db.Map_Location.updateMany(
    { region: { $in: ["moonlit beach", "desert oasis", "scorching desert", "silent desert", "darkened shores", "stormy plateaus"] } },
    { $set: { "region": "silent desert" } }
);
db.Map_Location.updateMany(
    { region: { $in: ["deep sea", "enchanted archipelago", "swampy terrain", "mystical archipelago"] } },
    { $set: { "region": "mystical archipelago" } }
);
db.Map_Location.updateMany(
    {
        region: {
            $in: ["enchanted meadow", "enchanted forest", "lush wilderness", "lush forest", "windy prairies",
                "whispering woods", "tranquil plains"]
        }
    },
    { $set: { "region": "enchanted forest" } }
);
db.Map_Location.updateMany(
    { region: { $in: ["celestial realm", "mystic ruins", "ancient highlands", "ruined citadel", "darkened city", "astral rift", "azure metropolis"] } },
    { $set: { "region": "astral rift" } }
);