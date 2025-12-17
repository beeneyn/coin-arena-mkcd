// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030202020000000000000000020202030302020000010000000001000002020303020000000000000000000000000203030000000000000100000000000000030300000000000000000000000001000303000001000000000000000000000003030000000000000000000000000000030300000000000000000000010000000303000000000000000000000000000003030001000000000000000000000100030300000000010000000001000000000303020000000000000000000000000203030202000000000100000000000202030302020200000000000000000202020303030303030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 . . 2 . . . . 2 . . 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . 2 . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . 2 . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . . . . 2 . . . . 2 . . . . 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 . . . . 2 . . . . . 2 2 2 
2 2 2 2 . . . . . . . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.rock0,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
