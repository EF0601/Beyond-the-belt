let buildings = [];
let gridsAvailable = 25;

//build stuff
function construct(building){
    if (gridsAvailable >= building.area) {
        gridsAvailable -= building.area;
        buildings.push(building.name);
    }
    console.log(buildings);
}
